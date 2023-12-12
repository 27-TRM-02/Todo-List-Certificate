(function(){"use strict";var t={7422:function(t,s,e){var a=e(144),o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"app"},[s("PageTitle",{attrs:{title:t.getPageTitle}}),s("Dashboard"),s("UIMessage",[s("p",[t._v("This application uses the browser's Local Storage to store data.")])]),s("ButtonCertificado",{attrs:{label:t.botonLabel}})],1)},n=[],i=e(629),l=function(){var t=this,s=t._self._c;return s("div",[s("h1",{staticClass:"page-title"},[t._v(" "+t._s(t.title)+" ")])])},r=[],c={name:"PageTitle",props:{title:{type:String,required:!0}},watch:{}},u=c,d=e(1001),k=(0,d.Z)(u,l,r,!1,null,"78339f9a",null),m=k.exports,p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"dashboard"},[s("DashboardInfo"),s("DashboardContent")],1)},f=[],_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"dashboard-info"},[s("ul",{staticClass:"dashboard-info__list"},[s("li",{staticClass:"dashboard-info__item"},[s("UITag",{attrs:{"tag-name":"Tasks","tag-value":t.totalTaskList}})],1),s("li",{staticClass:"dashboard-info__item"},[s("UITag",{attrs:{"tag-name":"Tasks Done","tag-value":t.totalTaskListDone}})],1)]),s("ul",{staticClass:"dashboard-info__list"},[0!==t.totalTaskListDone?s("li",{staticClass:"dashboard-info__item"},[s("UIButton",{staticClass:"button--bg-color-error button--small",on:{"button-click":function(s){return t.removeTaskListDone()}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"trash"}})],1)]),s("span",{staticClass:"button__text"},[t._v(" tasks done ")])])],1):t._e(),s("li",{staticClass:"dashboard-info__item"},[s("UIButton",{staticClass:"button--bg-color-error button--small",on:{"button-click":function(s){return t.removeTaskList()}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"trash"}})],1)]),s("span",{staticClass:"button__text"},[t._v(" tasks ")])])],1)])])},h=[],T=function(){var t=this,s=t._self._c;return s(t.checkTag,{tag:"component",staticClass:"button",attrs:{href:t.buttonHref,to:t.buttonTo,value:t.buttonValue},on:{click:t.buttonClick}},[t._t("default")],2)},v=[],b={name:"UIButton",props:{buttonHref:{type:String,default:null},buttonTo:{type:String,default:null},buttonValue:{type:String,default:null}},computed:{checkTag(){return this.href?"a":this.value?"input":this.to?"router-link":"button"}},methods:{buttonClick(t){this.$emit("button-click",t)}}},g=b,C=(0,d.Z)(g,T,v,!1,null,"2b99f0db",null),I=C.exports,w=function(){var t=this,s=t._self._c;return s("div",{staticClass:"tag",class:{"tag--value-number":"number"==typeof t.tagValue}},[s("span",{staticClass:"tag__name"},[t._v(" "+t._s(t.tagName)+" ")]),s("span",{staticClass:"tag__value"},[t._v(" "+t._s(t.tagValue)+" ")])])},L=[],y={name:"UITag",props:{tagName:{type:String,required:!0},tagValue:{type:[String,Number]}}},S=y,x=(0,d.Z)(S,w,L,!1,null,"1bec17b8",null),N=x.exports,U={name:"DashboardInfo",components:{UIButton:I,UITag:N},computed:{...(0,i.Se)({totalTaskList:"getTotalTaskList",totalTaskListDone:"getTotalTaskListDone"})},methods:{...(0,i.nv)(["removeTaskList","removeTaskListDone"])}},B=U,D=(0,d.Z)(B,_,h,!1,null,"630b46db",null),Z=D.exports,O=function(){var t=this,s=t._self._c;return s("div",{staticClass:"dashboard-content"},[s("TaskList",{ref:"taskList"}),s("TaskNew",{on:{"add-task":function(s){return t.scrollToBottom()}}})],1)},P=[],$=function(){var t=this,s=t._self._c;return s("div",{ref:"taskListWrapper",staticClass:"task-list__wrapper"},[0!==t.getTotalTaskList?s("transition-group",{staticClass:"task-list",attrs:{name:"task-list",tag:"ul"}},t._l(t.getTaskList,(function(t){return s("li",{key:t.id,staticClass:"task-list__item"},[s("TaskPreview",{attrs:{"task-item":t}})],1)})),0):s("div",{staticClass:"task-list__message"},[s("p",[t._v("Your task list is empty")]),s("UIIcon",{attrs:{name:"emptyTasks"}})],1)],1)},A=[],F=function(){var t=this,s=t._self._c;return s("div",{staticClass:"task-preview",class:{"is-done":t.taskItem.status.done,"is-show":t.taskItem.status.show}},[s("UIButton",{staticClass:"task-preview__button-done button--icon",on:{"button-click":function(s){return t.changeTaskDone(t.taskItem)}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"check-circle"}})],1)])]),s("div",{staticClass:"task-preview__name"},[s("p",[t._v(" "+t._s(t.taskItem.name)+" ")])]),s("ul",{staticClass:"task-preview__tools"},[s("li",[s("UIModal",{class:{"is-open":t.taskItem.status.show},on:{"modal-close":function(s){return t.hideTask(t.taskItem)}},scopedSlots:t._u([{key:"modalButtonOpen",fn:function(){return[s("UIButton",{staticClass:"task-preview__button-edit button--icon",on:{"button-click":function(s){return t.showTask(t.taskItem)}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"edit"}})],1)])])]},proxy:!0},{key:"modalInner",fn:function(){return[s("TaskEdit",{attrs:{task:t.taskItem},on:{"task-edit-close":function(s){return t.hideTask(t.taskItem)}}})]},proxy:!0}])})],1),s("li",[s("UIButton",{staticClass:"task-preview__button-remove button--icon",on:{"button-click":function(s){return t.removeTask(t.taskItem.id)}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"trash"}})],1)])])],1)])],1)},M=[],j=function(){var t=this,s=t._self._c;return s("div",{staticClass:"modal"},[t._t("modalButtonOpen"),s("div",{staticClass:"modal__overlay"},[s("div",{staticClass:"modal__box"},[s("UIButton",{staticClass:"modal__button-close button--line-black button--small",on:{"button-click":function(s){return t.emitCloseModal()}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"times"}})],1)])]),t._t("modalInner")],2)])],2)},E=[],V={name:"UIModal",components:{UIButton:I},methods:{emitCloseModal(){this.$emit("modal-close")}}},q=V,H=(0,d.Z)(q,j,E,!1,null,"2814cf21",null),J=H.exports,W=function(){var t=this,s=t._self._c;return s("section",{staticClass:"task-edit"},[s("h3",{staticClass:"task-edit__title"},[t._v(" Edit task ")]),s("div",{staticClass:"task-edit__content"},[s("article",{staticClass:"task-edit__item"},[s("label",{staticClass:"task-edit__subtitle"},[t._v(" Task name ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskCopy.name,expression:"taskCopy.name"}],staticClass:"task-edit__field",attrs:{type:"text"},domProps:{value:t.taskCopy.name},on:{input:function(s){s.target.composing||t.$set(t.taskCopy,"name",s.target.value)}}})]),s("UIButton",{staticClass:"task-edit__button-save button--bg-color-3",on:{"button-click":function(s){t.editTaskName(t.task),t.emitTaskEditClose()}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"edit"}})],1)]),s("span",[t._v("Save")])])],1)])},Y=[],G={name:"TaskEdit",components:{UIButton:I},props:{task:{type:Object,required:!0}},data(){return{taskCopy:this.task}},watch:{task(t,s){t!==s&&(this.taskCopy=t)}},methods:{...(0,i.nv)(["updateTask"]),editTaskName(t){this.updateTask(t)},emitTaskEditClose(){this.$emit("task-edit-close")}}},K=G,X=(0,d.Z)(K,W,Y,!1,null,"47c4cf2b",null),z=X.exports,Q={name:"TaskPreview",components:{UIButton:I,UIModal:J,TaskEdit:z},props:{taskItem:{type:Object,required:!0}},methods:{...(0,i.nv)(["removeTask","updateTask"]),changeTaskDone(t){t.status.done=!t.status.done,this.updateTask(t)},showTask(t){t.status.show=!0,this.updateTask(t)},hideTask(t){t.status.show=!1,this.updateTask(t)}}},R=Q,tt=(0,d.Z)(R,F,M,!1,null,"3ad65c58",null),st=tt.exports,et={name:"TaskList",components:{TaskPreview:st},computed:{...(0,i.Se)(["getTaskList","getTotalTaskList"])},mounted(){this.scrollToBottom()},methods:{scrollToBottom(){this.$nextTick((()=>{const t=this.$refs.taskListWrapper;t.scrollTop=t.scrollHeight}))}}},at=et,ot=(0,d.Z)(at,$,A,!1,null,"54ca88f0",null),nt=ot.exports,it=function(){var t=this,s=t._self._c;return t.certificate?s("div",{staticClass:"task-new"},[s("div",{staticClass:"task-new__field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskNew.name,expression:"taskNew.name"}],staticClass:"task-new__input",attrs:{type:"text",placeholder:"New task",autofocus:""},domProps:{value:t.taskNew.name},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.createTaskNew()},input:function(s){s.target.composing||t.$set(t.taskNew,"name",s.target.value)}}}),s("UIButton",{staticClass:"task-new__button-add button--icon",on:{"button-click":function(s){return t.createTaskNew()}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"plus-circle"}})],1)])])],1)]):t._e()},lt=[],rt={name:"TaskNew",components:{UIButton:I},data(){return{taskNew:{name:""},certificate:!1}},computed:{...(0,i.Se)(["getTaskLast"]),createTaskId(){return"undefined"!==typeof this.getTaskLast?this.getTaskLast.id+1:1},createTaskName(){return this.taskNew.name.trim()}},mounted(){this.$root.$on("checkCertificate",(t=>{this.certificate=t}))},methods:{...(0,i.nv)(["addTask"]),cleanTaskNew(){this.taskNew.name=""},createTaskNew(){const t=this.createTaskId,s=this.createTaskName,e={id:t,name:s};""!=s&&this.addTask(e),this.cleanTaskNew(),this.emitAddTask()},emitAddTask(){this.$emit("add-task")}}},ct=rt,ut=(0,d.Z)(ct,it,lt,!1,null,"3ef030dc",null),dt=ut.exports,kt={name:"DashboardContent",components:{TaskList:nt,TaskNew:dt},methods:{scrollToBottom(){this.$refs.taskList.scrollToBottom()}}},mt=kt,pt=(0,d.Z)(mt,O,P,!1,null,null,null),ft=pt.exports,_t={name:"Dashboard",components:{DashboardInfo:Z,DashboardContent:ft},computed:{...(0,i.Se)(["getTaskList"])},watch:{getTaskList:{handler(){this.createTaskListLocalStorage()},deep:!0}},mounted(){this.checkTaskListLocalStorage()},methods:{...(0,i.nv)(["checkTaskListLocalStorage","createTaskListLocalStorage"])}},ht=_t,Tt=(0,d.Z)(ht,p,f,!1,null,"2e623dec",null),vt=Tt.exports,bt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"message",class:{"is-close":t.isClose}},[s("div",{staticClass:"message__inner"},[s("div",{staticClass:"message__content"},[t._t("default")],2),t.isClose?s("UIButton",{staticClass:"message__button button--bg-black button--icon",on:{"button-click":function(s){return t.openMessage()}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"info"}})],1)])]):s("UIButton",{staticClass:"message__button button--bg-black button--icon",on:{"button-click":function(s){return t.closeMessage()}}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"icon"},[s("FontAwesomeIcon",{attrs:{icon:"times"}})],1)])])],1)])},gt=[],Ct={name:"UIMessage",components:{UIButton:I},data(){return{isClose:!1}},methods:{openMessage(){this.isClose=!1},closeMessage(){this.isClose=!0}}},It=Ct,wt=(0,d.Z)(It,bt,gt,!1,null,"6173181d",null),Lt=wt.exports,yt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"contenedor-boton"},[s("button",{staticClass:"boton-certi",style:t.style,on:{click:function(s){return t.checkCertificado()}}},[t._v(" "+t._s(t.label)+" ")])])},St=[],xt={props:{label:{type:String,default:"Certificado"}},data(){return{style:{backgroundColor:"red"}}},methods:{checkCertificado(){fetch("/session").then((t=>t.json())).then((t=>{this.style.backgroundColor=t?"green":"red",this.$root.$emit("checkCertificate",t)})).catch((()=>{this.style.backgroundColor="red"}))}}},Nt=xt,Ut=(0,d.Z)(Nt,yt,St,!1,null,"4988ccb9",null),Bt=Ut.exports,Dt={components:{PageTitle:m,Dashboard:vt,UIMessage:Lt,ButtonCertificado:Bt},data(){return{botonLabel:"Certificado"}},computed:{...(0,i.Se)(["getPageTitle"])},methods:{}},Zt=Dt,Ot=(0,d.Z)(Zt,o,n,!1,null,null,null),Pt=Ot.exports,$t=e(3636),At=e(9417),Ft=e(7810);$t.vI.add(At.Xcf,At.$aW,At.f8k,At.KtF,At.NBC,At.YHc),a.ZP.component("FontAwesomeIcon",Ft.GN);e(560);var Mt=JSON.parse('[{"id":1,"name":"Do something awesome!","status":{"done":false,"show":false}},{"id":2,"name":"Buy toilet paper","status":{"done":false,"show":false}},{"id":3,"name":"Learn Vue","status":{"done":false,"show":false}}]');const jt={task:{list:Mt}},Et={getTaskList(t){return t.task.list},getTotalTaskList(t){return t.task.list.length},getTotalTaskListDone(t){return t.task.list.filter((t=>t.status.done)).length},getTaskLast(t){return t.task.list[t.task.list.length-1]}},Vt={addTask({commit:t},s){const e={id:s.id,name:s.name,status:{done:!1,show:!1}};t("addTask",e)},updateTask({commit:t},s){t("updateTask",s)},removeTask({commit:t},s){t("removeTask",s)},removeTaskList({commit:t}){t("removeTaskList")},removeTaskListDone({commit:t}){t("removeTaskListDone")},checkTaskListLocalStorage({commit:t}){if(localStorage.getItem("tasks"))try{t("updateTaskListLocalStorage")}catch(s){t("removeTaskListLocalStorage")}else t("createTaskListLocalStorage")},createTaskListLocalStorage({commit:t}){t("createTaskListLocalStorage")}},qt={addTask(t,s){t.task.list.push(s)},updateTask(t,s){const e=t.task.list.findIndex((t=>t.id===s.id));-1!==e&&t.task.list.splice(e,1,s)},removeTask(t,s){t.task.list=t.task.list.filter((t=>t.id!==s))},removeTaskList(t){t.task.list=[]},removeTaskListDone(t){t.task.list=t.task.list.filter((t=>!t.status.done))},createTaskListLocalStorage(t){localStorage.setItem("tasks",JSON.stringify(t.task.list))},updateTaskListLocalStorage(t){t.task.list=JSON.parse(localStorage.getItem("tasks"))},removeTaskListLocalStorage(){localStorage.removeItem("tasks")}};var Ht={state:jt,getters:Et,actions:Vt,mutations:qt};a.ZP.use(i.ZP);const Jt={pageTitle:"Vue ToDo List"},Wt={getPageTitle(t){return t.pageTitle}},Yt={},Gt={},Kt={tasks:Ht},Xt=new i.ZP.Store({state:Jt,getters:Wt,mutations:Yt,actions:Gt,modules:Kt});var zt=Xt,Qt=e(5053);(0,Qt.Z)({useCache:!0});var Rt=function(){var t=this,s=t._self._c;return s("i",{staticClass:"icon",class:t.iconId},[s("svg",{staticClass:"icon__svg"},[s("use",{staticClass:"icon__use",attrs:{"xlink:href":`#${t.iconId}`}})])])},ts=[],ss={id:"icon-empty-tasks"};const es={emptyTasks:ss.id};var as={name:"UIIcon",props:{name:{type:String,required:!0,validate:t=>Object.keys(es).includes(t)}},computed:{iconId(){return es[this.name]}}},os=as,ns=(0,d.Z)(os,Rt,ts,!1,null,"390e7ba6",null),is=ns.exports;a.ZP.component("UIIcon",is),a.ZP.config.productionTip=!1,new a.ZP({store:zt,render:t=>t(Pt)}).$mount("#app")}},s={};function e(a){var o=s[a];if(void 0!==o)return o.exports;var n=s[a]={exports:{}};return t[a].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(s,a,o,n){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],n=t[u][2];for(var l=!0,r=0;r<a.length;r++)(!1&n||i>=n)&&Object.keys(e.O).every((function(t){return e.O[t](a[r])}))?a.splice(r--,1):(l=!1,n<i&&(i=n));if(l){t.splice(u--,1);var c=o();void 0!==c&&(s=c)}}return s}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,o,n]}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var o,n,i=a[0],l=a[1],r=a[2],c=0;if(i.some((function(s){return 0!==t[s]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(r)var u=r(e)}for(s&&s(a);c<i.length;c++)n=i[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},a=self["webpackChunkvue_todolist"]=self["webpackChunkvue_todolist"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(7422)}));a=e.O(a)})();
//# sourceMappingURL=app.b53ddb81.js.map