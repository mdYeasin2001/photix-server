(this["webpackJsonppixel-photography"]=this["webpackJsonppixel-photography"]||[]).push([[12],{182:function(e,t,n){"use strict";n.r(t);var c,a=n(1),s=n(99),r=n(14),i=n(96),o=n.n(i),l=n(82),d=n(88),b=n(4),u=n(3),j=n(6),O=n.n(j),m=n(129),h=n(101),f=n(108),x=n(130);function p(e){if((!c&&0!==c||e)&&h.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),c=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return c}var g=n(112),v=n(93),N=n(102),y=n(150),w=n(149),k=n(145),S=n(143),C=n(131),F=n(27),E=Object(F.a)("modal-body"),T=n(117),I=n(5),R=n(2),D=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],P=a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,a=e.contentClassName,s=e.centered,r=e.size,i=e.fullscreen,o=e.children,l=e.scrollable,d=Object(b.a)(e,D);n=Object(I.c)(n,"modal");var j="".concat(n,"-dialog"),m="string"===typeof i?"".concat(n,"-fullscreen-").concat(i):"".concat(n,"-fullscreen");return Object(R.jsx)("div",Object(u.a)(Object(u.a)({},d),{},{ref:t,className:O()(j,c,r&&"".concat(n,"-").concat(r),s&&"".concat(j,"-centered"),l&&"".concat(j,"-scrollable"),i&&m),children:Object(R.jsx)("div",{className:O()("".concat(n,"-content"),a),children:o})}))}));P.displayName="ModalDialog";var L=P,A=Object(F.a)("modal-footer"),M=n(151),H=["bsPrefix","className"],_=a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,a=Object(b.a)(e,H);return n=Object(I.c)(n,"modal-header"),Object(R.jsx)(M.a,Object(u.a)(Object(u.a)({ref:t},a),{},{className:O()(c,n)}))}));_.displayName="ModalHeader",_.defaultProps={closeLabel:"Close",closeButton:!1};var z=_,B=n(104),J=Object(B.a)("h4"),K=Object(F.a)("modal-title",{Component:J}),W=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],U={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:L};function Y(e){return Object(R.jsx)(C.a,Object(u.a)(Object(u.a)({},e),{},{timeout:null}))}function X(e){return Object(R.jsx)(C.a,Object(u.a)(Object(u.a)({},e),{},{timeout:null}))}var G=a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,s=e.style,i=e.dialogClassName,o=e.contentClassName,l=e.children,d=e.dialogAs,j=e["aria-labelledby"],C=e["aria-describedby"],F=e["aria-label"],E=e.show,D=e.animation,P=e.backdrop,L=e.keyboard,A=e.onEscapeKeyDown,M=e.onShow,H=e.onHide,_=e.container,z=e.autoFocus,B=e.enforceFocus,J=e.restoreFocus,K=e.restoreFocusOptions,U=e.onEntered,G=e.onExit,q=e.onExiting,Q=e.onEnter,V=e.onEntering,Z=e.onExited,$=e.backdropClassName,ee=e.manager,te=Object(b.a)(e,W),ne=Object(a.useState)({}),ce=Object(r.a)(ne,2),ae=ce[0],se=ce[1],re=Object(a.useState)(!1),ie=Object(r.a)(re,2),oe=ie[0],le=ie[1],de=Object(a.useRef)(!1),be=Object(a.useRef)(!1),ue=Object(a.useRef)(null),je=Object(g.a)(),Oe=Object(r.a)(je,2),me=Oe[0],he=Oe[1],fe=Object(N.a)(t,he),xe=Object(v.a)(H),pe=Object(I.d)();n=Object(I.c)(n,"modal");var ge=Object(a.useMemo)((function(){return{onHide:xe}}),[xe]);function ve(){return ee||Object(S.b)({isRTL:pe})}function Ne(e){if(h.a){var t=ve().getScrollbarWidth()>0,n=e.scrollHeight>Object(f.a)(e).documentElement.clientHeight;se({paddingRight:t&&!n?p():void 0,paddingLeft:!t&&n?p():void 0})}}var ye=Object(v.a)((function(){me&&Ne(me.dialog)}));Object(y.a)((function(){Object(x.a)(window,"resize",ye),null==ue.current||ue.current()}));var we=function(){de.current=!0},ke=function(e){de.current&&me&&e.target===me.dialog&&(be.current=!0),de.current=!1},Se=function(){le(!0),ue.current=Object(w.a)(me.dialog,(function(){le(!1)}))},Ce=function(e){"static"!==P?be.current||e.target!==e.currentTarget?be.current=!1:null==H||H():function(e){e.target===e.currentTarget&&Se()}(e)},Fe=Object(a.useCallback)((function(e){return Object(R.jsx)("div",Object(u.a)(Object(u.a)({},e),{},{className:O()("".concat(n,"-backdrop"),$,!D&&"show")}))}),[D,$,n]),Ee=Object(u.a)(Object(u.a)({},s),ae);Ee.display="block";return Object(R.jsx)(T.a.Provider,{value:ge,children:Object(R.jsx)(k.a,{show:E,ref:fe,backdrop:P,container:_,keyboard:!0,autoFocus:z,enforceFocus:B,restoreFocus:J,restoreFocusOptions:K,onEscapeKeyDown:function(e){L?null==A||A(e):(e.preventDefault(),"static"===P&&Se())},onShow:M,onHide:H,onEnter:function(e,t){e&&Ne(e),null==Q||Q(e,t)},onEntering:function(e,t){null==V||V(e,t),Object(m.a)(window,"resize",ye)},onEntered:U,onExit:function(e){null==ue.current||ue.current(),null==G||G(e)},onExiting:q,onExited:function(e){e&&(e.style.display=""),null==Z||Z(e),Object(x.a)(window,"resize",ye)},manager:ve(),transition:D?Y:void 0,backdropTransition:D?X:void 0,renderBackdrop:Fe,renderDialog:function(e){return Object(R.jsx)("div",Object(u.a)(Object(u.a)({role:"dialog"},e),{},{style:Ee,className:O()(c,n,oe&&"".concat(n,"-static"),!D&&"show"),onClick:P?Ce:void 0,onMouseUp:ke,"aria-label":F,"aria-labelledby":j,"aria-describedby":C,children:Object(R.jsx)(d,Object(u.a)(Object(u.a)({},te),{},{onMouseDown:we,className:i,contentClassName:o,children:l}))}))}})})}));G.displayName="Modal",G.defaultProps=U;var q=Object.assign(G,{Body:E,Header:z,Title:K,Footer:A,Dialog:L,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Q=n(89),V=n(98),Z=function(e){var t=e.show,n=e.setShowDeleteConfirmationModal,c=e.selectedServiceId,s=e.setSelectedServiceId,i=e.setReload,l=Object(a.useState)(!1),b=Object(r.a)(l,2),u=b[0],j=b[1];return Object(R.jsx)(q,{show:t,backdrop:"static",keyboard:!1,className:"text-center",children:Object(R.jsxs)("div",{className:"modal-body",children:[Object(R.jsx)("h5",{className:"text-dark fw-normal fs-5",children:"Your are Going to delete a service. Are you sure you want to delete?"}),Object(R.jsxs)("div",{className:"d-flex justify-content-center mt-3 gap-2",children:[Object(R.jsx)("button",{onClick:function(){s(null),n(!1)},className:"btn btn-primary",children:"No"}),Object(R.jsx)("button",{onClick:function(){return j(!0),void o.a.delete("".concat(d.b,"/").concat(c)).then((function(e){j(!1),"success"===e.data.status?(Q.b.success("Service deleted successfully"),i((new Date).getTime()),n(!1)):Q.b.error("Something went wrong!")})).catch((function(e){j(!1),Q.b.error("Oops! Error deleting service")}))},className:"btn btn-danger text-white",children:u?Object(R.jsx)(V.a,{}):"Yes"})]})]})})},$=n(97),ee=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),b=i[0],u=i[1],j=Object(a.useState)(null),O=Object(r.a)(j,2),m=O[0],h=O[1],f=Object(a.useState)(null),x=Object(r.a)(f,2),p=x[0],g=x[1],v=JSON.parse(sessionStorage.getItem("user"));return Object(a.useEffect)((function(){o.a.post(d.e,{email:null===v||void 0===v?void 0:v.email}).then((function(e){c(e.data.data.services)}))}),[v,p]),Object(R.jsxs)("section",{className:"py-5",children:[Object(R.jsx)(Z,{selectedServiceId:m,setSelectedServiceId:h,show:b,setReload:g,setShowDeleteConfirmationModal:u}),Object(R.jsx)(R.Fragment,{children:"admin"===v.role?Object(R.jsx)(l.a,{className:"my__orders__container d-flex align-items-center",children:n.length>0?Object(R.jsxs)("table",{className:"table",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{className:"bg-info",children:[Object(R.jsx)("th",{scope:"col",children:"Title"}),Object(R.jsx)("th",{scope:"col",children:"Price"}),Object(R.jsx)("th",{scope:"col",children:"Action"})]})}),Object(R.jsx)("tbody",{children:n.map((function(e){return Object(R.jsxs)("tr",{className:"bg-info",children:[Object(R.jsx)("th",{scope:"row",children:e.title}),Object(R.jsx)("td",{children:e.price}),Object(R.jsx)("td",{children:Object(R.jsx)("button",{onClick:function(){h(e._id),u(!0)},className:"btn btn-danger text-white",children:"delete"})})]},e._id)}))})]}):Object(R.jsx)($.a,{data:"No service Found!"})}):Object(R.jsx)($.a,{data:"404 Not Found!"})})]})};t.default=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(s.a,{}),Object(R.jsx)(ee,{})]})}},87:function(e,t,n){"use strict";n(1);var c=n(82),a=n(83),s=n(80),r=n(179),i=n(16),o=n(95),l=n(94),d=n(92),b=n(7),u=n(89),j=n(2);t.a=function(){var e=Object(b.g)(),t=JSON.parse(sessionStorage.getItem("user"));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{})}),Object(j.jsx)("div",{className:"bg-info text-primary border-bottom pt-3",children:Object(j.jsx)(c.a,{children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{md:6,children:Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"fw-bold",children:"Welcome to PHOTIX."}),Object(j.jsxs)("p",{className:"badge bg-danger rounded-pill text-white fs-6",children:[Object(j.jsx)(i.d,{})," +123 (456) 7879"]})]})}),Object(j.jsx)(s.a,{md:6,children:Object(j.jsx)("div",{className:"d-flex justify-content-end gap-3 fw-bold",children:null!==t&&void 0!==t&&t.email?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(r.a.Link,{onClick:function(){return e.push("/dashboard/my-orders")},children:[Object(j.jsx)(d.a,{className:"fs-4"}),"dashboard"]}),Object(j.jsxs)(r.a.Link,{onClick:function(){return sessionStorage.removeItem("user"),u.b.success("You have signed out."),void setTimeout((function(){return e.push("/")}),2e3)},children:[Object(j.jsx)(l.a,{className:"fs-4"}),"sign out"]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(r.a.Link,{onClick:function(){return e.push("/login")},children:[Object(j.jsx)(o.a,{className:"fs-4"}),"sign in"]}),Object(j.jsxs)(r.a.Link,{onClick:function(){return e.push("/register")},children:[Object(j.jsx)(o.b,{className:"fs-4"}),"sign up"]})]})})})]})})})]})}},88:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return u}));var c="/api/login",a="/api/signup",s="/api/add-service",r="/api/services",i="/api/take-order",o="/api/orders-by-each-user",l="/api/orders",d="/api/update-order-status",b="/api/manage-service",u="/api/delete-service"},97:function(e,t,n){"use strict";n(1);var c=n(80),a=n(2);t.a=function(e){var t=e.data;return Object(a.jsx)(c.a,{style:{height:"50vh"},className:"d-flex justify-content-center align-items-center text-center",children:Object(a.jsx)("h6",{className:"text-danger display-6 fw-bold fs-5",children:t})})}},98:function(e,t,n){"use strict";n(1);var c=n(85),a=n(2);t.a=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true",className:"me-2"}),Object(a.jsx)("span",{children:"Loading..."})]})}},99:function(e,t,n){"use strict";var c=n(180),a=n(82),s=n(179),r=n(7),i=n(19),o=n(87),l=n(2);t.a=function(){var e=Object(r.g)(),t=JSON.parse(sessionStorage.getItem("user"));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{}),Object(l.jsx)(c.a,{bg:"info",expand:"lg",className:"navbar-light sticky-top",children:Object(l.jsxs)(a.a,{children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsxs)(c.a.Brand,{className:"fw-bold text-primary",children:["PH",Object(l.jsx)("span",{className:"text-danger",children:"O"}),"TIX"]})}),Object(l.jsx)(c.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"text-primary border-primary"}),Object(l.jsx)(c.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(s.a,{className:"ms-auto fw-bold",children:[Object(l.jsx)(s.a.Link,{onClick:function(){return e.push("/dashboard/my-orders")},className:"text-primary ms-4",children:"My Orders"}),"admin"===(null===t||void 0===t?void 0:t.role)&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a.Link,{onClick:function(){return e.push("/dashboard/manage-orders")},className:"text-primary ms-4",children:"Manage Orders"}),Object(l.jsx)(s.a.Link,{onClick:function(){return e.push("/dashboard/manage-services")},className:"text-primary ms-4",children:"Manage Services"}),Object(l.jsx)(s.a.Link,{onClick:function(){return e.push("/dashboard/add-service")},className:"text-primary ms-4",children:"Add Service"})]})]})})]})})]})}}}]);
//# sourceMappingURL=12.c7604d0c.chunk.js.map