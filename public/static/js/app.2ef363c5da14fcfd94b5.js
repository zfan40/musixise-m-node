webpackJsonp([1],{2495:function(t,e){},"8GxT":function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){var e=B.get("serviceToken");return e?(F.headers.Authorization="Bearer "+e,U.post("//api.musixise.com/api/user/getInfo","",F)):!(e||!t)&&new C.a(function(e,i){U.post("//api.musixise.com/api/user/oauth/wechat/callback?code="+t,"",F).then(function(t){20001===t.data.errcode&&i(20001);var e=t.data.data.id_token;return F.headers.Authorization="Bearer "+e,B.set("serviceToken",e,{expires:7}),U.post("//api.musixise.com/api/user/getInfo","",F)},function(){i()}).then(function(t){e(t)}).catch(function(t){i(t)})})}function o(t,e){var i=this;return new C.a(function(n,o){var a={headers:{"Content-Type":"multipart/form-data",processData:!1}},r=new Blob([M()(t)]),s=new FileReader;s.onload=function(){var t=S()(E.a.mark(function t(r){var s,c,l,d;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=new FormData,s.append("fname","test.txt"),s.append("data",r.target.result),t.next=5,U.post("//api.musixise.com/api/uploadAudio",s,a);case 5:return c=t.sent,l="http://oiqvdjk3s.bkt.clouddn.com/"+c.data.data,d=N()({},e,{url:l}),console.log(l),t.abrupt("return",U.post("//api.musixise.com/api/work/create",M()(d),F).then(function(t){n(t.data.data.id)}).catch(function(t){o(t)}));case 10:case"end":return t.stop()}},t,i)}));return function(e){return t.apply(this,arguments)}}(),s.readAsDataURL(r)})}function a(t){return U.post("//api.musixise.com/api/work/detail/"+t,"",F)}function r(t){var e=t.workId,i=t.status;return U.post("//api.musixise.com/api/favorite/addWork",M()({workId:e,status:i}),F).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}function s(t){var e=t.workId,i=t.title;return U.post("//api.musixise.com/api/work/updateWork/"+e,M()({workId:e,title:i}),F).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}function c(t){i("hoXB")}function l(t){var e=new RegExp("[?|&]"+t+"=([^&]+)"),i=location.search.match(e);return i&&i[1]}function d(t){i("O/d9")}function u(t){console.log("== Enter RealMagic =="),console.log(M()(t));var e={};t.forEach(function(t){var i=parseInt(2*vt.Frequency(t.note).toFrequency(),10);e[i]||(e[i]=[]),e[i].push(t.time)});var i=pt()(e),n=dt()(e),o=[],a=[];if(i.length>18)return console.log("音种类超过18个，这个做不了"),!1;if(n.forEach(function(t){var e=[];t.forEach(function(i,n){var o=[],a=!1,r=!1;if(0===n)e.push(1);else{for(var s=n;s>=1&&!a;){if(s-=1,i-t[s]>=ht&&-1===o.indexOf(e[s])){e.push(e[s]),r=!0;break}if(-1===o.indexOf(e[s])&&(o.push(e[s]),[].concat(ct()(new rt.a(e))).length===[].concat(ct()(new rt.a(o))).length)){a=!0;break}}(0===s&&!r||a)&&e.push(Math.max.apply(Math,e)+1)}}),a.push(e)}),console.log(i),console.log(n),console.log("hehe",a),a.forEach(function(t,e){for(var n=0;n<=Math.max.apply(Math,ct()(t))-1;)o.push(i[e]),n+=1}),o.length<18)for(var r=o[o.length-1];o.length<18;)o.push(r);else if(o.length>18)return console.log("所需音片儿超过18个"),!1;return!0}function p(t){var e=[151,255,241],i=[98,166,223],n=[154,124,255],o=[0,0,0];return t<0||t>20||t<=10&&(o=[e[0]+t*(i[0]-e[0])/10,e[1]+t*(i[1]-e[1])/10,e[2]+t*(i[2]-e[2])/10]),o=[i[0]+t*(n[0]-i[0])/10,i[1]+t*(n[1]-i[1])/10,i[2]+t*(n[2]-i[2])/10],"rgb("+Math.floor(o[0])+","+Math.floor(o[1])+","+Math.floor(o[2])+")"}function v(t){return""+((vt.Frequency(t).toMidi()-50)/70*60+.2)}function h(t){if(t&&t.length&&t.forEach(function(t){try{t.dispose()}catch(t){}}),ft)try{ft.dispose()}catch(t){}}function f(t){if(console.log("current state",vt.Transport.state),"stopped"===vt.Transport.state){if(mt||(gt.triggerAttack("E6",0,0),mt=!0),ft)try{ft.dispose()}catch(t){}ft=new vt.Part(function(t,e){gt.triggerAttackRelease(e.note,"8n",t)},t).start(0,0),ft.loop=!0,ft.loopEnd=17,vt.Transport.start("+0.01",0)}else vt.Transport.stop(0)}function m(t){i("2495")}function g(t){i("8GxT")}function w(t){i("aLPQ")}Object.defineProperty(e,"__esModule",{value:!0});var _=i("7+uW"),b=i("9JMe"),T=i("I0MY"),x=i.n(T),k=i("NYxO"),y=i("//Fk"),C=i.n(y),A=i("Xxa5"),E=i.n(A),I=i("Dd8w"),N=i.n(I),P=i("exGp"),S=i.n(P),R=i("mvHQ"),M=i.n(R),B=i("lbHh"),U=i("mtWM"),F={headers:{Accept:"application/json","Content-Type":"application/json"}},j={BOUNCE_PROJECT:function(t,e){t.commit,t.state;return o(e.record,e.info)},FETCH_MBOX:function(t,e){var i=t.commit,n=(t.state,e.id);return new C.a(function(t,e){a(n).then(function(e){console.log("xxi",e.data.data.url);var n=new XMLHttpRequest;n.open("GET",e.data.data.url,!0),n.send(null),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){-1!==n.getResponseHeader("Content-Type").indexOf("text")&&(i("SET_ID_PROJECT",{record:JSON.parse(n.responseText),info:e.data.data}),t())}}})})},FETCH_LIST_DATA:function(t,e){var i=t.commit,n=t.dispatch,o=(t.state,e.type);return i("SET_ACTIVE_TYPE",{type:o}),(void 0)(o).then(function(t){return i("SET_LIST",{type:o,ids:t})}).then(function(){return n("ENSURE_ACTIVE_ITEMS")})},ENSURE_ACTIVE_ITEMS:function(t){return(0,t.dispatch)("FETCH_ITEMS",{ids:t.getters.activeIds})},FETCH_ITEMS:function(t,e){var i=t.commit,n=t.state,o=e.ids,a=Date.now();return o=o.filter(function(t){var e=n.items[t];return!e||a-e.__lastUpdated>18e4}),o.length?(void 0)(o).then(function(t){return i("SET_ITEMS",{items:t})}):C.a.resolve()},FETCH_USER:function(t,e){var i=t.commit,n=t.state,o=e.id;return n.users[o]?C.a.resolve(n.users[o]):(void 0)(o).then(function(t){return i("SET_USER",{id:o,user:t})})}},D={SET_USER_INFO:function(t,e){var i=e.type;t.activeType=i},SET_WORK_INFO:function(t,e){var i=e.type,n=e.ids;t.lists[i]=n},SET_MUSIXISER_INFO:function(t,e){e.items.forEach(function(e){e&&_.a.set(t.items,e.id,e)})},SET_BOUNCE_PROJECT:function(t,e){var i=e.record;t.recordProject=i},SET_ID_PROJECT:function(t,e){var i=e.record,n=e.info;t.recordProject=i,t.recordProjectInfo=n},SET_FINAL_WORK:function(t,e){var i=e.type;t.activeType=i},SET_USER:function(t,e){var i=e.id,n=e.user;_.a.set(t.users,i,n||!1)}},q={activeIds:function(t){var e=t.activeType,i=t.itemsPerPage,n=t.lists,o=Number(t.route.params.page)||1;if(e){var a=(o-1)*i,r=o*i;return n[e].slice(a,r)}return[]},activeItems:function(t,e){return e.activeIds.map(function(e){return t.items[e]}).filter(function(t){return t})}};_.a.use(k.a);var O={name:"app",data:function(){return{transitionName:"fade"}},beforeRouteUpdate:function(t,e,i){}},L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:t.transitionName}},[i("router-view")],1)],1)},$=[],H={render:L,staticRenderFns:$},W=H,G=i("VU/8"),z=c,X=G(O,W,!1,z,"data-v-7d7a33f4",null),V=X.exports,J=i("/ocq"),Y={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{redirectTo:function(t){this.$router.push(t)}},created:function(){var t=document.documentElement;window.rem=t.getBoundingClientRect().width/10,t.style.fontSize=window.rem+"px",/micromessenger/.test(navigator.userAgent.toLowerCase())&&(l("code")||B.get("serviceToken")?n(l("code")).then(function(t){t.data.errcode>=2e4&&(B.remove("serviceToken"),location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri=http://m.musixise.com/music-box&response_type=code&scope=snsapi_userinfo&state=type&quan,url=http://m.musixise.com/music-box&connect_redirect=1#wechat_redirect")),alert("welcome"+t.data.data.realname),console.log("get user info success",t.data.data)}).catch(function(t){B.remove("serviceToken"),location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri=http://m.musixise.com/music-box&response_type=code&scope=snsapi_userinfo&state=type&quan,url=http://m.musixise.com/music-box&connect_redirect=1#wechat_redirect")}):location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri=http://m.musixise.com/music-box&response_type=code&scope=snsapi_userinfo&state=type&quan,url=http://m.musixise.com/music-box&connect_redirect=1#wechat_redirect"))}},K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("div",{staticClass:"m-logo"}),t._v(" "),i("div",{staticClass:"redirect-button",attrs:{id:"mb-maker"},on:{touchstart:function(e){t.redirectTo("/new-music-box-maker")}}},[t._v("\n      去编曲\n  ")])])},Q=[],Z={render:K,staticRenderFns:Q},tt=Z,et=i("VU/8"),it=d,nt=et(Y,tt,!1,it,"data-v-3b801b49",null),ot=nt.exports,at=i("lHA8"),rt=i.n(at),st=i("Gu7T"),ct=i.n(st),lt=i("gRE1"),dt=i.n(lt),ut=i("fZjL"),pt=i.n(ut),vt=i("ZnLv");vt.Transport.cancel();var ht=1,ft=void 0,mt=!1,gt=new vt.Sampler({C4:"C4.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",A4:"A4.[mp3|ogg]",C5:"C5.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A5:"A5.[mp3|ogg]",C6:"C6.[mp3|ogg]"},{release:1,baseUrl:"/static/audio/"}).toMaster(),wt=i("mtWM"),_t=i.n(wt),bt=i("fxnj"),Tt=i.n(bt),xt={headers:{Accept:"application/json","Content-Type":"application/json"}},kt=function(){return new C.a(function(t,e){_t.a.post("//api.musixise.com/wechat/getTicket?url="+encodeURIComponent(window.location.href.split("#")[0]),"",xt).then(function(e){Tt.a.config({debug:!0,appId:e.data.data.appId,timestamp:e.data.data.timestamp,nonceStr:e.data.data.nonceStr,signature:e.data.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]}),Tt.a.ready(function(){t(Tt.a)})},function(){e("配置wx.config失败")})})},yt=function(t){var e=t.title,i=t.desc,n=t.fullPath,o=t.imgUrl,a=n;Tt.a.onMenuShareTimeline({title:e,link:a,imgUrl:o,success:function(){},cancel:function(){}}),Tt.a.onMenuShareAppMessage({title:e,desc:i,link:a,imgUrl:o,success:function(){},cancel:function(){}})},Ct=(i("v2ns"),i("GDE4")),At=i.n(Ct),Et=i("7QTg"),It=i("ZnLv"),Nt={},Pt=void 0,St=new It.Sampler({C4:"C4.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",A4:"A4.[mp3|ogg]",C5:"C5.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A5:"A5.[mp3|ogg]",C6:"C6.[mp3|ogg]"},{release:1,baseUrl:"/static/audio/"}).toMaster(),Rt=((new It.PluckSynth).toMaster(),document.documentElement.getBoundingClientRect().width,Math.max(document.documentElement.clientHeight,window.innerHeight||0),[]),Mt=[],Bt=0,Ut=!0,Ft=void 0,jt=0,Dt=0,qt={components:{swiper:Et.swiper,swiperSlide:Et.swiperSlide,vueSlider:At.a},data:function(){return{activeNote:{},recordPart:[],recordParts:[],playing:!1,generalControllerShow:!1,activeSwiperIndex:3,lastActiveSwiperIndex:2,vuetimeline:0,showExtendBtns:0,timelineConfig:{value:0,width:8,height:"90%",padding:"0",dotSize:20,eventType:"auto",min:0,max:200,interval:1,disabled:!1,show:!0,tooltip:"always",piecewise:!1,reverse:!0,style:{display:"inline-block"},class:"star-slider",direction:"vertical",speed:.1,bgStyle:{backgroundColor:"rgb(110,113,158)",boxShadow:"inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"},tooltipStyle:{backgroundColor:"rgb(69, 106, 255)",borderColor:"rgb(69, 106, 255)"},formatter:function(t){return t?(t/10).toFixed(1)+"s/20s":"0.0s/20s"},processStyle:{backgroundColor:"rgb(69,106,255)"}}}},watch:{playing:function(t){var e=this;console.log("playing status",t),t?Ft=setInterval(function(){e.vuetimeline+=1,e.vuetimeline>=200&&(e.toggleReplay(),e.vuetimeline=0)},100):clearInterval(Ft)}},computed:{swiper:function(){return this.$refs.pianoRoll.swiper},activePartIndex:function(){return this.PARTNUM-this.activeSwiperIndex-1},lastActivePartIndex:function(){return this.PARTNUM-this.lastActiveSwiperIndex-1}},methods:{load:function(){},toggleReplay:function(){console.log(1),this.playing=!this.playing,this.playing?(this.vuetimeline>=200&&(this.vuetimeline=0),jt=performance.now()-100*this.vuetimeline,console.log("播放开始"),this.confirmRecordPart(0),console.log("kokokoko"),Bt=performance.now(),console.log("activeOffsetTime"+100*this.vuetimeline),It.Transport.start("+0.01",100*this.vuetimeline/1e3)):(console.log("播放停了"),It.Transport.stop(0))},handleNoteStart:function(t){var e=0;St.triggerAttack(t),this.$set(this.activeNote,t,1),this.playing?e=performance.now()-jt:(Ut&&(Bt=performance.now(),Dt=100*this.vuetimeline,Ut=!1),e=performance.now()-Bt+Dt),e<2e4?(this.vuetimeline=10*e/1e3,this.recordPart.push({note:t,time:+(e/1e3).toFixed(4)})):(this.vuetimeline=200,console.log("cannot record more than 20 seconds"))},handleNoteEnd:function(t){St.triggerRelease(t),this.$set(this.activeNote,t,0)},touchNoteStartHandler:function(t){console.log(t),Nt[t.changedTouches[0].identifier]=t.target.id,this.handleNoteStart(t.target.id)},touchNoteEndHandler:function(t){this.handleNoteEnd(t.target.id),this.handleNoteEnd(Nt[t.changedTouches[0].identifier])},confirmRecordPart:function(t){if(this.recordPart.length){if(console.log("processing track: ",this.lastActivePartIndex),this.recordParts[this.lastActivePartIndex]&&this.recordParts[this.lastActivePartIndex].length&&(this.recordPart=this.recordPart.concat(this.recordParts[this.lastActivePartIndex])),Rt[this.lastActivePartIndex])try{Rt[this.lastActivePartIndex].dispose()}catch(t){}Rt[this.lastActivePartIndex]=new It.Part(function(t,e){St.triggerAttackRelease(e.note,"8n",t)},this.recordPart).start(0),this.recordParts[this.lastActivePartIndex]=this.recordPart,this.recordPart=[],this.checkBouncibility()?alert("cool"):alert("not cool")}else console.log("啥也没录");this.lastActiveSwiperIndex=this.activeSwiperIndex,t&&(this.vuetimeline=0,Bt=0),Ut=!0},clearRecordPart:function(t){if(console.log("cleaning track "+t),this.activePartIndex===t&&(this.recordPart=[]),this.recordParts[t]&&this.recordParts[t].length){if(this.$set(this.recordParts,t,[]),Rt[t]){try{Rt[t].dispose()}catch(t){}Rt[t]=void 0}}else console.log("track "+t+" has no content")},checkBouncibility:function(){return this.confirmRecordPart(0),Mt=[],!Rt.length||(Rt.forEach(function(t){t&&t._events.length&&t._events[0].value&&t._events.forEach(function(t){Mt.push(t.value)})}),Mt.sort(function(t,e){return 0+t.time-e.time}),u(Mt))},bounceProject:function(){var t=this;this.confirmRecordPart(0),console.log(this),console.log(Rt),Mt=[],Rt.length?(Rt.forEach(function(t){t&&t._events.length&&t._events[0].value&&t._events.forEach(function(t){Mt.push(t.value)})}),Mt.sort(function(t,e){return 0+t.time-e.time}),this.$store.dispatch("BOUNCE_PROJECT",{record:Mt,info:{title:"default",content:"default",cover:"default"}}).then(function(e){console.log("successfully bounced"),alert("作品已为您存储"),t.$router.push({path:"/new-music-box-viewer",query:{id:e}})}).catch(function(t){alert("failed to upload")})):alert("什么都没录呢")},mapNoteTimeToColor:function(t){return p(t)},mapNoteMidiToLength:function(t){return v(t)},adjustTimeline:function(t){this.playing?(console.log("ccccccccc"),this.toggleReplay()):Ut=!0},onMiniKeyboardScroll:function(t){console.log(t.touches[0].clientY)},onMiniKeyboardStart:function(t){console.log(t)},keng:function(t){console.log(t);for(var e=0;e<=t.changedTouches.length-1;e++){var i=document.elementFromPoint(t.changedTouches[e].clientX,t.changedTouches[e].clientY);i.classList.contains("white")||i.classList.contains("black")?Nt[t.changedTouches[e].identifier]&&Nt[t.changedTouches[e].identifier]!=i.getAttribute("id")?(console.log(Nt),this.handleNoteStart(i.getAttribute("id")),this.handleNoteEnd(Nt[t.changedTouches[e].identifier]),Nt[t.changedTouches[e].identifier]=i.getAttribute("id")):Nt[t.changedTouches[e].identifier]?console.log(3):(console.log(2),this.handleNoteStart(i.getAttribute("id")),Nt[t.changedTouches[e].identifier]=i.getAttribute("id")):(console.log("外边"),Nt[t.changedTouches[e].identifier]&&this.handleNoteEnd(Nt[t.changedTouches[e].identifier]),Nt[t.changedTouches[e].identifier]=void 0)}},btnStart:function(t){var e=this;console.log(t),Pt=setTimeout(function(){e.showExtendBtns=!0},500)},btnEnd:function(t){clearTimeout(Pt);var e=document.elementFromPoint(t.changedTouches[0].clientX,t.changedTouches[0].clientY);console.log(e),e&&e.classList.contains("bounceBtn")?this.bounceProject():e&&(e.classList.contains("playBtn")||e.classList.contains("pauseBtn"))&&this.toggleReplay(),this.showExtendBtns=!1}},created:function(){var t=this;It.Transport.cancel(),Rt=[],Mt=[];var e=document.documentElement;window.rem=e.getBoundingClientRect().width/10,e.style.fontSize=window.rem+"px",this.PARTNUM=3,this.pianoRollSwiperOption={initialSlide:this.PARTNUM,slidesPerView:3,on:{transitionEnd:function(e){console.log("3",this.activeIndex),t.activeSwiperIndex=this.activeIndex,t.confirmRecordPart(!Ut)}}},/micromessenger/.test(navigator.userAgent.toLowerCase())&&(kt().then(function(){yt({title:"MUSIXISE",desc:"寻找你自己的八音盒",fullPath:""+location.origin+location.pathname+"#/new-music-box-maker",imgUrl:"http://oaeyej2ty.bkt.clouddn.com/Ocrg2srw_icon33@2x.png"})}),l("code")||B.get("serviceToken")?n(l("code")).then(function(t){t.data.errcode>=2e4&&(B.remove("serviceToken"),location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri="+encodeURIComponent(location.origin+location.pathname+"#/new-music-box-maker")+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect")),alert("welcome"+t.data.data.realname),console.log("get user info success",t.data.data)}).catch(function(t){B.remove("serviceToken"),location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri="+encodeURIComponent(location.origin+location.pathname+"#/new-music-box-maker")+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect")}):location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri="+encodeURIComponent(location.origin+location.pathname+"#/new-music-box-maker")+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"))},beforeRouteLeave:function(t,e,i){h(Rt),i()},mounted:function(){},updated:function(){}},Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("div",{staticClass:"keys",on:{touchmove:t.keng,touchstart:function(e){e.stopPropagation(),e.preventDefault(),t.touchNoteStartHandler(e)},touchend:function(e){if(!("button"in e)&&t._k(e.keyCode,"event",void 0,e.key))return null;e.stopPropagation(),t.touchNoteEndHandler(e)}}},[i("div",{class:["white","c",t.activeNote.C4?"active-note":""],attrs:{id:"C4"}}),t._v(" "),i("div",{class:["black","d-minor",t.activeNote.Db4?"active-note":""],attrs:{id:"Db4"}}),t._v(" "),i("div",{class:["white","d",t.activeNote.D4?"active-note":""],attrs:{id:"D4"}}),t._v(" "),i("div",{class:["black","e-minor",t.activeNote.Eb4?"active-note":""],attrs:{id:"Eb4"}}),t._v(" "),i("div",{class:["white","e",t.activeNote.E4?"active-note":""],attrs:{id:"E4"}}),t._v(" "),i("div",{class:["white","f",t.activeNote.F4?"active-note":""],attrs:{id:"F4"}}),t._v(" "),i("div",{class:["black","f-sharp",t.activeNote.Gb4?"active-note":""],attrs:{id:"Gb4"}}),t._v(" "),i("div",{class:["white","g",t.activeNote.G4?"active-note":""],attrs:{id:"G4"}}),t._v(" "),i("div",{class:["black","a-minor",t.activeNote.Ab4?"active-note":""],attrs:{id:"Ab4"}}),t._v(" "),i("div",{class:["white","a",t.activeNote.A4?"active-note":""],attrs:{id:"A4"}}),t._v(" "),i("div",{class:["black","b-minor",t.activeNote.Bb4?"active-note":""],attrs:{id:"Bb4"}}),t._v(" "),i("div",{class:["white","b",t.activeNote.B4?"active-note":""],attrs:{id:"B4"}}),t._v(" "),i("div",{class:["white","c",t.activeNote.C5?"active-note":""],attrs:{id:"C5"}}),t._v(" "),i("div",{class:["black","d-minor",t.activeNote.Db5?"active-note":""],attrs:{id:"Db5"}}),t._v(" "),i("div",{class:["white","d",t.activeNote.D5?"active-note":""],attrs:{id:"D5"}}),t._v(" "),i("div",{class:["black","e-minor",t.activeNote.Eb5?"active-note":""],attrs:{id:"Eb5"}}),t._v(" "),i("div",{class:["white","e",t.activeNote.E5?"active-note":""],attrs:{id:"E5"}}),t._v(" "),i("div",{class:["white","f",t.activeNote.F5?"active-note":""],attrs:{id:"F5"}}),t._v(" "),i("div",{class:["black","f-sharp",t.activeNote.Gb5?"active-note":""],attrs:{id:"Gb5"}}),t._v(" "),i("div",{class:["white","g",t.activeNote.G5?"active-note":""],attrs:{id:"G5"}}),t._v(" "),i("div",{class:["black","a-minor",t.activeNote.Ab5?"active-note":""],attrs:{id:"Ab5"}}),t._v(" "),i("div",{class:["white","a",t.activeNote.A5?"active-note":""],attrs:{id:"A5"}}),t._v(" "),i("div",{class:["black","b-minor",t.activeNote.Bb5?"active-note":""],attrs:{id:"Bb5"}}),t._v(" "),i("div",{class:["white","b",t.activeNote.B5?"active-note":""],attrs:{id:"B5"}}),t._v(" "),i("div",{class:["white","c",t.activeNote.C6?"active-note":""],attrs:{id:"C6"}}),t._v(" "),i("div",{class:["black","d-minor",t.activeNote.Db6?"active-note":""],attrs:{id:"Db6"}}),t._v(" "),i("div",{class:["white","d",t.activeNote.D6?"active-note":""],attrs:{id:"D6"}}),t._v(" "),i("div",{class:["black","e-minor",t.activeNote.Eb6?"active-note":""],attrs:{id:"Eb6"}}),t._v(" "),i("div",{class:["white","e",t.activeNote.E6?"active-note":""],attrs:{id:"E6"}}),t._v(" "),i("div",{class:["white","f",t.activeNote.F6?"active-note":""],attrs:{id:"F6"}})]),t._v(" "),i("div",{staticClass:"keyshadow"}),t._v(" "),i("div",{staticClass:"scroll-container"}),t._v(" "),i("div",{staticClass:"semi-piano-roll",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[i("swiper",{ref:"pianoRoll",attrs:{options:t.pianoRollSwiperOption}},[t._l(t.PARTNUM,function(e){return i("swiper-slide",[i("div",{staticClass:"current-piano-roll"},[i("svg",{style:{height:"90%",padding:t.timelineConfig.dotSize/2+"px 0"}},[i("defs",[i("filter",{attrs:{id:"glowing",height:"400%",width:"130%",x:"-10%",y:"-130%"}},[i("feMorphology",{attrs:{operator:"dilate",radius:"1",in:"SourceAlpha",result:"thicken"}}),t._v(" "),i("feGaussianBlur",{attrs:{in:"thicken",stdDeviation:"2",result:"blurred"}}),t._v(" "),i("feFlood",{attrs:{"flood-color":"rgb(200,200,255)",result:"glowColor"}}),t._v(" "),i("feComposite",{attrs:{in:"glowColor",in2:"blurred",operator:"in",result:"softGlow_colored"}}),t._v(" "),i("feMerge",[i("feMergeNode",{attrs:{in:"softGlow_colored"}}),t._v(" "),i("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1)]),t._v(" "),t._l(t.recordPart,function(n,o){return t.activePartIndex===t.PARTNUM-e?i("rect",{attrs:{x:2,y:100*n.time/20+"%",width:t.mapNoteMidiToLength(n.note),height:"3",rx:"2",ry:"2",fill:t.mapNoteTimeToColor(n.time),filter:"url(#glowing)"}}):t._e()}),t._v(" "),t._l(t.recordParts[t.PARTNUM-e],function(n,o){return i("rect",{attrs:{x:2,y:100*n.time/20+"%",width:t.mapNoteMidiToLength(n.note),height:"3",rx:"2",ry:"2",fill:t.activePartIndex===t.PARTNUM-e?t.mapNoteTimeToColor(n.time):"rgb(120,120,120)",filter:t.activePartIndex===t.PARTNUM-e?"url(#glowing)":""}})})],2),t._v(" "),i("div",{staticClass:"temp",on:{click:function(i){t.clearRecordPart(t.PARTNUM-e)}}})])])}),t._v(" "),i("swiper-slide"),t._v(" "),i("swiper-slide")],2)],1),t._v(" "),i("div",{staticClass:"g-controller"},[i("vue-slider",t._b({on:{callback:t.adjustTimeline,"drag-end":function(t){}},model:{value:t.vuetimeline,callback:function(e){t.vuetimeline=e},expression:"vuetimeline"}},"vue-slider",t.timelineConfig,!1)),t._v(" "),i("div",{staticClass:"btnContainer",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),t.btnStart(e)},touchend:function(e){if(!("button"in e)&&t._k(e.keyCode,"event",void 0,e.key))return null;e.stopPropagation(),t.btnEnd(e)}}},[i("div",{class:[t.playing?"pauseBtn":"playBtn","rotate"],on:{click:t.toggleReplay}}),t._v(" "),i("div",{class:[t.showExtendBtns?"extendBtnsShow":"extendBtnsHide","extendBtns"]},[i("div",{staticClass:"bounceBtn rotate"})])])],1)])},Lt=[],$t={render:Ot,staticRenderFns:Lt},Ht=$t,Wt=i("VU/8"),Gt=m,zt=Wt(qt,Ht,!1,Gt,"data-v-7d3f0d55",null),Xt=zt.exports,Vt={props:{initCount:Number,initActive:Boolean,iconImg:String,onClickCall:{type:Function,default:function(){return function(){console.log("tap tap in count Button")}}}},computed:{style:function(){}},data:function(){return{currentActiveCount:0,currentActive:!1}},watch:{},created:function(){this.currentActive=this.initActive,this.currentActiveCount=this.currentActive?this.initCount:this.initCount+1},mounted:function(){},updated:function(){},methods:{updateButton:function(){this.currentActive=!this.currentActive,this.onClickCall()}}},Jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btnContainer",on:{click:t.updateButton}},[i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.currentActive,expression:"currentActive"}],staticClass:"active-btn-background"})]),t._v(" "),i("transition",{attrs:{name:"slideDown"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.currentActive,expression:"currentActive"}],staticClass:"btn active"},[i("div",{}),t._v(" "),i("p",[t._v(t._s(t.currentActiveCount))])])]),t._v(" "),i("transition",{attrs:{name:"slideUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.currentActive,expression:"!currentActive"}],staticClass:"btn inactive"},[i("div",{}),t._v(" "),i("p",[t._v(t._s(t.currentActiveCount-1))])])])],1)},Yt=[],Kt={render:Jt,staticRenderFns:Yt},Qt=Kt,Zt=i("VU/8"),te=g,ee=Zt(Vt,Qt,!1,te,"data-v-fd02150e",null),ie=ee.exports,ne={components:{countButton:ie},data:function(){return{loading:!0,workIntroAppear:!1,controlPanalAppear:!1,titleUpdateAppear:!1,playing:!1,userId:0,favStatus:!1,newWorkTitle:"",finalNewWorkTitle:""}},computed:{project:function(){return this.$store.state.recordProject},projectInfo:function(){return this.$store.state.recordProjectInfo}},methods:{load:function(){},loadMusicById:function(){var t=this;console.log("hehe",this.$store.state);var e=this.$store.state.route.query.id;e?(console.log("mmm",e),this.$store.dispatch("FETCH_MBOX",{id:e}).then(function(){console.log("workPart",t.project),console.log("work info",t.projectInfo),t.favStatus=t.projectInfo.favStatus})):this.$store.dispatch("FETCH_MBOX",{id:50}).then(function(){console.log("workPart",t.project),console.log("work info",t.projectInfo),t.favStatus=t.projectInfo.favStatus})},togglePlay:function(){f(this.project),this.playing=!this.playing},toggleFav:function(){r({workId:this.$store.state.route.query.id,status:this.favStatus})},updateWorkTitle:function(){var t=this;s({workId:this.$store.state.route.query.id,title:this.newWorkTitle}),this.finalNewWorkTitle=this.newWorkTitle,setTimeout(function(){t.titleUpdateAppear=!1},300)},redirectToMaker:function(){this.$router.push({path:"/new-music-box-maker"})},purchaseItem:function(){console.log("you are about to purchase "+this.projectInfo.id)}},beforeRouteLeave:function(t,e,i){h(),i()},created:function(){var t=this,e=document.documentElement;if(window.rem=e.getBoundingClientRect().width/10,e.style.fontSize=window.rem+"px",!/micromessenger/.test(navigator.userAgent.toLowerCase()))return void t.loadMusicById();var i=""+location.origin+location.pathname+"#/new-music-box-viewer?id="+t.$store.state.route.query.id;kt().then(function(){yt({title:"MUSIXISE",desc:"分享一个八音盒",fullPath:i,imgUrl:"http://oaeyej2ty.bkt.clouddn.com/Ocrg2srw_icon33@2x.png"})}),l("code")||B.get("serviceToken")?n(l("code")).then(function(e){e.data.errcode>=2e4&&(B.remove("serviceToken"),location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri="+encodeURIComponent(i)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect")),t.userId=e.data.data.userId,alert("welcome"+e.data.data.realname),t.loadMusicById(),console.log("get user info success",e.data.data)}).catch(function(t){B.remove("serviceToken"),location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri="+encodeURIComponent(i)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect")}):location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cb950ff65a142c5&redirect_uri="+encodeURIComponent(i)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect")},mounted:function(){var t=this;setTimeout(function(){t.loading=!1},1500),setTimeout(function(){t.workIntroAppear=!0},4e3),setTimeout(function(){t.controlPanalAppear=!0},5e3)},updated:function(){}},oe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["container",t.loading?"loading":""]},[i("div",{attrs:{id:"ground"}}),t._v(" "),t._m(0,!1,!1),t._v(" "),i("div",{attrs:{id:"mb"},on:{click:t.togglePlay}},[i("div",{class:["mb-part",t.playing?"playing":""],attrs:{id:"mb-lid"}}),t._v(" "),i("div",{staticClass:"mb-part",attrs:{id:"mb-body"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.playing,expression:"!playing"}],attrs:{id:"play-btn"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],attrs:{id:"pause-btn"}})])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],attrs:{id:"music-aurora"}})]),t._v(" "),i("div",{attrs:{id:"low-leaf1"}}),t._v(" "),i("div",{attrs:{id:"low-leaf2"}}),t._v(" "),i("div",{attrs:{id:"low-leaf3"}}),t._v(" "),i("div",{attrs:{id:"low-leaf4"}}),t._v(" "),i("div",{attrs:{id:"mid-leaf1"}}),t._v(" "),i("div",{attrs:{id:"mid-leaf2"}}),t._v(" "),i("div",{attrs:{id:"mid-leaf3"}}),t._v(" "),i("div",{attrs:{id:"mid-leaf4"}}),t._v(" "),i("div",{attrs:{id:"top-leaf1"}}),t._v(" "),i("div",{attrs:{id:"top-leaf2"}}),t._v(" "),i("div",{attrs:{id:"top-leaf3"}}),t._v(" "),i("div",{attrs:{id:"top-leaf4"}}),t._v(" "),i("div",{attrs:{id:"top-leaf5"}}),t._v(" "),i("div",{attrs:{id:"top-leaf6"}}),t._v(" "),i("transition",{attrs:{name:"bounce"}},[t.workIntroAppear?i("div",{attrs:{id:"work-intro"}},[i("div",{staticClass:"title"},[t._v(t._s(t.finalNewWorkTitle||t.projectInfo.title))]),t._v(" "),i("div",{staticClass:"subtitle"},[i("span",[t._v("by")]),t._v(" "),i("span",[i("img",{attrs:{src:t.projectInfo.owner.smallAvatar,alt:""}})]),i("span",[t._v(t._s(t.projectInfo.owner.nickName))])]),t._v(" "),t.userId===t.projectInfo.userId?i("div",{attrs:{id:"edit-work"},on:{click:function(e){t.titleUpdateAppear=!0}}}):t._e()]):t._e()]),t._v(" "),i("transition",{attrs:{name:"bounce"}},[t.controlPanalAppear?i("div",{attrs:{id:"control-panal"}},[i("count-button",{attrs:{initCount:t.projectInfo.collectNum?t.projectInfo.collectNum:0,initActive:!!t.projectInfo.favStatus,iconImg:"",onClickCall:t.toggleFav}}),t._v(" "),i("div",{staticClass:"purchaseBtn",on:{click:t.purchaseItem}},[t._v("购买")]),t._v(" "),i("div",{staticClass:"makeBtn",on:{click:t.redirectToMaker}},[t._v("编曲")])],1):t._e()]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.titleUpdateAppear,expression:"titleUpdateAppear"}],attrs:{id:"title-update-mask"}},[i("div",{staticClass:"mb-dialog"},[i("div",{staticClass:"title"},[t._v("\n          作品名称\n        ")]),t._v(" "),i("div",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newWorkTitle,expression:"newWorkTitle"}],attrs:{type:"text",placeholder:"作品新名称"},domProps:{value:t.newWorkTitle},on:{input:function(e){e.target.composing||(t.newWorkTitle=e.target.value)}}}),t._v(" "),i("div",{staticClass:"splitter"})]),t._v(" "),i("div",{staticClass:"btns"},[i("span",{staticClass:"btn cancel",on:{click:function(e){t.titleUpdateAppear=!1}}},[t._v("取消")]),t._v(" "),i("span",{staticClass:"btn confirm",on:{click:t.updateWorkTitle}},[t._v("确认")])])])])])],1)},ae=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"spirit"}},[i("div",{staticClass:"spirit-part",attrs:{id:"spirit-body"}}),t._v(" "),i("div",{staticClass:"spirit-part",attrs:{id:"spirit-front-leaf"}}),t._v(" "),i("div",{staticClass:"spirit-part",attrs:{id:"spirit-back-leaf"}}),t._v(" "),i("div",{staticClass:"spirit-part",attrs:{id:"spirit-back1"}}),t._v(" "),i("div",{staticClass:"spirit-part",attrs:{id:"spirit-back2"}})])}],re={render:oe,staticRenderFns:ae},se=re,ce=i("VU/8"),le=w,de=ce(ne,se,!1,le,"data-v-a1879d62",null),ue=de.exports;_.a.use(J.a);var pe=new J.a({routes:[{path:"/",name:"HelloWorld",component:ot},{path:"/new-music-box-maker",name:"NMBMaker",component:Xt},{path:"/new-music-box-viewer",name:"NMBViewer",component:ue}]});_.a.use(x.a,{name:"v-touch"}),_.a.config.productionTip=!1;var ve=function(){return new k.a.Store({state:{activeType:null,itemsPerPage:20,items:{},users:{},lists:{top:[],new:[],show:[],ask:[],job:[]},recordParts:[],recordProject:[]},actions:j,mutations:D,getters:q})}();Object(b.sync)(ve,pe),new _.a({el:"#app",router:pe,store:ve,template:"<App/>",components:{App:V}})},"O/d9":function(t,e){},aLPQ:function(t,e){},hoXB:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2ef363c5da14fcfd94b5.js.map