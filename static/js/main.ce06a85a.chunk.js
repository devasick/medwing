(window["webpackJsonpmedwing-app"]=window["webpackJsonpmedwing-app"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(18),c=a.n(o),i=a(6),r=a(7),s=a(10),u=a(8),m=a(9),d=(a(59),a(60),a(115)),h=a(116),p=a(51),g=a(19),b=a(16),f=a(118),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://asickweb.com/react/api/?fetch=data").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=(e.error,e.isLoaded,e.items);return l.a.createElement("div",null,l.a.createElement(g.b,{to:"/add"},l.a.createElement(f.a,{variant:"primary"},"Add Map")),l.a.createElement("hr",null),t.map((function(e,t){return l.a.createElement("div",{key:t,className:"d-inline-block w-50"},l.a.createElement("h5",null,e.location_name),l.a.createElement("p",null,"Latitude: ",e.googlelat),l.a.createElement("p",null,"Longitude: ",e.googlellng),l.a.createElement("span",null,l.a.createElement(g.b,{to:"/edit/"+e.m_id,className:"btn"},"Edit")),l.a.createElement("span",{className:"ml-2 text-red"},l.a.createElement(g.b,{to:"/delete/"+e.m_id,className:"btn"},"Delete")))})))}}]),t}(n.Component),E=a(21),v=a(13),O=a(117),j=window.google,k=(l.a.Component,a(17)),C=a.n(k),S=window.google,w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={place:{}},a.state=a.initialState(),a.handlePlaceSelect=a.handlePlaceSelect.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.autocomplete=null,a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.autocomplete=new S.maps.places.Autocomplete(document.getElementById("autocomplete"),{componentRestrictions:{country:"de"}},{types:["establishment"]}),this.autocomplete.addListener("place_changed",this.handlePlaceSelect)}},{key:"initialState",value:function(){return{name:"",id:"",googlelat:"",googlellng:""}}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state);var t=this.props.history;C()({method:"post",url:"http://asickweb.com/react/api/?add=data",data:this.state,config:{headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}}).then((function(e){t.push("/"),console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handlePlaceSelect",value:function(){var e=this.autocomplete.getPlace(),t=e.geometry.location.lat(),a=e.geometry.location.lng();e.address_components;console.log(e),this.setState({name:e.name,id:e.id,googlelat:t,googlellng:a})}},{key:"showPlaceDetails",value:function(e){this.setState({place:e})}},{key:"render",value:function(){return l.a.createElement(p.a,{sm:12,md:12},l.a.createElement("h5",{className:"text-uppercase"},"Add Map Location"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",placeholder:"Enter Address",id:"autocomplete",ref:"input"}),l.a.createElement(O.a.Text,{className:"text-muted"},"Google Map autocomplete will appear")),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",placeholder:"Location Name",readOnly:!0,name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",placeholder:"Latitude",readOnly:!0,name:"lat",value:this.state.googlelat,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",readOnly:!0,placeholder:"Longitude",name:"lng",value:this.state.googlellng,onChange:this.handleChange})),l.a.createElement("button",{onSubmit:this.handleSubmit,className:"button"},"Submit")))}}]),t}(n.Component),x=window.google,L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={place:{}},a.state=a.initialState(),a.handlePlaceSelect=a.handlePlaceSelect.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.autocomplete=null,a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.autocomplete=new x.maps.places.Autocomplete(document.getElementById("autocomplete"),{componentRestrictions:{country:"de"}},{types:["establishment"]}),this.autocomplete.addListener("place_changed",this.handlePlaceSelect),C.a.get("http://asickweb.com/react/api/?editdata="+this.props.match.params.id).then((function(t){e.setState({m_id:t.data[0].m_id,name:t.data[0].location_name,g_id:t.data[0].g_id,googlelat:t.data[0].googlelat,googlellng:t.data[0].googlellng,isLoaded:!0}),console.log(t.data[0].location_name)})).catch((function(e){console.log(e)}))}},{key:"initialState",value:function(){return{name:"",id:"",googlelat:"",googlellng:""}}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state);var t=this.props.history;C()({method:"post",url:"http://asickweb.com/react/api/?update=data",data:this.state,config:{headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}}).then((function(e){t.push("/")})).catch((function(e){console.log(e)}))}},{key:"handlePlaceSelect",value:function(){var e=this.autocomplete.getPlace(),t=e.geometry.location.lat(),a=e.geometry.location.lng();e.address_components;console.log(e),this.setState({name:e.name,id:e.id,googlelat:t,googlellng:a})}},{key:"showPlaceDetails",value:function(e){this.setState({place:e})}},{key:"render",value:function(){var e=this.state;e.error,e.isLoaded,e.items;return console.log(this.state),l.a.createElement(p.a,{sm:12,md:12},l.a.createElement("h5",{className:"text-uppercase"},"Edit Map Location"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",placeholder:"Enter New Address",id:"autocomplete",ref:"input"}),l.a.createElement(O.a.Text,{className:"text-muted"},"Google autocomplete will appear")),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",readOnly:!0,name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",readOnly:!0,name:"lat",value:this.state.googlelat,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Control,{type:"text",readOnly:!0,name:"lng",value:this.state.googlellng,onChange:this.handleChange})),l.a.createElement("button",{onSubmit:this.handleSubmit,className:"primary"},"Update")))}}]),t}(n.Component),M=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("http://localhost/api/?delete="+this.props.match.params.id).then((function(t){e.setState({}),e.props.history.push("/"),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(n.Component),A=a(28),N=a.n(A),_=a(53),D=a(22),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).displayMarkers=function(){return a.state.stores.map((function(e,t){return l.a.createElement(D.Marker,{key:t,id:t,position:{lat:e.googlelat,lng:e.googlellng},onClick:function(){return console.log("You clicked me!")}})}))},a.state={error:null,isLoaded:!0,stores:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"fetchMap",value:function(){var e=this;return fetch("http://localhost/api/?marker_data=data").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,stores:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"componentDidMount",value:function(){var e=Object(_.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchMap(),this.displayMarkers();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(D.Map,{google:this.props.google,zoom:5,style:{width:"100%",height:"600px"},initialCenter:{lat:51.1657,lng:10.4515}},this.displayMarkers())}}]),t}(n.Component),G=Object(D.GoogleApiWrapper)({apiKey:"AIzaSyDRCcfJVtzzqsrmB5NpU2pytpTEjNlUDUk&libraries"})(P),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(h.a,null,l.a.createElement(p.a,{sm:12,md:6},l.a.createElement(G,null)),l.a.createElement(p.a,{sm:12,md:6},l.a.createElement(g.a,{basename:"/react/medwing/"},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:y}),l.a.createElement(b.a,{path:"/add",component:w}),l.a.createElement(b.a,{path:"/edit/:id",component:L}),l.a.createElement(b.a,{path:"/delete/:id",component:M})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){e.exports=a(114)},59:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.ce06a85a.chunk.js.map