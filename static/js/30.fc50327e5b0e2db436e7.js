webpackJsonp([30],{NIBp:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("gI4u"),n=(i("xjXP"),[{element:".hamburger-container",popover:{title:"Hamburger",description:"Open && Close sidebar",position:"bottom"}},{element:".breadcrumb-container",popover:{title:"Breadcrumb",description:"Indicate the current page location",position:"bottom"}},{element:".screenfull",popover:{title:"Screenfull",description:"Bring the page into fullscreen",position:"left"}},{element:".international-icon",popover:{title:"Switch language",description:"Switch the system language",position:"left"}},{element:".theme-switch",popover:{title:"Theme Switch",description:"Custom switch system theme",position:"left"}},{element:".tags-view-container",popover:{title:"Tags view",description:"The history of the page you visited",position:"bottom"}}]),r={name:"guide",data:function(){return{driver:null}},mounted:function(){this.driver=new o},methods:{guide:function(){this.driver.defineSteps(n),this.driver.start()}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("p",{staticClass:"warn-content"},[t._v("\n    "+t._s(t.$t("guide.description"))+"\n    "),i("a",{attrs:{href:"https://github.com/kamranahmedse/driver.js",target:"_blank"}},[t._v("driver.js.\n    ")])]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.guide(e)}}},[t._v(t._s(t.$t("guide.button")))])],1)},staticRenderFns:[]},a=i("VU/8")(r,s,!1,null,null,null);e.default=a.exports},aH18:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'div#driver-popover-item{display:none;position:absolute;background:#fff;color:#2d2d2d;margin:0;padding:15px;border-radius:5px;min-width:250px;max-width:300px;-webkit-box-shadow:0 1px 10px rgba(0,0,0,.4);box-shadow:0 1px 10px rgba(0,0,0,.4);z-index:1000000000}div#driver-popover-item .driver-popover-tip{border:5px solid #fff;content:"";position:absolute}div#driver-popover-item .driver-popover-tip.bottom{bottom:-10px;border-top-color:#fff;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}div#driver-popover-item .driver-popover-tip.left{left:-10px;top:10px;border-top-color:transparent;border-right-color:#fff;border-bottom-color:transparent;border-left-color:transparent}div#driver-popover-item .driver-popover-tip.right{right:-10px;top:10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:#fff}div#driver-popover-item .driver-popover-tip.top{top:-10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:#fff;border-left-color:transparent}div#driver-popover-item .driver-popover-footer{display:block;clear:both;margin-top:5px}div#driver-popover-item .driver-popover-footer button{display:inline-block;padding:3px 10px;border:1px solid #d4d4d4;text-decoration:none;text-shadow:1px 1px 0 #fff;color:#2d2d2d;font:11px/normal sans-serif;cursor:pointer;outline:0;background-color:#f1f1f1;border-radius:2px;zoom:1;margin:10px 0 0;line-height:1.3}div#driver-popover-item .driver-popover-footer button.driver-disabled{color:gray;cursor:default;pointer-events:none}div#driver-popover-item .driver-popover-footer .driver-close-btn{float:left}div#driver-popover-item .driver-popover-footer .driver-btn-group{float:right}div#driver-popover-item .driver-popover-title{font:19px/normal sans-serif;margin:0 0 5px;font-weight:700;display:block;position:relative;line-height:1.5;zoom:1}div#driver-popover-item .driver-popover-description{margin-bottom:0;font:14px/normal sans-serif;line-height:1.5;color:#2d2d2d;font-weight:400;zoom:1}.driver-stage-no-animation{-webkit-transition:none!important;transition:none!important;background:transparent!important;outline:5000px solid rgba(0,0,0,.75)}div#driver-page-overlay{background:#000;position:fixed;bottom:0;right:0;display:block;width:100%;height:100%;zoom:1;filter:alpha(opacity=75);opacity:.75;z-index:100002!important}div#driver-highlighted-element-stage,div#driver-page-overlay{top:0;left:0;-webkit-transition:all .4s;transition:all .4s}div#driver-highlighted-element-stage{position:absolute;height:50px;width:300px;background:#fff;z-index:100003!important;display:none;border-radius:2px}.driver-highlighted-element{z-index:100004!important}.driver-position-relative{position:relative!important}.driver-fix-stacking{z-index:auto!important;opacity:1!important;-webkit-transform:none!important;transform:none!important;-webkit-filter:none!important;-moz-filter:none!important;-ms-filter:none!important;-o-filter:none!important;filter:none!important;-webkit-perspective:none!important;-ms-perspective:none!important;-o-perspective:none!important;perspective:none!important;-webkit-transform-style:flat!important;transform-style:flat!important;-webkit-transform-box:border-box!important;-moz-transform-box:border-box!important;-ms-transform-box:border-box!important;-o-transform-box:border-box!important;transform-box:border-box!important;will-change:unset!important}',""])},gI4u:function(t,e,i){var o;window,o=function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=10)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.createNodeFromString=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.getStyleProperty=function t(e,i){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]){for(var o=["","-webkit-","-ms-","moz-","-o-"],n=0;n<o.length;n++){var r=t(e,o[n]+i);if(r)return r}return""}var s="";return e.currentStyle?s=e.currentStyle[i]:document.defaultView&&document.defaultView.getComputedStyle&&(s=document.defaultView.getComputedStyle(e,null).getPropertyValue(i)),s&&s.toLowerCase?s.toLowerCase():s},e.isDomElement=function(t){return t&&"object"===(void 0===t?"undefined":o(t))&&"nodeType"in t}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.OVERLAY_OPACITY=.75,e.OVERLAY_PADDING=10,e.SHOULD_ANIMATE_OVERLAY=!0,e.SHOULD_OUTSIDE_CLICK_CLOSE=!0,e.ALLOW_KEYBOARD_CONTROL=!0,e.SHOULD_OUTSIDE_CLICK_NEXT=!1,e.ESC_KEY_CODE=27,e.LEFT_KEY_CODE=37,e.RIGHT_KEY_CODE=39;var o=e.ID_OVERLAY="driver-page-overlay",n=e.ID_STAGE="driver-highlighted-element-stage",r=e.ID_POPOVER="driver-popover-item",s=(e.CLASS_DRIVER_HIGHLIGHTED_ELEMENT="driver-highlighted-element",e.CLASS_POSITION_RELATIVE="driver-position-relative",e.CLASS_FIX_STACKING_CONTEXT="driver-fix-stacking",e.CLASS_STAGE_NO_ANIMATION="driver-stage-no-animation",e.CLASS_POPOVER_TIP="driver-popover-tip"),a=e.CLASS_POPOVER_TITLE="driver-popover-title",l=e.CLASS_POPOVER_DESCRIPTION="driver-popover-description",h=e.CLASS_POPOVER_FOOTER="driver-popover-footer",d=e.CLASS_CLOSE_BTN="driver-close-btn",p=e.CLASS_NEXT_STEP_BTN="driver-next-btn",u=e.CLASS_PREV_STEP_BTN="driver-prev-btn";e.CLASS_BTN_DISABLED="driver-disabled",e.ANIMATION_DURATION_MS=400,e.POPOVER_HTML='\n  <div id="'+r+'">\n    <div class="'+s+'"></div>\n    <div class="'+a+'">Popover Title</div>\n    <div class="'+l+'">Popover Description</div>\n    <div class="'+h+'">\n      <button class="'+d+'">Close</button>\n      <span class="driver-btn-group">\n        <button class="'+u+'">&larr; Previous</button>\n        <button class="'+p+'">Next &rarr;</button>\n      </span>\n    </div>\n  </div>',e.OVERLAY_HTML='<div id="'+o+'"></div>',e.STAGE_HTML='<div id="'+n+'"></div>'},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(1),s=i(0),a=(o=i(6))&&o.__esModule?o:{default:o},l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.node,o=e.options,n=e.popover,r=e.stage,s=e.overlay,a=e.window,l=e.document;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.node=i,this.document=l,this.window=a,this.options=o,this.overlay=s,this.popover=n,this.stage=r,this.animationTimeout=null}return n(t,[{key:"isInView",value:function(){for(var t=this.node.offsetTop,e=this.node.offsetLeft,i=this.node.offsetWidth,o=this.node.offsetHeight,n=this.node;n.offsetParent;)t+=(n=n.offsetParent).offsetTop,e+=n.offsetLeft;return t>=this.window.pageYOffset&&e>=this.window.pageXOffset&&t+o<=this.window.pageYOffset+this.window.innerHeight&&e+i<=this.window.pageXOffset+this.window.innerWidth}},{key:"scrollManually",value:function(){var t=this.node.getBoundingClientRect().top+this.window.pageYOffset-this.window.innerHeight/2;this.window.scrollTo(0,t)}},{key:"bringInView",value:function(){if(!this.isInView())if(this.node.scrollIntoView)try{this.node.scrollIntoView(this.options.scrollIntoViewOptions||{behavior:"instant",block:"center"})}catch(t){this.scrollManually()}else this.scrollManually()}},{key:"getCalculatedPosition",value:function(){var t=this.document.body,e=this.document.documentElement,i=this.window,o=this.window.pageYOffset||e.scrollTop||t.scrollTop,n=i.pageXOffset||e.scrollLeft||t.scrollLeft,r=this.node.getBoundingClientRect();return new a.default({top:r.top+o,left:r.left+n,right:r.left+n+r.width,bottom:r.top+o+r.height})}},{key:"getPopover",value:function(){return this.popover}},{key:"onDeselected",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.hidePopover(),t&&this.hideStage(),this.removeHighlightClasses(),this.window.clearTimeout(this.animationTimeout),this.options.onDeselected&&this.options.onDeselected(this)}},{key:"isSame",value:function(t){return!(!t||!t.node)&&t.node===this.node}},{key:"onHighlightStarted",value:function(){this.options.onHighlightStarted&&this.options.onHighlightStarted(this)}},{key:"onHighlighted",value:function(){this.showPopover(),this.showStage(),this.addHighlightClasses();var t=this.popover;t&&!t.isInView()&&t.bringInView(),this.isInView()||this.bringInView(),this.options.onHighlighted&&this.options.onHighlighted(this)}},{key:"removeHighlightClasses",value:function(){this.node.classList.remove(r.CLASS_DRIVER_HIGHLIGHTED_ELEMENT),this.node.classList.remove(r.CLASS_POSITION_RELATIVE);for(var t=this.document.querySelectorAll("."+r.CLASS_FIX_STACKING_CONTEXT),e=0;e<t.length;e++)t[e].classList.remove(r.CLASS_FIX_STACKING_CONTEXT)}},{key:"addHighlightClasses",value:function(){this.node.classList.add(r.CLASS_DRIVER_HIGHLIGHTED_ELEMENT),this.canMakeRelative()&&this.node.classList.add(r.CLASS_POSITION_RELATIVE),this.fixStackingContext()}},{key:"fixStackingContext",value:function(){for(var t=this.node.parentNode;t&&t.tagName&&"body"!==t.tagName.toLowerCase();){var e=(0,s.getStyleProperty)(t,"z-index"),i=parseFloat((0,s.getStyleProperty)(t,"opacity")),o=(0,s.getStyleProperty)(t,"transform",!0),n=(0,s.getStyleProperty)(t,"transform-style",!0),a=(0,s.getStyleProperty)(t,"transform-box",!0),l=(0,s.getStyleProperty)(t,"filter",!0),h=(0,s.getStyleProperty)(t,"perspective",!0);(/[0-9]+/.test(e)||i<1||o&&"none"!==o||n&&"flat"!==n||a&&"border-box"!==a||l&&"none"!==l||h&&"none"!==h)&&t.classList.add(r.CLASS_FIX_STACKING_CONTEXT),t=t.parentNode}}},{key:"canMakeRelative",value:function(){var t=this.getStyleProperty("position");return-1===["absolute","fixed","relative"].indexOf(t)}},{key:"getStyleProperty",value:function(t){return(0,s.getStyleProperty)(this.node,t)}},{key:"showStage",value:function(){this.stage.show(this.getCalculatedPosition())}},{key:"getNode",value:function(){return this.node}},{key:"hideStage",value:function(){this.stage.hide()}},{key:"hidePopover",value:function(){this.popover&&this.popover.hide()}},{key:"showPopover",value:function(){var t=this;if(this.popover){var e=this.getCalculatedPosition(),i=r.ANIMATION_DURATION_MS;this.options.animate&&this.overlay.lastHighlightedElement||(i=0),this.animationTimeout=this.window.setTimeout(function(){t.popover.show(e)},i)}}},{key:"getFullPageSize",value:function(){var t=this.document.body,e=this.document.documentElement;return{height:Math.max(t.scrollHeight,t.offsetHeight,e.scrollHeight,e.offsetHeight),width:Math.max(t.scrollWidth,t.offsetWidth,e.scrollWidth,e.offsetWidth)}}},{key:"getSize",value:function(){return{height:Math.max(this.node.scrollHeight,this.node.offsetHeight),width:Math.max(this.node.scrollWidth,this.node.offsetWidth)}}}]),t}();e.default=l,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=i(1),s=i(0),a=(o=i(2))&&o.__esModule?o:{default:o},l=function(t){function e(t,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.options=t,n.window=i,n.document=o,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),n(e,[{key:"makeNode",value:function(){var t=this.document.getElementById(r.ID_STAGE);t||(t=(0,s.createNodeFromString)(r.STAGE_HTML),document.body.appendChild(t)),this.node=t,this.options.animate?this.node.classList.remove(r.CLASS_STAGE_NO_ANIMATION):this.node.classList.add(r.CLASS_STAGE_NO_ANIMATION)}},{key:"hide",value:function(){this.node&&this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"setInitialStyle",value:function(){this.node.style.display="block",this.node.style.left="0",this.node.style.top="0",this.node.style.bottom="",this.node.style.right=""}},{key:"show",value:function(t){this.makeNode(),this.setInitialStyle();var e=2*this.options.padding,i=t.right-t.left+e,o=t.bottom-t.top+e;this.node.style.display="block",this.node.style.position="absolute",this.node.style.width=i+"px",this.node.style.height=o+"px",this.node.style.top=t.top-e/2+"px",this.node.style.left=t.left-e/2+"px",this.node.style.backgroundColor=this.options.stageBackground}}]),e}();e.default=l,t.exports=e.default},function(t,e,i){"use strict";!function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),o=Math.max(0,16-(i-t)),n=window.setTimeout(function(){e(i+o)},o);return t=i+o,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=(o=i(2))&&o.__esModule?o:{default:o},a=i(1),l=i(0),h=function(t){function e(t,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.options=n({isFirst:!0,isLast:!0,totalCount:1,currentIndex:0,showButtons:!0,closeBtnText:"Close",doneBtnText:"Done",startBtnText:"Next &rarr;",nextBtnText:"Next &rarr;",prevBtnText:"&larr; Previous"},t),r.window=i,r.document=o,r.makeNode(),r.hide(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.default),r(e,[{key:"makeNode",value:function(){var t=this.document.getElementById(a.ID_POPOVER);t||(t=(0,l.createNodeFromString)(a.POPOVER_HTML),document.body.appendChild(t)),this.node=t,this.tipNode=t.querySelector("."+a.CLASS_POPOVER_TIP),this.titleNode=t.querySelector("."+a.CLASS_POPOVER_TITLE),this.descriptionNode=t.querySelector("."+a.CLASS_POPOVER_DESCRIPTION),this.footerNode=t.querySelector("."+a.CLASS_POPOVER_FOOTER),this.nextBtnNode=t.querySelector("."+a.CLASS_NEXT_STEP_BTN),this.prevBtnNode=t.querySelector("."+a.CLASS_PREV_STEP_BTN),this.closeBtnNode=t.querySelector("."+a.CLASS_CLOSE_BTN)}},{key:"getTitleNode",value:function(){return this.titleNode}},{key:"getDescriptionNode",value:function(){return this.descriptionNode}},{key:"hide",value:function(){this.node.style.display="none"}},{key:"setInitialState",value:function(){this.node.style.display="block",this.node.style.left="0",this.node.style.top="0",this.node.style.bottom="",this.node.style.right="",this.node.querySelector("."+a.CLASS_POPOVER_TIP).className=a.CLASS_POPOVER_TIP}},{key:"show",value:function(t){switch(this.setInitialState(),this.titleNode.innerHTML=this.options.title,this.descriptionNode.innerHTML=this.options.description||"",this.renderButtons(),this.options.position){case"left":this.positionOnLeft(t);break;case"right":this.positionOnRight(t);break;case"top":this.positionOnTop(t);break;case"bottom":this.positionOnBottom(t);break;case"auto":default:this.autoPosition(t)}}},{key:"renderButtons",value:function(){this.nextBtnNode.innerHTML=this.options.nextBtnText,this.prevBtnNode.innerHTML=this.options.prevBtnText,this.closeBtnNode.innerHTML=this.options.closeBtnText,this.options.showButtons&&this.options.totalCount&&1!==this.options.totalCount?(this.footerNode.style.display="block",this.options.isFirst?(this.prevBtnNode.classList.add(a.CLASS_BTN_DISABLED),this.nextBtnNode.innerHTML=this.options.startBtnText):this.prevBtnNode.classList.remove(a.CLASS_BTN_DISABLED),this.options.isLast?this.nextBtnNode.innerHTML=this.options.doneBtnText:this.nextBtnNode.innerHTML=this.options.nextBtnText):this.footerNode.style.display="none"}},{key:"positionOnLeft",value:function(t){var e=this.getSize().width,i=this.options.padding+10;this.node.style.left=t.left-e-i+"px",this.node.style.top=t.top-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("right")}},{key:"positionOnRight",value:function(t){var e=this.options.padding+10;this.node.style.left=t.right+e+"px",this.node.style.top=t.top-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("left")}},{key:"positionOnTop",value:function(t){var e=this.getSize().height,i=this.options.padding+10;this.node.style.top=t.top-e-i+"px",this.node.style.left=t.left-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("bottom")}},{key:"positionOnBottom",value:function(t){var e=this.options.padding+10;this.node.style.top=t.bottom+e+"px",this.node.style.left=t.left-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("top")}},{key:"autoPosition",value:function(t){var e=this.getFullPageSize(),i=this.getSize(),o=e.height,n=i.height,r=this.options.padding+10;t.bottom+n+r>=o?this.positionOnTop(t):this.positionOnBottom(t)}}]),e}();e.default=h,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.left,o=void 0===i?0:i,n=e.top,r=void 0===n?0:n,s=e.right,a=void 0===s?0:s,l=e.bottom,h=void 0===l?0:l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.left=o,this.right=a,this.top=r,this.bottom=h}return o(t,[{key:"canHighlight",value:function(){return this.left<this.right&&this.top<this.bottom}},{key:"equals",value:function(t){return Math.round(this.left)===Math.round(t.left)&&Math.round(this.right)===Math.round(t.right)&&Math.round(this.top)===Math.round(t.top)&&Math.round(this.bottom)===Math.round(t.bottom)}}]),t}();e.default=n,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=i(1),r=i(0),s=function(){function t(e,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.highlightedElement=null,this.lastHighlightedElement=null,this.hideTimer=null,this.window=i,this.document=o,this.removeNode=this.removeNode.bind(this)}return o(t,[{key:"makeNode",value:function(){var t=this.document.getElementById(n.ID_OVERLAY);t||(t=(0,r.createNodeFromString)(n.OVERLAY_HTML),document.body.appendChild(t)),this.node=t,this.node.style.opacity="0",this.options.animate||this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"highlight",value:function(t){t&&t.node?t.isSame(this.highlightedElement)||(this.window.clearTimeout(this.hideTimer),t.onHighlightStarted(),this.highlightedElement&&!this.highlightedElement.isSame(this.lastHighlightedElement)&&this.highlightedElement.onDeselected(),t.getCalculatedPosition().canHighlight()&&(this.lastHighlightedElement=this.highlightedElement,this.highlightedElement=t,this.show(),this.highlightedElement.onHighlighted())):console.warn("Invalid element to highlight. Must be an instance of `Element`")}},{key:"show",value:function(){var t=this;this.node&&this.node.parentElement||(this.makeNode(),window.setTimeout(function(){t.node.style.opacity=""+t.options.opacity,t.node.style.position="fixed",t.node.style.left="0",t.node.style.top="0",t.node.style.bottom="0",t.node.style.right="0"}))}},{key:"getHighlightedElement",value:function(){return this.highlightedElement}},{key:"getLastHighlightedElement",value:function(){return this.lastHighlightedElement}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.options.onReset&&this.options.onReset(),this.highlightedElement&&this.highlightedElement.onDeselected(!0),this.highlightedElement=null,this.lastHighlightedElement=null,this.node&&(this.window.clearTimeout(this.hideTimer),this.options.animate&&!t?(this.node.style.opacity="0",this.hideTimer=this.window.setTimeout(this.removeNode,n.ANIMATION_DURATION_MS)):this.removeNode())}},{key:"removeNode",value:function(){this.node&&this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"refresh",value:function(){this.highlightedElement&&(this.highlightedElement.showPopover(),this.highlightedElement.showStage())}}]),t}();e.default=s,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=p(i(7)),s=p(i(2)),a=p(i(5));i(4);var l=i(1),h=p(i(3)),d=i(0);function p(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=o({animate:l.SHOULD_ANIMATE_OVERLAY,opacity:l.OVERLAY_OPACITY,padding:l.OVERLAY_PADDING,scrollIntoViewOptions:null,allowClose:l.SHOULD_OUTSIDE_CLICK_CLOSE,keyboardControl:l.ALLOW_KEYBOARD_CONTROL,overlayClickNext:l.SHOULD_OUTSIDE_CLICK_NEXT,stageBackground:"#ffffff",onHighlightStarted:function(){},onHighlighted:function(){},onDeselected:function(){},onReset:function(){}},e),this.document=document,this.window=window,this.isActivated=!1,this.steps=[],this.currentStep=0,this.overlay=new r.default(this.options,window,document),this.onResize=this.onResize.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onClick=this.onClick.bind(this),this.bind()}return n(t,[{key:"bind",value:function(){this.window.addEventListener("resize",this.onResize,!1),this.window.addEventListener("keyup",this.onKeyUp,!1),this.window.addEventListener("click",this.onClick,!1)}},{key:"onClick",value:function(t){if(this.isActivated&&this.hasHighlightedElement()){var e=this.overlay.getHighlightedElement(),i=this.document.getElementById(l.ID_POPOVER),o=e.node.contains(t.target),n=i&&i.contains(t.target);if(o||n||!this.options.overlayClickNext)if(o||n||!this.options.allowClose){var r=t.target.classList.contains(l.CLASS_NEXT_STEP_BTN),s=t.target.classList.contains(l.CLASS_PREV_STEP_BTN);t.target.classList.contains(l.CLASS_CLOSE_BTN)?this.reset():r?this.moveNext():s&&this.movePrevious()}else this.reset();else this.moveNext()}}},{key:"onResize",value:function(){this.isActivated&&this.overlay.refresh()}},{key:"onKeyUp",value:function(t){this.isActivated&&this.options.keyboardControl&&(t.keyCode===l.ESC_KEY_CODE&&this.options.allowClose?this.reset():0!==this.steps.length&&(t.keyCode===l.RIGHT_KEY_CODE?this.moveNext():t.keyCode===l.LEFT_KEY_CODE&&this.movePrevious()))}},{key:"movePrevious",value:function(){this.currentStep-=1,this.steps[this.currentStep]?this.overlay.highlight(this.steps[this.currentStep]):this.reset()}},{key:"moveNext",value:function(){this.currentStep+=1,this.steps[this.currentStep]?this.overlay.highlight(this.steps[this.currentStep]):this.reset()}},{key:"hasNextStep",value:function(){return!!this.steps[this.currentStep+1]}},{key:"hasPreviousStep",value:function(){return!!this.steps[this.currentStep-1]}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.currentStep=0,this.isActivated=!1,this.overlay.clear(t)}},{key:"hasHighlightedElement",value:function(){var t=this.overlay.getHighlightedElement();return t&&t.node}},{key:"getHighlightedElement",value:function(){return this.overlay.getHighlightedElement()}},{key:"getLastHighlightedElement",value:function(){return this.overlay.getLastHighlightedElement()}},{key:"defineSteps",value:function(t){this.steps=[];for(var e=0;e<t.length;e++){var i=this.prepareElementFromStep(t[e],t,e);i&&this.steps.push(i)}}},{key:"prepareElementFromStep",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n={},r=t,l="string"!=typeof t&&!(0,d.isDomElement)(t);if(!t||l&&!t.element)throw new Error("Element is required in step "+i);l&&(r=t.element,n=o({},this.options,t));var p=(0,d.isDomElement)(r)?r:this.document.querySelector(r);if(!p)return console.warn("Element to highlight "+r+" not found"),null;var u=null;if(n.popover&&n.popover.title){var c=o({},this.options,n.popover,{totalCount:e.length,currentIndex:i,isFirst:0===i,isLast:i===e.length-1});u=new a.default(c,this.window,this.document)}var f=o({},this.options,n),v=new h.default(f,this.window,this.document);return new s.default({node:p,options:n,popover:u,stage:v,overlay:this.overlay,window:this.window,document:this.document})}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.steps||0===this.steps.length)throw new Error("There are no steps defined to iterate");this.isActivated=!0,this.currentStep=t,this.overlay.highlight(this.steps[t])}},{key:"highlight",value:function(t){this.isActivated=!0;var e=this.prepareElementFromStep(t);e&&this.overlay.highlight(e)}}]),t}();e.default=u,t.exports=e.default},function(t,e){},function(t,e,i){i(9),t.exports=i(8)}])},t.exports=o()},xjXP:function(t,e,i){var o=i("aH18");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("2129c3dd",o,!0)}});