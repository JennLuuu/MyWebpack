/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/add.js
/* harmony default export */ const add = ((a,b)=>{
    console.log("add",a+b);
});
;// CONCATENATED MODULE: ./src/js/utils.js
const PI = 3.1415926;

const show = ()=>{
    console.log("show");
}
;// CONCATENATED MODULE: ./src/images/dog.webp
const dog_namespaceObject = __webpack_require__.p + "images/dog.webp";
;// CONCATENATED MODULE: ./src/images/index.png
const images_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNzgwMTE3NDA3MjA2ODExODIyQTlGMUNGNUQ1ODE2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNzQ1QjJDOTMwMUUxMUU1OTgyM0UyMzNGNkU3QTVERSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzQ1QjJDODMwMUUxMUU1OTgyM0UyMzNGNkU3QTVERSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVCNkEzODFGMTIzMEU1MTE5QkE3QThBOEQ1MUQ4M0I1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA3ODAxMTc0MDcyMDY4MTE4MjJBOUYxQ0Y1RDU4MTYwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+leEfgwAAAVBJREFUeNrs080rRFEcxvG5XBYjhIVsTMnCxkphipSXSVnwL3iLlAZlTdmZUJOXFBtZmlIWGkpZkJmNLLwsJVv+ARvfU89o5jbTfSlWfvXp3nPuvc+5555zrcb4ZchDLWENq0i43Vzmct3GHjYQxjoOUBk0tBpnmFU7o+MkLlDvN7QZNxjGF2bQjWm1+zRIm9fQDtyhHZ+I4QgLOMYQPtCKWwy6hY7hGk14QSeecIUtHZ/RpWMdzjFRKnQRJ6hCWtM1i5NFVPdE1Q7rPK3FPNTOsHKh5djFps6TGEGPvmvEMZuI+nt1X1L9Kwq3zSgpjGoB5rGvt05okFI74xTLiOMR2xhHg+XY/BXY0Sp7LbNv5/RSP5s7v8xHHwj5qym05D/nXH2/gbnq9/ObBqpfCbVdrpvf8b1Ifw3ug4a+4q1If+2fT/8/tKAeAuYUPPctwAAF6jzhSoik8gAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/index.js
/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-27 09:46:15
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-27 16:00:23
 * @FilePath: \MyWebpack\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */







add(2,6)
console.log(PI);
show()
console.log(dog_namespaceObject);
console.log(images_namespaceObject);


const img1 = new Image()
img1.src = images_namespaceObject
document.body.appendChild(img1)
/******/ })()
;