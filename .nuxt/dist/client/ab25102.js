(window.webpackJsonp=window.webpackJsonp||[]).push([[55,13,16],{461:function(t,e,r){var content=r(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("2455b5aa",content,!0,{sourceMap:!1})},465:function(t,e,r){"use strict";r(461)},466:function(t,e,r){var o=r(21)(!1);o.push([t.i,".container[data-v-54190d27]{max-width:1500px}.banner-page[data-v-54190d27]{height:60vh;min-height:400px;-webkit-clip-path:polygon(0 0,100% 0,100% 86%,0 100%);clip-path:polygon(0 0,100% 0,100% 86%,0 100%)}.banner-page[data-v-54190d27],h1[data-v-54190d27]{position:relative}h1[data-v-54190d27]{text-transform:uppercase;color:#fff;font-weight:500;z-index:10;padding-top:4rem;margin:0;font-size:3rem;text-shadow:1px 1px 5px rgba(0,0,0,.3)}img[data-v-54190d27]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=o},470:function(t,e,r){"use strict";r.r(e);var o={props:["h1","image"]},n=(r(465),r(6)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner-page"},[e("div",{staticClass:"container"},[t.h1?e("h1",[t._v(t._s(t.h1))]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),e("nuxt-img",{attrs:{src:t.image}})],1)}),[],!1,null,"54190d27",null);e.default=component.exports},493:function(t,e,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("beec99d0",content,!0,{sourceMap:!1})},530:function(t,e,r){"use strict";r(493)},531:function(t,e,r){var o=r(21)(!1);o.push([t.i,"form[data-v-ca319c72]{grid-template-columns:2fr 1fr;grid-gap:3rem;gap:3rem;background-color:#363636;border-radius:10px;padding:3rem;color:#fff}.left[data-v-ca319c72],form[data-v-ca319c72]{display:grid}.left[data-v-ca319c72]{grid-template-columns:repeat(12,1fr);grid-gap:1.5rem;gap:1.5rem}.half[data-v-ca319c72]{grid-column:span 6}.full[data-v-ca319c72]{grid-column:1/-1}.left input[data-v-ca319c72]{height:60px}.left input[data-v-ca319c72],.left textarea[data-v-ca319c72]{border-radius:10px;padding:1rem}.checkbox-wrapper[data-v-ca319c72]{display:flex;grid-gap:1rem;gap:1rem}.title[data-v-ca319c72]{font-size:1.5rem;font-weight:700}.dragndrop[data-v-ca319c72]{border-radius:10px;border:1px solid #fff;background-color:hsla(0,0%,100%,.2);text-align:center;padding:1.5rem;margin:1rem 0}.dragndrop label[data-v-ca319c72]{background:#eda008;border-radius:10px;padding:.3rem 1rem;display:inline-block;margin-top:.5rem}.btn-upload[data-v-ca319c72]{font-size:.8rem;padding:.5rem 1rem;cursor:pointer}.mess[data-v-ca319c72]{margin-top:3rem}",""]),t.exports=o},569:function(t,e,r){var content=r(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("112f7325",content,!0,{sourceMap:!1})},570:function(t,e,r){var content=r(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("ffb29922",content,!0,{sourceMap:!1})},578:function(t,e,r){"use strict";r.r(e);r(35);var o=r(454),n=r.n(o),l=r(505),c=r.n(l),d=r(504),m=r.n(d),f=r(479),v=r.n(f),h={components:{InputText:n.a,InputMask:c.a,Textarea:m.a,Checkbox:v.a},data:function(){return{form:{prenom:"",nom:"",telephone:"",code_postal:"",courriel:"",message:"",cv:"",accepte:!0,files:[]}}},methods:{submit:function(){console.log("submit!!!")}}},_=(r(530),r(6)),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"left"},[e("InputText",{staticClass:"half",attrs:{required:"",type:"text",placeholder:"Prénom*"},model:{value:t.form.prenom,callback:function(e){t.$set(t.form,"prenom",e)},expression:"form.prenom"}}),t._v(" "),e("InputText",{staticClass:"half",attrs:{required:"",type:"text",placeholder:"Nom*"},model:{value:t.form.nom,callback:function(e){t.$set(t.form,"nom",e)},expression:"form.nom"}}),t._v(" "),e("InputMask",{staticClass:"half",attrs:{mask:"999 999-9999",placeholder:"Téléphone*"},model:{value:t.form.telephone,callback:function(e){t.$set(t.form,"telephone",e)},expression:"form.telephone"}}),t._v(" "),e("InputMask",{staticClass:"half",attrs:{mask:"a9a 9a9",placeholder:"Code postal*"},model:{value:t.form.code_postal,callback:function(e){t.$set(t.form,"code_postal",e)},expression:"form.code_postal"}}),t._v(" "),e("InputText",{staticClass:"full",attrs:{required:"",type:"email",placeholder:"Courriel*"},model:{value:t.form.courriel,callback:function(e){t.$set(t.form,"courriel",e)},expression:"form.courriel"}}),t._v(" "),e("Textarea",{staticClass:"full",attrs:{rows:"4",placeholder:"Message à l’employeur..."},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),t._v(" "),e("div",{staticClass:"checkbox-wrapper full"},[e("Checkbox",{attrs:{id:"acceptee",binary:!0},model:{value:t.form.accepte,callback:function(e){t.$set(t.form,"accepte",e)},expression:"form.accepte"}}),t._v(" "),e("label",{attrs:{for:"acceptee"}},[t._v("\n\t\t\t\t\tEn postulant sur un emploi via Granby Profitez, je comprends que mon prénom, mon nom, mon courriel, mon téléphone ainsi que mon code postal seront visibles par les administrateurs du site Internet (Granby Industriel) et par l’employeur ci-haut nommé. J’accepte par le fait même d’être contacté pour un suivi d’embauche par l’employeur et/ou par les administrateurs.\n\t\t\t\t")])],1)],1),t._v(" "),e("div",{staticClass:"right"},[e("span",{staticClass:"title"},[t._v("Joindre vos documents comme votre C.V. et votre lettre de présentation")]),t._v(" "),e("client-only",[e("div",{staticClass:"upload"},[t.form.files.length?e("ul",t._l(t.form.files,(function(r){return e("li",{key:r.id},[e("span",[t._v(t._s(r.name))]),t._v(" -\n\t\t\t\t\t\t\t"),e("span",[t._v(t._s(r.size))]),t._v(" -\n\t\t\t\t\t\t\t"),r.error?e("span",[t._v(t._s(r.error))]):r.success?e("span",[t._v("accès")]):r.active?e("span",[t._v("actif")]):e("span")])})),0):e("div",{staticClass:"dragndrop"},[e("span",[t._v("Glissez vos fichier ici "),e("br"),t._v("ou"),e("br")]),t._v(" "),e("label",{attrs:{for:"file"}},[t._v("Choisir des fichiers")])]),t._v(" "),e("file-upload",{ref:"upload",staticClass:"btn btn-upload",attrs:{multiple:!0,drop:!0,"drop-directory":!0},model:{value:t.form.files,callback:function(e){t.$set(t.form,"files",e)},expression:"form.files"}},[t._v("\n\t\t\t\t\t\tAjouter des fichiers\n\t\t\t\t\t")])],1)]),t._v(" "),e("p",{staticClass:"mess"},[t._v("En cliquant sur “envoyer”, ce formulaire de demande d’emploi sera directement transféré à l’employeur via le site granby-profitez.com ")]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Envoyer")])],1)])])}),[],!1,null,"ca319c72",null);e.default=component.exports},619:function(t,e,r){"use strict";r(569)},620:function(t,e,r){var o=r(21)(!1);o.push([t.i,".job-wrapper[data-v-0a163d53]{background-color:#fff;margin-top:-22rem;position:relative;z-index:10;border-radius:10px;padding:0;overflow:hidden}.details-row[data-v-0a163d53],.row-intro[data-v-0a163d53]{display:flex}.col1[data-v-0a163d53],.logo-business[data-v-0a163d53]{width:30%}.col1[data-v-0a163d53]{padding:0 3rem;margin-top:108px}.col2[data-v-0a163d53],.job-name[data-v-0a163d53]{width:70%}.job-name[data-v-0a163d53]{background-color:#363636;display:flex;align-items:center;justify-content:center;padding:1rem 4rem}.job-name h1[data-v-0a163d53]{text-transform:uppercase;text-align:center;color:#fff;font-weight:500;font-size:2.5rem}.row-postuler[data-v-0a163d53]{display:flex;justify-content:flex-end;align-items:center;padding:2rem 3rem 1rem}.row-postuler button[data-v-0a163d53]{outline:none;border:none;display:inline-flex;align-items:center;background-color:transparent;margin-left:1.2rem}.row-postuler button svg[data-v-0a163d53]{margin-left:1rem}.row-postuler a[data-v-0a163d53]{margin-left:1.5rem}.logo-business img[data-v-0a163d53]{height:325px;width:100%;padding:3rem;-o-object-fit:contain;object-fit:contain}.col1 ul[data-v-0a163d53],.col2 ul[data-v-0a163d53]{list-style:none;padding-left:0}",""]),t.exports=o},621:function(t,e,r){"use strict";r(570)},622:function(t,e,r){var o=r(21)(!1);o.push([t.i,".contenu-annonce{line-height:1.6;padding-bottom:4rem}.contenu-annonce h2{position:relative;padding-left:2rem;font-size:1.5rem;font-weight:500;color:#000;margin-bottom:2rem}.contenu-annonce h2:not(:first-child){margin-top:3rem}.contenu-annonce h2:before{content:\"\";background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13.838' height='39.351'%3E%3Cpath d='M7.854 39.351H-.003L5.981 0h7.854l-3.3 21.683z' fill='%23eda008'/%3E%3C/svg%3E\");width:16px;height:40px;background-size:contain;background-repeat:no-repeat;display:inline-block;position:absolute;top:0;left:0}.contenu-annonce ul{padding-left:0}.contenu-annonce ul li{list-style:none}.contenu-annonce ul li:before{content:\"\";background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11'%3E%3Cpath fill='%23363636' d='M0 0h11v11H0z'/%3E%3C/svg%3E\");background-size:11px;background-repeat:no-repeat;width:11px;height:11px;display:inline-block;margin-right:.8rem}.th2{font-size:2rem;font-weight:500;color:#000;text-align:center}.postuler-section{margin-bottom:3rem}",""]),t.exports=o},653:function(t,e,r){"use strict";r.r(e);var o=r(3),n=(r(40),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=t.$axios,n=t.error,e.next=3,o.$post("/jobs/get",{id:r.id,withBusiness:!0});case 3:if(!(l=e.sent).success){e.next=8;break}return e.abrupt("return",{job:l.data});case 8:n({statusCode:404,message:"Oups, cette page n'existe pas."});case 9:case"end":return e.stop()}}),e)})))()}}),l=(r(619),r(621),r(6)),component=Object(l.a)(n,(function(){var t,e,r,o,n,l,c,d=this,m=d._self._c;return m("div",[m("BannerPage",{attrs:{image:"/images/tempo1.jpg"}}),d._v(" "),m("div",{staticClass:"container job-wrapper"},[m("div",{staticClass:"row-intro"},[m("div",{staticClass:"logo-business"},[null!==(t=d.job)&&void 0!==t&&null!==(e=t.business)&&void 0!==e&&e.logo?m("nuxt-img",{attrs:{src:null===(r=d.job)||void 0===r||null===(o=r.business)||void 0===o||null===(n=o.logo[0])||void 0===n||null===(l=n.sizes)||void 0===l||null===(c=l.full)||void 0===c?void 0:c.source_url}}):d._e()],1),d._v(" "),m("div",{staticClass:"job-name"},[m("h1",[d._v(d._s(d.job.title))])])]),d._v(" "),m("div",{staticClass:"details-row"},[m("div",{staticClass:"col1"},[m("div",{staticClass:"sect-details"},[m("h2",[d._v("Détails")]),d._v(" "),m("span",[d._v("Compagnie")]),d._v(" "),m("h3",[d._v(d._s(d.job.business.business))]),d._v(" "),d._m(0)]),d._v(" "),d._m(1)]),d._v(" "),m("div",{staticClass:"col2"},[m("div",{staticClass:"row-postuler"},[m("button",{attrs:{type:"button"}},[d._v("IMPRIMER "),m("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"42",viewBox:"0 0 42 42"}},[m("g",{attrs:{transform:"translate(-1055.516 -667)"}},[m("circle",{attrs:{cx:"21",cy:"21",r:"21",transform:"translate(1055.516 667)",fill:"#363636"}}),m("path",{attrs:{d:"M17.552,13.5H4.05a1.35,1.35,0,0,0-1.35,1.35v5.4A1.35,1.35,0,0,0,4.05,21.6h13.5a1.35,1.35,0,0,0,1.35-1.35v-5.4A1.349,1.349,0,0,0,17.552,13.5Zm0,6.751H4.05v-5.4h13.5ZM18.9,8.1V2.98a1.351,1.351,0,0,0-.4-.955L16.876.4a1.41,1.41,0,0,0-.952-.4H5.4A2.7,2.7,0,0,0,2.7,2.7V8.1A2.7,2.7,0,0,0,0,10.8v4.726a.675.675,0,0,0,1.35,0V10.8A1.35,1.35,0,0,1,2.7,9.451H18.9a1.35,1.35,0,0,1,1.35,1.35v4.726a.675.675,0,0,0,1.35,0V10.8A2.7,2.7,0,0,0,18.9,8.1Zm-1.35,0H4.05V2.7A1.35,1.35,0,0,1,5.4,1.35H15.923l1.629,1.63Zm.675,2.363a1.013,1.013,0,1,0,1.013,1.013A1.013,1.013,0,0,0,18.227,10.464Z",transform:"translate(1065.715 676.699)",fill:"#fff"}})])])]),d._v(" "),m("button",{attrs:{type:"button"}},[d._v("PARTAGER "),m("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"42",viewBox:"0 0 42 42"}},[m("g",{attrs:{transform:"translate(-1218 -667)"}},[m("circle",{attrs:{cx:"21",cy:"21",r:"21",transform:"translate(1218 667)",fill:"#363636"}}),m("path",{attrs:{d:"M23.152,36.134a4.133,4.133,0,0,1-4.134,4.134,3.984,3.984,0,0,1-3-1.338l-7.8,3.948a4.31,4.31,0,0,1,0,1.4l7.8,3.9a4.135,4.135,0,1,1-1.132,2.842,3.944,3.944,0,0,1,.253-1.432l-7.53-3.762a4.134,4.134,0,1,1,0-4.5l7.53-3.762a4.135,4.135,0,1,1,8.015-1.432ZM4.088,46.057a2.481,2.481,0,1,0,0-4.961,2.481,2.481,0,1,0,0,4.961Zm14.93-12.4A2.481,2.481,0,1,0,21.5,36.134,2.481,2.481,0,0,0,19.018,33.654Zm0,19.845a2.481,2.481,0,1,0-2.481-2.481A2.481,2.481,0,0,0,19.018,53.5Z",transform:"translate(1225.649 644.699)",fill:"#fff"}})])])]),d._v(" "),m("a",{staticClass:"btn",attrs:{href:"#"}},[d._v("Postulez maintenant")])]),d._v(" "),m("div",{staticClass:"contenu-annonce",domProps:{innerHTML:d._s(d.job.content)}})])])]),d._v(" "),m("div",{staticClass:"container postuler-section"},[m("h2",{staticClass:"th2"},[d._v("Postulez maintenant")]),d._v(" "),m("CVForm")],1)],1)}),[function(){var t=this._self._c;return t("ul",[t("li",[this._v("SECTEURS D’ACTIVITÉ : ALIMENTATION / BOISSONS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sect-informations"},[e("h2",[t._v("Informations")]),t._v(" "),e("ul",[e("li",[t._v("Spécifications reliées à l’emploi : Permanent")])])])}],!1,null,"0a163d53",null);e.default=component.exports;installComponents(component,{BannerPage:r(470).default,CVForm:r(578).default})}}]);