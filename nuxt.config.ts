export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@nuxt/eslint",
		"@nuxt/image",
		"@nuxt/ui",
		"reka-ui/nuxt",
		"nuxt-svgo"
	],
	extends: [
		["github:NicolaSpadari/layer-ui", { auth: process.env.REPO_TOKEN }]
	],
	app: {
		head: {
			title: "Nuxt 3 + NuxtUI 3 template",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "format-detection", content: "no" }
			],
			noscript: [
				{ children: "JavaScript is required to run this project" }
			]
		}
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
	experimental: {
		typedPages: true
	},
	eslint: {
		config: {
			standalone: false
		}
	},
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: "2025-01-01"
});
