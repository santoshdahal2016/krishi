webpackJsonp([43],{P9Rh:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"pagePermission",components:{SwitchRoles:s("v5cR").a},methods:{handleRolesChange:function(){this.$router.push({path:"/permission/index?"+ +new Date})}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-container"},[t("switch-roles",{on:{change:this.handleRolesChange}})],1)},staticRenderFns:[]},o=s("VU/8")(n,i,!1,null,null,null);t.default=o.exports},v5cR:function(e,t,s){"use strict";var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(e._s(e.$t("permission.roles"))+"： "+e._s(e.roles))]),e._v("\n  "+e._s(e.$t("permission.switchRoles"))+"：\n  "),s("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[s("el-radio-button",{attrs:{label:"editor"}}),e._v(" "),s("el-radio-button",{attrs:{label:"admin"}})],1)],1)},staticRenderFns:[]},i=s("VU/8")({computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("ChangeRoles",e).then(function(){t.$emit("change")})}}}},n,!1,null,null,null);t.a=i.exports}});