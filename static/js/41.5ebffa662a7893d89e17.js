webpackJsonp([41],{HExf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("viA7"),a={name:"inlineEditTable",data:function(){return{list:null,listLoading:!0,listQuery:{page:1,limit:10}}},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(n.c)(this.listQuery).then(function(e){var i=e.data.items;t.list=i.map(function(e){return t.$set(e,"edit",!1),e.originalTitle=e.title,e}),t.listLoading=!1})},cancelEdit:function(t){t.title=t.originalTitle,t.edit=!1,this.$message({message:"The title has been restored to the original value",type:"warning"})},confirmEdit:function(t){t.edit=!1,t.originalTitle=t.title,this.$message({message:"The title has been edited",type:"success"})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180px",align:"center",label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"120px",align:"center",label:"Author"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"100px",label:"Importance"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(+e.row.importance,function(t){return i("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})})}}])}),t._v(" "),i("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),i("el-table-column",{attrs:{"min-width":"300px",label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.edit?[i("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:e.row.title,callback:function(i){t.$set(e.row,"title",i)},expression:"scope.row.title"}}),t._v(" "),i("el-button",{staticClass:"cancel-btn",attrs:{size:"small",icon:"el-icon-refresh",type:"warning"},on:{click:function(i){t.cancelEdit(e.row)}}},[t._v("cancel")])]:i("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"Actions",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.edit?i("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-check-outline"},on:{click:function(i){t.confirmEdit(e.row)}}},[t._v("Ok")]):i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(t){e.row.edit=!e.row.edit}}},[t._v("Edit")])]}}])})],1)],1)},staticRenderFns:[]};var s=i("VU/8")(a,l,!1,function(t){i("TzNd")},"data-v-0a7a06fb",null);e.default=s.exports},OTLO:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.edit-input[data-v-0a7a06fb] {\n  padding-right: 100px;\n}\n.cancel-btn[data-v-0a7a06fb] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n",""])},TzNd:function(t,e,i){var n=i("OTLO");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("45d00872",n,!0)}});