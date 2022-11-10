(function(){"use strict";var e={632:function(e,o,a){var n=a(963),r=a(252);const t={id:"app",class:"container"},s=(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-12"},[(0,r._)("h1",null,"Personas")])],-1),i={class:"row"},l={class:"col-md-12"};function d(e,o,a,n,d,c){const u=(0,r.up)("formulario-persona"),p=(0,r.up)("tabla-personas");return(0,r.wg)(),(0,r.iD)("div",t,[s,(0,r._)("div",i,[(0,r._)("div",l,[(0,r.Wm)(u,{onAddPersona:c.agregarPersona},null,8,["onAddPersona"]),(0,r.Wm)(p,{personas:d.personas,onDeletePersona:c.eliminarPersona,onActualizarPersona:c.actualizarPersona},null,8,["personas","onDeletePersona","onActualizarPersona"])])])])}var c=a(577);const u={id:"tabla-personas"},p={key:0,class:"alert alert-info",role:"alert"},m={class:"table"},v=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Nombre"),(0,r._)("th",null,"Apellido"),(0,r._)("th",null,"Email"),(0,r._)("th",null,"Acciones")])],-1),h={key:0},f=["onUpdate:modelValue"],b={key:1},g={key:2},_=["onUpdate:modelValue"],y={key:3},w={key:4},k=["onUpdate:modelValue"],D={key:5},P={key:6},E=["onClick"],C=["onClick"],O={key:7},I=["onClick"],j=["onClick"];function A(e,o,a,t,s,i){return(0,r.wg)(),(0,r.iD)("div",u,[a.personas.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",p," No se han agregado personas ")),(0,r._)("table",m,[v,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.personas,(o=>((0,r.wg)(),(0,r.iD)("tr",{key:o.id},[s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",h,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.nombre=e},null,8,f),[[n.nr,o.nombre]])])):((0,r.wg)(),(0,r.iD)("td",b,(0,c.zw)(o.nombre),1)),s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",g,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.apellido=e},null,8,_),[[n.nr,o.apellido]])])):((0,r.wg)(),(0,r.iD)("td",y,(0,c.zw)(o.apellido),1)),s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",w,[(0,r.wy)((0,r._)("input",{type:"email",class:"form-control","onUpdate:modelValue":e=>o.email=e},null,8,k),[[n.nr,o.email]])])):((0,r.wg)(),(0,r.iD)("td",D,(0,c.zw)(o.email),1)),s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",P,[(0,r._)("button",{class:"btn btn-success",onClick:e=>i.guardarPersona(o)},"💾 Guardar",8,E),(0,r._)("button",{class:"btn btn-secondary ml-2",onClick:e=>i.cancelarEdicion(o)},"❌ Cancelar",8,C)])):((0,r.wg)(),(0,r.iD)("td",O,[(0,r._)("button",{class:"btn btn-info",onClick:e=>i.editarPersona(o)},"✏️ Editar",8,I),(0,r._)("button",{class:"btn btn-danger ml-2",onClick:a=>e.$emit("delete-persona",o.id)},"🗑️ Eliminar",8,j)]))])))),128))])])])}var U={name:"tabla-personas",props:{personas:Array},data(){return{editando:null}},methods:{editarPersona(e){this.personaEditada=Object.assign({},e),this.editando=e.id},guardarPersona(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion(e){Object.assign(e,this.personaEditada),this.editando=null}}},V=a(744);const x=(0,V.Z)(U,[["render",A]]);var z=x;const F=e=>((0,r.dD)("data-v-faf7d7d6"),e=e(),(0,r.Cn)(),e),T={id:"formulario-persona"},N={class:"container"},$={class:"row"},q={class:"col-md-4"},Z={class:"form-group"},K=F((()=>(0,r._)("label",null,"Nombre",-1))),L={class:"col-md-4"},W={class:"form-group"},G=F((()=>(0,r._)("label",null,"Apellido",-1))),H={class:"col-md-4"},J={class:"form-group"},M=F((()=>(0,r._)("label",null,"Email",-1))),S=F((()=>(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-4"},[(0,r._)("div",{class:"form-group"},[(0,r._)("button",{class:"btn btn-primary"},"Añadir persona")])])],-1))),Y={class:"container"},B={class:"row"},Q={class:"col-md-12"},R={key:0,class:"alert alert-danger",role:"alert"},X={key:1,class:"alert alert-success",role:"alert"};function ee(e,o,a,t,s,i){return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("form",{onSubmit:o[7]||(o[7]=(0,n.iM)(((...e)=>i.enviarFormulario&&i.enviarFormulario(...e)),["prevent"]))},[(0,r._)("div",N,[(0,r._)("div",$,[(0,r._)("div",q,[(0,r._)("div",Z,[K,(0,r.wy)((0,r._)("input",{ref:"nombre","onUpdate:modelValue":o[0]||(o[0]=e=>s.persona.nombre=e),type:"text",class:(0,c.C_)(["form-control",{"is-invalid":s.procesando&&i.nombreInvalido}]),onFocus:o[1]||(o[1]=(...e)=>i.resetEstado&&i.resetEstado(...e)),onKeypress:o[2]||(o[2]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[n.nr,s.persona.nombre]])])]),(0,r._)("div",L,[(0,r._)("div",W,[G,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>s.persona.apellido=e),type:"text",class:(0,c.C_)(["form-control",{"is-invalid":s.procesando&&i.apellidoInvalido}]),onFocus:o[4]||(o[4]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[n.nr,s.persona.apellido]])])]),(0,r._)("div",H,[(0,r._)("div",J,[M,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[5]||(o[5]=e=>s.persona.email=e),type:"email",class:(0,c.C_)([{"is-invalid":s.procesando&&i.emailInvalido},"form-control"]),onFocus:o[6]||(o[6]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[n.nr,s.persona.email]])])])]),S]),(0,r._)("div",Y,[(0,r._)("div",B,[(0,r._)("div",Q,[s.error&&s.procesando?((0,r.wg)(),(0,r.iD)("div",R," Debes rellenar todos los campos! ")):(0,r.kq)("",!0),s.correcto?((0,r.wg)(),(0,r.iD)("div",X," La persona ha sido agregada correctamente! ")):(0,r.kq)("",!0)])])])],32)])}var oe={name:"formulario-persona",data(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",apellido:"",email:""}}},methods:{enviarFormulario(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado(){this.correcto=!1,this.error=!1}},computed:{nombreInvalido(){return this.persona.nombre.length<1},apellidoInvalido(){return this.persona.apellido.length<1},emailInvalido(){return this.persona.email.length<1}}};const ae=(0,V.Z)(oe,[["render",ee],["__scopeId","data-v-faf7d7d6"]]);var ne=ae,re={name:"app",components:{TablaPersonas:z,FormularioPersona:ne},data(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"}]}},methods:{agregarPersona(e){let o=0;this.personas.length>0&&(o=this.personas[this.personas.length-1].id+1),this.personas=[...this.personas,{...e,id:o}]},eliminarPersona(e){this.personas=this.personas.filter((o=>o.id!==e))},actualizarPersona(e,o){this.personas=this.personas.map((a=>a.id===e?o:a))}}};const te=(0,V.Z)(re,[["render",d]]);var se=te;(0,n.ri)(se).mount("#app")}},o={};function a(n){var r=o[n];if(void 0!==r)return r.exports;var t=o[n]={exports:{}};return e[n](t,t.exports,a),t.exports}a.m=e,function(){var e=[];a.O=function(o,n,r,t){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],t=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&t||s>=t)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,t<s&&(s=t));if(i){e.splice(c--,1);var d=r();void 0!==d&&(o=d)}}return o}t=t||0;for(var c=e.length;c>0&&e[c-1][2]>t;c--)e[c]=e[c-1];e[c]=[n,r,t]}}(),function(){a.d=function(e,o){for(var n in o)a.o(o,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};a.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,t,s=n[0],i=n[1],l=n[2],d=0;if(s.some((function(o){return 0!==e[o]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(o&&o(n);d<s.length;d++)t=s[d],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(c)},n=self["webpackChunktutorial_vue"]=self["webpackChunktutorial_vue"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(632)}));n=a.O(n)})();
//# sourceMappingURL=app.4dd03dd2.js.map