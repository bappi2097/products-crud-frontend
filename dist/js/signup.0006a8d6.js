(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"5c9c":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-up"},[t.errors?r("div",t._l(t.errors,(function(e,a){return r("ul",{key:a,staticClass:"errors"},t._l(e,(function(e){return r("li",{key:e,staticClass:"error"},[t._v(t._s(e))])})),0)})),0):t._e(),r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Full Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input",attrs:{type:"text",name:"name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{type:"email",name:"email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"label",attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"label",attrs:{for:"password"}},[t._v("Confirm Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"input",attrs:{type:"password",name:"password_confirmation",required:""},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}})]),t._m(0)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn-signup"},[t._v("Sign Up")])])}],o=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),n=r("bc3a"),i=r.n(n),m={name:"SignUp",components:{},data:function(){return{form:{name:"",email:"",password:"",password_confirmation:""},errors:[]}},methods:{submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("auth/register",t.form).then((function(e){201==e.status&&t.$router.replace({name:"SignIn"})})).catch((function(e){var r=e.response;t.errors=r.data.errors}));case 2:case"end":return e.stop()}}),e)})))()}}},u=m,l=(r("da10"),r("2877")),c=Object(l["a"])(u,a,s,!1,null,"e8c2b1fc",null);e["default"]=c.exports},"9ff4":function(t,e,r){},da10:function(t,e,r){"use strict";r("9ff4")}}]);
//# sourceMappingURL=signup.0006a8d6.js.map