<template>
	<UHeader>
		<template #title>
			<SvgoLogo class="h-6 w-auto" />
		</template>

		<UNavigationMenu :items="items" />

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" />
		</template>

		<template #right>
			<UColorModeButton />
		</template>
	</UHeader>
</template>

<script setup lang="ts">
	const items = computed(() => [
		{
			label: "Page",
			to: "/"
		},
		{
			label: "Page",
			to: "/"
		},
		{
			label: "Page",
			to: "/"
		},
		{
			label: "Page",
			to: "/"
		}
	]);
</script>
