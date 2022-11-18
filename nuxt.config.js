export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'granbyprofitez',
		htmlAttrs: {
			lang: 'fr'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: ''},
			{name: 'format-detection', content: 'telephone=no'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'normalize.css',
		'primeflex/primeflex.css',
		'~/assets/css/style.css',
		'quill/dist/quill.core.css',
		'quill/dist/quill.snow.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		"~/plugins/axios.js",
		"~/plugins/local-storage.js",
		"~/plugins/slugify",
		{ src: "~/plugins/vue_trix", mode: "client", ssr: false },
		{ src: "~/plugins/confirmationService", mode: "client", ssr: false },
		{ src: "~/plugins/toastService", mode: "client", ssr: false },
		{ src: "~/plugins/vcalendar", ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: [
			'~/components',
			'~/components/Admin',
			'~/components/Admin/Forms',
		]
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/moment'
	],
	moment: {
		timezone: true,
		defaultTimezone: 'America/New_York',
		defaultLocale: "fr",
		locales: ["fr"]
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
		'primevue/nuxt',
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: 'http://api.granby-profitez.com/v1',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// https://github.com/primefaces/primevue/issues/844
		transpile: ['primevue'],
	}
}
