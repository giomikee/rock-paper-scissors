(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{46:function(e,a,t){e.exports=t(58)},52:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(20),l=t.n(o),c=t(38),s=t.n(c),i=t(65),u=(t(51),t(52),t(33)),m=t(6),d=t(60),h=t(61);function v(){return n.a.createElement(d.a,null,n.a.createElement(h.a,null,n.a.createElement("h1",null,"Rock Paper Scissors")))}var E=t(16),p=t(17),f=t(19),y=t(18),g=t(67),w=t(62),M=function(e){Object(f.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(E.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).selectGameMode=function(a){e.props.history.push("/play/".concat(a||"solo"))},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement(h.a,{sm:"12"},n.a.createElement(g.a,{bg:"light"},n.a.createElement(g.a.Header,null,"Choose a Game Mode"),n.a.createElement(g.a.Body,null,n.a.createElement(w.a,{variant:"primary",onClick:function(){return e.selectGameMode()},block:!0},"Solo"),n.a.createElement(w.a,{variant:"info",block:!0,disabled:!0,onClick:function(){return e.selectGameMode(Date.now())}},"With a Friend ",n.a.createElement("i",null,"(Work in Progress)"))))))}}]),t}(r.Component),k=t(29),b=t(63),P="/rock-paper-scissors",S=["rock","paper","scissors"],j=function(e,a){var t=S[0],r=S[1],n=S[2];return e===r&&a===t||e===t&&a===n||e===n&&a===r},O=function(e,a){return e===a},G=function(e){Object(f.a)(t,e);var a=Object(y.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"renderMoves",value:function(){var e=this;return n.a.createElement(b.a,null,S.map((function(a){return n.a.createElement(w.a,{key:a,onClick:function(){return e.props.pickPlayerMove(a)}},n.a.createElement("img",{src:"".concat(P,"/images/").concat(a,".png"),alt:a,height:"20",width:"20"}))})))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.move;return n.a.createElement(g.a,{bg:"secondary",border:"Player 1"===a?"primary":"danger"},n.a.createElement(g.a.Header,null,a),n.a.createElement(g.a.Body,null,n.a.createElement(g.a.Title,null,t?"Your Move":"Pick a move"),t?n.a.createElement("img",{src:"".concat(P,"/images/").concat(t,".png"),alt:t,height:"80",width:"80"}):this.renderMoves()))}}]),t}(r.Component);var B=function(e){var a=e.move||"hidden";return n.a.createElement(g.a,{bg:"secondary",border:"danger"},n.a.createElement(g.a.Header,null,"Player 2"),n.a.createElement(g.a.Body,null,n.a.createElement("img",{src:"".concat(P,"/images/").concat(a,".png"),alt:a,height:"80",width:"80"})))},H=t(66);var L=function(e){var a=e.showLoader,t=e.toggleLoader,r=e.pickBotMove;return n.a.createElement(H.a,{show:a,onShow:function(){return setTimeout(t,2e3)},onExit:r,onHide:function(){},centered:!0},n.a.createElement(H.a.Body,null,"Rock",n.a.createElement("br",null),"Paper",n.a.createElement("br",null),"Scissors",n.a.createElement("br",null),"Shoot!"))};var C=function(e){var a=e.showEndGameModal;return n.a.createElement(H.a,{show:a,centered:!0,onHide:function(){}},n.a.createElement(H.a.Header,null,n.a.createElement("h3",null,"Thanks for playing!")),n.a.createElement(H.a.Body,null,n.a.createElement("a",{href:"https://github.com/giomikee?tab=repositories",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",null,"Click here to check out more projects"))))},A=function(e){Object(f.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(E.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={showEndGameModal:!1},e.renderHeader=function(){var a=e.props,t=a.isADraw,r=a.winner;return t?"It's a Draw!":"firstPlayer"===r?"You Won!":"You Lost"},e.showEndGameModal=function(){return e.setState({showEndGameModal:!0})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.show,r=a.firstPlayerScore,o=a.secondPlayerScore,l=a.resetMatch,c=a.endGame;return n.a.createElement(n.a.Fragment,null,n.a.createElement(H.a,{show:t,onHide:function(){},centered:!0},n.a.createElement(H.a.Header,null,n.a.createElement("h3",null,this.renderHeader())),n.a.createElement(H.a.Body,null,n.a.createElement("h3",null,"Scores"),"Player 1 - ",r," | Player 2 -"," ",o,n.a.createElement("br",null),n.a.createElement(b.a,null,n.a.createElement(w.a,{onClick:l,variant:"success"},"Play again"),n.a.createElement(w.a,{variant:"secondary",onClick:function(){return c(e.showEndGameModal)}},"End game")))),n.a.createElement(C,{showEndGameModal:this.state.showEndGameModal}))}}]),t}(r.Component),D=function(e){Object(f.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(E.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={firstPlayer:{move:null,score:0},secondPlayer:{isHuman:"solo"!==e.props.match.params.gameId,move:null,score:0},showLoader:!1,resultsModal:{show:!1,isADraw:!1,winner:null}},e.pickPlayerMove=function(a,t){var r=e.state[a];r.move=t,e.setState(Object(k.a)({},a,r),e.toggleLoader)},e.toggleLoader=function(){var a=e.state.showLoader;e.setState({showLoader:!a})},e.pickBotMove=function(){var a=e.state.secondPlayer,t=Math.floor(Math.random()*S.length);a.move=S[t],e.setState({secondPlayer:a},e.checkResults)},e.showResultsModal=function(){var a=e.state.resultsModal;a.show=!0,setTimeout((function(){return e.setState({resultsModal:a})}),1e3)},e.checkResults=function(){var a=e.state,t=a.firstPlayer,r=a.secondPlayer,n=a.resultsModal;if(O(t.move,r.move))n.isADraw=!0,e.setState({resultsModal:n},e.showResultsModal);else{var o,l="".concat(j(t.move,r.move)?"first":"second","Player"),c=e.state[l];c.score++,n.winner=l,e.setState((o={},Object(k.a)(o,l,c),Object(k.a)(o,"resultsModal",n),o),e.showResultsModal)}},e.resetMatch=function(){var a=e.state,t=a.firstPlayer,r=a.secondPlayer,n=a.resultsModal;t.move=null,r.move=null,n.show=!1,n.isADraw=!1,e.setState({firstPlayer:t,secondPlayer:r,resultsModal:n})},e.endGame=function(a){var t=e.state.resultsModal;t.show=!1,e.setState({resultsModal:t},a)},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.firstPlayer,r=a.secondPlayer,o=a.showLoader,l=a.resultsModal;return n.a.createElement(d.a,null,n.a.createElement(h.a,{sm:"5"},n.a.createElement(G,{name:"Player 1",move:t.move,pickPlayerMove:function(a){return e.pickPlayerMove("firstPlayer",a)}})),n.a.createElement(h.a,{sm:"2"},n.a.createElement("img",{src:"".concat(P,"/images/versus.png"),alt:"versus",height:"130",width:"175"})),n.a.createElement(h.a,{sm:"5"},r.isHuman?n.a.createElement(G,{name:"Player 2",move:r.move,pickPlayerMove:function(a){return e.pickPlayerMove("secondPlayer",a)}}):n.a.createElement(B,{move:r.move})),n.a.createElement(L,{showLoader:o,toggleLoader:this.toggleLoader,pickBotMove:this.pickBotMove}),n.a.createElement(A,{show:l.show,isADraw:l.isADraw,winner:l.winner,firstPlayerScore:t.score,secondPlayerScore:r.score,resetMatch:this.resetMatch,endGame:this.endGame}))}}]),t}(r.Component),R=t(64);function T(){return n.a.createElement(d.a,null,n.a.createElement(h.a,{sm:"12"},n.a.createElement(R.a,{variant:"danger"},n.a.createElement(R.a.Heading,null,"Page Not Found"))))}function W(){return n.a.createElement(u.a,{basename:"/rock-paper-scissors"},n.a.createElement(u.b,{to:"/",className:"header-link"},n.a.createElement(v,null)),n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:M}),n.a.createElement(m.a,{path:"/play/:gameId",component:D}),n.a.createElement(m.a,{component:T})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.load({google:{families:["VT323","monospace","Bungee Shade","cursive"]}}),l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null,n.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.fc97199e.chunk.js.map