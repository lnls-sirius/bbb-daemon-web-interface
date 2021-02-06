(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(61)},33:function(e,t,n){},57:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(11),s=n.n(l),i=(n(33),n(13)),c=n.n(i),o=n(25),d=n(5),u=n(6),m=n(8),p=n(7),h=n(9),f=n(10),b=n(14),g=n(3),v=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).toggle=function(){n.setState({modal:!n.state.modal})},n.renderContent=function(){var e,t=n.props.appStates.baseUrl,a=n.props.appFunctions.handleUpdateUrl,l=n.state.newUrl;return r.a.createElement("div",null,r.a.createElement(g.d,null,r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("label",{className:"m-2"},"Server url: ",t)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{className:"m-2",type:"text",placeholder:t,onChange:function(e){return n.setState({newUrl:e.target.value})}})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",(e={className:"m-2",type:"button"},Object(b.a)(e,"className","btn btn-primary"),Object(b.a)(e,"onClick",function(){return a(l)}),e),"Save"))))))},n.renderModal=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{onClick:n.toggle},"General Settings"),r.a.createElement(g.c,{fade:!1,isOpen:n.state.modal,toggle:n.toggle,className:n.props.className,size:"lg"},r.a.createElement(g.e,{toggle:n.toggle},"General Settings"),n.renderContent()))},n.state={newUrl:"",modal:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,this.renderModal())}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).renderSelectedWindow=function(){var e=n.props,t=e.window,a="Window Undefined";switch(e.appStates.currentWindow){case t.MONITOR:a="Monitor Interface";break;case t.SETTINGS:a="Settings"}return r.a.createElement("div",{className:"ml-2 mr-5 NavBarText"},a)},n.renderWindowButton=function(e,t){var a=n.props.appStates.currentWindow,l=n.props.appFunctions.handleWindowChange,s=e===a?"disabled":"";return r.a.createElement(g.a,{onClick:function(){return l(e)},className:"m-2 "+s}," ",t)},n.renderOptions=function(){var e=n.props,t=e.window,a=e.appStates,l=e.appFunctions;return r.a.createElement(g.f,{navbar:!0},r.a.createElement(g.g,null,n.renderWindowButton(t.MONITOR,"Monitor Interface")),r.a.createElement(g.g,null,r.a.createElement(v,{appStates:a,appFunctions:l})),r.a.createElement(g.g,null,r.a.createElement(g.h,{href:"https://github.com/lnls-sirius/bbb-daemon"},"GitHub")))},n.toggleNavbar=n.toggleNavbar.bind(Object(f.a)(Object(f.a)(n))),n.state={collapsed:!0},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.props.appStates.baseUrl;return r.a.createElement("div",null,r.a.createElement(g.i,{className:"navbar navbar-dark bg-dark"},r.a.createElement(g.j,{href:"/",className:"mr-auto"},"BeagleBone Daemon"),r.a.createElement("span",{className:"ml-2 mr-2",style:{fontSize:18,color:"white"}},e),this.renderSelectedWindow(),r.a.createElement(g.k,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(g.b,{isOpen:!this.state.collapsed,navbar:!0},this.renderOptions())))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleFiltering=function(e){var t=n.state.filter;return null===t||""===t||e.ip_address.includes(t)||e.name.includes(t)||e.details.includes(t)||e.state_string.includes(t)||e.config_time.includes(t)},n.renderTableRows=function(e){return e.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.ip_address),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.details),r.a.createElement("td",null,e.state_string),r.a.createElement("td",null,e.config_time),r.a.createElement("td",null),r.a.createElement("td",null))},Object(f.a)(Object(f.a)(n)))},n.renderTable=function(e,t){return r.a.createElement("div",null,r.a.createElement(g.l,{hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",{className:e},r.a.createElement("th",null,"IP"),r.a.createElement("th",null,"Hostname"),r.a.createElement("th",null,"Details"),r.a.createElement("th",null,"State"),r.a.createElement("th",null,"Config Time"),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.renderTableRows(t))))},n.renderOfflineWarning=function(){if(!n.props.appStates.online)return r.a.createElement("span",{className:"m-2 badge badge-danger"},"Server Offline")},n.renderTablePainel=function(e,t,a,l){return r.a.createElement("div",null,e,r.a.createElement("input",{className:"m-2",type:"text",placeholder:"Search Node",value:t,onChange:function(e){return n.setState({filter:e.target.value})}}),r.a.createElement("a",{style:{fontSize:20}},n.renderOfflineWarning(),r.a.createElement("span",{className:"m-2 badge badge-success"},"Detected Nodes ",a.length),r.a.createElement("span",{className:"m-2 badge badge-secondary"},"Displayed Nodes ",l.length)))},n.state={filter:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.appStates,t=e.filter,n=e.nodes,a=n.filter(this.handleFiltering);return r.a.createElement("div",null,r.a.createElement("div",{className:"m-2"},this.renderTablePainel("Connected Nodes",t,n,a),this.renderTable("m-2 bg-primary text-white",a)))}}]),t}(a.Component),S=n(27),O=n.n(S);function N(e){console.log(e)}n(57);var j=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).loadData=function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.state.baseUrl,null==(a=function(e){return t.setState({nodes:e.data,online:!0})})&&(a=N),null==(r=function(e){return t.setState({online:!1})})&&(r=N),O.a.get(n+"/nodes").then(a).catch(r);case 1:case"end":return e.stop()}var n,a,r},e)}));return function(t){return e.apply(this,arguments)}}(),e.handleWindowChange=function(t){e.window.VALID_NUMS.includes(t)&&e.currentWindow!==t&&e.setState({currentWindow:t})},e.handleUpdateUrl=function(t){e.setState({baseUrl:t})},e.handleDisplaySettings=function(){e.setState(function(e,t){return{showSettings:!(!0===e.showSettings)}})},e.renderWindow=function(t){switch(t){case e.window.MONITOR:return r.a.createElement(w,{appStates:e.state,appProps:e.props,appFunctions:{handleUpdateUrl:e.handleUpdateUrl,handleDisplaySettings:e.handleDisplaySettings,handleWindowChange:e.handleWindowChange}});default:return r.a.createElement("div",{className:"m2"},"Incorrect Window Value")}},e.window={VALID_NUMS:[0,1],MONITOR:0,SETTINGS:1},e.state={currentWindow:e.window.MONITOR,baseUrl:"https://10.0.38.34/bbb-daemon/api",refreshInterval:1e3,showSettings:!1,nodes:[],online:!1},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.refreshInterval;this.loadData(this),this.intervalId=setInterval(this.loadData,e,this)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.currentWindow;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(E,{appStates:this.state,appProps:this.props,appFunctions:{handleUpdateUrl:this.handleUpdateUrl,handleDisplaySettings:this.handleDisplaySettings,handleWindowChange:this.handleWindowChange},window:this.window}),r.a.createElement("div",{className:"AppBody"},this.renderWindow(e))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(59);s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.02ac9d7a.chunk.js.map