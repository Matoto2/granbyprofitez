(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{493:function(e,t,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("beec99d0",content,!0,{sourceMap:!1})},530:function(e,t,r){"use strict";r(493)},531:function(e,t,r){var o=r(21)(!1);o.push([e.i,"form[data-v-ca319c72]{grid-template-columns:2fr 1fr;grid-gap:3rem;gap:3rem;background-color:#363636;border-radius:10px;padding:3rem;color:#fff}.left[data-v-ca319c72],form[data-v-ca319c72]{display:grid}.left[data-v-ca319c72]{grid-template-columns:repeat(12,1fr);grid-gap:1.5rem;gap:1.5rem}.half[data-v-ca319c72]{grid-column:span 6}.full[data-v-ca319c72]{grid-column:1/-1}.left input[data-v-ca319c72]{height:60px}.left input[data-v-ca319c72],.left textarea[data-v-ca319c72]{border-radius:10px;padding:1rem}.checkbox-wrapper[data-v-ca319c72]{display:flex;grid-gap:1rem;gap:1rem}.title[data-v-ca319c72]{font-size:1.5rem;font-weight:700}.dragndrop[data-v-ca319c72]{border-radius:10px;border:1px solid #fff;background-color:hsla(0,0%,100%,.2);text-align:center;padding:1.5rem;margin:1rem 0}.dragndrop label[data-v-ca319c72]{background:#eda008;border-radius:10px;padding:.3rem 1rem;display:inline-block;margin-top:.5rem}.btn-upload[data-v-ca319c72]{font-size:.8rem;padding:.5rem 1rem;cursor:pointer}.mess[data-v-ca319c72]{margin-top:3rem}",""]),e.exports=o},578:function(e,t,r){"use strict";r.r(t);r(35);var o=r(454),l=r.n(o),n=r(505),c=r.n(n),d=r(504),m=r.n(d),f=r(479),v=r.n(f),_={components:{InputText:l.a,InputMask:c.a,Textarea:m.a,Checkbox:v.a},data:function(){return{form:{prenom:"",nom:"",telephone:"",code_postal:"",courriel:"",message:"",cv:"",accepte:!0,files:[]}}},methods:{submit:function(){console.log("submit!!!")}}},h=(r(530),r(6)),component=Object(h.a)(_,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"left"},[t("InputText",{staticClass:"half",attrs:{required:"",type:"text",placeholder:"Prénom*"},model:{value:e.form.prenom,callback:function(t){e.$set(e.form,"prenom",t)},expression:"form.prenom"}}),e._v(" "),t("InputText",{staticClass:"half",attrs:{required:"",type:"text",placeholder:"Nom*"},model:{value:e.form.nom,callback:function(t){e.$set(e.form,"nom",t)},expression:"form.nom"}}),e._v(" "),t("InputMask",{staticClass:"half",attrs:{mask:"999 999-9999",placeholder:"Téléphone*"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}}),e._v(" "),t("InputMask",{staticClass:"half",attrs:{mask:"a9a 9a9",placeholder:"Code postal*"},model:{value:e.form.code_postal,callback:function(t){e.$set(e.form,"code_postal",t)},expression:"form.code_postal"}}),e._v(" "),t("InputText",{staticClass:"full",attrs:{required:"",type:"email",placeholder:"Courriel*"},model:{value:e.form.courriel,callback:function(t){e.$set(e.form,"courriel",t)},expression:"form.courriel"}}),e._v(" "),t("Textarea",{staticClass:"full",attrs:{rows:"4",placeholder:"Message à l’employeur..."},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),e._v(" "),t("div",{staticClass:"checkbox-wrapper full"},[t("Checkbox",{attrs:{id:"acceptee",binary:!0},model:{value:e.form.accepte,callback:function(t){e.$set(e.form,"accepte",t)},expression:"form.accepte"}}),e._v(" "),t("label",{attrs:{for:"acceptee"}},[e._v("\n\t\t\t\t\tEn postulant sur un emploi via Granby Profitez, je comprends que mon prénom, mon nom, mon courriel, mon téléphone ainsi que mon code postal seront visibles par les administrateurs du site Internet (Granby Industriel) et par l’employeur ci-haut nommé. J’accepte par le fait même d’être contacté pour un suivi d’embauche par l’employeur et/ou par les administrateurs.\n\t\t\t\t")])],1)],1),e._v(" "),t("div",{staticClass:"right"},[t("span",{staticClass:"title"},[e._v("Joindre vos documents comme votre C.V. et votre lettre de présentation")]),e._v(" "),t("client-only",[t("div",{staticClass:"upload"},[e.form.files.length?t("ul",e._l(e.form.files,(function(r){return t("li",{key:r.id},[t("span",[e._v(e._s(r.name))]),e._v(" -\n\t\t\t\t\t\t\t"),t("span",[e._v(e._s(r.size))]),e._v(" -\n\t\t\t\t\t\t\t"),r.error?t("span",[e._v(e._s(r.error))]):r.success?t("span",[e._v("accès")]):r.active?t("span",[e._v("actif")]):t("span")])})),0):t("div",{staticClass:"dragndrop"},[t("span",[e._v("Glissez vos fichier ici "),t("br"),e._v("ou"),t("br")]),e._v(" "),t("label",{attrs:{for:"file"}},[e._v("Choisir des fichiers")])]),e._v(" "),t("file-upload",{ref:"upload",staticClass:"btn btn-upload",attrs:{multiple:!0,drop:!0,"drop-directory":!0},model:{value:e.form.files,callback:function(t){e.$set(e.form,"files",t)},expression:"form.files"}},[e._v("\n\t\t\t\t\t\tAjouter des fichiers\n\t\t\t\t\t")])],1)]),e._v(" "),t("p",{staticClass:"mess"},[e._v("En cliquant sur “envoyer”, ce formulaire de demande d’emploi sera directement transféré à l’employeur via le site granby-profitez.com ")]),e._v(" "),t("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Envoyer")])],1)])])}),[],!1,null,"ca319c72",null);t.default=component.exports}}]);