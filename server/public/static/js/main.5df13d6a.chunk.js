(this.webpackJsonpvacation_app=this.webpackJsonpvacation_app||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var s,n=a(0),r=a(1),i=a(97),c=a.n(i),o=(a(109),a(3)),l=a(6),d=a(8),j=a(7),u=(a(110),a(98)),h=a(22);!function(e){e[e.SendVacationId=0]="SendVacationId",e[e.GetVactionId=1]="GetVactionId",e[e.GetAllVacations=2]="GetAllVacations",e[e.CheckUserStatus=3]="CheckUserStatus"}(s||(s={}));var b=Object(u.a)((function(e,t){var a=Object(h.a)({},e);switch(t.type){case s.SendVacationId:case s.GetVactionId:a.vacationId=t.payload;break;case s.GetAllVacations:a.vacations=t.payload;break;case s.CheckUserStatus:a.isLoggedIn=t.payload}return a}),new function e(){Object(o.a)(this,e),this.vacationId=void 0,this.vacations=[],this.isLoggedIn=void 0}),p=(a(112),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).unsubscribeStore=void 0,n.logout=function(){b.dispatch({type:s.CheckUserStatus,payload:!1}),sessionStorage.clear()},n.state={isLoggedIn:b.getState().isLoggedIn},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeStore=b.subscribe((function(){return e.setState({isLoggedIn:b.getState().isLoggedIn})}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"bg-image"}),Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsxs)("div",{className:"inner-width",children:[!b.getState().isLoggedIn&&Object(n.jsxs)("a",{href:"/users/login",className:"logo",children:[Object(n.jsx)("i",{className:"fas fa-sign-in-alt"})," Login"]}),b.getState().isLoggedIn&&Object(n.jsxs)("a",{href:"/users/login",onClick:this.logout,className:"logo",children:[Object(n.jsx)("i",{className:"fas fa-sign-out-alt"})," Logout"]})]})}),Object(n.jsx)("section",{id:"header",children:Object(n.jsx)("div",{className:"inner-width",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{children:"Fly to "}),Object(n.jsxs)("div",{className:"sm",children:[Object(n.jsx)("a",{href:"https://www.facebook.com/noam12881",className:"fab fa-facebook-f"}),Object(n.jsx)("a",{href:"#",className:"fab fa-twitter"}),Object(n.jsx)("a",{href:"https://www.instagram.com/noamkaravani/",className:"fab fa-instagram"}),Object(n.jsx)("a",{href:"https://il.linkedin.com/in/noam-karavani-5958741a9",className:"fab fa-linkedin-in"}),Object(n.jsx)("a",{href:"#",className:"fab fa-youtube"})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("a",{href:"#",children:"Contact me"}),Object(n.jsx)("a",{href:"#",children:"Download CV"})]})]})})})]})}}]),a}(r.Component)),O=(a(113),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"footerContainer",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"footer-col",children:[Object(n.jsx)("h4",{children:"company"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"about us"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"our services"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"privacy policy"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"affiliate program"})})]})]}),Object(n.jsxs)("div",{className:"footer-col",children:[Object(n.jsx)("h4",{children:"Explore"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"cities"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"airports"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"countries"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"airlines"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"car rental"})})]})]}),Object(n.jsxs)("div",{className:"footer-col",children:[Object(n.jsx)("h4",{children:"get help"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"FAQ"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"help"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"payment options"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"security"})})]})]}),Object(n.jsxs)("div",{className:"footer-col",children:[Object(n.jsx)("h4",{children:"follow us"}),Object(n.jsxs)("div",{className:"social-links",children:[Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-facebook-f"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-twitter"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-instagram"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})})}}]),a}(r.Component)),m=a(101),f=a(5),x=a(2),v=a.n(x),g=a(10),w=a(4),y=a.n(w),k=function e(t,a,s){Object(o.a)(this,e),this.userName=t,this.password=a,this.eMail=s},S=(a(132),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).setUserName=function(e){var t=e.target.value;s.setState({userName:t})},s.setUserEMail=function(e){var t=e.target.value;s.setState({eMail:t})},s.setPassword=function(e){var t=e.target.value;s.setState({password:t}),t.length<6||t.length>10?s.setState({passwordValidity:!0}):s.setState({passwordValidity:!1})},s.setConfirmPassword=function(e){var t=e.target.value;s.state.password!==t?s.setState({confirmPasswordValidity:!0}):s.setState({confirmPasswordValidity:!1})},s.register=Object(g.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==s.state.passwordValidity&&""!==s.state.password){e.next=4;break}alert("error invalid password"),e.next=18;break;case 4:return t=new k(s.state.userName,s.state.password,s.state.eMail),e.prev=5,e.next=8,y.a.post("http://35.239.233.246:3001/users/",t);case 8:a=e.sent,n=a.data,y.a.defaults.headers.common.authorization=n.token,sessionStorage.setItem("userToken",n.token),"admin"===n.userType?(sessionStorage.setItem("userType","admin"),s.props.history.push("/admin")):"customer"===n.userType&&(sessionStorage.setItem("userType","customer"),s.props.history.push("/home")),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),alert(e.t0.response.data.error);case 18:case"end":return e.stop()}}),e,null,[[5,15]])}))),s.state={eMail:"",userName:"",password:"",passwordValidity:!1,confirmPasswordValidity:!1},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,window.innerHeight/1.2)}},{key:"render",value:function(){return Object(n.jsxs)("section",{className:"registerSection",children:[Object(n.jsxs)("div",{className:"register",children:[Object(n.jsx)("i",{className:"fas fa-user-tie",id:"user-tie"}),Object(n.jsx)("br",{}),Object(n.jsx)("h4",{children:"Create an account"}),Object(n.jsx)("p",{children:"get started with your free account"}),Object(n.jsx)("i",{className:"fas fa-user"}),Object(n.jsxs)("form",{action:"register",children:[Object(n.jsx)("input",{type:"text",value:this.state.userName,onChange:this.setUserName,placeholder:"User name",name:"username"}),Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fas fa-at"}),Object(n.jsx)("input",{type:"text",value:this.state.eMail,onChange:this.setUserEMail,placeholder:"User eMail",name:"username"}),Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fas fa-key"}),Object(n.jsx)("input",{type:"password",value:this.state.password,onChange:this.setPassword,placeholder:"Creat Password",name:"password"}),Object(n.jsx)("br",{}),this.state.passwordValidity&&Object(n.jsx)("p",{className:"passwordValidtyMessage",children:"Invalid Password: password must contain 6 to 10 letters or numbers"}),Object(n.jsx)("i",{className:"fas fa-key",id:"confirmPassword"}),Object(n.jsx)("input",{type:"password",onChange:this.setConfirmPassword,placeholder:"Confirm Password",name:"password"}),Object(n.jsx)("br",{}),this.state.confirmPasswordValidity&&Object(n.jsx)("p",{className:"passwordValidtyMessage",children:"Invalid Confirmation Password: password mismatch the password that enterd"}),Object(n.jsx)("input",{type:"button",value:"Register",onClick:this.register})]})]}),Object(n.jsx)("label",{htmlFor:"registerBtn",children:"Have an account?"}),Object(n.jsx)("a",{href:"/login",children:"Log In"})]})}}]),a}(r.Component)),N=(a(133),function e(t,a){Object(o.a)(this,e),this.userName=t,this.password=a}),D=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setUserName=function(e){var t=e.target.value;n.setState({userName:t})},n.setPassword=function(e){var t=e.target.value;n.setState({password:t})},n.login=Object(g.a)(v.a.mark((function e(){var t,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new N(n.state.userName,n.state.password),e.next=4,y.a.post("http://35.239.233.246:3001/users/login",t);case 4:a=e.sent,r=a.data,b.dispatch({type:s.CheckUserStatus,payload:!0}),y.a.defaults.headers.common.authorization=r.token,sessionStorage.setItem("userToken",r.token),"admin"===r.userType?(sessionStorage.setItem("userType","admin"),n.props.history.push("/admin")):"customer"===r.userType&&(sessionStorage.setItem("userType","customer"),n.props.history.push("/home")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.error),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),n.state={userName:"",password:"",passwordValidity:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("section",{children:[Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)("h3",{children:"Account Login"}),Object(n.jsx)("i",{className:"fas fa-user"}),Object(n.jsx)("input",{type:"text",value:this.state.userName,onChange:this.setUserName,placeholder:"User name",name:"username"}),Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fas fa-key"}),Object(n.jsx)("input",{type:"password",value:this.state.password,onChange:this.setPassword,placeholder:"Password",name:"password"}),Object(n.jsx)("br",{}),this.state.passwordValidity&&Object(n.jsx)("p",{className:"passwordValidtyMessage",children:"Invalid Password: password must contain 6 to 10 letters or numbers"}),Object(n.jsx)("input",{type:"button",value:"login",onClick:this.login})]}),Object(n.jsx)("label",{htmlFor:"registerBtn",children:"dont have an account?"}),Object(n.jsx)("a",{href:"/users",children:"create one here"})]})}}]),a}(r.Component),C=a(28),V=(a(163),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getAllVacations=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y.a.defaults.headers.common.authorization=sessionStorage.getItem("userToken"),e.next=4,y.a.get("http://35.239.233.246:3001/vacations/").then((function(e){n.setState({vacations:e.data}),b.dispatch({type:s.GetAllVacations,payload:e.data})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.response.data.error);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),n.deleteVacation=function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=+t.target.id,e.prev=1,e.next=4,y.a.delete("http://35.239.233.246:3001/vacations/"+a);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0.response.data.error);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),n.editVacation=function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=+t.target.id,b.dispatch({type:s.SendVacationId,payload:a}),n.props.history.push("/admin/edit");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={vacations:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("userToken"),a=Object(C.io)("http://35.239.233.246:3002/",{query:"userToken="+t}).connect();this.getAllVacations(),a.on("vacations-refresh",(function(t){e.setState({vacations:t})}))}},{key:"componentWillUnmount",value:function(){var e=sessionStorage.getItem("userToken");Object(C.io)("http://35.239.233.246:3002/",{query:"userToken="+e}).disconnect()}},{key:"render",value:function(){var e=this;return null===this.state.vacations?Object(n.jsx)("h1",{children:"loading vacations..."}):Object(n.jsxs)("div",{className:"section-vacationCards",children:[Object(n.jsxs)("div",{className:"VacationBtnsSection",children:[Object(n.jsxs)("div",{className:"addVacationBtnDiv",children:[Object(n.jsx)("a",{href:"/admin/add",className:"addVacationBtn",children:Object(n.jsx)("i",{className:"fas fa-plus-circle",children:" Add New Vacation"})})," "]}),Object(n.jsxs)("div",{className:"addVacationBtnDiv",children:[Object(n.jsx)("a",{href:"/reports",className:"addVacationBtn",children:Object(n.jsx)("i",{className:"fas fa-chart-bar",children:" View Tracking graph"})})," "]})]})," ",this.state.vacations.map((function(t,a){return Object(n.jsxs)("div",Object(h.a)(Object(h.a)({className:"vacation"},t.id),{},{children:[Object(n.jsx)("img",{src:t.imageUrl,alt:"img"}),Object(n.jsx)("i",{id:JSON.stringify(t.id),className:"fas fa-trash-alt",onClick:e.deleteVacation}),Object(n.jsx)("h2",{className:"destination",children:t.destination}),Object(n.jsx)("i",{id:JSON.stringify(t.id),className:"far fa-edit",onClick:e.editVacation}),Object(n.jsx)("div",{className:"datesVacation",children:Object(n.jsxs)("p",{children:[t.startDate," -",t.endDate]})}),Object(n.jsx)("div",{className:"descriptionVacation",children:Object(n.jsx)("p",{children:t.description})}),Object(n.jsxs)("h5",{children:["PRICE: ",t.price,"$"]})]}),a)}))]})}}]),a}(r.Component)),I=function e(t,a,s,n,r,i,c,l,d){Object(o.a)(this,e),this.destination=t,this.description=a,this.startDate=s,this.endDate=n,this.price=r,this.imageUrl=i,this.id=c,this.isFollowing=l,this.numOfFollowers=d},U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).unsubscribeStore=void 0,s.getVacationById=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.getState().vacationId,y.a.defaults.headers.common.authorization=sessionStorage.getItem("userToken"),e.prev=2,e.next=5,y.a.get("http://35.239.233.246:3001/vacations/"+t).then((function(e){var t=e.data[0];s.setState({id:t.id,destination:t.destination,description:t.description,startDate:new Date(t.startDate),endDate:new Date(t.endDate),price:t.price,imageUrl:t.imageUrl})}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),s.setDestination=function(e){var t=e.target.value;s.setState({destination:t})},s.setDescription=function(e){var t=e.target.value;s.setState({description:t})},s.setStartDate=function(e){var t=new Date(e.target.value);s.setState({startDate:t})},s.setEndDate=function(e){var t=new Date(e.target.value);s.setState({endDate:t})},s.setPrice=function(e){var t=+e.target.value;s.setState({price:t})},s.setImageUrl=function(e){var t=e.target.value;s.setState({imageUrl:t})},s.discardChanges=function(){s.getVacationById()},s.editVacation=function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new I(s.state.destination,s.state.description,s.state.startDate,s.state.endDate,s.state.price,s.state.imageUrl,b.getState().vacationId),e.prev=2,y.a.defaults.headers.common.authorization=sessionStorage.getItem("userToken"),e.next=6,y.a.put("http://35.239.233.246:3001/vacations/",a);case 6:s.props.history.push("/admin"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),s.state={id:0,vacation:new I,destination:"",description:"",startDate:new Date,endDate:new Date,price:0,imageUrl:""},s}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"componentDidMount",value:function(){var e=this;this.unsubscribeStore=b.subscribe((function(){return e.setState({id:b.getState().vacationId})})),this.getVacationById()}},{key:"render",value:function(){return Object(n.jsxs)("section",{className:"editSection",children:[Object(n.jsx)("h4",{children:"Vacations Editor"}),Object(n.jsxs)("form",{action:"editVacation",children:[Object(n.jsx)("input",{type:"text",placeholder:"destination",value:this.state.destination,onChange:this.setDestination,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{placeholder:"description",value:this.state.description,onChange:this.setDescription,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"startDate",children:"startDate"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"date",name:"startDate",min:(new Date).toISOString().split("T")[0],value:new Date(this.state.startDate).toISOString().split("T")[0],onChange:this.setStartDate,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"endDate",children:"endDate"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"date",name:"endDate",min:new Date(this.state.startDate).toISOString().split("T")[0],value:new Date(this.state.endDate).toISOString().split("T")[0],onChange:this.setEndDate,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"number",placeholder:"price",value:this.state.price,onChange:this.setPrice,required:!0}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"imageEditSection",children:[Object(n.jsx)("input",{type:"text",placeholder:"image Url",value:this.state.imageUrl,onChange:this.setImageUrl,required:!0}),Object(n.jsx)("img",{src:this.state.imageUrl,alt:"invalid img source"})]}),Object(n.jsx)("input",{type:"submit",value:"submit",onClick:this.editVacation})]}),Object(n.jsx)("input",{type:"button",id:"discardChanges",value:"discard changes",onClick:this.discardChanges})]})}}]),a}(r.Component),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).setDestination=function(e){var t=e.target.value;s.setState({destination:t})},s.setDescription=function(e){var t=e.target.value;s.setState({description:t})},s.setStartDate=function(e){var t=new Date(e.target.value);s.setState({startDate:t})},s.setEndDate=function(e){var t=new Date(e.target.value);s.setState({endDate:t})},s.setPrice=function(e){var t=+e.target.value;s.setState({price:t})},s.setImageUrl=function(e){var t=e.target.value;s.setState({imageUrl:t})},s.addVacation=function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new I(s.state.destination,s.state.description,s.state.startDate,s.state.endDate,s.state.price,s.state.imageUrl),e.prev=2,e.next=5,y.a.post("http://35.239.233.246:3001/vacations/",a).then((function(){alert("succes!!: new vacation inserted"),s.props.history.push("/admin")}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),s.state={destination:"",description:"",startDate:new Date,endDate:new Date,price:0,imageUrl:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("section",{className:"addVacation",children:[Object(n.jsxs)("div",{className:"addVacation",children:[Object(n.jsx)("h4",{children:"Vacations Adder"}),Object(n.jsx)("p",{children:"add new vacation"}),Object(n.jsxs)("form",{action:"addVacation",children:[Object(n.jsx)("input",{type:"text",placeholder:"destination",onChange:this.setDestination,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",placeholder:"description",onChange:this.setDescription,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"startDate",children:"startDate"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"date",name:"startDate",min:(new Date).toISOString().split("T")[0],onChange:this.setStartDate,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"endDate",children:"endDate"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"date",name:"endDate",min:new Date(this.state.startDate).toISOString().split("T")[0],onChange:this.setEndDate,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"number",placeholder:"price",onChange:this.setPrice,required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",placeholder:"image url",onChange:this.setImageUrl,required:!0}),Object(n.jsx)("input",{type:"submit",value:"submit",onClick:this.addVacation})]})," "]}),Object(n.jsx)("input",{type:"button",id:"discardChanges",value:"discard changes"})]})})}}]),a}(r.Component),F=a(103),P=(a(164),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).getAllVacations=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=sessionStorage.getItem("userToken"),y.a.defaults.headers.common.authorization=t,e.prev=2,e.next=5,y.a.get("http://35.239.233.246:3001/vacations/").then((function(e){s.setState({vacations:e.data})}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),s.setFollow=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=+t.target.id,(n=Object(F.a)(s.state.vacations)).forEach((function(e){a===e.id&&(e.isFollowing=!e.isFollowing,e.isFollowing?e.numOfFollowers++:e.numOfFollowers--,s.setState({vacations:n}))})),!0!==t.target.checked){e.next=14;break}return e.prev=4,e.next=7,y.a.post("http://35.239.233.246:3001/users/follow/",{vacationId:a});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),alert(e.t0.response.data.error);case 12:e.next=22;break;case 14:return e.prev=14,e.next=17,y.a.delete("http://35.239.233.246:3001/users/follow/"+a);case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(14),alert(e.t1.response.data.error);case 22:case"end":return e.stop()}}),e,null,[[4,9],[14,19]])})));return function(t){return e.apply(this,arguments)}}(),s.state={vacations:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("userToken");Object(C.io)("http://35.239.233.246:3002/",{query:"userToken="+t}).connect().on("vacations-refresh",(function(t){e.setState({vacations:t})})),this.getAllVacations()}},{key:"componentWillUnmount",value:function(){var e=sessionStorage.getItem("userToken");Object(C.io)("http://35.239.233.246:3002/",{query:"userToken="+e}).disconnect(),b.dispatch({type:s.CheckUserStatus,payload:!1})}},{key:"render",value:function(){var e=this;return null===this.state.vacations?Object(n.jsx)("h1",{children:"loading vacations.."}):Object(n.jsx)("div",{className:"section-vacationCards",children:this.state.vacations.sort((function(e,t){return e.isFollowing===t.isFollowing?0:e.isFollowing?-1:1})).map((function(t,a){return Object(n.jsxs)("div",Object(h.a)(Object(h.a)({className:"vacation"},t.id),{},{children:[Object(n.jsx)("img",{src:t.imageUrl,alt:"img"}),Object(n.jsx)("h2",{children:t.destination}),Object(n.jsx)("div",{className:"datesVacation",children:Object(n.jsxs)("p",{children:[t.startDate," -",t.endDate]})}),Object(n.jsx)("div",{className:"descriptionVacation",children:Object(n.jsx)("p",{children:t.description})}),Object(n.jsxs)("h5",{children:["PRICE: ",t.price,"$"]}),Object(n.jsxs)("label",{className:"like-icon",children:[Object(n.jsx)("input",{className:"like-button",id:JSON.stringify(t.id),type:"checkbox",checked:t.isFollowing,onChange:e.setFollow}),Object(n.jsxs)("svg",{width:"42",height:"42",clipRule:"evenodd",fillRule:"evenodd",viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("defs",{children:Object(n.jsx)("style",{type:"text/css"})}),Object(n.jsx)("path",{className:"fil0 str0",d:"M412 79c-53-40-146-17-162 68-16-85-109-108-162-68-43 32-55 94-44 137 30 119 194 217 206 224 12-7 176-105 206-224 11-43-1-105-44-137z",id:"Layer_x0020_1"})]})]}),Object(n.jsxs)("p",{className:"followers",children:[t.numOfFollowers," following"]})]}),a)}))})}}]),a}(r.Component)),M=a(100),q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).getChartData=Object(g.a)(v.a.mark((function e(){var t,a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y.a.defaults.headers.common.authorization=sessionStorage.getItem("userToken"),e.next=4,y.a.get("http://35.239.233.246:3001/users/");case 4:for(t=e.sent,a=[],n=[],r=0;r<t.data.length;r++)a.push(JSON.stringify(t.data[r].vacationId)+"#: "+t.data[r].destination),n.push(t.data[r].followers);s.setState({labels:a,data:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0.response.data.error);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),s.state={labels:[],data:[]},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getChartData()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(M.Bar,{height:450,width:700,data:{labels:this.state.labels,datasets:[{label:"followers",backgroundColor:"#48dbfb",borderColor:"#46adc4",borderWidth:1,data:this.state.data}]},options:{title:{display:!0,text:"Vacations Subscribe Reports",fontSize:20},legend:{display:!0,position:"right"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})})}}]),a}(r.Component),L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(m.a,{children:Object(n.jsxs)("section",{className:"layout",children:[Object(n.jsx)("header",{children:Object(n.jsx)(p,{})}),Object(n.jsx)("main",{children:Object(n.jsxs)(f.d,{children:[Object(n.jsx)(f.b,{path:"/home",component:P,exact:!0}),Object(n.jsx)(f.b,{path:"/login",component:D,exact:!0}),Object(n.jsx)(f.a,{from:"/",to:"/login",exact:!0}),Object(n.jsx)(f.b,{path:"/register",component:S,exact:!0}),Object(n.jsx)(f.b,{path:"/admin",component:V,exact:!0}),Object(n.jsx)(f.b,{path:"/admin/edit",component:U,exact:!0}),Object(n.jsx)(f.b,{path:"/admin/add",component:T,exact:!0}),Object(n.jsx)(f.b,{path:"/reports",component:q,exact:!0})]})}),Object(n.jsx)("footer",{children:Object(n.jsx)(O,{})})]})})}}]),a}(r.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,264)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(L,{}),document.getElementById("root")),A()}},[[263,1,2]]]);
//# sourceMappingURL=main.5df13d6a.chunk.js.map