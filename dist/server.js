!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=15)}([function(n,e){n.exports=require("react")},function(n,e){n.exports=require("styled-components")},function(n,e){n.exports=require("moment")},function(n,e){n.exports=require("react-big-calendar")},function(n,e){n.exports=require("express")},function(n,e){n.exports=require("path")},function(n,e){n.exports=require("react-dom/server")},function(n){n.exports=JSON.parse('{"ok":true,"members":[{"id":"W012A3CDE","real_name":"Egon Spengler","tz":"America/Los_Angeles","activity_periods":[{"start_time":"Feb 1 2020  1:33PM","end_time":"Feb 1 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Mar 16 2020  5:33PM","end_time":"Mar 16 2020 8:02PM"}]},{"id":"W07QCRPA4","real_name":"Glinda Southgood","tz":"Asia/Kolkata","activity_periods":[{"start_time":"Feb 1 2020  1:33PM","end_time":"Feb 1 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Mar 16 2020  5:33PM","end_time":"Mar 16 2020 8:02PM"}]},{"id":"W07QCRPA4","real_name":"Test Southgood","tz":"Asia/Kolkata","activity_periods":[{"start_time":"Jul 23 2020  1:33PM","end_time":"Jul 23 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Mar 16 2020  5:33PM","end_time":"Mar 16 2020 8:02PM"}]}]}')},function(n,e,t){},function(n,e,t){var r=t(10);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(12)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(e=t(11)(!1)).push([n.i,"@charset \"UTF-8\";\n.rbc-btn {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton.rbc-btn {\n  overflow: visible;\n  text-transform: none;\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled].rbc-btn {\n  cursor: not-allowed; }\n\nbutton.rbc-input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n.rbc-calendar {\n  box-sizing: border-box;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n\n.rbc-calendar *,\n.rbc-calendar *:before,\n.rbc-calendar *:after {\n  box-sizing: inherit; }\n\n.rbc-abs-full, .rbc-row-bg {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.rbc-ellipsis, .rbc-event-label, .rbc-row-segment .rbc-event-content, .rbc-show-more {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.rbc-rtl {\n  direction: rtl; }\n\n.rbc-off-range {\n  color: #999999; }\n\n.rbc-off-range-bg {\n  background: #e6e6e6; }\n\n.rbc-header {\n  overflow: hidden;\n  flex: 1 0 0%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 3px;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n  font-size: 90%;\n  min-height: 0;\n  border-bottom: 1px solid #DDD; }\n  .rbc-header + .rbc-header {\n    border-left: 1px solid #DDD; }\n  .rbc-rtl .rbc-header + .rbc-header {\n    border-left-width: 0;\n    border-right: 1px solid #DDD; }\n  .rbc-header > a, .rbc-header > a:active, .rbc-header > a:visited {\n    color: inherit;\n    text-decoration: none; }\n\n.rbc-row-content {\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n  z-index: 4; }\n\n.rbc-today {\n  background-color: #eaf6ff; }\n\n.rbc-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n  font-size: 16px; }\n  .rbc-toolbar .rbc-toolbar-label {\n    flex-grow: 1;\n    padding: 0 10px;\n    text-align: center; }\n  .rbc-toolbar button {\n    color: #373a3c;\n    display: inline-block;\n    margin: 0;\n    text-align: center;\n    vertical-align: middle;\n    background: none;\n    background-image: none;\n    border: 1px solid #ccc;\n    padding: .375rem 1rem;\n    border-radius: 4px;\n    line-height: normal;\n    white-space: nowrap; }\n    .rbc-toolbar button:active, .rbc-toolbar button.rbc-active {\n      background-image: none;\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n      background-color: #e6e6e6;\n      border-color: #adadad; }\n      .rbc-toolbar button:active:hover, .rbc-toolbar button:active:focus, .rbc-toolbar button.rbc-active:hover, .rbc-toolbar button.rbc-active:focus {\n        color: #373a3c;\n        background-color: #d4d4d4;\n        border-color: #8c8c8c; }\n    .rbc-toolbar button:focus {\n      color: #373a3c;\n      background-color: #e6e6e6;\n      border-color: #adadad; }\n    .rbc-toolbar button:hover {\n      color: #373a3c;\n      background-color: #e6e6e6;\n      border-color: #adadad; }\n\n.rbc-btn-group {\n  display: inline-block;\n  white-space: nowrap; }\n  .rbc-btn-group > button:first-child:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .rbc-btn-group > button:last-child:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .rbc-rtl .rbc-btn-group > button:first-child:not(:last-child) {\n    border-radius: 4px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .rbc-rtl .rbc-btn-group > button:last-child:not(:first-child) {\n    border-radius: 4px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .rbc-btn-group > button:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n  .rbc-btn-group button + button {\n    margin-left: -1px; }\n  .rbc-rtl .rbc-btn-group button + button {\n    margin-left: 0;\n    margin-right: -1px; }\n  .rbc-btn-group + .rbc-btn-group,\n  .rbc-btn-group + button {\n    margin-left: 10px; }\n\n.rbc-event {\n  border: none;\n  box-sizing: border-box;\n  box-shadow: none;\n  margin: 0;\n  padding: 2px 5px;\n  background-color: #3174ad;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n  text-align: left; }\n  .rbc-slot-selecting .rbc-event {\n    cursor: inherit;\n    pointer-events: none; }\n  .rbc-event.rbc-selected {\n    background-color: #265985; }\n  .rbc-event:focus {\n    outline: 5px auto #3b99fc; }\n\n.rbc-event-label {\n  font-size: 80%; }\n\n.rbc-event-overlaps {\n  box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5); }\n\n.rbc-event-continues-prior {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.rbc-event-continues-after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.rbc-event-continues-earlier {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.rbc-event-continues-later {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.rbc-row {\n  display: flex;\n  flex-direction: row; }\n\n.rbc-row-segment {\n  padding: 0 1px 1px 1px; }\n\n.rbc-selected-cell {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.rbc-show-more {\n  background-color: rgba(255, 255, 255, 0.3);\n  z-index: 4;\n  font-weight: bold;\n  font-size: 85%;\n  height: auto;\n  line-height: normal; }\n\n.rbc-month-view {\n  position: relative;\n  border: 1px solid #DDD;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0;\n  width: 100%;\n  user-select: none;\n  -webkit-user-select: none;\n  height: 100%; }\n\n.rbc-month-header {\n  display: flex;\n  flex-direction: row; }\n\n.rbc-month-row {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  flex: 1 0 0;\n  flex-basis: 0px;\n  overflow: hidden;\n  height: 100%; }\n  .rbc-month-row + .rbc-month-row {\n    border-top: 1px solid #DDD; }\n\n.rbc-date-cell {\n  flex: 1 1 0;\n  min-width: 0;\n  padding-right: 5px;\n  text-align: right; }\n  .rbc-date-cell.rbc-now {\n    font-weight: bold; }\n  .rbc-date-cell > a, .rbc-date-cell > a:active, .rbc-date-cell > a:visited {\n    color: inherit;\n    text-decoration: none; }\n\n.rbc-row-bg {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 0;\n  overflow: hidden; }\n\n.rbc-day-bg {\n  flex: 1 0 0%; }\n  .rbc-day-bg + .rbc-day-bg {\n    border-left: 1px solid #DDD; }\n  .rbc-rtl .rbc-day-bg + .rbc-day-bg {\n    border-left-width: 0;\n    border-right: 1px solid #DDD; }\n\n.rbc-overlay {\n  position: absolute;\n  z-index: 5;\n  border: 1px solid #e5e5e5;\n  background-color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);\n  padding: 10px; }\n  .rbc-overlay > * + * {\n    margin-top: 1px; }\n\n.rbc-overlay-header {\n  border-bottom: 1px solid #e5e5e5;\n  margin: -10px -10px 5px -10px;\n  padding: 2px 10px; }\n\n.rbc-agenda-view {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0;\n  overflow: auto; }\n  .rbc-agenda-view table.rbc-agenda-table {\n    width: 100%;\n    border: 1px solid #DDD;\n    border-spacing: 0;\n    border-collapse: collapse; }\n    .rbc-agenda-view table.rbc-agenda-table tbody > tr > td {\n      padding: 5px 10px;\n      vertical-align: top; }\n    .rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell {\n      padding-left: 15px;\n      padding-right: 15px;\n      text-transform: lowercase; }\n    .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {\n      border-left: 1px solid #DDD; }\n    .rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {\n      border-left-width: 0;\n      border-right: 1px solid #DDD; }\n    .rbc-agenda-view table.rbc-agenda-table tbody > tr + tr {\n      border-top: 1px solid #DDD; }\n    .rbc-agenda-view table.rbc-agenda-table thead > tr > th {\n      padding: 3px 5px;\n      text-align: left;\n      border-bottom: 1px solid #DDD; }\n      .rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th {\n        text-align: right; }\n\n.rbc-agenda-time-cell {\n  text-transform: lowercase; }\n  .rbc-agenda-time-cell .rbc-continues-after:after {\n    content: ' »'; }\n  .rbc-agenda-time-cell .rbc-continues-prior:before {\n    content: '« '; }\n\n.rbc-agenda-date-cell,\n.rbc-agenda-time-cell {\n  white-space: nowrap; }\n\n.rbc-agenda-event-cell {\n  width: 100%; }\n\n.rbc-time-column {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%; }\n  .rbc-time-column .rbc-timeslot-group {\n    flex: 1; }\n\n.rbc-timeslot-group {\n  border-bottom: 1px solid #DDD;\n  min-height: 40px;\n  display: flex;\n  flex-flow: column nowrap; }\n\n.rbc-time-gutter,\n.rbc-header-gutter {\n  flex: none; }\n\n.rbc-label {\n  padding: 0 5px; }\n\n.rbc-day-slot {\n  position: relative; }\n  .rbc-day-slot .rbc-events-container {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    margin-right: 10px;\n    top: 0; }\n    .rbc-day-slot .rbc-events-container.rbc-rtl {\n      left: 10px;\n      right: 0; }\n  .rbc-day-slot .rbc-event {\n    border: 1px solid #265985;\n    display: flex;\n    max-height: 100%;\n    min-height: 20px;\n    flex-flow: column wrap;\n    align-items: flex-start;\n    overflow: hidden;\n    position: absolute; }\n  .rbc-day-slot .rbc-event-label {\n    flex: none;\n    padding-right: 5px;\n    width: auto; }\n  .rbc-day-slot .rbc-event-content {\n    width: 100%;\n    flex: 1 1 0;\n    word-wrap: break-word;\n    line-height: 1;\n    height: 100%;\n    min-height: 1em; }\n  .rbc-day-slot .rbc-time-slot {\n    border-top: 1px solid #f7f7f7; }\n\n.rbc-time-view-resources .rbc-time-gutter,\n.rbc-time-view-resources .rbc-time-header-gutter {\n  position: sticky;\n  left: 0;\n  background-color: white;\n  border-right: 1px solid #DDD;\n  z-index: 10;\n  margin-right: -1px; }\n\n.rbc-time-view-resources .rbc-time-header {\n  overflow: hidden; }\n\n.rbc-time-view-resources .rbc-time-header-content {\n  min-width: auto;\n  flex: 1 0 0;\n  flex-basis: 0px; }\n\n.rbc-time-view-resources .rbc-time-header-cell-single-day {\n  display: none; }\n\n.rbc-time-view-resources .rbc-day-slot {\n  min-width: 140px; }\n\n.rbc-time-view-resources .rbc-header,\n.rbc-time-view-resources .rbc-day-bg {\n  width: 140px;\n  flex: 1 1 0;\n  flex-basis: 0 px; }\n\n.rbc-time-header-content + .rbc-time-header-content {\n  margin-left: -1px; }\n\n.rbc-time-slot {\n  flex: 1 0 0; }\n  .rbc-time-slot.rbc-now {\n    font-weight: bold; }\n\n.rbc-day-header {\n  text-align: center; }\n\n.rbc-slot-selection {\n  z-index: 10;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 75%;\n  width: 100%;\n  padding: 3px; }\n\n.rbc-slot-selecting {\n  cursor: move; }\n\n.rbc-time-view {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 100%;\n  border: 1px solid #DDD;\n  min-height: 0; }\n  .rbc-time-view .rbc-time-gutter {\n    white-space: nowrap; }\n  .rbc-time-view .rbc-allday-cell {\n    box-sizing: content-box;\n    width: 100%;\n    height: 100%;\n    position: relative; }\n  .rbc-time-view .rbc-allday-cell + .rbc-allday-cell {\n    border-left: 1px solid #DDD; }\n  .rbc-time-view .rbc-allday-events {\n    position: relative;\n    z-index: 4; }\n  .rbc-time-view .rbc-row {\n    box-sizing: border-box;\n    min-height: 20px; }\n\n.rbc-time-header {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row; }\n  .rbc-time-header.rbc-overflowing {\n    border-right: 1px solid #DDD; }\n  .rbc-rtl .rbc-time-header.rbc-overflowing {\n    border-right-width: 0;\n    border-left: 1px solid #DDD; }\n  .rbc-time-header > .rbc-row:first-child {\n    border-bottom: 1px solid #DDD; }\n  .rbc-time-header > .rbc-row.rbc-row-resource {\n    border-bottom: 1px solid #DDD; }\n\n.rbc-time-header-cell-single-day {\n  display: none; }\n\n.rbc-time-header-content {\n  flex: 1;\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  border-left: 1px solid #DDD; }\n  .rbc-rtl .rbc-time-header-content {\n    border-left-width: 0;\n    border-right: 1px solid #DDD; }\n  .rbc-time-header-content > .rbc-row.rbc-row-resource {\n    border-bottom: 1px solid #DDD;\n    flex-shrink: 0; }\n\n.rbc-time-content {\n  display: flex;\n  flex: 1 0 0%;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 2px solid #DDD;\n  overflow-y: auto;\n  position: relative; }\n  .rbc-time-content > .rbc-time-gutter {\n    flex: none; }\n  .rbc-time-content > * + * > * {\n    border-left: 1px solid #DDD; }\n  .rbc-rtl .rbc-time-content > * + * > * {\n    border-left-width: 0;\n    border-right: 1px solid #DDD; }\n  .rbc-time-content > .rbc-day-slot {\n    width: 100%;\n    user-select: none;\n    -webkit-user-select: none; }\n\n.rbc-current-time-indicator {\n  position: absolute;\n  z-index: 3;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #74ad31;\n  pointer-events: none; }\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(n,e){return e?e.querySelector(n):document.querySelector(n)},l=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=c.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),d=null,s=0,b=[],u=t(13);function f(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function h(n,e){var t=l(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),b.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(n.insertAt.before,t);t.insertBefore(e,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=b.indexOf(n);e>=0&&b.splice(e,1)}function m(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return x(e,n.attrs),h(n,e),e}function x(n,e){Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])}))}function v(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=s++;t=d||(d=m(e)),r=D.bind(null,t,a,!1),o=D.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",x(e,n.attrs),h(n,e),e}(e),r=j.bind(null,t,e),o=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),r=O.bind(null,t),o=function(){g(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return f(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(c=i[a.id]).refs--,r.push(c)}n&&f(p(n,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}};var w,y=(w=[],function(n,e){return w[n]=e,w.filter(Boolean).join("\n")});function D(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function O(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function j(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(n,e){return e})).replace(/^'(.*)'$/,(function(n,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(n,e){n.exports=require("fs")},function(n,e,t){"use strict";t.r(e);var r=t(4),o=t.n(r),i=t(0),a=t.n(i),c=t(6),l=t.n(c),d=t(1),s=t.n(d),b=(t(8),t(9),t(2)),u=t.n(b),f=t(7);function p(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\twidth: ",";\n\theight: ",";\n    z-index: ",";\n    background-color:#ffffff;\n    position:fixed;\n    top:calc(50% - 300px);\n    left:calc(50% - 600px);\n    overflow: hidden;\n    box-sizing: border-box;\n    transition: all 0.3s ease 0s;\n    border-radius:5px;\n    padding:50px;\n    transform: translate(calc(50% - 600px));\n"]);return p=function(){return n},n}var h=s.a.div(p(),(function(n){return n.width?n.width:""}),(function(n){return n.height?n.height:""}),(function(n){return n.zIndex?n.zIndex:""})),g=function(n){var e=n.children,t=n.customStyles;return a.a.createElement(h,{className:"ListingDropDown padding-20 bg-white",width:"1200px",height:"600px",zIndex:200,style:t},e)},m=t(3),x=function(n){var e=n.user,t=Object(m.momentLocalizer)(u.a);return a.a.createElement(m.Calendar,{localizer:t,events:e.activity_periods,step:15,timeslots:8,startAccessor:"start",endAccessor:"end",defaultView:m.Views.WEEK,defaultDate:u()().toDate(),eventPropGetter:function(n){var t=e.activity_periods.find((function(e){return e.id===n.id}));return{style:{backgroundColor:t&&t.color}}}})};function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){y(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function D(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return O(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function j(){var n=_(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 100;\n    left: 0;\n    top: 0;\n    background-color: rgba(0,0,0,0.5);\n"]);return j=function(){return n},n}function k(){var n=_(["\n    width:300px;\n    height:100px;\n    padding:20px;\n    background-color:#444dc9;\n    border-radius:5px;\n    margin:20px;\n    transition: all 0.3s ease 0s;\n    :hover{\n        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);\n    }\n    .fa { transform: scale(4,4); }\n    .w-60{\n        width:60px;\n    }\n    .h-60{\n        height:60px;\n    }\n    .margin-r-20{\n        margin-right:20px\n    }\n"]);return k=function(){return n},n}function _(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var M=s.a.div(k()),S=s.a.div(j()),P=function(){var n,e,t=D(Object(i.useState)(!1),2),r=t[0],o=t[1],c=D(Object(i.useState)({}),2),l=c[0],d=c[1],s=function(n){return new Date(u()(n,"LLL"))};return a.a.createElement("div",{className:"max-width-container frow margin-t-20"},f.members.map((function(n,e){return a.a.createElement(M,{className:"pointer frow",key:e,onClick:function(){d(n),o(!r)}},a.a.createElement("div",{className:"center  w-60 h-60 margin-r-20"},a.a.createElement("i",{width:"100%",height:"100%",className:"fa fa-user-circle ","aria-hidden":"true"})),a.a.createElement("div",{className:"fcol center align-items"},a.a.createElement("div",{className:"solid"}," ",n.real_name),a.a.createElement("div",{className:"solid"},n.tz)))})),a.a.createElement(a.a.Fragment,null,r&&a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{onClick:function(){return o(!r)}}),a.a.createElement(g,null,a.a.createElement(x,{user:(n=l,w(w({},n),{},{activity_periods:(e=n.activity_periods,e.map((function(n,e){return{start:s(n.start_time),end:s(n.end_time),title:"active",id:e,color:"lightblue"}})))}))})))))};function E(n){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function z(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function A(n,e){return(A=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function R(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=L(n);if(e){var o=L(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return C(this,t)}}function C(n,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function L(n){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var U=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&A(n,e)}(i,n);var e,t,r,o=R(i);function i(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,n)).state={data:null},e}return e=i,(t=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(P,null))}}])&&z(e.prototype,t),r&&z(e,r),i}(i.Component),T=t(5),N=t(14),I=process.env.PORT||8e3,q=t(5),F=o()();F.use((function(n,e,t){e.header("Access-Control-Allow-Origin","*"),t()})),F.get("/",(function(n,e,t){var r=new d.ServerStyleSheet,o=T.resolve("dist/index.html");N.readFile(o,"utf8",(function(n,t){if(n)return console.error("err",n),e.status(404).end();var o=l.a.renderToString(a.a.createElement(U,null)),i=r.getStyleTags();return e.send(t.replace('<div id="root"></div>','<div id="root">'.concat(o,"</div>").concat(i)))}))})),F.use(o.a.static(q.resolve("dist"))),F.listen(I,(function(n){if(n)return console.log("Could not start the app",n);console.log("Listening on "+I+"...")}))}]);