(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"311b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("q-list",{staticClass:"q-mb-md",attrs:{bordered:"",padding:""}},[i("q-item-label",{attrs:{header:""}},[e._v("Settings")]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",[i("q-item-label",[e._v("Show 12 hour time format")])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{color:"blue"},model:{value:e.show12HourTimeFormat,callback:function(t){e.show12HourTimeFormat=t},expression:"show12HourTimeFormat"}})],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",[i("q-item-label",[e._v("Show tasks in one list")])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{color:"blue"},model:{value:e.showTasksInOneList,callback:function(t){e.showTasksInOneList=t},expression:"showTasksInOneList"}})],1)],1)],1),i("q-list",{attrs:{bordered:"",padding:""}},[i("q-item-label",{attrs:{header:""}},[e._v("More")]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/settings/help",tag:"label"}},[i("q-item-section",[i("q-item-label",[e._v("Help")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"chevron_right"}})],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"},on:{click:e.visitOurWebsite}},[i("q-item-section",[i("q-item-label",[e._v("Visit our website")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"chevron_right"}})],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"},on:{click:e.emailUs}},[i("q-item-section",[i("q-item-label",[e._v("Email us")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"chevron_right"}})],1)],1)],1)],1)},r=[],o=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("9523")),a=i.n(o),n=i("2f62"),c=i("b06b");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p={computed:m(m({},Object(n["c"])("settings",["settings"])),{},{show12HourTimeFormat:{get:function(){return this.settings.show12HourTimeFormat},set:function(e){this.setShow12HourTimeFormat(e)}},showTasksInOneList:{get:function(){return this.settings.showTasksInOneList},set:function(e){this.setShowTasksInOneList(e)}}}),methods:m(m({},Object(n["b"])("settings",["setShow12HourTimeFormat","setShowTasksInOneList"])),{},{visitOurWebsite:function(){Object(c["a"])("http://www.google.com")},emailUs:function(){window.location.href="mailto:hello@awesometodo?subject=Awesome Todo Feedback"}})},b=p,u=i("2877"),w=Object(u["a"])(b,s,r,!1,null,null,null);t["default"]=w.exports}}]);