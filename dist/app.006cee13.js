parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var e=document.getElementById("add-btn"),t=document.getElementById("cancel-btn"),n=document.getElementById("delete-btn"),c=document.getElementById("delete-all-btn"),l=document.getElementById("input"),d=document.querySelector(".tree-view"),r=document.querySelectorAll("li");function o(){if(l.value){var e=document.createElement("li");e.textContent=l.value,d.appendChild(e),l.value=""}(r=document.querySelectorAll("li")).forEach(function(e){return e.addEventListener("click",function(e){r.forEach(function(e){return e.classList.remove("selected")}),e.currentTarget.classList.add("selected")})})}function i(){r.forEach(function(e){e.classList.contains("selected")&&e.parentNode.removeChild(e)})}function u(){l.value&&(l.value=""),r.forEach(function(e){return e.classList.remove("selected")})}function a(){(r=document.querySelectorAll("li")).forEach(function(e){return e.parentNode.removeChild(e)})}e.addEventListener("click",o),t.addEventListener("click",u),n.addEventListener("click",i),c.addEventListener("click",a);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.006cee13.js.map