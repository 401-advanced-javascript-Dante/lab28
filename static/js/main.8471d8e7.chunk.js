(this.webpackJsonplab28=this.webpackJsonplab28||[]).push([[0],{24:function(e,t,n){e.exports=n(37)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(5),l=n(7),c=n(6),o=n(8),u=n(0),i=n.n(u),s=n(20),p=n.n(s),m=n(12),h=n(10),b=function(){return i.a.createElement("header",null,i.a.createElement("h1",null,"RESTy"),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(m.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/history"},"History")))))},E=function(){return i.a.createElement("footer",null,i.a.createElement("p",null,"DanTe !"))},d=n(17),f=n.n(d),j=n(23),O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).changeHandler=function(e){var t=e.target.value;n.setState({api:t})},n.optionHandler=function(e){var t=e.target.value;n.setState({option:t})},n.handleSubmit=function(){var e=Object(j.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"get"!==n.state.option){e.next=9;break}return e.next=4,fetch(n.state.api);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,n.props.update(r,n.state.api);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={api:"",option:"get"},console.log("Holaa",n.props),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Selected REST: ",this.state.option),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"address",onChange:this.changeHandler,placeholder:"type api address"}),i.a.createElement("button",{type:"Submit"},"Go")),i.a.createElement("div",null,i.a.createElement("button",{value:"get",id:"get",onClick:this.optionHandler},"Get"),i.a.createElement("button",{value:"post",id:"post",onClick:this.optionHandler},"Post"),i.a.createElement("button",{value:"put",onClick:this.optionHandler},"Put"),i.a.createElement("button",{value:"delete",onClick:this.optionHandler},"Delete")))}}]),t}(i.a.Component),v=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).makeItPretty=function(e){return JSON.stringify(e,null,"\t")},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",null,this.makeItPretty(this.props.results)," "))}}]),t}(i.a.Component),y=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,Object.keys(this.props.data).map((function(e,t){return i.a.createElement("li",{key:t}," ",e," ")}))))}}]),t}(i.a.Component),g=(n(35),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleUpdate=function(e,t){var a=n.state.response;a[t]=e,n.setState({response:a}),console.log("i Hope!",n.state.response),console.log("keys",Object.keys(n.state.response))},n.state={response:{}},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement(b,null),i.a.createElement(h.a,{exact:!0,path:"/"},i.a.createElement(O,{update:this.handleUpdate}),i.a.createElement(v,{results:this.state.response})),i.a.createElement(h.a,{exact:!0,path:"/history"},i.a.createElement(y,{data:this.state.response})),i.a.createElement(E,null)))}}]),t}(i.a.Component)),k=(n(36),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(g,null))}}]),t}(i.a.Component));p.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8471d8e7.chunk.js.map