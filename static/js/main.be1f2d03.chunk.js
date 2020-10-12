(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{196:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(15),c=t.n(r),o=(t(78),t(79),t(3)),i=t(10),m=t(5),s=t(69),u=t(72),d=t(21);var v=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"font-bold py-3"},"AppName"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(o.b,{to:"/",className:"text-blue-500 py-3 border-t border-b block",onClick:e.closeMenu},"Home")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/about",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"About")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/overview",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"Overview")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/map",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"Map"))))};var E=function(){var e=Object(l.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(d.b)(t,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),o=Object(d.b)(t,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return n.a.createElement("nav",null,n.a.createElement("span",{className:"text-xl"},n.a.createElement(s.a,{icon:u.a,onClick:function(){return r(!t)}})),c.map((function(e){var a=e.item,t=e.key,l=e.props;return a&&n.a.createElement(d.a.div,{key:t,style:l,className:"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50",onClick:function(){return r(!1)}})})),o.map((function(e){var a=e.item,t=e.key,l=e.props;return a&&n.a.createElement(d.a.div,{key:t,style:l,className:"fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"},n.a.createElement(v,{closeMenu:function(){return r(!1)}}))})))};var b=function(){return n.a.createElement("header",{className:"border-b p-3 flex justify-between items-center"},n.a.createElement(o.b,{to:"/",className:"font-bold"},"AppName"),n.a.createElement(E,null))};var f=function(){return n.a.createElement("footer",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t"},"\xa9 Copyright 2020")};var p=function(){return n.a.createElement("div",{className:"flex justify-center"},n.a.createElement("div",{className:"loader"}))};var N=t(14),h=t.n(N);function w(e){var a=Object(l.useState)({loading:!1,data:null,error:!1}),t=Object(m.a)(a,2),n=t[0],r=t[1];return Object(l.useEffect)((function(){r({loading:!0,data:null,error:!1}),h.a.get(e).then((function(e){r({loading:!1,data:e.data,error:!1})})).catch((function(){r({loading:!1,data:null,error:!0})}))}),[e]),n}var g=function(e){console.log(e.summary);var a=null;if(e.summary){var t=e.summary.Countries[104];a=n.a.createElement("div",{className:"row m-t-25"},n.a.createElement("div",{className:"col-sm-6 col-lg-4"},n.a.createElement("div",{className:"overview-item overview-item--c1"},n.a.createElement("div",{className:"overview__inner"},n.a.createElement("div",{className:"overview-box clearfix"},n.a.createElement("div",{className:"text"},n.a.createElement("h2",null,t.NewConfirmed),n.a.createElement("span",null,"New Confirmed")))))),n.a.createElement("div",{className:"col-sm-6 col-lg-4"},n.a.createElement("div",{className:"overview-item overview-item--c1"},n.a.createElement("div",{className:"overview__inner"},n.a.createElement("div",{className:"overview-box clearfix"},n.a.createElement("div",{className:"text"},n.a.createElement("h2",null,t.NewDeaths),n.a.createElement("span",null,"New Deaths")))))),n.a.createElement("div",{className:"col-sm-6 col-lg-4"},n.a.createElement("div",{className:"overview-item overview-item--c1"},n.a.createElement("div",{className:"overview__inner"},n.a.createElement("div",{className:"overview-box clearfix"},n.a.createElement("div",{className:"text"},n.a.createElement("h2",null,t.NewRecovered),n.a.createElement("span",null,"New Recovered")))))),n.a.createElement("div",{className:"col-sm-6 col-lg-4"},n.a.createElement("div",{className:"overview-item overview-item--c1"},n.a.createElement("div",{className:"overview__inner"},n.a.createElement("div",{className:"overview-box clearfix"},n.a.createElement("div",{className:"text"},n.a.createElement("h2",null,t.TotalConfirmed),n.a.createElement("span",null,"Total Confirmed")))))),n.a.createElement("div",{className:"col-sm-6 col-lg-4"},n.a.createElement("div",{className:"overview-item overview-item--c1"},n.a.createElement("div",{className:"overview__inner"},n.a.createElement("div",{className:"overview-box clearfix"},n.a.createElement("div",{className:"text"},n.a.createElement("h2",null,t.TotalDeaths),n.a.createElement("span",null,"Total Death")))))),n.a.createElement("div",{className:"col-sm-6 col-lg-4"},n.a.createElement("div",{className:"overview-item overview-item--c1"},n.a.createElement("div",{className:"overview__inner"},n.a.createElement("div",{className:"overview-box clearfix"},n.a.createElement("div",{className:"text"},n.a.createElement("h2",null,t.TotalRecovered),n.a.createElement("span",null,"Total Recovered")))))))}return n.a.createElement("div",{className:"bg-gray-100"},a)},y=t(28);t(195);var x=function(){var e=n.a.useState({}),a=Object(m.a)(e,2),t=a[0],l=a[1],r=w("https://api.covid19api.com/summary");n.a.useEffect((function(){!function(){var e=[],a=[];h.a.get("https://api.covid19api.com/country/malaysia/status/confirmed?from=2020-01-25T00:00:00Z&to=2020-10-10T00:00:00Z").then((function(t){t.data.map((function(t,l){e.push(new Date(t.Date).toUTCString()),console.log(new Date(t.Date).toUTCString()),console.log(t.Date),a.push(t.Cases)}))})),l({labels:e,datasets:[{label:"Total Confirmed cases",data:a,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})}()}),[]);var c=null;return r.error&&(c=n.a.createElement("div",null,n.a.createElement("div",{className:"bg-blue-300 mb-2 p-3"},"If you see this error. Please remember to create your own ",n.a.createElement("a",{href:"https://mockapi.io/"},"mock API"),"."),n.a.createElement("div",{className:"bg-red-300 p-3"},"There was an error please refresh or try again later."))),r.loading&&(c=n.a.createElement(p,null)),r.data&&(console.log(r.data),c=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement(g,{summary:r.data})),n.a.createElement("div",null,n.a.createElement(y.Line,{data:t})))),r.data,n.a.createElement("div",null,c)};var C=function(){return n.a.createElement("div",{className:"overview-item--c1"},n.a.createElement("h1",{className:"font-bold text-2xl mb-3"},"About us"),n.a.createElement("p",null,"This is the about page content."))};var T=function(){var e=Object(i.f)().id,a=w("https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/".concat(e)),t=null;return a.error&&(t=n.a.createElement("div",null,n.a.createElement("div",{className:"bg-blue-300 mb-2 p-3"},"If you see this error. Please remember to create your own ",n.a.createElement("a",{href:"https://mockapi.io/"},"mock API"),"."),n.a.createElement("div",{className:"bg-red-300 p-3"},"There was an error please refresh or try again later."))),a.loading&&(t=n.a.createElement(p,null)),a.data&&(t=n.a.createElement("div",null,n.a.createElement("h1",{className:"text-2xl font-bold mb-3"},a.data.name),n.a.createElement("div",null,n.a.createElement("img",{src:a.data.images[0].imageUrl,alt:a.data.name})),n.a.createElement("div",{className:"font-bold text-xl mb-3"},"$ ",a.data.price),n.a.createElement("div",null,a.data.description))),n.a.createElement("div",{className:"container mx-auto"},t)};var k=function(){var e=n.a.useState({}),a=Object(m.a)(e,2),t=a[0],l=a[1],r=n.a.useState([]),c=Object(m.a)(r,2),o=(c[0],c[1],n.a.useState([])),i=Object(m.a)(o,2);i[0],i[1],w("https://api.covid19api.com/dayone/country/malaysia/status/confirmed/live"),n.a.useEffect((function(){!function(){var e=[],a=[];h.a.get("https://api.covid19api.com/country/malaysia/status/confirmed?from=2020-01-25T00:00:00Z&to=2020-10-10T00:00:00Z").then((function(t){t.data.map((function(t,l){e.push(t.Date),a.push(t.Cases)}))})),l({labels:e,datasets:[{label:"Confirmed cases",data:a,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})}()}),[]);var s=w("https://api.covid19api.com/summary");console.log(s);var u=null;return s.error&&(u=n.a.createElement("div",null,n.a.createElement("div",{className:"bg-blue-300 mb-2 p-3"},"If you see this error. Please remember to create your own ",n.a.createElement("a",{href:"https://mockapi.io/"},"mock API"),"."),n.a.createElement("div",{className:"bg-red-300 p-3"},"There was an error please refresh or try again later."))),s.loading&&(u=n.a.createElement(p,null)),s.data&&(u=n.a.createElement("div",{className:"container mx-auto"},n.a.createElement("div",null,"Global"),n.a.createElement("div",null,"New Confirmed : ",s.data.Global.NewConfirmed),n.a.createElement("div",null,"New Deaths : ",s.data.Global.NewDeaths),n.a.createElement("div",null,"New Recovered : ",s.data.Global.NewRecovered),n.a.createElement("div",null,"Total Confirmed : ",s.data.Global.TotalConfirmed),n.a.createElement("div",null,"Total Deaths : ",s.data.Global.TotalDeaths),n.a.createElement("div",null,"Total Recovered : ",s.data.Global.TotalRecovered),n.a.createElement("div",null,"Malaysia"),n.a.createElement("div",null,"New Confirmed : ",s.data.Countries[104].NewConfirmed),n.a.createElement("div",null,"New Deaths : ",s.data.Countries[104].NewDeaths),n.a.createElement("div",null,"New Recovered : ",s.data.Countries[104].NewRecovered),n.a.createElement("div",null,"Total Confirmed : ",s.data.Countries[104].TotalConfirmed),n.a.createElement("div",null,"Total Deaths : ",s.data.Countries[104].TotalDeaths),n.a.createElement("div",null,"Total Recovered : ",s.data.Countries[104].TotalRecovered),n.a.createElement("div",null,n.a.createElement(y.Line,{data:t})))),n.a.createElement("div",{className:"container mx-auto"},u)},O=t(12),_=t(20);var D=function(){var e=w("https://api.covid19api.com/country/malaysia/status/confirmed/live?from=2020-03-01T00:00:00Z&to=2020-04-10T00:00:00Z");console.log(e);var a=null,t=n.a.useState(null),l=Object(m.a)(t,2),r=(l[0],l[1]),c=n.a.useCallback((function(e){r(e)}),[]),o=n.a.useCallback((function(e){r(null)}),[]),i=n.a.useState([]),s=Object(m.a)(i,2),u=(s[0],s[1]);return n.a.useCallback((function(e){u((function(a){return[].concat(Object(O.a)(a),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),n.a.useState((function(){u((function(){return[{lat:3.8126,lng:103.3256},{lat:2.1896,lng:102.2501},{lat:1.4854,lng:103.7618},{lat:5.3117,lng:103.1324}]}))})),console.log(e.data),e.data&&(a=n.a.createElement("div",{className:"container mx-auto"},n.a.createElement(_.b,{googleMapsApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/covid-19",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_MAPS_API_KEY},n.a.createElement(_.a,{mapContainerStyle:{width:"90vw",height:"90vh"},center:{lat:4.2105,lng:101.9758},zoom:8,onLoad:c,onUnmount:o},e.data.map((function(e){return n.a.createElement(_.c,{key:"".concat(e.Lat,"-").concat(e.Lon,"-").concat(e.Date),position:{lat:Number(e.Lat),lng:Number(e.Lon)},onClick:function(){},onLoad:c})})))))),n.a.createElement("div",{className:"container mx-auto"},a)};var S=function(){return n.a.createElement("div",{className:"relative pb-10 min-h-screen"},n.a.createElement(o.a,null,n.a.createElement(b,null),n.a.createElement("div",{className:"p-3"},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(x,null)),n.a.createElement(i.a,{path:"/about"},n.a.createElement(C,null)),n.a.createElement(i.a,{path:"/products/:id"},n.a.createElement(T,null)),n.a.createElement(i.a,{path:"/overview"},n.a.createElement(k,null)),n.a.createElement(i.a,{path:"/map"},n.a.createElement(D,null)))),n.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){e.exports=t(196)},78:function(e,a,t){},79:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.be1f2d03.chunk.js.map