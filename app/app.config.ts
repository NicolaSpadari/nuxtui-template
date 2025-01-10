export default defineAppConfig({
	ui: {
		colors: {
			neutral: "zinc"
		},
		button: {
			slots: {
				base: "cursor-pointer"
			}
		},
		dropdownMenu: {
			slots: {
				item: "cursor-pointer"
			}
		},
		modal: {
			slots: {
				description: "mt-0"
			}
		}
	}
});
