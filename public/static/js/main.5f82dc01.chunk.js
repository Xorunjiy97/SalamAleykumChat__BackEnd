(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),o=n.n(s),r=n(7),c=n.n(r),i=(n(22),n(5)),u=n(8),l=n(4),h=n(10),g=n(9);n(23);var d=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target,n=t.name,s=t.value,o=Object(l.a)(a).onSaveLogin;"login"===n&&o(s)},a.onSaveLogin=function(e){a.setState((function(){return{login:e}}))},a.handleClick=function(e){var t=a.props.saveCurrentUser;if(e.preventDefault(),0!==a.state.login.length){t(a.state.login);var n=a.state.login;console.log(n),function(e){try{return fetch("http://localhost:3002/logIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}catch(t){console.log("ERROR",t)}}({userName:n}).then((function(e){return a.checkLogIn(e)}))}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")},a.checkLogIn=function(e){var t=a.props.currentUserLoged;e?t():alert("\u0414\u0430\u043d\u043d\u043e\u0435 \u0438\u043c\u044f \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043e \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u0438\u043c\u044f.")},a.state={login:""},a}return Object(u.a)(n,[{key:"render",value:function(){this.props.currentUserName;var e=this.handleClick,t=this.handleInput;return Object(a.jsxs)("div",{className:"root__avtoriz-container",children:[Object(a.jsx)("div",{className:"avtoriz-container__heder-div",children:Object(a.jsx)("h1",{className:"heder-div__heder-text",children:"Salam Aleykum"})}),Object(a.jsx)("div",{className:"window__login-body",children:Object(a.jsx)("div",{className:"avtoriz-container__login-input-div",children:Object(a.jsx)("input",{name:"login",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d...",className:"login-input-div__login-input",onChange:t})})}),Object(a.jsx)("div",{className:"avtoriz-container__login-button-div",children:Object(a.jsx)("button",{id:"login-button",className:"login-button-div__login-button",onClick:e})})]})}}]),n}(o.a.PureComponent),O=Object.defineProperties({},{GET_CHAT:{value:"get_chat",writable:!1},OPEN_CHAT_PAGE:{value:"open_chat_page",writable:!1},OPEN_AUTORISATION_PAGE:{value:"open_autorisation_page",writable:!1},SAVE_CURRENT_USER_STORE:{value:"save_current_user_store",writable:!1},SAVE_CURRENT_MESSAGE_STORE:{value:"save-current_message_store",writable:!1}}),j=function(e){return e.loginPage.user},b=function(e){return e.loginPage.isLoged},_=n(3),f=Object(_.b)((function(e){return{isLoged:b(e),currentUserName:j(e)}}),(function(e){return{saveCurrentUser:function(t){return e(function(e){return{type:O.SAVE_CURRENT_USER_STORE,payload:e}}(t))},currentUserLoged:function(){return e({type:O.OPEN_CHAT_PAGE})}}}))(d),v=(n(30),function e(){var t=this;Object(i.a)(this,e),this.onOpen=function(){console.log("----WEBSOCKET CONNECTED---------")},this.onClose=function(){console.log("----WEBSOCKET DISCONNECTED---------")},this.getOnMessage=function(e){t._ws.onmessage=function(t){var n=t.data;e(JSON.parse(n))}},this.sendMessage=function(e){t._ws.send(JSON.stringify(e))},this._host=window.location.origin.replace(/^http/,"ws"),this._ws=new WebSocket(this._host),this._ws.onopen=this.onOpen.bind(this),this._ws.onclose=this.onClose.bind(this)}),p=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).printChat=function(e){a.setState({allMessages:e})},a.handleInput=function(e){var t=e.target.value;(0,Object(l.a)(a).onSaveMessage)(t)},a.onSaveMessage=function(e){a.setState((function(){return{message:e,name:e}}))},a.handleClick=function(e){var t=a.props,n=t.currentUserLoged,s=t.user,o=e.target.name;e.preventDefault(),"send"===o?(a.sendMessage(a.state.message),a.setState({name:""})):(n(),console.log(s),function(e){try{fetch("http://localhost:3002/logOut",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log("ERROR",t)}}({user:s}))},a.sendMessage=function(e){var t=a.props,n=t.sendMessage,s=t.user,o=Object(l.a)(a).onSaveMessage;if(0!==e.length){o(e);var r={user:s,message:e};n(r),a.ws.sendMessage(r)}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")},a.state={message:"",allMessages:[]},a.ws=new v,function(){try{return fetch("http://localhost:3002/getAllMessages").then((function(e){return e.json()}))}catch(e){console.log("ERROR",e)}}().then((function(e){return a.printChat(e)})),a.ws.getOnMessage(a.printChat.bind(Object(l.a)(a))),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.handleInput,t=this.handleClick;return Object(a.jsxs)("div",{className:"main-conatiner",children:[Object(a.jsxs)("div",{className:"main-container__header",children:[Object(a.jsx)("button",{name:"close",className:"main-container__log-out",children:"X",onClick:t}),Object(a.jsx)("div",{className:"header__window-message",children:Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:"ul__li",children:this.state.allMessages.map((function(e){return Object(a.jsx)("li",{children:"".concat(e.user,"    ")+"".concat(e.message)})}))})})})]}),Object(a.jsxs)("div",{className:"main-container__footer",children:[Object(a.jsx)("input",{className:" footer__input-footer",onChange:e,value:this.state.name}),Object(a.jsx)("button",{name:"send",className:" footer__button-footer",children:"Send",onClick:t})]})]})}}]),n}(o.a.PureComponent),E=function(e){return e.loginPage.isLoged},m=function(e){return e.loginPage.chat},S=function(e){return e.loginPage.user},N=Object(_.b)((function(e){return{isLoged:E(e),chat:m(e),user:S(e)}}),(function(e){return{currentUserLoged:function(){return e({type:O.OPEN_AUTORISATION_PAGE})},sendMessage:function(t){return e(function(e){return{type:O.SAVE_CURRENT_MESSAGE_STORE,payload:e}}(t))}}}))(p),C=function(e){var t=e.isLoged;return Object(a.jsx)(a.Fragment,{children:t?Object(a.jsx)(N,{}):Object(a.jsx)(f,{})})},R=o.a.memo(C),T=function(e){return e.loginPage.isLoged},w=Object(_.b)((function(e){return{isLoged:T(e)}}))(R);var A=function(){return Object(a.jsx)(w,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),o(e),r(e)}))},P=n(6),y=n(16),L=n(2),U={user:"",isLoged:!1,chat:[]},M=Object(P.b)({loginPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SAVE_CURRENT_USER_STORE:return Object(L.a)(Object(L.a)({},e),{},{user:t.payload});case O.OPEN_CHAT_PAGE:return Object(L.a)(Object(L.a)({},e),{},{isLoged:!0});case O.OPEN_AUTORISATION_PAGE:return Object(L.a)(Object(L.a)({},e),{},{isLoged:!1,user:""});case O.SAVE_CURRENT_MESSAGE_STORE:return Object(L.a)(Object(L.a)({},e),{},{chat:[].concat(Object(y.a)(e.chat),[t.payload])});default:return e}}});!function(){var e=Object(P.c)(M);window.store=e,c.a.render(Object(a.jsx)(_.a,{store:e,children:Object(a.jsx)(A,{})}),document.getElementById("root"))}(),x()}},[[31,1,2]]]);
//# sourceMappingURL=main.5f82dc01.chunk.js.map