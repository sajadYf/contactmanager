(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=a(13),i=a(14),s=(a(40),a(2)),m=a(3),u=a(5),h=a(4),p=a(6),d=a(34),b=a(16),f=a(12),v=a.n(f);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=r.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return y({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return y({},e,{contacts:[t.payload].concat(Object(d.a)(e.contacts))});case"UPDATE_CONTACT":return y({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState((function(t){return g(t,e)}))}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e.setState({contacts:t.data})}))}},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=O.Consumer,N=(a(58),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={showContactInfo:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"OnShowClick",value:function(){this.setState({showContactInfo:!this.state.showContactInfo})}},{key:"OnDeleteClick",value:function(e,t){v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(a){return t({type:"DELETE_CONTACT",payload:e})}))}},{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.phone,l=t.email,i=this.state.showContactInfo;return r.a.createElement(C,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-2"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.OnShowClick.bind(e),className:"fa fa-sort-down"}," "),r.a.createElement("i",{className:"fa fa-times",style:{float:"right",color:"red",cursor:"pointer"},onClick:e.OnDeleteClick.bind(e,a,s)}),r.a.createElement(o.b,{to:"/contact/".concat(a)},r.a.createElement("i",{style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"},className:"fa fa-pencil"}))),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email : ",l),r.a.createElement("li",{className:"list-group-item"},"Phone : ",c)):null)}))}}]),t}(n.Component)),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-4"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map((function(e){return r.a.createElement(N,{key:e.id,contact:e})})))}))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-danger navbar-dark mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"ContactManager")),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"fa fa-home"}," ")," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/contact/add"},r.a.createElement("i",{className:"fa fa-plus"}," ")," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/about"},r.a.createElement("i",{className:"fa fa-question"}," ")," About")))))}}]),t}(n.Component),S=a(8),D=a.n(S),A=a(33),T=a.n(A),q=function(e){var t=e.label,a=e.name,n=e.type,c=e.value,l=e.placeholder,o=e.onChange,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a}," ",t),r.a.createElement("input",{type:n,className:T()("form-control form-control-lg",{"is-invalid":i}),name:a,placeholder:l,value:c,onChange:o}),i&&r.a.createElement("div",{className:"invalid-feedback"},i))};q.prototype={name:D.a.string.isRequired,label:D.a.string.isRequired,type:D.a.string.isRequired,value:D.a.string.isRequired,placeholder:D.a.string.isRequired,onChange:D.a.func.isRequired,error:D.a.string.isRequired};var x=q,P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={name:"",email:"",phone:"",errors:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e,t){t.preventDefault();var a=this.state,n=a.name,r=a.email,c=a.phone;if(""!==n)if(""!==r)if(""!==c){var l={name:n,email:r,phone:c};v.a.post("https://jsonplaceholder.typicode.com/users",l).then((function(t){return e({type:"ADD_CONTACT",payload:t.data})})),this.setState({name:"",email:"",phone:"",errors:{}}),this.props.history.push("/")}else this.setState({errors:{phone:"phone is required"}});else this.setState({errors:{email:"email is required"}});else this.setState({errors:{name:"name is required"}})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.errors,n=t.name,c=t.email,l=t.phone;return r.a.createElement(C,null,(function(t){var o=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"AddContact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,o)},r.a.createElement(x,{label:"name",type:"text",name:"name",value:n,placeholder:"Enter name ...",onChange:e.handleChange.bind(e),error:a.name}),r.a.createElement(x,{label:"email",type:"email",name:"email",value:c,placeholder:"Enter email ...",onChange:e.handleChange.bind(e),error:a.email}),r.a.createElement(x,{label:"phone",type:"text",name:"phone",value:l,placeholder:"Enter phone ...",onChange:e.handleChange.bind(e),error:a.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-danger btn-block",value:"Add Contact"}))))}))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"simple app to contact manager"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404"),"  not ",r.a.createElement("span",{className:"text-warning"},"found")),r.a.createElement("p",{className:"lead"},"this page does not exist"))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={name:"",email:"",phone:"",errors:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("https://jsonplaceholder.typicode.com/users/".concat(t)).then((function(t){var a=t.data;e.setState({name:a.name,email:a.email,phone:a.phone})}))}},{key:"handleSubmit",value:function(e,t){t.preventDefault();var a=this.state,n=a.name,r=a.email,c=a.phone;if(""!==n)if(""!==r)if(""!==c){var l={name:n,email:r,phone:c},o=this.props.match.params.id;v.a.put("https://jsonplaceholder.typicode.com/users/".concat(o),l).then((function(t){return e({type:"UPDATE_CONTACT",payload:t.data})})),this.setState({name:"",email:"",phone:"",errors:{}}),this.props.history.push("/")}else this.setState({errors:{phone:"phone is required"}});else this.setState({errors:{email:"email is required"}});else this.setState({errors:{name:"name is required"}})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.errors,n=t.name,c=t.email,l=t.phone;return r.a.createElement(C,null,(function(t){var o=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"EditContact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,o)},r.a.createElement(x,{label:"name",type:"text",name:"name",value:n,placeholder:"Enter name ...",onChange:e.handleChange.bind(e),error:a.name}),r.a.createElement(x,{label:"email",type:"email",name:"email",value:c,placeholder:"Enter email ...",onChange:e.handleChange.bind(e),error:a.email}),r.a.createElement(x,{label:"phone",type:"text",name:"phone",value:l,placeholder:"Enter phone ...",onChange:e.handleChange.bind(e),error:a.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-danger btn-block",value:"Update Contact"}))))}))}}]),t}(n.Component);var M=function(){return r.a.createElement(j,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{path:"/contact/add",component:P}),r.a.createElement(i.a,{path:"/contact/:id",component:I}),r.a.createElement(i.a,{path:"/about",component:R}),r.a.createElement(i.a,{component:_}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.0005f6bd.chunk.js.map