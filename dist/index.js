import { viewRegistry, transformLink } from '@quartz-community/bases-page';
import { jsx } from 'preact/jsx-runtime';

// src/index.ts

// src/styles/leaflet-map.scss
var leaflet_map_default = `/* Custom CSS */
.leaflet-map {
  width: 100%;
  margin: 0;
  z-index: 0;
  background-color: rgba(80, 120, 180, 0.1);
}

.leaflet-map .leaflet-image-layer {
  margin: 0 !important;
}

.leaflet-control-button {
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: var(--lightgray);
}

.leaflet-marker-icon a,
.leaflet-marker-icon .leaflet-marker-pin {
  position: absolute;
  width: 32px;
  height: 48px;
  margin: 0px auto;
  z-index: inherit;
}

.leaflet-marker-icon .leaflet-marker-inner-icon {
  position: absolute;
  width: 32px;
  height: 19px;
  font-size: 19px;
  top: 8px;
  left: 0px;
  z-index: inherit;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ebebec;
}

.leaflet-map-property-tag-list {
  margin: 0 !important;
  padding: 2px;
  gap: 0.3rem;
  display: flex;
  color: #ebebec;
}

.leaflet-map-property-tag-item {
  display: flex;
  cursor: pointer;
  padding: 0 !important;
  margin: 0 !important;
  background: #353535;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
}

.leaflet-map-property-tag-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.3rem;
}

.leaflet-map-property-tag-item-text {
  font-size: var(--tag-size);
  white-space: nowrap;
}

.leaflet-map-property-tag-item-close {
  display: flex;
  cursor: pointer;
  margin-left: 0.3rem;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 8px;
  color: #ebebec;
  background: inherit;
}

.leaflet-map-property-tag-item-close:hover {
  background: rgba(129, 129, 129, 0.6941176471);
}

.leaflet-map-property-add-item {
  display: flex;
  cursor: pointer;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin: 0 !important;
  border-radius: 8px;
  color: #ebebec;
  background: #454545;
}

.leaflet-map-property-add-item:hover {
  background: rgba(129, 129, 129, 0.8156862745);
}

/* Leaflet CSS */
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
  position: absolute;
  left: 0;
  top: 0;
}

.leaflet-container {
  overflow: hidden;
}

.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
}

/* Prevents IE11 from highlighting tiles in blue */
.leaflet-tile::selection {
  background: transparent;
}

/* Safari renders non-retina tile on retina better with this, but Chrome is worse */
.leaflet-safari .leaflet-tile {
  image-rendering: -webkit-optimize-contrast;
}

/* hack that prevents hw layers "stretching" when loading new tiles */
.leaflet-safari .leaflet-tile-container {
  width: 1600px;
  height: 1600px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.leaflet-marker-icon,
.leaflet-marker-shadow {
  display: block;
}

/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container .leaflet-overlay-pane svg {
  max-width: none !important;
  max-height: none !important;
}

.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
  max-width: none !important;
  max-height: none !important;
  width: auto;
  padding: 0;
}

.leaflet-container img.leaflet-tile {
  /* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */
  mix-blend-mode: plus-lighter;
}

.leaflet-container.leaflet-touch-zoom {
  -ms-touch-action: pan-x pan-y;
  touch-action: pan-x pan-y;
}

.leaflet-container.leaflet-touch-drag {
  -ms-touch-action: pinch-zoom;
  /* Fallback for FF which doesn't support pinch-zoom */
  touch-action: none;
  touch-action: pinch-zoom;
}

.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  -ms-touch-action: none;
  touch-action: none;
}

.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}

.leaflet-container a {
  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}

.leaflet-tile {
  filter: inherit;
  visibility: hidden;
}

.leaflet-tile-loaded {
  visibility: inherit;
}

.leaflet-zoom-box {
  width: 0;
  height: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 800;
}

/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */
.leaflet-overlay-pane svg {
  -moz-user-select: none;
  user-select: none;
}

.leaflet-pane {
  z-index: 400;
}

.leaflet-tile-pane {
  z-index: 200;
}

.leaflet-overlay-pane {
  z-index: 400;
}

.leaflet-shadow-pane {
  z-index: 500;
}

.leaflet-marker-pane {
  z-index: 600;
}

.leaflet-tooltip-pane {
  z-index: 650;
}

.leaflet-popup-pane {
  z-index: 700;
}

.leaflet-map-pane canvas {
  z-index: 100;
}

.leaflet-map-pane svg {
  z-index: 200;
}

.leaflet-vml-shape {
  width: 1px;
  height: 1px;
}

.lvml {
  behavior: url(#default#VML);
  display: inline-block;
  position: absolute;
}

/* control positioning */
.leaflet-control {
  position: relative;
  z-index: 800;
  pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
  pointer-events: auto;
}

.leaflet-top,
.leaflet-bottom {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
}

.leaflet-top {
  top: 0;
}

.leaflet-right {
  right: 0;
}

.leaflet-bottom {
  bottom: 0;
}

.leaflet-left {
  left: 0;
}

.leaflet-control {
  float: left;
  clear: both;
}

.leaflet-right .leaflet-control {
  float: right;
}

.leaflet-top .leaflet-control {
  margin-top: 10px;
}

.leaflet-bottom .leaflet-control {
  margin-bottom: 10px;
}

.leaflet-left .leaflet-control {
  margin-left: 10px;
}

.leaflet-right .leaflet-control {
  margin-right: 10px;
}

/* zoom and fade animations */
.leaflet-fade-anim .leaflet-popup {
  opacity: 0;
  -webkit-transition: opacity 0.2s linear;
  -moz-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
}

.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
  opacity: 1;
}

.leaflet-zoom-animated {
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}

svg.leaflet-zoom-animated {
  will-change: transform;
}

.leaflet-zoom-anim .leaflet-zoom-animated {
  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);
}

.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}

.leaflet-zoom-anim .leaflet-zoom-hide {
  visibility: hidden;
}

/* cursors */
.leaflet-interactive {
  cursor: pointer;
}

.leaflet-grab {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}

.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
  cursor: crosshair;
}

.leaflet-popup-pane,
.leaflet-control {
  cursor: auto;
}

.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
  cursor: move;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

/* marker & overlays interactivity */
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
  pointer-events: none;
}

.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
  pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
  pointer-events: auto;
}

/* visual tweaks */
.leaflet-container {
  background: var(--lightgray);
  outline-offset: 1px;
}

.leaflet-container a {
  color: #0078a8;
}

.leaflet-zoom-box {
  border: 2px dotted #38f;
  background: rgba(255, 255, 255, 0.5);
}

/* general typography */
.leaflet-container {
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-size: 0.75rem;
  line-height: 1.5;
}

/* general toolbar styles */
.leaflet-bar {
  /*box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);*/
  border-radius: 4px;
}

.leaflet-bar a,
.leaflet-bar div {
  cursor: pointer;
  background-color: var(--light);
  border-bottom: 1px solid var(--lightgray);
  border-radius: 0px;
  width: 26px;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: var(--dark);
}

.leaflet-bar div svg {
  margin-top: 3px;
}

.leaflet-bar a,
.leaflet-bar div,
.leaflet-control-layers-toggle {
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.leaflet-bar a,
.leaflet-control-layers-toggle {
  display: block;
}

.leaflet-bar a:hover,
.leaflet-bar a:focus,
.leaflet-bar div:hover,
.leaflet-bar div:focus {
  color: var(--tertiary);
  background-color: var(--lightgray);
}

.leaflet-bar a:first-child,
.leaflet-bar div:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.leaflet-bar a:last-child,
.leaflet-bar div:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: none;
}

.leaflet-bar a.leaflet-disabled,
.leaflet-bar div.selected {
  cursor: default;
  background-color: var(--darkgray);
  color: var(--gray);
}

.leaflet-touch .leaflet-bar a,
.leaflet-touch .leaflet-bar div {
  width: 30px;
  height: 30px;
  line-height: 30px;
}

.leaflet-touch .leaflet-bar a:first-child,
.leaflet-touch .leaflet-bar div:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.leaflet-touch .leaflet-bar a:last-child,
.leaflet-touch .leaflet-bar div:last-child {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

/* zoom control */
.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  font: bold 18px "Lucida Console", Monaco, monospace;
  text-indent: 1px;
}

.leaflet-touch .leaflet-control-zoom-in,
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 22px;
}

/* layers control */
.leaflet-control-layers {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  background: #fff;
  border-radius: 5px;
}

.leaflet-control-layers-toggle {
  background-color: #E8DCC2 !important;
  background-image: url(static/layers_icon.svg) !important;
  background-size: 26px 26px;
  background-repeat: no-repeat;
  background-position: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(53, 39, 28, 0.35), 0 1px 2px rgba(53, 39, 28, 0.2);
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
}

.leaflet-control-layers-toggle:hover {
  opacity: 0.92;
  box-shadow: 0 3px 8px rgba(53, 39, 28, 0.45);
}

.leaflet-retina .leaflet-control-layers-toggle {
  background-image: url(images/layers-2x.png);
  background-size: 26px 26px;
}

.leaflet-touch .leaflet-control-layers-toggle {
  width: 44px;
  height: 44px;
}

.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
  display: none;
}

.leaflet-control-layers-expanded .leaflet-control-layers-list {
  display: block;
  position: relative;
}

.leaflet-control-layers-expanded {
  padding: 6px 10px 6px 6px;
  color: #333;
  background: #fff;
}

.leaflet-control-layers-scrollbar {
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 5px;
}

.leaflet-control-layers-selector {
  margin-top: 2px;
  position: relative;
  top: 1px;
}

.leaflet-control-layers label {
  display: block;
  font-size: 13px;
  font-size: 1.08333em;
}

.leaflet-control-layers-separator {
  height: 0;
  border-top: 1px solid #ddd;
  margin: 5px -10px 5px -6px;
}

/* Default icon URLs */
.leaflet-default-icon-path {
  /* used only in path-guessing heuristic, see L.Icon.Default */
  background-image: url(images/marker-icon.png);
}

/* attribution and scale controls */
.leaflet-container .leaflet-control-attribution {
  background: #fff;
  background: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.leaflet-control-attribution,
.leaflet-control-scale-line {
  padding: 0 5px;
  color: #333;
  line-height: 1.4;
}

.leaflet-control-attribution a {
  text-decoration: none;
}

.leaflet-control-attribution a:hover,
.leaflet-control-attribution a:focus {
  text-decoration: underline;
}

.leaflet-attribution-flag {
  display: inline !important;
  vertical-align: baseline !important;
  width: 1em;
  height: 0.6669em;
}

.leaflet-left .leaflet-control-scale {
  margin-left: 5px;
}

.leaflet-bottom .leaflet-control-scale {
  margin-bottom: 5px;
}

.leaflet-control-scale-line {
  border: 2px solid #777;
  border-top: none;
  line-height: 1.1;
  padding: 2px 5px 1px;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.8);
  text-shadow: 1px 1px #fff;
}

.leaflet-control-scale-line:not(:first-child) {
  border-top: 2px solid #777;
  border-bottom: none;
  margin-top: -2px;
}

.leaflet-control-scale-line:not(:first-child):not(:last-child) {
  border-bottom: 2px solid #777;
}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  box-shadow: none;
}

.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
}

/* popup */
.leaflet-popup {
  position: absolute;
  text-align: center;
  margin-bottom: 20px;
}

.leaflet-popup-content-wrapper {
  padding: 1px;
  text-align: left;
  border-radius: 12px;
}

.leaflet-popup-content {
  margin: 13px 24px 13px 20px;
  line-height: 1.3;
  font-size: 13px;
  font-size: 1.08333em;
  min-height: 1px;
}

.leaflet-popup-content p {
  margin: 17px 0;
  margin: 1.3em 0;
}

.leaflet-popup-tip-container {
  width: 40px;
  height: 20px;
  position: absolute;
  left: 50%;
  margin-top: -1px;
  margin-left: -20px;
  overflow: hidden;
  pointer-events: none;
}

.leaflet-popup-tip {
  width: 17px;
  height: 17px;
  padding: 1px;
  margin: -10px auto 0;
  pointer-events: auto;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  background: white;
  color: #333;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
}

.leaflet-container a.leaflet-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  text-align: center;
  width: 24px;
  height: 24px;
  font: 16px/24px Tahoma, Verdana, sans-serif;
  color: #757575;
  text-decoration: none;
  background: transparent;
}

.leaflet-container a.leaflet-popup-close-button:hover,
.leaflet-container a.leaflet-popup-close-button:focus {
  color: #585858;
}

.leaflet-popup-scrolled {
  overflow: auto;
}

.leaflet-oldie .leaflet-popup-content-wrapper {
  -ms-zoom: 1;
  zoom: 1;
}

.leaflet-oldie .leaflet-popup-tip {
  width: 24px;
  margin: 0 auto;
  -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=0.70710678, M22=0.70710678)";
  filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=0.70710678, M22=0.70710678);
}

.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
  border: 1px solid #999;
}

/* div icon */
.leaflet-div-icon {
  background: #fff;
  border: 1px solid #666;
}

/* Tooltip */
/* Base styles for the element that has a tooltip */
.leaflet-tooltip {
  position: absolute;
  padding: 6px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 3px;
  color: #222;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.leaflet-tooltip.leaflet-interactive {
  cursor: pointer;
  pointer-events: auto;
}

.leaflet-tooltip-top:before,
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
  position: absolute;
  pointer-events: none;
  border: 6px solid transparent;
  background: transparent;
  content: "";
}

/* Directions */
.leaflet-tooltip-bottom {
  margin-top: 6px;
}

.leaflet-tooltip-top {
  margin-top: -6px;
}

.leaflet-tooltip-bottom:before,
.leaflet-tooltip-top:before {
  left: 50%;
  margin-left: -6px;
}

.leaflet-tooltip-top:before {
  bottom: 0;
  margin-bottom: -12px;
  border-top-color: #fff;
}

.leaflet-tooltip-bottom:before {
  top: 0;
  margin-top: -12px;
  margin-left: -6px;
  border-bottom-color: #fff;
}

.leaflet-tooltip-left {
  margin-left: -6px;
}

.leaflet-tooltip-right {
  margin-left: 6px;
}

.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
  top: 50%;
  margin-top: -6px;
}

.leaflet-tooltip-left:before {
  right: 0;
  margin-right: -12px;
  border-left-color: #fff;
}

.leaflet-tooltip-right:before {
  left: 0;
  margin-left: -12px;
  border-right-color: #fff;
}

/* Printing */
@media print {
  /* Prevent printers from removing background-images of controls. */
  .leaflet-control {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}`;

// src/scripts/leaflet-map.inline.ts
var leaflet_map_inline_default = 'var Z=Object.defineProperty;var q=(n,t,e)=>t in n?Z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>q(n,typeof t!="symbol"?t+"":t,e);var k={map:{default:{minZoom:"0",maxZoom:"2",zoomDelta:"0.5",zoomSnap:"0.01",height:"600",scale:"1",unit:"",enableCopyTool:"false",enableFullscreen:"false",layers:"[]"}}};async function x(n){for(let t of n)try{await new Promise((e,i)=>{let o=document.createElement("script");o.src=t,o.onload=()=>e(),o.onerror=()=>i(new Error(`Failed to load: ${t}`)),document.head.appendChild(o)});return}catch{}throw new Error(`All CDN sources failed for: ${n.join(", ")}`)}async function O(){typeof L>"u"&&await x(["https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js","https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]),typeof iconify>"u"&&await x(["https://cdn.jsdelivr.net/npm/iconify-icon@3.0.2/dist/iconify-icon.min.js","https://unpkg.com/iconify-icon@3.0.2/dist/iconify-icon.min.js","https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js"])}function R(n){return!n||typeof n!="object"||Array.isArray(n)?!1:Object.keys(n).length>0&&Object.values(n).every(t=>typeof t=="string")}function H(n){let t=n.replace(/\\s/g,"").split(",").map(e=>parseInt(e));if(!z(t))throw new Error("Coordinates not properly validated");return t}function z(n){return!!n&&Array.isArray(n)&&n.length===2&&n.every(t=>typeof t=="number"&&!isNaN(t))}function D(n,t){let e=i=>i*i;return Math.sqrt(e(n.lat-t.lat)+e(n.lng-t.lng))}function N(n){return!(!R(n)||!n.name||!n.link||!n.coordinates||!n.icon||!n.colour||!n.minZoom)}function j(n){let t=n.querySelectorAll("div.leaflet-marker"),e=[];return t.forEach(i=>{N(i.dataset)&&e.push(i.dataset),i.remove()}),e}function _(n){return n.replace(/^lucide-/g,"lucide:")}function $(n,t,e){return L.divIcon({className:"leaflet-marker-icon",html:`\n            <a href="${n}">\n                <svg class="leaflet-marker-pin" style="fill:${e}" viewBox="0 0 32 48">\n                    <path d="m32,19c0,12 -12,24 -16,29c-4,-5 -16,-16 -16,-29a16,19 0 0 1 32,0"/>\n                </svg>\n                <iconify-icon class="icon leaflet-marker-inner-icon" icon="${_(t)}" width="19px" height="19px"></iconify-icon>\n            </a>\n        `,iconSize:[32,48],iconAnchor:[16,48],tooltipAnchor:[17,-30]})}function B(n,t){function e(g,b){t.getZoom()>=b-1e-5?g.addTo(t):g.remove()}let{link:i,icon:o,colour:c,minZoom:u,coordinates:d,name:a}=n,M={icon:$(i,o,c)},f=parseFloat(u),C=L.marker(H(d),M).bindTooltip(a);e(C,f),t.on("zoomend",()=>e(C,f))}var m=class{constructor(t){s(this,"index");s(this,"map");s(this,"onSelectCallback",()=>{});s(this,"button");s(this,"options",{...k.map.default,defaultZoom:k.map.default.minZoom,src:""});s(this,"_isSelected",!1);this.index=t.index,this.map=t.map,this.onSelectCallback=t.onSelectCallback}get isSelected(){return this._isSelected}setSelected(t){this._isSelected!==t&&(this._isSelected=t,t?(this.button?.classList.add("selected"),this.onSelected()):(this.button?.classList.remove("selected"),this.onDeselected()))}onAdd(t){this.button=L.DomUtil.create("div","leaflet-control-button",t),this.button.addEventListener("click",()=>this.onSelectCallback(this.index)),L.DomEvent.disableClickPropagation(t),this.onAdded()}onRemove(){this.onRemoved(),this.button?.removeEventListener("click",()=>{}),this.button?.replaceChildren()}updateSettings(t){this.options={...this.options,...t}}onAdded(){throw new Error("Not implemented")}onRemoved(){}onSelected(){}onDeselected(){}mapClicked(t){throw new Error("Not implemented")}},T=class extends m{onAdded(){this.button&&(this.button.innerHTML=\'<iconify-icon icon="lucide:mouse-pointer-2" width="19px" height="19px"></iconify-icon>\',this.button.ariaLabel="Pan")}mapClicked(t){}};var S=class extends m{constructor(){super(...arguments);s(this,"state",0);s(this,"pathItems",[]);s(this,"distance",0);s(this,"lineLayer");s(this,"pointLayer");s(this,"pathLine");s(this,"previewLine");s(this,"previewTooltip");s(this,"lastElement")}onAdded(){this.button&&(this.button.innerHTML=\'<iconify-icon icon="lucide:ruler" width="19px" height="19px"></iconify-icon>\',this.button.ariaLabel="Measure"),this.lineLayer=L.layerGroup().addTo(this.map),this.pointLayer=L.layerGroup().addTo(this.map),this.pathLine=L.polyline([]).addTo(this.lineLayer),this.previewLine=L.polyline([],{dashArray:"8"}).addTo(this.lineLayer),this.previewTooltip=this.getTooltip(!0).setLatLng([0,0])}onSelected(){this.map.getContainer().style.cursor="crosshair",this.map.on("mousemove",e=>{this.renderPreview(e.latlng)})}onDeselected(){this.map.getContainer().style.cursor="",this.map.removeEventListener("mousemove"),this.resetPath(),this.state=0}mapClicked(e){if(!this.lineLayer)throw new Error("Line layer not initialised");switch(this.state){case 0:case 1:{this.state=1,this.pathItems.push(e.latlng),this.renderPath(),this.previewTooltip?.addTo(this.lineLayer),this.renderPreview(e.latlng);break}case 2:{this.state=3,this.lastElement?.bindTooltip(this.getTooltip(!0)).bringToFront(),this.previewTooltip?.remove();break}case 3:this.resetPath(),this.state=0}}renderPath(){this.cleanLastElement(),this.updatePolyline(this.pathLine,this.pathItems);let e=this.pathItems.at(-1);if(e===void 0)return;this.lastElement=this.getCircleMarker(e);let i=this.pathItems.at(-2);i!==void 0&&(this.distance+=D(e,i)*parseFloat(this.options.scale))}renderPreview(e){if(this.state!==1)return;let i=this.pathItems.at(-1);i!==void 0&&(this.updatePolyline(this.previewLine,[i,e]),this.previewTooltip=this.previewTooltip?.setLatLng(e).setContent(this.getContent(this.distance+D(i,e)*parseFloat(this.options.scale))))}resetPath(){this.pathItems=[],this.distance=0,this.cleanLastElement(),this.pointLayer?.clearLayers(),this.updatePolyline(this.pathLine,[]),this.updatePolyline(this.previewLine,[]),this.previewTooltip?.remove()}updatePolyline(e,i){e?.setLatLngs(i).redraw(),e?.getElement()?.classList.remove("leaflet-interactive")}cleanLastElement(){this.lastElement?.removeEventListener("click"),this.lastElement?.getElement()?.classList.remove("leaflet-interactive")}getTooltip(e=!1){return L.tooltip({permanent:e,offset:[15,0]}).setContent(this.getContent(this.distance))}getCircleMarker(e){if(!this.pointLayer)throw new Error("Point layer not initialised");return L.circleMarker(e,{radius:4,fill:!0,fillColor:"#3388ff",fillOpacity:1}).addTo(this.pointLayer).addEventListener("click",()=>this.state=2)}getContent(e){return`${e.toFixed(1)} ${this.options?.unit??k.map.default.unit}`}},E=class extends m{onAdded(){this.button&&(this.button.innerHTML=\'<iconify-icon icon="lucide:maximize" width="19px" height="19px"></iconify-icon>\',this.button.ariaLabel="Fullscreen")}onSelected(){let t=this.map.getContainer();t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}mapClicked(t){}},F=class extends m{constructor(){super(...arguments);s(this,"previewTooltip")}onAdded(){this.button&&(this.button.innerHTML=\'<iconify-icon icon="lucide:pin" width="19px" height="19px"></iconify-icon>\',this.button.ariaLabel="Copy"),this.previewTooltip=L.tooltip({permanent:!0,offset:[15,0]}).setLatLng([0,0])}onSelected(){this.map.getContainer().style.cursor="crosshair",this.map.on("mousemove",e=>{this.renderPreview(e.latlng)}),this.previewTooltip?.addTo(this.map)}onDeselected(){this.map.getContainer().style.cursor="",this.map.removeEventListener("mousemove"),this.previewTooltip?.remove()}mapClicked(e){navigator.clipboard.writeText(this.getContent(e.latlng))}renderPreview(e){this.previewTooltip?.setContent(this.getContent(e)).setLatLng(e)}getContent(e){return`${Math.round(e.lat)}, ${Math.round(e.lng)}`}},W={enableCopyTool:!1,enableFullscreen:!1},w=null;function G(){if(w)return w;class n extends L.Control{constructor(i){super({position:"topleft"});s(this,"controls",[]);s(this,"activeIndex",0);s(this,"settings");this.settings={...W,...i}}onAdd(i){this.registerSubControl(T,i),this.registerSubControl(S,i),this.settings.enableCopyTool&&this.registerSubControl(F,i),this.settings.enableFullscreen&&this.registerSubControl(E,i);let o=L.DomUtil.create("div","leaflet-bar leaflet-control");for(let c of this.controls)c.onAdd(o);return this.controls[this.activeIndex]?.setSelected(!0),i.on("click",c=>{for(let u of this.controls)u.isSelected&&u.mapClicked(c)}),o}onRemove(i){i?.removeEventListener("click");for(let o of this.controls)o.onRemove();this.controls=[]}updateSettings(i){for(let o of this.controls)o.updateSettings(i)}registerSubControl(i,o){let c=d=>{this.controls.at(this.activeIndex)?.setSelected(!1),this.controls.at(d)?.setSelected(!0),this.activeIndex=d},u={index:this.controls.length,map:o,onSelectCallback:c};this.controls.push(new i(u))}}return w=n,w}function V(n){return!(!R(n)||!n.src||!n.height||!n.minZoom||!n.maxZoom||!n.defaultZoom||!n.zoomDelta||!n.scale||!n.unit)}async function U(n,t){if(t?.width&&t?.height){let e=t.type==="svg"||t.type==="raster"?t.type:P(n);return{width:t.width,height:t.height,type:e}}return new Promise((e,i)=>{let o=new Image;o.onload=()=>{let c=P(n);e({width:o.naturalWidth,height:o.naturalHeight,type:c})},o.onerror=c=>i(c),o.src=n})}function P(n){let t=n.toLowerCase();return t.endsWith(".svg")||t.includes(".svg?")||t.includes(".svg#")?"svg":"raster"}async function J(n,t){let e=n.dataset;if(!V(e))return;let i={width:e.imageWidth?parseFloat(e.imageWidth):void 0,height:e.imageHeight?parseFloat(e.imageHeight):void 0,type:e.imageType==="raster"||e.imageType==="svg"?e.imageType:void 0},o=await U(e.src,i),c=o.type==="svg";if(!(o.width>0&&o.height>0&&isFinite(o.width)&&isFinite(o.height))){console.error("[leaflet-map] Invalid image dimensions:",{width:o.width,height:o.height,type:o.type,src:e.src}),n.textContent="Failed to load map: could not determine image dimensions. For SVG, provide imageWidth and imageHeight in the base config.";return}n.style.aspectRatio=(o.width/o.height).toString();let d=[[0,0],[o.height,o.width]],a=L.map(n,{crs:L.CRS.Simple,maxBounds:d,minZoom:parseFloat(e.minZoom),maxZoom:parseFloat(e.maxZoom),zoomSnap:.01,zoomDelta:parseFloat(e.zoomDelta)}),M=G(),f=new M({enableCopyTool:e.enableCopyTool==="true",enableFullscreen:e.enableFullscreen==="true"});f.addTo(a),f.updateSettings(e);let C=L.Control.extend({onAdd:function(r){let h=document.createElement("div");h.className="leaflet-bar leaflet-control leaflet-control-fullscreen";let l=document.createElement("a");return l.className="leaflet-bar-part leaflet-bar-part-single",l.href="#",l.title="Fullscreen",l.innerHTML=\'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#35271C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>\',l.onclick=function(y){y.preventDefault();let p=r.getContainer();document.fullscreenElement?document.exitFullscreen():p.requestFullscreen?p.requestFullscreen():p.webkitRequestFullscreen?p.webkitRequestFullscreen():p.mozRequestFullScreen?p.mozRequestFullScreen():p.msRequestFullscreen&&p.msRequestFullscreen()},h.appendChild(l),h},onRemove:function(){}});new C({position:"topleft"}).addTo(a);let g=()=>{if(!document.fullscreenElement){let r=a.getContainer();r.style.position="",r.style.top="",r.style.left="",r.style.width="",r.style.height=e.height+"px",r.style.zIndex="",r.style.border="",r.style.borderRadius="",r.offsetWidth,r.offsetHeight,requestAnimationFrame(()=>{a.invalidateSize(),setTimeout(()=>{a.invalidateSize(),window.dispatchEvent(new Event("resize"))},100)})}};document.addEventListener("fullscreenchange",g),a.__fullscreenListener=g;function b(r){try{return(r.split("/").pop()||r).replace(/\\.[^.]+$/,"").replace(/[-_]/g," ").trim()||r}catch{return r}}let v={},I=b(e.src);v[I]=L.imageOverlay(e.src,d).addTo(a);try{let r=e.layers;if(r&&r!=="[]"){let h=JSON.parse(r);if(Array.isArray(h)){for(let l of h)if(typeof l=="string"&&l.trim().length>0)try{let y=b(l);v[y]=L.imageOverlay(l,d)}catch(y){console.error("[leaflet-map] Failed to add layer:",l,y)}}}}catch(r){console.error("[leaflet-map] Failed to parse layers:",e.layers,r)}return Object.keys(v).length>0&&L.control.layers(v,{}).addTo(a),a.fitBounds(d),t.map(r=>B(r,a)),a.setZoom(parseFloat(e.defaultZoom)),a}function K(n){if(!n)return;let t=n.__fullscreenListener;t&&(document.removeEventListener("fullscreenchange",t),delete n.__fullscreenListener),n.clearAllEventListeners(),n.remove()}async function A(){let n=document.querySelectorAll("div.leaflet-map");if(n.length!==0){try{await O()}catch(t){console.error("[leaflet-map] Failed to load dependencies:",t);for(let e of Array.from(n))e.textContent="Failed to load map dependencies. Check your browser\'s content blocking settings.";return}for(let t of Array.from(n)){let e=j(t),i=await J(t,e);window.addCleanup(()=>K(i))}}}document.addEventListener("nav",A);document.addEventListener("render",A);\n';

// src/types.ts
var defaultOptions = {
  enableCopyTool: false
};
var DEFAULTS = {
  minZoom: 0,
  maxZoom: 2,
  zoomDelta: 0.5,
  height: 600,
  scale: 1,
  unit: "",
  markerColour: "#21409a",
  markerIcon: "lucide:circle-small"
};
var isRecord = (value) => typeof value === "object" && value !== null;
var toNumber = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : void 0;
  }
  return void 0;
};
var getString = (value) => typeof value === "string" && value.trim().length > 0 ? value : void 0;
var normalizeAssetPath = (p) => p.split("/").map((segment) => segment.toLowerCase()).join("/");
var leafletMapRenderer = ({
  entries,
  view,
  slug,
  allSlugs,
  linkResolution,
  options
}) => {
  const pluginOptions = options ?? {};
  const mapName = getString(view.mapName);
  const rawImage = getString(view.image);
  if (!rawImage) {
    return /* @__PURE__ */ jsx("div", { children: "Leaflet map view requires an image." });
  }
  const imageSource = normalizeAssetPath(
    transformLink(slug, rawImage, {
      strategy: linkResolution,
      allSlugs
    })
  );
  const minZoom = toNumber(view.minZoom) ?? DEFAULTS.minZoom;
  const maxZoom = Math.max(toNumber(view.maxZoom) ?? DEFAULTS.maxZoom, minZoom);
  const defaultZoom = Math.min(Math.max(toNumber(view.defaultZoom) ?? minZoom, minZoom), maxZoom);
  const zoomDelta = toNumber(view.zoomDelta) ?? DEFAULTS.zoomDelta;
  const height = toNumber(view.height) ?? DEFAULTS.height;
  const scale = toNumber(view.scale) ?? DEFAULTS.scale;
  const unit = getString(view.unit) ?? DEFAULTS.unit;
  const rawLayers = view.layers;
  const layers = [];
  if (Array.isArray(rawLayers)) {
    for (const layer of rawLayers) {
      const layerStr = typeof layer === "string" ? layer.trim() : "";
      if (layerStr.length > 0) {
        layers.push(
          normalizeAssetPath(
            transformLink(slug, layerStr, {
              strategy: linkResolution,
              allSlugs
            })
          )
        );
      }
    }
  }
  const fullscreenEnabled = view.fullscreen === true || view.fullscreen === "true";
  const imageWidth = toNumber(view.imageWidth);
  const imageHeight = toNumber(view.imageHeight);
  const imageType = getString(view.imageType) ?? "auto";
  const markers = [];
  for (const entry of entries) {
    const markerValue = entry.properties.marker;
    if (!Array.isArray(markerValue)) continue;
    for (const marker of markerValue) {
      if (!isRecord(marker)) continue;
      const coordinates = getString(marker.coordinates);
      if (!coordinates) continue;
      markers.push({
        name: entry.title,
        link: transformLink(slug, entry.slug, {
          strategy: linkResolution,
          allSlugs
        }),
        mapName: getString(marker.mapName),
        coordinates,
        icon: getString(marker.icon),
        colour: getString(marker.colour),
        minZoom: toNumber(marker.minZoom)
      });
    }
  }
  const filteredMarkers = markers.filter((marker) => {
    if (mapName) return !marker.mapName || marker.mapName === mapName;
    return marker.mapName === void 0;
  });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    "div",
    {
      class: "leaflet-map",
      "data-src": imageSource,
      "data-height": height,
      "data-min-zoom": minZoom,
      "data-max-zoom": maxZoom,
      "data-default-zoom": defaultZoom,
      "data-zoom-delta": zoomDelta,
      "data-scale": scale,
      "data-unit": unit,
      "data-enable-copy-tool": pluginOptions.enableCopyTool ?? false,
      "data-enable-fullscreen": fullscreenEnabled ? "true" : "false",
      "data-layers": layers.length > 0 ? JSON.stringify(layers) : void 0,
      "data-image-width": imageWidth,
      "data-image-height": imageHeight,
      "data-image-type": imageType,
      children: filteredMarkers.map((marker) => /* @__PURE__ */ jsx(
        "div",
        {
          class: "leaflet-marker",
          "data-name": marker.name,
          "data-link": marker.link,
          "data-coordinates": marker.coordinates,
          "data-icon": marker.icon ?? DEFAULTS.markerIcon,
          "data-colour": marker.colour ?? DEFAULTS.markerColour,
          "data-min-zoom": marker.minZoom ?? minZoom
        }
      ))
    }
  ) });
};
var leafletMapViewRegistration = {
  id: "leaflet-map",
  name: "Map",
  icon: "map",
  render: leafletMapRenderer,
  css: leaflet_map_default,
  afterDOMLoaded: leaflet_map_inline_default
};

// src/index.ts
function registerLeafletMap(userOpts) {
  const opts = { ...defaultOptions, ...userOpts };
  viewRegistry.register({
    ...leafletMapViewRegistration,
    options: opts
  });
}
function init(options) {
  registerLeafletMap(options);
}
viewRegistry.register(leafletMapViewRegistration);

export { init, leafletMapViewRegistration, registerLeafletMap };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map