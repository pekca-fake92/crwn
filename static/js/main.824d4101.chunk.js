(this.webpackJsonpcrwn=this.webpackJsonpcrwn||[]).push([[0],{54:function(e,t,n){e.exports=n(87)},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),i=n.n(c),l=n(15),o=n(7),u=n(46),s=n(12),m=n(29),p=(n(63),n(53)),d=n(2),f=n.n(d),b=n(4),E=n(10),h=n(24),v=n(28),O=n.n(v);n(65),n(68);O.a.initializeApp({apiKey:"AIzaSyAbd--7AflrLARMKauxZCIsjBsjTarpllQ",authDomain:"test-project-001-df1cb.firebaseapp.com",databaseURL:"https://test-project-001-df1cb.firebaseio.com",projectId:"test-project-001-df1cb",storageBucket:"test-project-001-df1cb.appspot.com",messagingSenderId:"1005289704185",appId:"1:1005289704185:web:aea3eb64286ef89e8b7028",measurementId:"G-T520J458ZD"});var g=function(){var e=Object(h.a)(f.a.mark((function e(t,n){var a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=y.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(E.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},j=O.a.auth(),y=O.a.firestore(),C=new O.a.auth.GoogleAuthProvider;C.setCustomParameters({prompt:"select_account"});O.a;var I={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},_=function(e){return{type:I.FETCH_COLLECTIONS_SUCCESS,payload:e}},N=f.a.mark(T),x=f.a.mark(k),w=f.a.mark(U);function T(){var e,t,n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=y.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(b.b)(S,t);case 7:return n=a.sent,a.next=10,Object(b.c)(_(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(b.c)((r=a.t0.message,{type:I.FETCH_COLLECTIONS_FAILURE,payload:r}));case 16:case"end":return a.stop()}var r}),N,null,[[0,12]])}function k(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(I.FETCH_COLLECTIONS_START,T);case 2:case"end":return e.stop()}}),x)}function U(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(k)]);case 2:case"end":return e.stop()}}),w)}var R={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},A=function(e){return{type:R.SIGN_IN_FAILURE,payload:e}},L=function(e){var t=e.user,n=e.additionalData;return{type:R.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},G=f.a.mark(J),P=f.a.mark(Z),F=f.a.mark(X),M=f.a.mark($),H=f.a.mark(ee),D=f.a.mark(te),q=f.a.mark(ne),z=f.a.mark(ae),V=f.a.mark(re),K=f.a.mark(ce),W=f.a.mark(ie),B=f.a.mark(le),Y=f.a.mark(oe),Q=f.a.mark(ue);function J(e,t){var n,a;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(b.b)(g,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(b.c)((c=Object(E.a)({id:a.id},a.data()),{type:R.SIGN_IN_SUCCESS,payload:c}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(b.c)(A(r.t0));case 15:case"end":return r.stop()}var c}),G,null,[[0,11]])}function Z(){var e,t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.signInWithPopup(C);case 3:return e=n.sent,t=e.user,n.next=7,J(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(b.c)(A(n.t0));case 13:case"end":return n.stop()}}),P,null,[[0,9]])}function X(e){var t,n,a,r,c;return f.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,j.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,J(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(b.c)(A(i.t0));case 14:case"end":return i.stop()}}),F,null,[[1,10]])}function $(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=j.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,J(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(b.c)(A(t.t0));case 14:case"end":return t.stop()}}),M,null,[[0,10]])}function ee(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.signOut();case 3:return e.next=5,Object(b.c)({type:R.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(b.c)((t=e.t0,{type:R.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),H,null,[[0,7]])}function te(e){var t,n,a,r,c,i;return f.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,l.prev=1,l.next=4,j.createUserWithEmailAndPassword(n,a);case 4:return c=l.sent,i=c.user,l.next=8,Object(b.c)(L({user:i,additionalData:{displayName:r}}));case 8:l.next=14;break;case 10:return l.prev=10,l.t0=l.catch(1),l.next=14,Object(b.c)((o=l.t0,{type:R.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return l.stop()}var o}),D,null,[[1,10]])}function ne(e){var t,n,a;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,a=t.additionalData,r.next=3,J(n,a);case 3:case"end":return r.stop()}}),q)}function ae(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(R.GOOGLE_SIGN_IN_START,Z);case 2:case"end":return e.stop()}}),z)}function re(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(R.EMAIL_SIGN_IN_START,X);case 2:case"end":return e.stop()}}),V)}function ce(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(R.CHECK_USER_SESSION,$);case 2:case"end":return e.stop()}}),K)}function ie(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(R.SIGN_OUT_START,ee);case 2:case"end":return e.stop()}}),W)}function le(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(R.SIGN_UP_START,te);case 2:case"end":return e.stop()}}),B)}function oe(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(R.SIGN_UP_SUCCESS,ne);case 2:case"end":return e.stop()}}),Y)}function ue(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(ae),Object(b.b)(re),Object(b.b)(ce),Object(b.b)(ie),Object(b.b)(le),Object(b.b)(oe)]);case 2:case"end":return e.stop()}}),Q)}var se={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},me=function(){return{type:se.TOGGLE_CART_HIDDEN}},pe=function(e){return{type:se.ADD_ITEM,payload:e}},de=f.a.mark(Ee),fe=f.a.mark(he),be=f.a.mark(ve);function Ee(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)({type:se.CLEAR_CART});case 2:case"end":return e.stop()}}),de)}function he(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(R.SIGN_OUT_SUCCESS,Ee);case 2:case"end":return e.stop()}}),fe)}function ve(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(he)]);case 2:case"end":return e.stop()}}),be)}var Oe=f.a.mark(ge);function ge(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(U),Object(b.b)(ue),Object(b.b)(ve)]);case 2:case"end":return e.stop()}}),Oe)}var Se=n(47),je=n.n(Se),ye={currentUser:null,error:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.SIGN_IN_SUCCESS:return Object(E.a)({},e,{currentUser:t.payload,error:null});case R.SIGN_OUT_SUCCESS:return Object(E.a)({},e,{currentUser:null,error:null});case R.SIGN_IN_FAILURE:case R.SIGN_OUT_FAILURE:case R.SIGN_UP_FAILURE:return Object(E.a)({},e,{error:t.payload});default:return e}},Ie=n(52),_e=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(E.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(Ie.a)(e),[Object(E.a)({},t,{quantity:1})])},Ne=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(E.a)({},e,{quantity:e.quantity-1}):e}))},xe={hidden:!0,cartItems:[]},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.TOGGLE_CART_HIDDEN:return Object(E.a)({},e,{hidden:!e.hidden});case se.ADD_ITEM:return Object(E.a)({},e,{cartItems:_e(e.cartItems,t.payload)});case se.REMOVE_ITEM:return Object(E.a)({},e,{cartItems:Ne(e.cartItems,t.payload)});case se.CLEAR_ITEM_FROM_CART:return Object(E.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case se.CLEAR_CART:return Object(E.a)({},e,{cartItems:[]});default:return e}},Te={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ue={collections:null,isFetching:!1,errorMessage:void 0},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.FETCH_COLLECTIONS_START:return Object(E.a)({},e,{isFetching:!0});case I.FETCH_COLLECTIONS_SUCCESS:return Object(E.a)({},e,{isFetching:!1,collections:t.payload});case I.FETCH_COLLECTIONS_FAILURE:return Object(E.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},Ae={key:"root",storage:je.a,whitelist:["cart"]},Le=Object(s.c)({user:Ce,cart:we,directory:ke,shop:Re}),Ge=Object(m.a)(Ae,Le),Pe=Object(p.a)(),Fe=[Pe];var Me=Object(s.e)(Ge,s.a.apply(void 0,Fe));Pe.run(ge);var He=Object(m.b)(Me),De=(m.b,n(72),n(17)),qe=n(18),ze=n(19),Ve=n(20),Ke=n(11),We=n(6),Be=(n(73),n(16)),Ye=Object(We.a)([function(e){return e.directory}],(function(e){return e.sections})),Qe=(n(74),Object(Ke.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),Je=(n(76),Object(We.b)({sections:Ye})),Ze=Object(o.b)(Je)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(Be.a)(e,["id"]);return r.a.createElement(Qe,Object.assign({key:t},n))})))})),Xe=n(8),$e=n(9);function et(){var e=Object(Xe.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n"]);return et=function(){return e},e}var tt=$e.b.div(et()),nt=function(){return r.a.createElement(tt,null,r.a.createElement(Ze,null))},at=function(e){return e.shop},rt=Object(We.a)([at],(function(e){return e.collections})),ct=Object(We.a)([rt],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),it=Object(We.a)([at],(function(e){return e.isFetching})),lt=Object(We.a)([at],(function(e){return!!e.collections}));function ot(){var e=Object(Xe.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return ot=function(){return e},e}function ut(){var e=Object(Xe.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ut=function(){return e},e}var st=$e.b.div(ut()),mt=$e.b.div(ot()),pt=function(e){return function(t){var n=t.isLoading,a=Object(Be.a)(t,["isLoading"]);return n?r.a.createElement(st,null,r.a.createElement(mt,null)):r.a.createElement(e,a)}};function dt(){var e=Object(Xe.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return dt=function(){return e},e}function ft(){var e=Object(Xe.a)(["\n  background-color: #4285f4;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: #0011d1;\n    border: none;\n  }\n"]);return ft=function(){return e},e}function bt(){var e=Object(Xe.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return bt=function(){return e},e}function Et(){var e=Object(Xe.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return Et=function(){return e},e}var ht=Object($e.a)(Et()),vt=Object($e.a)(bt()),Ot=Object($e.a)(ft()),gt=$e.b.button(dt(),(function(e){return e.isGoogleSignIn?Ot:e.inverted?vt:ht})),St=function(e){var t=e.children,n=Object(Be.a)(e,["children"]);return r.a.createElement(gt,n,t)},jt=(n(77),Object(o.b)(null,(function(e){return{addItem:function(t){return e(pe(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.imageUrl,i=t.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},i)),r.a.createElement(St,{className:"custom-button",onClick:function(){return n(t)},inverted:!0},"Add to cart"))})));function yt(){var e=Object(Xe.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return yt=function(){return e},e}function Ct(){var e=Object(Xe.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]);return Ct=function(){return e},e}function It(){var e=Object(Xe.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"]);return It=function(){return e},e}var _t=$e.b.div(It()),Nt=$e.b.h1(Ct()),xt=$e.b.div(yt()),wt=Object(Ke.g)((function(e){var t=e.title,n=e.items,a=e.history,c=e.match,i=e.routeName;return r.a.createElement(_t,null,r.a.createElement(Nt,{onClick:function(){return a.push("".concat(c.path,"/").concat(i))}},t.toUpperCase()),r.a.createElement(xt,null,n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(jt,{key:e.id,item:e})}))))}));function Tt(){var e=Object(Xe.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Tt=function(){return e},e}var kt=$e.b.div(Tt()),Ut=Object(We.b)({collections:ct}),Rt=Object(o.b)(Ut)((function(e){var t=e.collections;return r.a.createElement(kt,null,t.map((function(e){var t=e.id,n=Object(Be.a)(e,["id"]);return r.a.createElement(wt,Object.assign({key:t},n))})))})),At=Object(We.b)({isLoading:it}),Lt=Object(s.d)(Object(o.b)(At),pt)(Rt),Gt=(n(78),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(We.a)([rt],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(jt,{key:e.id,item:e})}))))}))),Pt=Object(We.b)({isLoading:function(e){return!lt(e)}}),Ft=Object(s.d)(Object(o.b)(Pt),pt)(Gt),Mt=function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(){return Object(De.a)(this,n),t.apply(this,arguments)}return Object(qe.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(Ke.b,{exact:!0,path:"".concat(e.path),component:Lt}),r.a.createElement(Ke.b,{path:"".concat(e.path,"/:collectionId"),component:Ft}))}}]),n}(r.a.Component),Ht=Object(o.b)(null,(function(e){return{fetchCollectionsStart:function(){return e({type:I.FETCH_COLLECTIONS_START})}}}))(Mt),Dt=n(27),qt=(n(79),n(80),function(e){var t=e.handleChange,n=e.label,a=Object(Be.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),zt=function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(e){var a;return Object(De.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.prevetDefault(),n=a.props.emailSignInStart,r=a.state,c=r.email,i=r.password,n(c,i);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(Dt.a)({},r,n))},a.state={email:"",password:""},a}return Object(qe.a)(n,[{key:"render",value:function(){var e=this.props.googleSignInStart;return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(qt,{name:"email",value:this.state.email,type:"email",label:"email",handleChange:this.handleChange,required:!0}),r.a.createElement(qt,{name:"password",value:this.state.password,type:"password",label:"password",handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(St,{type:"submit"},"Sign-In"),r.a.createElement(St,{type:"button",onClick:e,isGoogleSignIn:!0}," ","Google Sign-In"," "))))}}]),n}(r.a.Component),Vt=Object(o.b)(null,(function(e){return{googleSignInStart:function(){return e({type:R.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:R.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))(zt);function Kt(){var e=Object(Xe.a)(["\n  margin: 10px 0;\n"]);return Kt=function(){return e},e}function Wt(){var e=Object(Xe.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]);return Wt=function(){return e},e}var Bt=$e.b.div(Wt()),Yt=$e.b.h2(Kt()),Qt=function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(){var e;return Object(De.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(h.a)(f.a.mark((function t(n){var a,r,c,i,l,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.props.signUpStart,r=e.state,c=r.displayName,i=r.email,l=r.password,o=r.confirmPassword,l===o){t.next=6;break}return alert("passwords don't match"),t.abrupt("return");case 6:a({displayName:c,email:i,password:l});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Dt.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(qe.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement(Bt,null,r.a.createElement(Yt,null,"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(qt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(qt,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(qt,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(qt,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(St,{type:"submit"},"SIGN UP")))}}]),n}(r.a.Component),Jt=Object(o.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:R.SIGN_UP_START,payload:e}}(t))}}}))(Qt),Zt=(n(81),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Vt,null),r.a.createElement(Jt,null))}),Xt=(n(82),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:se.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(pe(t))},removeItem:function(t){return e(function(e){return{type:se.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,u=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},u),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),$t=n(51),en=n.n($t),tn=function(e){var t=e.price,n=100*t;return r.a.createElement(en.a,{label:"Pay Now",name:"CRWN Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is \u20b9".concat(t),amount:n,currency:"INR",panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_51HC57vKJtEfYg30QlVUNSka7V1GqyWNEEtN0YQGzYTi9SCiGgyU86kBOUv6YPfWrxhXQVZbOVyZ0wzOLAiXaElXg00Y4uCaKos"})},nn=function(e){return e.cart},an=Object(We.a)([nn],(function(e){return e.cartItems})),rn=Object(We.a)([nn],(function(e){return e.hidden})),cn=Object(We.a)([an],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ln=Object(We.a)([an],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),on=(n(83),Object(We.b)({cartItems:an,total:ln})),un=Object(o.b)(on)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Xt,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL: \u20b9",n),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/22 - CVV: 123"),r.a.createElement(tn,{price:n}))}));function sn(){return(sn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function mn(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var pn=r.a.createElement("g",null),dn=r.a.createElement("g",null),fn=r.a.createElement("g",null),bn=r.a.createElement("g",null),En=r.a.createElement("g",null),hn=r.a.createElement("g",null),vn=r.a.createElement("g",null),On=r.a.createElement("g",null),gn=r.a.createElement("g",null),Sn=r.a.createElement("g",null),jn=r.a.createElement("g",null),yn=r.a.createElement("g",null),Cn=r.a.createElement("g",null),In=r.a.createElement("g",null),_n=r.a.createElement("g",null),Nn=function(e){var t=e.svgRef,n=e.title,a=mn(e,["svgRef","title"]);return r.a.createElement("svg",sn({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),pn,dn,fn,bn,En,hn,vn,On,gn,Sn,jn,yn,Cn,In,_n)},xn=r.a.forwardRef((function(e,t){return r.a.createElement(Nn,sn({svgRef:t},e))})),wn=(n.p,n(84),Object(We.b)({itemCount:cn})),Tn=Object(o.b)(wn,(function(e){return{toggleCartHidden:function(){return e(me())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(xn,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),kn=(n(85),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),Un=(n(86),Object(We.b)({cartItems:an})),Rn=Object(Ke.g)(Object(o.b)(Un)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(kn,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(St,{onClick:function(){n.push("/checkout"),a(me())}},"GO TO CHECKOUT"))}))),An=Object(We.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Ln(){return(Ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Gn(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Pn=r.a.createElement("title",null,"Group"),Fn=r.a.createElement("desc",null,"Created with Sketch."),Mn=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Hn=function(e){var t=e.svgRef,n=e.title,a=Gn(e,["svgRef","title"]);return r.a.createElement("svg",Ln({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Pn:n?r.a.createElement("title",null,n):null,Fn,Mn)},Dn=r.a.forwardRef((function(e,t){return r.a.createElement(Hn,Ln({svgRef:t},e))}));n.p;function qn(){var e=Object(Xe.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return qn=function(){return e},e}function zn(){var e=Object(Xe.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return zn=function(){return e},e}function Vn(){var e=Object(Xe.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return Vn=function(){return e},e}function Kn(){var e=Object(Xe.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return Kn=function(){return e},e}var Wn=$e.b.div(Kn()),Bn=Object($e.b)(l.b)(Vn()),Yn=$e.b.div(zn()),Qn=Object($e.b)(l.b)(qn()),Jn=Object(We.b)({currentUser:An,hidden:rn}),Zn=Object(o.b)(Jn,(function(e){return{signOutStart:function(){return e({type:R.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,a=e.signOutStart;return r.a.createElement(Wn,null,r.a.createElement(Bn,{to:"/"},r.a.createElement(Dn,{className:"logo"})),r.a.createElement(Yn,null,r.a.createElement(Qn,{to:"/shop"},"SHOP"),r.a.createElement(Qn,{to:"/shop"},"CONTACT"),t?r.a.createElement(Qn,{as:"div",onClick:a},"SIGN OUT"):r.a.createElement(Qn,{to:"/signin"},"SIGN IN"),r.a.createElement(Tn,null)),n?null:r.a.createElement(Rn,null))})),Xn=function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(){var e;Object(De.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(qe.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.checkUserSession)()}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Zn,null),r.a.createElement(Ke.d,null,r.a.createElement(Ke.b,{exact:!0,path:"/",component:nt}),r.a.createElement(Ke.b,{path:"/shop",component:Ht}),r.a.createElement(Ke.b,{exact:!0,path:"/checkout",component:un}),r.a.createElement(Ke.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(Ke.a,{to:"/"}):r.a.createElement(Zt,null)}})))}}]),n}(r.a.Component),$n=Object(We.b)({currentUser:An}),ea=Object(o.b)($n,(function(e){return{checkUserSession:function(){return e({type:R.CHECK_USER_SESSION})}}}))(Xn);i.a.render(r.a.createElement(o.a,{store:Me},r.a.createElement(l.a,null,r.a.createElement(u.a,{persistor:He},r.a.createElement(ea,null)))),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.824d4101.chunk.js.map