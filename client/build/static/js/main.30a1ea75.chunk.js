(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,a){e.exports=a(139)},111:function(e,t,a){},112:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),s=a.n(o),l=(a(111),a(8)),i=(a(112),a(59)),c=function(){var e=i.get("session");return void 0===e?{}:JSON.parse(e)},u=r.a.createContext(c()),m=a(9),d=a(189),p=a(188),h=a(92),g=a(83),f=a.n(g),E=a(19),b=a(194),y=a(13),w=a.n(y),v=function(e){if(!e.response){if(e.isAxiosError){console.log(e.toJSON());var t="".concat(e.name,": ").concat(e.message);return e.description&&(t+="description: "+e.description),{error:t}}return console.log("err:",e),{error:"Unknown Error"}}if(e.response.data){if(e.response.data.errors){for(var a=e.response.data.errors,n={},r=0,o=Object.keys(a);r<o.length;r++){var s=o[r];console.log("".concat(s,": ").concat(a[s].message)),n[s]=a[s].message}return n}return console.log(e.response.data),{error:e.response.data}}return console.log("err:",e.response),{error:e.response}},x="http://localhost:8000/api/speech/",O=a(174),j=a(178),S=a(177),k=a(93),I=a(193),C=a(85),N=a.n(C),T={textAlign:"left",verticalAlign:"middle",display:"inline-block"},A={display:"inline-block",paddingTop:"10px",paddingBottom:"10px",verticalAlign:"middle"},R=function(e){var t=Object(n.useContext)(u),a=e.currentPage,o=[],s=r.a.useState(null),i=Object(l.a)(s,2),c=i[0],d=i[1];o.push({text:"Home",path:"/",disabled:"home"===a}),t.session.userId?(o.push({text:"Exercises",path:"/exercise/fresh",disabled:"exercise"===a}),o.push({text:"Reports",path:"/reports/onedate/today",disabled:"reports"===a}),"guest"===t.session.userId?o.push({text:"Register",path:"/register",disabled:!1}):o.push({text:"Log Out",path:"/logout",disabled:!1})):o.push({text:"Log In",path:"/login",disabled:"login"===a});var p=function(e,t){null!==c&&d(null),t||Object(m.d)(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{position:"static"},r.a.createElement("h1",{className:"bigScreen"},"Speech Therapy"),r.a.createElement("div",{className:"smallScreen left"},r.a.createElement("div",{style:T},r.a.createElement(S.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)}},r.a.createElement(N.a,{fontSize:"large"})),r.a.createElement(k.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){d(null)}},o.map((function(e,t){return r.a.createElement(I.a,{key:t,onClick:function(){return p(e.path,e.disabled)},selected:e.disabled},e.text)})))),r.a.createElement("h2",null,"Speech Therapy"))),r.a.createElement(j.a,{className:"bigScreen",style:{marginBottom:"20px",padding:"0"}},o.map((function(e,a){return r.a.createElement(I.a,{key:a,color:"primary",style:A,onClick:function(){return p(e.path,e.disabled)},selected:e.disabled},("Log Out"===e.text||"Register"===e.text)&&r.a.createElement("span",null,t.session.firstName,": "),e.text)}))))},W=function(e){var t=Object(n.useContext)(u),a={padding:"0"};e.menuItem&&(a.padding="0 10px",a.fontWeight="bold");var o="link"+(t.session.theme||"dark");return r.a.createElement(m.a,{to:e.to||""},r.a.createElement(b.a,{className:o,component:"button",style:a},e.children))},P=function(e){var t="link"+(Object(n.useContext)(u).session.theme||"dark");return r.a.createElement(b.a,{className:t,component:"button",onClick:e.onClick},e.children)},F=function(e){var t=Object(n.useState)(e.show||e.alwaysShow||!1),a=Object(l.a)(t,2),o=a[0],s=a[1];return r.a.createElement("div",null,o&&r.a.createElement("h2",{style:{marginBottom:"0"}},"Instructions"),!o&&r.a.createElement("div",{style:{marginTop:"20px"}}),!e.alwaysShow&&r.a.createElement(P,{style:{marginBottom:"0.5rem"},component:"button",onClick:function(){return s(!o)}},o?"Hide Instructions":"Instructions"),o&&r.a.createElement("div",{className:"left"},r.a.createElement("h3",null,"How it works"),r.a.createElement("ul",{className:"spaced"},r.a.createElement("li",null,'You will be shown a random category. For example: "Words that begin with B".'),r.a.createElement("li",null,"A 60 second timer will start. Speak as many words as you can that match the category."),r.a.createElement("li",null,"The words you speak will display on the screen, often with a delay of a second or two."),r.a.createElement("li",null,"Sometimes the speech recognition software will not hear you correctly. That's okay; you'll be able to edit your answers after the exercise is complete."),r.a.createElement("li",null,"When the timer reaches zero, you'll be taken to a results view where you can delete and/or edit incorrect words.")),r.a.createElement("h3",null,"Tips"),r.a.createElement("ul",{className:"spaced"},r.a.createElement("li",null,'If you can\'t think of any words in the category provided, click the "New Category" button.'),r.a.createElement("li",null,"If you've said as many words as you can, and don't want to wait for the timer to finish, click the \"Quit Early\" button."),r.a.createElement("li",null,'Sometimes an answer is made up of more than one word. For example, "North Carolina". The speech software will record this as two separate words. When you get to the results screen, you can combine them back into one word by dragging and dropping one word onto another.'),r.a.createElement("li",null,"To go back and edit the exercise later, you can access it from the ",r.a.createElement(W,{to:"/reports"},"Reports Page"),". ",r.a.createElement("i",null,"You can only edit today's exercises. Earlier dates cannot be modified."))),r.a.createElement("h3",null,"FAQ"),r.a.createElement("h4",null,"How does the software know if a word belongs in the category?"),r.a.createElement("p",null,"It doesn't. It simply listens to your voice and records the words. When you edit the exercise, YOU decide if the word really belongs to the category. If it does not, you should delete the word.")))},D=function(e){var t=Object(n.useContext)(u),a=t.session.theme||"dark",o="dark"===a?"light":"dark",s="link"+a,l=function(){t.setSession(Object(E.a)({},t.session,{theme:o})),Object(m.d)("/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"home"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"About"),r.a.createElement("p",{className:"left"},"This site provides a specific type of cognitive speech therapy exercise: thinking of and speaking words to match categories. This is done using the ",r.a.createElement(b.a,{className:s,href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition"},"Speech Recognition Web API"),' to record spoken words. Currently, the Speech Recognition API only works with the Chrome browser, and only if the user is NOT using iOS (iPhone, iPad). This may change in the future. See "Browser Support" on ',r.a.createElement(b.a,{className:s,href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support"},"this page")," for updates."),r.a.createElement("p",null,"Theme: ",r.a.createElement(b.a,{component:"button",onClick:function(){t.session.userId&&"guest"!==t.session.userId?w.a.put(x+"user/"+t.session.userId,{theme:o}).then((function(e){return l()})).catch((function(e){return v(e)})):l()},className:s},"Switch to ",o," theme")),!t.session.userId&&r.a.createElement(F,{alwaysShow:!0}),!t.session.userId&&r.a.createElement("p",null,"Ready to begin? ",r.a.createElement(W,{to:"/login"},"Log In")),t.session.userId&&r.a.createElement("p",null,"Get started: ",r.a.createElement(W,{to:"/exercise/instructions"},"Exercises / Instructions"))))},H=a(33),L=a(180),_=a(190),B=a(181),U=a(179),z=Object(U.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},helperText:{marginTop:"0",padding:"0"}}})),M=function(e){var t,a=e.labelText,n=e.fieldName,o=e.value,s=e.error,l=e.changeHandler,i=null!==(t=e.type)&&void 0!==t?t:"text",c=z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{className:c.root},r.a.createElement(_.a,{type:i,label:a,value:o,onChange:function(e){return l(n,e.target.value)},variant:"filled",error:s&&!0}),s&&r.a.createElement(B.a,{className:c.helperText,error:!0},s)),r.a.createElement("br",null))},G=function(){var e=Object(n.useContext)(u),t=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",passwordConfirm:""}),a=Object(l.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)({}),c=Object(l.a)(i,2),d=c[0],p=c[1],h=function(e,t){s(Object(E.a)({},o,Object(H.a)({},e,t)))},g=function(t){t.preventDefault(),p({}),w.a.post(x+"user/register",o).then((function(t){e.setSession(Object(E.a)({},e.session,{userId:t.data._id,firstName:o.firstName,lastName:o.lastName})),Object(m.d)("/")})).catch((function(e){p(v(e))}))};return r.a.createElement("form",{onSubmit:g},r.a.createElement(M,{labelText:"First Name",fieldName:"firstName",value:o.firstName,error:d.firstName,changeHandler:h}),r.a.createElement(M,{labelText:"Last Name",fieldName:"lastName",value:o.lastName,error:d.lastName,changeHandler:h}),r.a.createElement(M,{labelText:"Email",fieldName:"email",type:"email",value:o.email,error:d.email,changeHandler:h}),r.a.createElement(M,{labelText:"Password",fieldName:"password",type:"password",value:o.password,error:d.password,changeHandler:h}),r.a.createElement(M,{labelText:"Confirm Password",fieldName:"passwordConfirm",type:"password",value:o.passwordConfirm,error:d.passwordConfirm,changeHandler:h}),r.a.createElement(S.a,{style:{margin:"10px"},type:"button",variant:"contained",color:"primary",onClick:g},"Register"))},Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"register"}),r.a.createElement("h2",null,"Register New User"),r.a.createElement(G,null),r.a.createElement("div",{style:{marginTop:"10px"}},"Already a registered? ",r.a.createElement(W,{to:"/login"},"Log In")))},J={padding:"10px 15px",marginTop:"10px",textAlign:"center",fontSize:"1rem"},V=function(){var e=Object(n.useContext)(u),t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)({}),c=Object(l.a)(i,2),d=c[0],p=c[1],h=function(e,t){s(Object(E.a)({},o,Object(H.a)({},e,t)))},g=function(t){t.preventDefault(),w.a.post(x+"user/login",o).then((function(t){e.setSession(Object(E.a)({},e.session,{userId:t.data._id,firstName:t.data.firstName,lastName:t.data.lastName,theme:t.data.theme})),Object(m.d)("/")})).catch((function(e){p(v(e))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:g},r.a.createElement(M,{labelText:"Email",fieldName:"email",value:o.email,error:d.email,changeHandler:h}),r.a.createElement(M,{labelText:"Password",fieldName:"password",type:"password",value:o.password,error:d.password,changeHandler:h}),r.a.createElement(S.a,{style:{margin:"10px"},type:"button",variant:"contained",color:"primary",onClick:g},"Log In")),r.a.createElement(P,{onClick:function(){e.setSession(Object(E.a)({},e.session,{userId:"guest",firstName:"Guest"})),Object(m.d)("/")}},"Log in as Guest"),d.error&&r.a.createElement(B.a,{style:J,error:!0},d.error))},Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"login"}),r.a.createElement("h2",null,"Log In"),r.a.createElement(V,null),r.a.createElement("div",{style:{marginTop:"10px"}},"New user? ",r.a.createElement(W,{to:"/register"},"Register")))},K=function(){var e=Object(n.useContext)(u);return Object(n.useEffect)((function(){e.setSession({theme:e.session.theme})}),[]),r.a.createElement(m.b,{noThrow:!0,to:"/login"})},Z=function(e){var t=Object(n.useContext)(u);if(!t.session.userId)return r.a.createElement(m.b,{noThrow:!0,to:"/login"});var a="restart"===e.param;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"exercise"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Exercises"),!a&&r.a.createElement("p",null,"Ready to start?"),a&&r.a.createElement("p",null,"You skipped this category: ",t.session.lastCategory),r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(){return Object(m.d)("/startexercise")}},"Start ",a&&"New Category"),"guest"===t.session.userId&&r.a.createElement("p",{style:{maxWidth:"500px",margin:"10px auto"}},"As a Guest User, you can do exercises to see how it works -- but when the exercise is finished, you'll be taken back to this page without the chance to view or edit your results. For a better experience, please ",r.a.createElement(W,{to:"/login"},"Log In"),". Your personal information will not be shared with anyone."),r.a.createElement(F,{show:"instructions"===e.param})))};window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;for(var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onEnd,a=void 0===t?function(){}:t,r=e.onResult,o=void 0===r?function(){}:r,s=e.onError,i=void 0===s?function(){}:s,c=Object(n.useRef)(null),u=Object(n.useState)(!1),m=Object(l.a)(u,2),d=m[0],p=m[1],h=!!window.SpeechRecognition,g=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");o(t)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!d){var t=e.lang,a=void 0===t?"":t,n=e.interimResults,r=void 0===n||n,o=e.continuous,s=void 0!==o&&o,l=e.maxAlternatives,u=void 0===l?1:l,m=e.grammars;try{p(!0),c.current.lang=a,c.current.interimResults=r,c.current.onresult=g,c.current.onerror=function(e){return i(e)},c.current.continuous=s,c.current.maxAlternatives=u,m&&(c.current.grammars=m),c.current.onend=function(){return c.current.start()},c.current.start()}catch(h){i(h)}}},E=function(){d&&(c.current.onresult=function(){},c.current.onend=function(){},c.current.onerror=function(){},p(!1),c.current.stop(),a())};return Object(n.useEffect)((function(){h&&(c.current=new window.SpeechRecognition)}),[]),{listen:f,listening:d,stop:E,supported:h}},X=["Adjectives","Animals","Aquatic animals","Body Parts","Buildings","Businesses","Characters","Cities","Classroom Objects","Clothing","Colors","Condiments","Consonants","Countries","Cuisine","Desserts","Drinks","Emotions","Even Numbers","Exercises","Flowers","Food","Fruits","Furniture","Gems","Habits","Halloween","Hanukkah","Holidays","Ingredients","Insects","Internal Organs","Islands","Jobs","Kitchen Utensils","Landmarks","Languages","Liquids","Measuring Units","Music Types","Musical Instruments","Mythical Creatures","New Year\u2019s","Nouns","Odd Numbers","Office Supplies","Places","Plants","Prepositions","Religions","Rhyming Words","School Subjects","Seasonings","Shoes","Sizes","Sounds","Sports","States","Summer","Thanksgiving","Tools","Traditions","Transportation","Valentine\u2019s Day","Vegetables","Verbs","Weather","Weddings","Winter Holidays","Swear Words"],$="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),ee=["Characters","Cities","Countries","Holidays","Islands","Landmarks","Places","Religions","States","Winter Holidays"],te=0;te<$.length;te++)X.push("Words that begin with "+$[te]);var ae=a(86),ne=a(87),re=a(96),oe=a(88),se=a(97),le=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{style:{maxWidth:"100px",margin:"0 auto 15px auto"}},r.a.createElement("h1",null,this.props.minutes||"0",":",this.props.seconds<10&&"0",this.props.seconds))}}]),t}(r.a.Component),ie=a(95),ce={display:"inline-block",border:"1px solid lightgray",borderRadius:"6px",padding:"4px 8px",margin:"6px 4px"},ue=function(e){var t=e.text.split(" ").filter((function(e){return e})),a=Object(ie.a)(new Set(t));return r.a.createElement("div",{className:"container",style:{marginTop:"15px",overflow:"wrap"}},r.a.createElement("h4",null,"Words: ",a.length),a.map((function(e,t){return r.a.createElement("span",{style:ce,key:t},e)})))},me=function(e){var t=Object(n.useContext)(u);if(!t.session.userId)return r.a.createElement(m.b,{noThrow:!0,to:"/login"});var a=!0,o=Object(n.useState)(0),s=Object(l.a)(o,2),i=s[0],c=s[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),h=p[0],g=p[1],f=Object(n.useState)(""),y=Object(l.a)(f,2),O=y[0],j=y[1],k=q({onResult:function(e){console.log("on result triggered");var t=a?e.toLowerCase():e;g((function(e){return e+" "+t}))},onEnd:function(){console.log("on end triggered"),A()},onError:function(e){console.log(e)}}),I=k.listen,C=k.listening,N=k.stop;if(!k.supported)return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"exercise"}),r.a.createElement("h2",null,"Exercises"),r.a.createElement("div",null,"This browser does not support the Web Speech API.",r.a.createElement("br",null),"Try opening this site in Google Chrome (Desktop or Android, but NOT iOS).",r.a.createElement("br",null),r.a.createElement(b.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support"},"Learn more about browser compatibility")));Object(n.useEffect)((function(){T(),I({interimResults:!1})}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){i>0?C&&c(i-1):C&&N()}),1e3);return function(){return clearTimeout(e)}}),[i]);var T=function e(){var n=X[Math.floor(Math.random()*X.length)];if(n===t.session.lastCategory)return console.log("Random new category matches last category. Trying again..."),e();(function(e){return ee.includes(e)})(n)&&(a=!1),j(n),c(60),t.setSession(Object(E.a)({},t.session,{lastCategory:n}))},A=function(){"guest"!==t.session.userId?0!==h.length?w.a.post(x+"exercise",{userId:t.session.userId,category:O,transcript:h}).then((function(e){console.log(e),Object(m.d)("/editexercise/"+e.data._id)})).catch((function(e){return v(e)})):Object(m.d)("/exercise/restart"):Object(m.d)("/exercise/fresh")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"exercise"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Exercises"),O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"The category is..."),r.a.createElement("h3",null,O),r.a.createElement(le,{seconds:i}),r.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:N},0===h.length?"New Category":"Quit Early"),r.a.createElement(ue,{text:h}))))},de=a(54),pe=a.n(de),he=a(182),ge=a(94),fe=a(191),Ee=a(192),be=a(89),ye=a.n(be),we=a(98),ve=a(90),xe=a.n(ve),Oe={fontSize:"medium",verticalAlign:"middle"},je=function(e){var t;return r.a.createElement(xe.a,{style:Oe,color:"secondary",onClick:null!==(t=e.action)&&void 0!==t&&t})},Se={verticalAlign:"middle",paddingLeft:"5px"},ke=function(e){var t=e.exerciseId,a=e.index,o=e.deleteWord,s=Object(n.useState)(e.word),i=Object(l.a)(s,2),c=i[0],u=i[1],m=Object(n.useRef)(null),d=Object(fe.a)({accept:"WordDraggable",hover:function(e){},drop:function(e){if(m.current){var t=e.index,n=a;t!==n&&(E(t,n,e.id,c),e.index=n)}}}),p=Object(l.a)(d,2)[1],h=Object(Ee.a)({item:{type:"WordDraggable",id:c,index:a},collect:function(e){return{isDragging:e.isDragging()}}}),g=Object(l.a)(h,2),f=g[0].isDragging;(0,g[1])(p(m));var E=function(e,t,a,n){b(e>t?n+" "+a:a+" "+n,e)},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;w.a.put(x+"exercise/"+t+"/updateWord",{index:a,word:e}).then((function(t){u(e),0===e.length?o(a):n>=0&&o(n)})).catch((function(e){v(e)}))},y={display:"inline-block",border:"1px solid lightgray",borderRadius:"6px",padding:"4px 8px",margin:"7px 8px",opacity:f?0:1};return r.a.createElement(we.a,{style:y,ref:m},r.a.createElement(je,{action:function(){return o(a)}}),r.a.createElement(ye.a,{style:{display:"inline-block",marginLeft:"5px"},html:c,onKeyPress:function(e){var t;13===((t=e).which||t.keyCode)&&t.preventDefault()},onChange:function(e){return b(e.target.value.trim())}}),r.a.createElement(pe.a,{style:Se,color:"primary"}))},Ie=function(e){var t=e.words,a=e.setWords,o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=s[0],c=s[1],u=function(t){i||(c(!0),w.a.put(x+"exercise/"+e.exerciseId+"/deleteWord",{index:t}).then((function(e){e.data.words.length>0?a(e.data.words):d()})).catch((function(e){v(e)})).finally((function(){return c(!1)})))},d=function(){w.a.delete(x+"exercise/"+e.exerciseId).then((function(e){console.log("deleted exercise. navigating to new exercise"),Object(m.d)("/exercise")})).catch((function(e){v(e)}))};return r.a.createElement("div",{style:{marginTop:"15px",overflow:"wrap"}},r.a.createElement(he.a,{backend:ge.a},t.map((function(t,a){return r.a.createElement(ke,{key:t+a,index:a,exerciseId:e.exerciseId,word:t,deleteWord:u})}))))},Ce={verticalAlign:"middle",fontSize:"medium"},Ne=function(e){if(!Object(n.useContext)(u).session.userId)return r.a.createElement(m.b,{noThrow:!0,to:"/login"});var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)([]),c=Object(l.a)(i,2),d=c[0],p=c[1],h=Object(n.useState)(!1),g=Object(l.a)(h,2),f=g[0],E=g[1],y=Object(n.useState)(e.show||e.alwaysShow||!1),O=Object(l.a)(y,2),j=O[0],k=O[1];return Object(n.useEffect)((function(){w.a.get(x+"exercise/"+e.id).then((function(e){s(e.data.category),p(e.data.words),E(!0)})).catch((function(e){console.log(v(e))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"editexercise"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Results"),r.a.createElement("h3",null,"Category: ",o),r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(){return Object(m.d)("/startexercise")}},"Start New Exercise"),r.a.createElement("h4",null,"You recorded ",r.a.createElement("b",null,d.length," words!")),r.a.createElement(b.a,{style:{marginBottom:"0.5rem"},component:"button",onClick:function(){return k(!j)}},j?"Hide Instructions":"Instructions"),j&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"To edit a word, by typing over it (if you back-space over it, the word will be deleted)."),r.a.createElement("p",null,"To combine 2 words, drag one word on top of the other using the drag symbol ",r.a.createElement(pe.a,{style:Ce,color:"primary"}),"."),r.a.createElement("p",null,"To delete a word, by click the delete symbol: ",r.a.createElement(je,{action:function(){return!1}}),", or back-space over the entire word.")),f&&r.a.createElement(Ie,{words:d,setWords:p,exerciseId:e.id})))},Te=a(183),Ae=a(184),Re=a(185),We=a(186),Pe=a(187),Fe=function(e){var t=Object(n.useContext)(u),a=Object(n.useState)([]),o=Object(l.a)(a,2),s=o[0],i=o[1],c=Object(n.useState)(!1),m=Object(l.a)(c,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){var e=encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone);w.a.get(x+"reports/alldates/"+e+"/"+t.session.userId).then((function(e){i(e.data),p(!0)})).catch((function(e){v(e)}))}),[]),r.a.createElement(r.a.Fragment,null,d&&0===s.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"No Exercises Found"),r.a.createElement("p",null,"No exercises were found for this user in the database.",r.a.createElement("br",null),"Make sure you are logged in and have completed at least one exercise.")),d&&s.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Summary: Activity by Date"),r.a.createElement(Te.a,{style:{maxWidth:400,margin:"0 auto"},size:"small"},r.a.createElement(Ae.a,null,r.a.createElement(Re.a,null,r.a.createElement(We.a,null,"Date"),r.a.createElement(We.a,null,"Exercises"),r.a.createElement(We.a,null,"Action"))),r.a.createElement(Pe.a,null,s.map((function(e,t){return r.a.createElement(Re.a,{key:t},r.a.createElement(We.a,null,e._id),r.a.createElement(We.a,null,e.sum),r.a.createElement(We.a,null,r.a.createElement(W,{to:"/reports/onedate/"+e._id},"View Exercises")))}))))))},De=function(e){var t=Object(n.useContext)(u),a=Object(n.useState)([]),o=Object(l.a)(a,2),s=o[0],i=o[1],c=function(){var e=new Date,t=e.getTimezoneOffset(),a=e.setMinutes(e.getMinutes()-t);return new Date(a).toISOString().substring(0,10)}(),d="today"===e.date?c:e.date,p=d===c,h=new Date(d.replace(/-/g,"/")).toDateString();return Object(n.useEffect)((function(){var e=encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone);w.a.get(x+"reports/onedate/".concat(d,"/").concat(e,"/").concat(t.session.userId)).then((function(e){0===e.data.length&&(console.log("No exercises found for "+d+". Redirecting to all dates."),Object(m.d)("/reports")),i(e.data)})).catch((function(e){return v(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,p?"Today's Activity":"Activity for "+h),!p&&r.a.createElement("p",null,"Editing is only possible for exercises performed on today's date."),r.a.createElement(W,{to:"/reports"},"View activity for another date"),r.a.createElement(Te.a,{style:{maxWidth:600,margin:"0 auto"},size:"small"},r.a.createElement(Ae.a,null,r.a.createElement(Re.a,null,r.a.createElement(We.a,null,"Category"),r.a.createElement(We.a,null,"Words"),p&&r.a.createElement(We.a,null,"Actions"))),r.a.createElement(Pe.a,null,s.map((function(e,t){return r.a.createElement(Re.a,{key:t,style:{verticalAlign:"top"}},r.a.createElement(We.a,null,e.category,r.a.createElement("br",null)),r.a.createElement(We.a,null,r.a.createElement("u",null,e.words.length," words"),": ",r.a.createElement("span",null,e.words.join(", "))),p&&r.a.createElement(We.a,null,r.a.createElement(W,{to:"/editexercise/"+e._id},"Edit")))})))))},He=function(e){var t=e.report||"alldates",a=Object(n.useContext)(u);return a.session.userId?"guest"===a.session.userId?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"reports"}),r.a.createElement("h2",null,"Reports"),r.a.createElement("p",null,"As a Guest User, your exercises are not saved."),r.a.createElement("p",null,"To save your results and view them over time, ",r.a.createElement(W,{to:"/login"},"Log In")," or ",r.a.createElement(W,{to:"/register"},"Register"),".")):r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{currentPage:"reports"}),r.a.createElement("h2",null,"Reports"),r.a.createElement("div",{className:"container"},"alldates"===t&&r.a.createElement(Fe,null),"onedate"===t&&r.a.createElement(De,{date:e.param||"today"}))):r.a.createElement(m.b,{noThrow:!0,to:"/login"})};var Le=function(){var e=Object(n.useState)(c()),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){console.log("persisting session via useEffect"),function(e){i.remove("session"),i.set("session",e,{expires:1})}(a)}),[a]);var s,g=((s=a.theme)||(s="dark"),Object(h.a)({palette:{type:s,primary:f.a}}));return r.a.createElement("div",{className:"App"},r.a.createElement(u.Provider,{value:{session:a,setSession:o}},r.a.createElement(p.a,{theme:g},r.a.createElement(d.a,null),r.a.createElement(m.c,null,r.a.createElement(D,{default:!0,path:"/"}),r.a.createElement(Y,{path:"register"}),r.a.createElement(Q,{path:"login"}),r.a.createElement(K,{path:"logout"}),r.a.createElement(Z,{path:"exercise/:param"}),r.a.createElement(me,{path:"startexercise"}),r.a.createElement(Ne,{path:"editexercise/:id"}),r.a.createElement(He,{path:"reports/:report/:param"}),r.a.createElement(He,{path:"reports"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.30a1ea75.chunk.js.map