<template>
	<UHeader>
		<template #title>
			<SvgoLogo class="h-6 w-auto" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />
		</template>
	</UHeader>
</template>

<script setup lang="ts">
	const items = computed(() => [
		{
			label: "Docs",
			to: "/"
		},
		{
			label: "Components",
			to: "/"
		},
		{
			label: "Figma",
			to: "https://www.figma.com/",
			target: "_blank"
		},
		{
			label: "Repository",
			to: "https://github.com/NicolaSpadari/nuxtui-template",
			target: "_blank"
		}
	]);
</script>
