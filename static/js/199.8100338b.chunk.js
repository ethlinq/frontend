"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[199],{9386:(e,t,s)=>{s.d(t,{ConfigCtrl:()=>O,zv:()=>v,uA:()=>y,ExplorerCtrl:()=>V,jb:()=>H,OptionsCtrl:()=>I,AV:()=>m,ThemeCtrl:()=>Q,ToastCtrl:()=>Y});Symbol();const o=Symbol();const n=Object.getPrototypeOf,r=new WeakMap,a=e=>e&&(r.has(e)?r.get(e):n(e)===Object.prototype||n(e)===Array.prototype),i=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];r.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e.configurable&&e.enumerable&&e.writable,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new WeakMap,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;const o=p.get(e);if((null==o?void 0:o[0])===t)return o[1];const n=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(n,!0),p.set(e,[t,n]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(n,t))return;const o=Reflect.get(e,t),r={value:o,enumerable:!0,configurable:!0};if(d.has(o))i(o,!1);else if(o instanceof Promise)delete r.value,r.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);r.value=u(e,t(),s)}Object.defineProperty(n,t,r)})),Object.preventExtensions(n)},h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:new WeakMap,g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[1,1],f=arguments.length>9&&void 0!==arguments[9]?arguments[9]:r=>{if(!l(r))throw new Error("object required");const i=h.get(r);if(i)return i;let p=g[0];const m=new Set,v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++g[0];p!==t&&(p=t,m.forEach((s=>s(e,t))))};let b=g[1];const y=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],v(o,s)},w=new Map,I=e=>{var t;const s=w.get(e);s&&(w.delete(e),null==(t=s[1])||t.call(s))},C=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),O=(t,n,r,i,p)=>{if(t&&(e(n,i)||h.has(i)&&e(n,h.get(i))))return;I(r),l(i)&&(i=(e=>a(e)&&e[o]||null)(i)||i);let u=i;if(i instanceof Promise)i.then((e=>{i.status="fulfilled",i.value=e,v(["resolve",[r],e])})).catch((e=>{i.status="rejected",i.reason=e,v(["reject",[r],e])}));else{!c.has(i)&&s(i)&&(u=f(i));const e=!d.has(u)&&c.get(u);e&&((e,t)=>{if(w.has(e))throw new Error("prop listener already exists");if(m.size){const s=t[3](y(e));w.set(e,[t,s])}else w.set(e,[t])})(r,e)}p(u),v(["set",[r],i,n])},W=t(C,{deleteProperty(e,t){const s=Reflect.get(e,t);I(t);const o=Reflect.deleteProperty(e,t);return o&&v(["delete",[t],s]),o},set(e,t,s,o){const n=Reflect.has(e,t),r=Reflect.get(e,t,o);return O(n,r,t,s,(s=>{Reflect.set(e,t,s,o)})),!0},defineProperty(e,t,s){if(n(s)){const o=Reflect.getOwnPropertyDescriptor(e,t);if(!o||n(o))return O(!!o&&"value"in o,null==o?void 0:o.value,t,s.value,(o=>{Reflect.defineProperty(e,t,{...s,value:o})})),!0}return Reflect.defineProperty(e,t,s)}});h.set(r,W);const E=[C,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++g[1];return b===e||m.size||(b=e,w.forEach((t=>{let[s]=t;const o=s[1](e);o>p&&(p=o)}))),p},u,e=>{m.add(e),1===m.size&&w.forEach(((e,t)=>{let[s,o]=e;if(o)throw new Error("remove already exists");const n=s[3](y(t));w.set(t,[s,n])}));return()=>{m.delete(e),0===m.size&&w.forEach(((e,t)=>{let[s,o]=e;o&&(o(),w.set(t,[s]))}))}}];return c.set(W,E),Reflect.ownKeys(r).forEach((e=>{const t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(W[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)})),W};return[f,c,d,e,t,s,n,r,p,u,h,g]},[u]=p();function h(){return u(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function g(e,t,s){const o=c.get(e);let n;o||console.warn("Please use proxy object");const r=[],a=o[3];let i=!1;const l=a((e=>{r.push(e),s?t(r.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,i&&t(r.splice(0))})))}));return i=!0,()=>{i=!1,l()}}const f=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),m={state:f,subscribe:e=>g(f,(()=>e(f))),push(e,t){e!==f.view&&(f.view=e,t&&(f.data=t),f.history.push(e))},reset(e){f.view=e,f.history=[e]},replace(e){f.history.length>1&&(f.history[f.history.length-1]=e,f.view=e)},goBack(){if(f.history.length>1){f.history.pop();const[e]=f.history.slice(-1);f.view=e}},setData(e){f.data=e}},v={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>v.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return v.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(v.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!v.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(v.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(v.WCM_VERSION,"2.6.1")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=m.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},b=h({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),y={state:b,subscribe:e=>g(b.events,(()=>e(function(e,t){const s=c.get(e);s||console.warn("Please use proxy object");const[o,n,r]=s;return r(o,n(),t)}(b.events[b.events.length-1])))),initialize(){b.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(b.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){b.connectedWalletId=e},click(e){if(b.enabled){const t={type:"CLICK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},track(e){if(b.enabled){const t={type:"TRACK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},view(e){if(b.enabled){const t={type:"VIEW",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}}},w=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe:e=>g(w,(()=>e(w))),setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},C=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:C,subscribe:e=>g(C,(()=>e(C))),setConfig(e){var t,s;y.initialize(),I.setChains(e.chains),I.setIsAuth(Boolean(e.enableAuthMode)),I.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),v.setModalVersionInStorage(),Object.assign(C,e)}};var W=Object.defineProperty,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const k="https://explorer-api.walletconnect.com",M="wcm",U="js-2.6.1";async function P(e,t){const s=((e,t)=>{for(var s in t||(t={}))j.call(t,s)&&A(e,s,t[s]);if(E)for(var s of E(t))L.call(t,s)&&A(e,s,t[s]);return e})({sdkType:M,sdkVersion:U},t),o=new URL(e,k);return o.searchParams.append("projectId",O.state.projectId),Object.entries(s).forEach((e=>{let[t,s]=e;s&&o.searchParams.append(t,String(s))})),(await fetch(o)).json()}const D={getDesktopListings:async e=>P("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>P("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>P("/w3m/v1/getInjectedListings",e),getAllListings:async e=>P("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${k}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${U}`,getAssetImageUrl:e=>`${k}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${U}`};var S=Object.defineProperty,N=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const _=v.isMobile(),$=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),V={state:$,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=O.state;if("NONE"===e||"ALL"===t&&!e)return $.recomendedWallets;if(v.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await D.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),$.recomendedWallets=o}else{const{chains:e,isAuth:s}=I.state,o=null===e||void 0===e?void 0:e.join(","),n=v.isArray(t),r={page:1,sdks:s?"auth_v1":void 0,entries:v.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:a}=_?await D.getMobileListings(r):await D.getDesktopListings(r);$.recomendedWallets=Object.values(a)}return $.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))T.call(t,s)&&R(e,s,t[s]);if(N)for(var s of N(t))x.call(t,s)&&R(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=O.state,{recomendedWallets:n}=$;if("ALL"===o)return $.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):v.isArray(s)&&(t.excludedIds=s.join(",")),v.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:a}=e,{listings:i,total:l}=_?await D.getMobileListings(t):await D.getDesktopListings(t),c=Object.values(i),d=a?"search":"wallets";return $[d]={listings:[...$[d].listings,...c],total:l,page:null!==r&&void 0!==r?r:1},{listings:c,total:l}},getWalletImageUrl:e=>D.getWalletImageUrl(e),getAssetImageUrl:e=>D.getAssetImageUrl(e),resetSearch(){$.search={listings:[],total:0,page:1}}},B=h({open:!1}),H={state:B,subscribe:e=>g(B,(()=>e(B))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=I.state;if(v.removeWalletConnectDeepLink(),I.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),I.setChains(null===e||void 0===e?void 0:e.chains),m.reset("ConnectWallet"),s&&o)B.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),B.open=!0,t())}),200)}})),close(){B.open=!1}};var K=Object.defineProperty,z=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,F=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const G=h({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Q={state:G,subscribe:e=>g(G,(()=>e(G))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(G.themeMode=t),s&&(G.themeVariables=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&F(e,s,t[s]);if(z)for(var s of z(t))q.call(t,s)&&F(e,s,t[s]);return e})({},s))}},X=h({open:!1,message:"",variant:"success"}),Y={state:X,subscribe:e=>g(X,(()=>e(X))),openToast(e,t){X.open=!0,X.message=e,X.variant=t},closeToast(){X.open=!1}}},41199:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>n});var o=s(9386);class n{constructor(e){this.openModal=o.jb.open,this.closeModal=o.jb.close,this.subscribeModal=o.jb.subscribe,this.setTheme=o.ThemeCtrl.setThemeConfig,o.ThemeCtrl.setThemeConfig(e),o.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(544).then(s.bind(s,66544));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);