export const BusinessForm = () => import('../..\\components\\Admin\\Forms\\BusinessForm.vue' /* webpackChunkName: "components/business-form" */).then(c => wrapFunctional(c.default || c))
export const NewsForm = () => import('../..\\components\\Admin\\Forms\\NewsForm.vue' /* webpackChunkName: "components/news-form" */).then(c => wrapFunctional(c.default || c))
export const UserForm = () => import('../..\\components\\Admin\\Forms\\UserForm.vue' /* webpackChunkName: "components/user-form" */).then(c => wrapFunctional(c.default || c))
export const JobForm = () => import('../..\\components\\Gestion\\Forms\\JobForm.vue' /* webpackChunkName: "components/job-form" */).then(c => wrapFunctional(c.default || c))
export const AdminLayout = () => import('../..\\components\\Admin\\AdminLayout.vue' /* webpackChunkName: "components/admin-layout" */).then(c => wrapFunctional(c.default || c))
export const BusinessLayout = () => import('../..\\components\\Gestion\\BusinessLayout.vue' /* webpackChunkName: "components/business-layout" */).then(c => wrapFunctional(c.default || c))
export const InteractiveMap = () => import('../..\\components\\LmMap\\InteractiveMap.vue' /* webpackChunkName: "components/interactive-map" */).then(c => wrapFunctional(c.default || c))
export const HomeBanner = () => import('../..\\components\\Home\\HomeBanner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c))
export const HomeGalerie = () => import('../..\\components\\Home\\HomeGalerie.vue' /* webpackChunkName: "components/home-galerie" */).then(c => wrapFunctional(c.default || c))
export const HomeImgLinks = () => import('../..\\components\\Home\\HomeImgLinks.vue' /* webpackChunkName: "components/home-img-links" */).then(c => wrapFunctional(c.default || c))
export const HomeMap = () => import('../..\\components\\Home\\HomeMap.vue' /* webpackChunkName: "components/home-map" */).then(c => wrapFunctional(c.default || c))
export const HomeSearch = () => import('../..\\components\\Home\\HomeSearch.vue' /* webpackChunkName: "components/home-search" */).then(c => wrapFunctional(c.default || c))
export const BackToTop = () => import('../..\\components\\Layout\\BackToTop.vue' /* webpackChunkName: "components/back-to-top" */).then(c => wrapFunctional(c.default || c))
export const BannerPage = () => import('../..\\components\\Layout\\BannerPage.vue' /* webpackChunkName: "components/banner-page" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Layout\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Hamburger = () => import('../..\\components\\Layout\\Hamburger.vue' /* webpackChunkName: "components/hamburger" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Layout\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LeftMenu = () => import('../..\\components\\Layout\\LeftMenu.vue' /* webpackChunkName: "components/left-menu" */).then(c => wrapFunctional(c.default || c))
export const LogoutBtn = () => import('../..\\components\\Layout\\LogoutBtn.vue' /* webpackChunkName: "components/logout-btn" */).then(c => wrapFunctional(c.default || c))
export const CVForm = () => import('../..\\components\\Forms\\CVForm.vue' /* webpackChunkName: "components/c-v-form" */).then(c => wrapFunctional(c.default || c))
export const LmFileUpload = () => import('../..\\components\\Forms\\LmFileUpload.vue' /* webpackChunkName: "components/lm-file-upload" */).then(c => wrapFunctional(c.default || c))
export const SsrCarousel = () => import('../..\\node_modules\\vue-ssr-carousel\\index.js' /* webpackChunkName: "components/ssr-carousel" */).then(c => wrapFunctional(c.default || c))
export const BarreTitreTexte = () => import('../..\\components\\BarreTitreTexte.vue' /* webpackChunkName: "components/barre-titre-texte" */).then(c => wrapFunctional(c.default || c))
export const FieldWrapper = () => import('../..\\components\\FieldWrapper.vue' /* webpackChunkName: "components/field-wrapper" */).then(c => wrapFunctional(c.default || c))
export const JobLink = () => import('../..\\components\\JobLink.vue' /* webpackChunkName: "components/job-link" */).then(c => wrapFunctional(c.default || c))
export const JobsDisplay = () => import('../..\\components\\JobsDisplay.vue' /* webpackChunkName: "components/jobs-display" */).then(c => wrapFunctional(c.default || c))
export const JobSearch = () => import('../..\\components\\JobSearch.vue' /* webpackChunkName: "components/job-search" */).then(c => wrapFunctional(c.default || c))
export const JobsSlider = () => import('../..\\components\\JobsSlider.vue' /* webpackChunkName: "components/jobs-slider" */).then(c => wrapFunctional(c.default || c))
export const TypeWrite = () => import('../..\\components\\TypeWrite.vue' /* webpackChunkName: "components/type-write" */).then(c => wrapFunctional(c.default || c))
export const Youtube = () => import('../..\\components\\Youtube.vue' /* webpackChunkName: "components/youtube" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
