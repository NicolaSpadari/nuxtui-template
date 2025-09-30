import constants from "./constants";

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@nuxt/eslint",
		"@nuxt/image",
		"@nuxt/ui",
		"reka-ui/nuxt",
		"nuxt-svgo"
	],
	app: {
		head: {
			title: constants.name,
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "format-detection", content: "no" },
				{ name: "description", content: constants.description }
			],
			noscript: [
				{ textContent: "JavaScript is required to run this project" }
			]
		},
		pageTransition: {
			name: "page",
			mode: "out-in"
		},
		layoutTransition: {
			name: "layout",
			mode: "out-in"
		}
	},
	ui: {
		mdc: true,
		content: true
	},
	css: [
		"@/assets/css/main.css"
	],
	image: {
		provider: "ipx"
	},
	svgo: {
		autoImportPath: "@/assets/"
	},
	imports: {
		presets: [
			{
				from: "vue-router",
				imports: ["RouteParams"],
				type: true
			}
		]
	},
	eslint: {
		config: {
			standalone: false
		}
	},
	experimental: {
		typedPages: true
	},
	devtools: { enabled: true },
	compatibilityDate: "2025-09-01"
});
