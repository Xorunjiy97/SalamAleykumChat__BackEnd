(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=(n(22),n(5)),u=n(8),l=n(4),d=n(10),h=n(9);n(23);var g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleInput=function(e){var t=e.target,n=t.name,a=t.value,c=Object(l.a)(s).onSaveLogin;"login"===n&&c(a)},s.onSaveLogin=function(e){s.setState((function(){return{login:e}}))},s.handleClick=function(e){var t=s.props.saveCurrentUser;if(e.preventDefault(),0!==s.state.login.length){t(s.state.login);var n=s.state.login;console.log(n),function(e){try{return fetch("http://localhost:3002/logIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}catch(t){console.log("ERROR",t)}}({userName:n}).then((function(e){return s.checkLogIn(e)}))}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")},s.checkLogIn=function(e){var t=s.props.currentUserLoged;e?t():alert("\u0414\u0430\u043d\u043d\u043e\u0435 \u0438\u043c\u044f \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043e \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u0438\u043c\u044f.")},s.state={login:""},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this.handleClick,t=this.handleInput;return Object(s.jsxs)("div",{className:"root__avtoriz-container",children:[Object(s.jsx)("div",{className:" root__line",children:Object(s.jsx)("div",{})}),Object(s.jsxs)("div",{className:"root__container-header",children:[Object(s.jsx)("div",{className:"avtoriz-container__header-div",children:Object(s.jsx)("h1",{children:"Salam Aleykum",className:"header-div__header-text"})}),Object(s.jsx)("div",{className:"window__login-body",children:Object(s.jsx)("div",{className:"avtoriz-container__login-input-div",children:Object(s.jsx)("input",{name:"login",onChange:t,className:"login-input-div__login-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d..."})})}),Object(s.jsx)("div",{className:"avtoriz-container__login-button-div",children:Object(s.jsx)("button",{id:"login-button",onClick:e,children:"Next",className:"login-button-div__login-button"})})]}),Object(s.jsx)("div",{className:"avtoriz-container__container-btn",children:Object(s.jsx)("button",{className:"container-btn__btn-circle"})})]})}}]),n}(c.a.PureComponent),j=Object.defineProperties({},{GET_CHAT:{value:"get_chat",writable:!1},OPEN_CHAT_PAGE:{value:"open_chat_page",writable:!1},OPEN_AUTORISATION_PAGE:{value:"open_autorisation_page",writable:!1},SAVE_CURRENT_USER_STORE:{value:"save_current_user_store",writable:!1},SAVE_CURRENT_MESSAGE_STORE:{value:"save-current_message_store",writable:!1}}),b=function(e){return e.loginPage.user},_=function(e){return e.loginPage.isLoged},O=n(3),v=Object(O.b)((function(e){return{isLoged:_(e),currentUserName:b(e)}}),(function(e){return{saveCurrentUser:function(t){return e(function(e){return{type:j.SAVE_CURRENT_USER_STORE,payload:e}}(t))},currentUserLoged:function(){return e({type:j.OPEN_CHAT_PAGE})}}}))(g),p=(n(30),function e(){var t=this;Object(o.a)(this,e),this.onOpen=function(){console.log("----WEBSOCKET CONNECTED---------")},this.onClose=function(){console.log("----WEBSOCKET DISCONNECTED---------")},this.getOnMessage=function(e){t._ws.onmessage=function(t){var n=t.data;e(JSON.parse(n))}},this.sendMessage=function(e){t._ws.send(JSON.stringify(e))},this._host=window.location.origin.replace(/^http/,"ws"),this._ws=new WebSocket(this._host),this._ws.onopen=this.onOpen.bind(this),this._ws.onclose=this.onClose.bind(this)}),f=function(e){return Object(s.jsxs)("li",{className:e.user!==e.currentUser?"chat-window__message":"chat-window__message current-user-message",children:[Object(s.jsx)("span",{className:"message__user-name",children:e.user}),Object(s.jsx)("span",{className:"message__user-message",children:e.text})]})},m=c.a.memo(f),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).printChat=function(e){s.setState({allMessages:e})},s.handleInput=function(e){var t=e.target.value;(0,Object(l.a)(s).onSaveMessage)(t)},s.onSaveMessage=function(e){s.setState((function(){return{message:e,input:e}}))},s.handleClick=function(e){var t=s.props,n=t.currentUserLoged,a=t.user,c=e.target.name;e.preventDefault(),"send"===c?(s.sendMessage(s.state.message),s.setState({input:""})):(n(),console.log(a),function(e){try{fetch("http://localhost:3002/logOut",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log("ERROR",t)}}({user:a}))},s.sendMessage=function(e){var t=s.props,n=t.sendMessage,a=t.user,c=Object(l.a)(s).onSaveMessage;if(0!==e.length){c(e);var r={user:a,message:e};n(r),s.ws.sendMessage(r)}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")},s.state={message:"",allMessages:[]},s.ws=new p,function(){try{return fetch("http://localhost:3002/getAllMessages").then((function(e){return e.json()}))}catch(e){console.log("ERROR",e)}}().then((function(e){return s.printChat(e)})),s.ws.getOnMessage(s.printChat.bind(Object(l.a)(s))),s}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.handleInput,n=this.handleClick;return Object(s.jsxs)("div",{className:"main-conatiner",children:[Object(s.jsx)("div",{className:"container__head",children:Object(s.jsx)("div",{})}),Object(s.jsxs)("div",{className:"container__message-input-btn",children:[Object(s.jsx)("div",{className:"main-container__header",children:Object(s.jsx)("div",{className:"header__window-message",children:Object(s.jsx)("div",{children:Object(s.jsx)("ul",{className:"window-message__list",children:this.props.chat.map((function(t,n){return Object(s.jsx)(m,{user:t.user,text:t.message,currentUser:e.props.user},n)}))})})})}),Object(s.jsxs)("div",{className:"main-container__container-input-btn",children:[Object(s.jsx)("input",{onChange:t,className:" container-input-btn__input",value:this.state.input}),Object(s.jsx)("button",{name:"send",onClick:n,children:"Send",className:" container-input-btn__button"})]})]}),Object(s.jsx)("div",{className:"main-container__container-log-out",children:Object(s.jsx)("button",{name:"close",onClick:n,children:"X",className:"container-log-out__btn"})})]})}}]),n}(c.a.PureComponent),N=function(e){return e.loginPage.isLoged},S=function(e){return e.loginPage.chat},x=function(e){return e.loginPage.user},C=Object(O.b)((function(e){return{isLoged:N(e),chat:S(e),user:x(e)}}),(function(e){return{currentUserLoged:function(){return e({type:j.OPEN_AUTORISATION_PAGE})},sendMessage:function(t){return e(function(e){return{type:j.SAVE_CURRENT_MESSAGE_STORE,payload:e}}(t))}}}))(E),w=function(e){var t=e.isLoged;return Object(s.jsx)(s.Fragment,{children:t?Object(s.jsx)(C,{}):Object(s.jsx)(v,{})})},R=c.a.memo(w),T=function(e){return e.loginPage.isLoged},A=Object(O.b)((function(e){return{isLoged:T(e)}}))(R);var P=function(){return Object(s.jsx)(A,{})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))},L=n(6),U=n(16),M=n(2),I={user:"",isLoged:!1,chat:[]},k=Object(L.b)({loginPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SAVE_CURRENT_USER_STORE:return Object(M.a)(Object(M.a)({},e),{},{user:t.payload});case j.OPEN_CHAT_PAGE:return Object(M.a)(Object(M.a)({},e),{},{isLoged:!0});case j.OPEN_AUTORISATION_PAGE:return Object(M.a)(Object(M.a)({},e),{},{isLoged:!1,user:""});case j.SAVE_CURRENT_MESSAGE_STORE:return Object(M.a)(Object(M.a)({},e),{},{chat:[].concat(Object(U.a)(e.chat),[t.payload])});default:return e}}});!function(){var e=Object(L.c)(k);window.store=e,i.a.render(Object(s.jsx)(O.a,{store:e,children:Object(s.jsx)(P,{})}),document.getElementById("root"))}(),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.c3549641.chunk.js.map