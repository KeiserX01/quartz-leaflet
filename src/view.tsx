import type {
    ViewRenderer,
    ViewRendererProps,
    ViewTypeRegistration,
} from "@quartz-community/bases-page";
import { transformLink } from "@quartz-community/bases-page";
import type { FullSlug } from "@quartz-community/bases-page";
import leafletMapCss from "./styles/leaflet-map.scss";
import leafletMapScript from "./scripts/leaflet-map.inline";
import { DEFAULTS } from "./types";
import type { MarkerData, LeafletMapPluginOptions } from "./types";

type MarkerWithEntry = MarkerData & {
    name: string;
    link: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null;

const toNumber = (value: unknown): number | undefined => {
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string") {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : undefined;
    }
    return undefined;
};

const getString = (value: unknown): string | undefined =>
    typeof value === "string" && value.trim().length > 0 ? value : undefined;

/**
 * Normaliza un path de asset a lowercase por segmentos.
 *
 * Quartz copia los assets de `content/` a `public/` en lowercase, pero
 * `transformLink` de `bases-page` conserva el case original del path fuente
 * (ej. `./Mapas/Venderian-state-labels.jpeg`). GitHub Pages sirve archivos
 * de forma case-sensitive, así que un path con mayúsculas da 404.
 *
 * Al normalizar cada segmento a lowercase el path resultante coincide con
 * el nombre real en `public/` sin necesidad de tocar el vault de Obsidian.
 */
const normalizeAssetPath = (p: string): string =>
    p.split("/").map((segment) => segment.toLowerCase()).join("/");

const leafletMapRenderer: ViewRenderer = ({
    entries,
    view,
    slug,
    allSlugs,
    linkResolution,
    options,
}: ViewRendererProps) => {
    const pluginOptions = (options ?? {}) as LeafletMapPluginOptions;
    const mapName = getString(view.mapName);
    const rawImage = getString(view.image);

    if (!rawImage) {
        return <div>Leaflet map view requires an image.</div>;
    }

    const imageSource = normalizeAssetPath(
        transformLink(slug as FullSlug, rawImage, {
            strategy: linkResolution,
            allSlugs: allSlugs as FullSlug[],
        }),
    );

    const minZoom = toNumber(view.minZoom) ?? DEFAULTS.minZoom;
    const maxZoom = Math.max(toNumber(view.maxZoom) ?? DEFAULTS.maxZoom, minZoom);
    const defaultZoom = Math.min(Math.max(toNumber(view.defaultZoom) ?? minZoom, minZoom), maxZoom);
    const zoomDelta = toNumber(view.zoomDelta) ?? DEFAULTS.zoomDelta;
    const height = toNumber(view.height) ?? DEFAULTS.height;
    const scale = toNumber(view.scale) ?? DEFAULTS.scale;
    const unit = getString(view.unit) ?? DEFAULTS.unit;
    const rawLayers = view.layers;
    const layers: string[] = [];
    if (Array.isArray(rawLayers)) {
        for (const layer of rawLayers) {
            const layerStr = typeof layer === "string" ? layer.trim() : "";
            if (layerStr.length > 0) {
                layers.push(
                    normalizeAssetPath(
                        transformLink(slug as FullSlug, layerStr, {
                            strategy: linkResolution,
                            allSlugs: allSlugs as FullSlug[],
                        }),
                    ),
                );
            }
        }
    }
    const fullscreenEnabled = view.fullscreen === true || view.fullscreen === "true";
    
    // New SVG/raster override fields
    const imageWidth = toNumber(view.imageWidth);
    const imageHeight = toNumber(view.imageHeight);
    const imageType = getString(view.imageType) ?? "auto";

    const markers: MarkerWithEntry[] = [];
    for (const entry of entries) {
        const markerValue = entry.properties.marker;
        if (!Array.isArray(markerValue)) continue;

        for (const marker of markerValue) {
            if (!isRecord(marker)) continue;
            const coordinates = getString(marker.coordinates);
            if (!coordinates) continue;

            markers.push({
                name: entry.title,
                link: transformLink(slug as FullSlug, entry.slug, {
                    strategy: linkResolution,
                    allSlugs: allSlugs as FullSlug[],
                }),
                mapName: getString(marker.mapName),
                coordinates,
                icon: getString(marker.icon),
                colour: getString(marker.colour),
                minZoom: toNumber(marker.minZoom),
            });
        }
    }

    const filteredMarkers = markers.filter((marker) => {
        if (mapName) return !marker.mapName || marker.mapName === mapName;
        return marker.mapName === undefined;
    });

    return (
        <div>
            <div
                class="leaflet-map"
                data-src={imageSource}
                data-height={height}
                data-min-zoom={minZoom}
                data-max-zoom={maxZoom}
                data-default-zoom={defaultZoom}
                data-zoom-delta={zoomDelta}
                data-scale={scale}
                data-unit={unit}
                data-enable-copy-tool={pluginOptions.enableCopyTool ?? false}
                data-enable-fullscreen={fullscreenEnabled ? "true" : "false"}
                data-layers={layers.length > 0 ? JSON.stringify(layers) : undefined}
                data-image-width={imageWidth}
                data-image-height={imageHeight}
                data-image-type={imageType}
            >
                {filteredMarkers.map((marker) => (
                    <div
                        class="leaflet-marker"
                        data-name={marker.name}
                        data-link={marker.link}
                        data-coordinates={marker.coordinates}
                        data-icon={marker.icon ?? DEFAULTS.markerIcon}
                        data-colour={marker.colour ?? DEFAULTS.markerColour}
                        data-min-zoom={marker.minZoom ?? minZoom}
                    />
                ))}
            </div>
        </div>
    );
};

export const leafletMapViewRegistration: ViewTypeRegistration = {
    id: "leaflet-map",
    name: "Map",
    icon: "map",
    render: leafletMapRenderer,
    css: leafletMapCss,
    afterDOMLoaded: leafletMapScript,
};
