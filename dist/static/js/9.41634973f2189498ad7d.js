webpackJsonp([9],{"3Jfp":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"Login",data:function(){return{username:"",password:"",msg:"",msgType:"",msgShow:!1}},methods:{login:function(t){var s=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&s.submit()})},submit:function(){var t=this.username,s=this.password,e=this.$store.state.user;e?e.name!==t||e.password!==s?this.showMsg("用户名或密码不正确"):this.$store.dispatch("login"):this.showMsg("不存在该用户")},showMsg:function(t){var s=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=e,this.msgShow=!1,this.$nextTick(function(){s.msgShow=!0})}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[e("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(s){t.msgShow=s}}}),t._v(" "),e("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),e("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("Username")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"用户名"},expression:"{ title: '用户名' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Please filling username"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"密码"},expression:"{ title: '密码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"Please filling password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.login}},[e("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" Login\n        ")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"panel-heading"},[s("h3",{staticClass:"panel-title"},[this._v("Login")])])}]};var r=e("VU/8")(a,i,!1,function(t){e("ngJa")},"data-v-5967c700",null);s.default=r.exports},ngJa:function(t,s){}});
//# sourceMappingURL=9.41634973f2189498ad7d.js.map