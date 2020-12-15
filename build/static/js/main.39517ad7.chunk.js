(this["webpackJsonpcountry-app"]=this["webpackJsonpcountry-app"]||[]).push([[0],{41:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(33),i=n.n(s),o=n(23),l=n(9),j=n.n(l),u=n(12),d=n(14),h=n(15),b=n(17),p=n(16),x=(n(41),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"checkbox",id:"check"}),Object(c.jsx)("label",{htmlFor:"check",children:Object(c.jsx)("div",{className:"ball"})})]})}),O=n(8),m=function(e){e.toggleDarkTheme,e.darkMode;return Object(c.jsxs)("nav",{className:"navbar navbar-light bg-dark row",children:[Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("a",{class:"navbar-brand",children:"Find Anywhere?"})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)(O.b,{to:"/",children:"Home"}),Object(c.jsx)(O.b,{to:"/about",children:"About"})]}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)(x,{})})]})},v=n(22),g=function(e){var t=e.onSearch,n=e.onSelect,r=Object(a.useState)(""),s=Object(v.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(""),j=Object(v.a)(l,2),u=j[0],d=j[1];return Object(c.jsxs)("div",{className:"container grid-2",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search Country",value:i,name:"text",onChange:function(e){t(i),o(e.target.value)}}),Object(c.jsxs)("select",{onChange:function(e){n(e.target.value),d(e.target.value)},value:u,children:[Object(c.jsx)("option",{defaultValue:!0,value:"",children:"Select By Region"}),Object(c.jsx)("option",{value:"Africa",children:"Africa"}),Object(c.jsx)("option",{value:"Americas",children:"Americas"}),Object(c.jsx)("option",{value:"Asia",children:"Asia"}),Object(c.jsx)("option",{value:"Europe",children:"Europe"}),Object(c.jsx)("option",{value:"Oceania",children:"Oceania"})]})]})},f=function(e){var t=e.country,n=t.name,a=t.capital,r=t.flag,s=t.region,i=t.population;return Object(c.jsxs)("div",{className:"card lead",style:{width:"19rem"},children:[Object(c.jsx)("img",{src:r,alt:"",className:"card-img-top"}),Object(c.jsxs)("div",{className:"card-body p-2",children:[Object(c.jsxs)("h5",{className:"text-left",children:["Name: ",n]}),Object(c.jsxs)("p",{className:"card-text text-left",children:["Population: ",i]}),Object(c.jsxs)("p",{className:"card-text  text-left",children:["Region: ",s]}),Object(c.jsxs)("p",{className:"card-text  text-left",children:["Capital: ",a]}),Object(c.jsxs)(O.b,{style:{textDecoration:"none",display:"block",width:"100%",marginTop:"1rem"},className:"btn btn-dark",to:"country/".concat(n),children:["More Details ",Object(c.jsx)("i",{className:"fas fa-arrow-right"})]})]})]})},y=function(e){var t=e.countries;return Object(c.jsx)("div",{className:"container grid-3",children:t.map((function(e){return Object(c.jsx)(f,{country:e},e.alpha2Code)}))})},N=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getCountry(this.props.match.params.name)}},{key:"render",value:function(){var e=this.props.country,t=e.name,n=e.population,a=e.region,r=e.capital,s=e.subregion,i=e.flag,o=e.callingCodes,l=e.timezones,j=e.topLevelDomain,u=e.nativeName,d=e.borders;e.languages;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{style:{margin:"2rem 0 ",padding:"0",textAlign:"start"},className:"link",children:Object(c.jsxs)(O.b,{className:"btn btn-dark",to:"/",children:[Object(c.jsx)("i",{className:"fas fa-arrow-left"}),"Back"]})}),Object(c.jsxs)("div",{className:"grid-2",children:[Object(c.jsx)("img",{src:i,className:"card-img-top",style:{width:"100%",height:"100%"},alt:""}),Object(c.jsxs)("div",{className:"text-sec lead",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsxs)("div",{className:"text-content grid-2",children:[Object(c.jsxs)("div",{className:"text-1",children:[Object(c.jsxs)("p",{children:["Native Name: ",u]}),Object(c.jsxs)("p",{children:["Population: ",n]}),Object(c.jsxs)("p",{children:["Region: ",a]}),Object(c.jsxs)("p",{children:["Sub Region: ",s]}),Object(c.jsxs)("p",{children:["Capital: ",r]})]}),Object(c.jsxs)("div",{className:"text-2",children:[Object(c.jsxs)("p",{children:["TopLevelDomain : ",j]}),Object(c.jsxs)("p",{children:["CaliingCodes :",o]}),Object(c.jsxs)("p",{children:["TimeZone : ",l]})]})]}),Object(c.jsxs)("p",{children:["Borders Countries:",d]})]})]})]})}}]),n}(a.Component),k=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"About App"}),Object(c.jsx)("h2",{children:"Version 1.1.0"})]})},S=n(2),w=n(13),C=n.n(w),A=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={countries:[],country:{},loading:!1,darkMode:!1},e.onSearch=function(){var t=Object(u.a)(j.a.mark((function t(n){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://restcountries.eu/rest/v2/name/".concat(n));case 2:return c=t.sent,t.next=5,c.data;case 5:a=t.sent,e.setState({countries:a});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCountry=function(){var t=Object(u.a)(j.a.mark((function t(n){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://restcountries.eu/rest/v2/name/".concat(n));case 2:return c=t.sent,t.next=5,c.data;case 5:a=t.sent,e.setState({country:a[0]});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSelect=function(){var t=Object(u.a)(j.a.mark((function t(n){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,C.a.get("https://restcountries.eu/rest/v2/region/".concat(n));case 3:return c=t.sent,t.next=6,c.data;case 6:a=t.sent,e.setState({countries:a});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.toggleDarkTheme=function(){e.setState({darkMode:!0})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,C.a.get("https://restcountries.eu/rest/v2/all");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,this.setState({countries:n,loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(c.jsx)(O.a,{children:Object(c.jsxs)("div",{className:this.toggleDarkTheme?"dark-theme":"ligth-mode",children:[Object(c.jsx)(m,{}),Object(c.jsxs)(S.c,{children:[Object(c.jsx)(S.a,{exact:!0,path:"/",render:function(t){return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(g,{onSearch:e.onSearch,onSelect:e.handleSelect}),Object(c.jsx)(y,{countries:e.state.countries})]})}}),Object(c.jsx)(S.a,{exact:!0,path:"/about",component:k}),Object(c.jsx)(S.a,{exact:!0,path:"/country/:name",render:function(t){return Object(c.jsx)(N,Object(o.a)(Object(o.a)({},t),{},{country:e.state.country,getCountry:e.getCountry}))}})]})]})})}}]),n}(a.Component);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.39517ad7.chunk.js.map