(this.webpackJsonptodo_react=this.webpackJsonptodo_react||[]).push([[0],{30:function(e,t,o){e.exports=o(58)},35:function(e,t,o){},58:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(28),c=o.n(r),l=o(7),i=o(8),d=o(10),u=o(9),s=(o(35),function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).getStyle=function(e){return"true"===e?{textDecoration:"line-through"}:{textDecoration:"none"}},e}return Object(i.a)(o,[{key:"render",value:function(){var e=this;return this.props.todoForItem.map((function(t){return a.a.createElement("div",{key:t._id,className:"eachTodo",style:e.getStyle(t.isdone)},a.a.createElement("input",{type:"checkbox",checked:"true"===t.isdone,onChange:e.props.markComplete.bind(e,t._id)}),"  ",t.name,a.a.createElement("button",{onClick:e.props.delTodo.bind(e,t._id),style:m},"X"))}))}}]),o}(n.Component)),m={background:"#ff0000",color:"#fff",border:"none",paddingLeft:"5px",paddingRight:"5px",borderRadius:"50%",cursor:"pointer",float:"right"},p=s,h=o(11),f=o.n(h);var v=function(){return a.a.createElement("div",{className:"loader center"},a.a.createElement("i",{className:"fa fa-cog fa-spin"}))},b=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:""},e.onChangeName=function(t){return e.setState({name:t.target.value})},e.onSubmitTodo=function(t){var o={name:e.state.name,isdone:"false"};f.a.post("https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/addTodo",o).then((function(e){alert(e)}))},e}return Object(i.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmitTodo,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"name",placeholder:"Enter Todo",style:{flex:"10"},value:this.state.name,onChange:this.onChangeName}),a.a.createElement("input",{type:"submit",value:"Add Todo",className:"btn",style:{flex:"1"}}))}}]),o}(n.Component),g=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={nodoTodoList:[],loading:!0},e.viewTodoList=function(){f.a.get("https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/viewTodos").then((function(t){e.setState({nodoTodoList:t.data}),e.setState({loading:!1})}))},e.updateTodo=function(t,o){f.a.patch("https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/updateTodo/".concat(t),o).then((function(t){e.viewTodoList()}))},e.markComplete=function(t){for(var o in e.state.nodoTodoList){var n=e.state.nodoTodoList[o]._id;if(n===t){var a={};a="true"===e.state.nodoTodoList[o].isdone?{isdone:"false"}:{isdone:"true"},e.updateTodo(n,a)}}},e.updateTodo=function(t,o){e.setState({loading:!0}),f.a.patch("https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/updateTodo/".concat(t),o).then((function(t){e.viewTodoList()}))},e.delTodo=function(t){e.setState({loading:!0}),f.a.delete("https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/deleteTodo/".concat(t)).then((function(t){e.viewTodoList()}))},e}return Object(i.a)(o,[{key:"componentDidMount",value:function(){this.viewTodoList()}},{key:"render",value:function(){return this.state.loading?a.a.createElement(v,null):a.a.createElement("div",null,a.a.createElement(b,null),a.a.createElement(p,{todoForItem:this.state.nodoTodoList,markComplete:this.markComplete,delTodo:this.delTodo}))}}]),o}(n.Component),y=o(14);var E={background:"#007bff",textAlign:"center",padding:"10px",color:"#fff"},T={color:"#fff",TextDecoder:"none"},k=function(){return a.a.createElement("header",{style:E},a.a.createElement("h1",null,"AMR TODO APP"),a.a.createElement(y.b,{style:T,to:"/"},"Home"),a.a.createElement("span",null," | "),a.a.createElement(y.b,{style:T,to:"/about"},"about"))};var w=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("h1",null,"About : "),a.a.createElement("p",null," It's a Todo list Application. (V 1.0.0)")))},O=o(1),j=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return a.a.createElement(y.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(k,null),a.a.createElement(O.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null))}}),a.a.createElement(O.a,{path:"/about",component:w}))))}}]),o}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.01c05a03.chunk.js.map