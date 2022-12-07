import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a09cbe6 = () => interopDefault(import('..\\pages\\alertes-emplois.vue' /* webpackChunkName: "pages/alertes-emplois" */))
const _23fd813d = () => interopDefault(import('..\\pages\\connexion.vue' /* webpackChunkName: "pages/connexion" */))
const _3dfe648c = () => interopDefault(import('..\\pages\\etudier.vue' /* webpackChunkName: "pages/etudier" */))
const _c2889958 = () => interopDefault(import('..\\pages\\immigrer.vue' /* webpackChunkName: "pages/immigrer" */))
const _62455fcc = () => interopDefault(import('..\\pages\\inscription.vue' /* webpackChunkName: "pages/inscription" */))
const _8ca5f1b4 = () => interopDefault(import('..\\pages\\liste-des-employeurs\\index.vue' /* webpackChunkName: "pages/liste-des-employeurs/index" */))
const _9f81ed6c = () => interopDefault(import('..\\pages\\mot-de-passe-oublie.vue' /* webpackChunkName: "pages/mot-de-passe-oublie" */))
const _5549c258 = () => interopDefault(import('..\\pages\\offres-emploi\\index.vue' /* webpackChunkName: "pages/offres-emploi/index" */))
const _564effb1 = () => interopDefault(import('..\\pages\\sinstaller.vue' /* webpackChunkName: "pages/sinstaller" */))
const _7620c904 = () => interopDefault(import('..\\pages\\travailler.vue' /* webpackChunkName: "pages/travailler" */))
const _9aaa38ec = () => interopDefault(import('..\\pages\\vivre.vue' /* webpackChunkName: "pages/vivre" */))
const _220d4f5a = () => interopDefault(import('..\\pages\\admin\\administrateurs\\index.vue' /* webpackChunkName: "pages/admin/administrateurs/index" */))
const _3a2ef3dd = () => interopDefault(import('..\\pages\\admin\\entreprises\\index.vue' /* webpackChunkName: "pages/admin/entreprises/index" */))
const _37e9f3f8 = () => interopDefault(import('..\\pages\\admin\\nouvelles\\index.vue' /* webpackChunkName: "pages/admin/nouvelles/index" */))
const _1a8679e6 = () => interopDefault(import('..\\pages\\admin\\tableau-de-bord.vue' /* webpackChunkName: "pages/admin/tableau-de-bord" */))
const _08feed4c = () => interopDefault(import('..\\pages\\gestion\\emplois\\index.vue' /* webpackChunkName: "pages/gestion/emplois/index" */))
const _2dcaa1b3 = () => interopDefault(import('..\\pages\\gestion\\tableau-de-bord.vue' /* webpackChunkName: "pages/gestion/tableau-de-bord" */))
const _44bf9ba9 = () => interopDefault(import('..\\pages\\admin\\administrateurs\\add.vue' /* webpackChunkName: "pages/admin/administrateurs/add" */))
const _0ef684ec = () => interopDefault(import('..\\pages\\admin\\entreprises\\add.vue' /* webpackChunkName: "pages/admin/entreprises/add" */))
const _652ef4d3 = () => interopDefault(import('..\\pages\\admin\\nouvelles\\add.vue' /* webpackChunkName: "pages/admin/nouvelles/add" */))
const _75b955a9 = () => interopDefault(import('..\\pages\\gestion\\emplois\\add.vue' /* webpackChunkName: "pages/gestion/emplois/add" */))
const _39093f7c = () => interopDefault(import('..\\pages\\admin\\administrateurs\\_id.vue' /* webpackChunkName: "pages/admin/administrateurs/_id" */))
const _a49b6cf6 = () => interopDefault(import('..\\pages\\admin\\entreprises\\_id.vue' /* webpackChunkName: "pages/admin/entreprises/_id" */))
const _03eab96c = () => interopDefault(import('..\\pages\\admin\\nouvelles\\_id.vue' /* webpackChunkName: "pages/admin/nouvelles/_id" */))
const _14751a42 = () => interopDefault(import('..\\pages\\gestion\\emplois\\_id.vue' /* webpackChunkName: "pages/gestion/emplois/_id" */))
const _4efe9b0e = () => interopDefault(import('..\\pages\\liste-des-employeurs\\_id.vue' /* webpackChunkName: "pages/liste-des-employeurs/_id" */))
const _85ea7388 = () => interopDefault(import('..\\pages\\offres-emploi\\_id.vue' /* webpackChunkName: "pages/offres-emploi/_id" */))
const _6543b4c6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alertes-emplois",
    component: _3a09cbe6,
    name: "alertes-emplois"
  }, {
    path: "/connexion",
    component: _23fd813d,
    name: "connexion"
  }, {
    path: "/etudier",
    component: _3dfe648c,
    name: "etudier"
  }, {
    path: "/immigrer",
    component: _c2889958,
    name: "immigrer"
  }, {
    path: "/inscription",
    component: _62455fcc,
    name: "inscription"
  }, {
    path: "/liste-des-employeurs",
    component: _8ca5f1b4,
    name: "liste-des-employeurs"
  }, {
    path: "/mot-de-passe-oublie",
    component: _9f81ed6c,
    name: "mot-de-passe-oublie"
  }, {
    path: "/offres-emploi",
    component: _5549c258,
    name: "offres-emploi"
  }, {
    path: "/sinstaller",
    component: _564effb1,
    name: "sinstaller"
  }, {
    path: "/travailler",
    component: _7620c904,
    name: "travailler"
  }, {
    path: "/vivre",
    component: _9aaa38ec,
    name: "vivre"
  }, {
    path: "/admin/administrateurs",
    component: _220d4f5a,
    name: "admin-administrateurs"
  }, {
    path: "/admin/entreprises",
    component: _3a2ef3dd,
    name: "admin-entreprises"
  }, {
    path: "/admin/nouvelles",
    component: _37e9f3f8,
    name: "admin-nouvelles"
  }, {
    path: "/admin/tableau-de-bord",
    component: _1a8679e6,
    name: "admin-tableau-de-bord"
  }, {
    path: "/gestion/emplois",
    component: _08feed4c,
    name: "gestion-emplois"
  }, {
    path: "/gestion/tableau-de-bord",
    component: _2dcaa1b3,
    name: "gestion-tableau-de-bord"
  }, {
    path: "/admin/administrateurs/add",
    component: _44bf9ba9,
    name: "admin-administrateurs-add"
  }, {
    path: "/admin/entreprises/add",
    component: _0ef684ec,
    name: "admin-entreprises-add"
  }, {
    path: "/admin/nouvelles/add",
    component: _652ef4d3,
    name: "admin-nouvelles-add"
  }, {
    path: "/gestion/emplois/add",
    component: _75b955a9,
    name: "gestion-emplois-add"
  }, {
    path: "/admin/administrateurs/:id",
    component: _39093f7c,
    name: "admin-administrateurs-id"
  }, {
    path: "/admin/entreprises/:id",
    component: _a49b6cf6,
    name: "admin-entreprises-id"
  }, {
    path: "/admin/nouvelles/:id",
    component: _03eab96c,
    name: "admin-nouvelles-id"
  }, {
    path: "/gestion/emplois/:id",
    component: _14751a42,
    name: "gestion-emplois-id"
  }, {
    path: "/liste-des-employeurs/:id?",
    component: _4efe9b0e,
    name: "liste-des-employeurs-id"
  }, {
    path: "/offres-emploi/:id?",
    component: _85ea7388,
    name: "offres-emploi-id"
  }, {
    path: "/",
    component: _6543b4c6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
