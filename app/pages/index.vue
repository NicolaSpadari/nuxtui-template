<template>
	<UContainer class="text-center mt-20">
		<div class="text-center space-y-4 mb-10">
			<h1 class="text-3xl md:text-5xl font-bold">
				Nuxt 3 + NuxtUI 3 starter
			</h1>
			<p class="text-xl">
				{{ data }}
			</p>
		</div>

		<UModal title="Modal title">
			<UButton label="Open modal" color="neutral" variant="subtle" />
			<template #description>
				<VisuallyHidden>
					hidden desc
				</VisuallyHidden>
			</template>
			<template #body>
				<p>some content</p>
			</template>
		</UModal>
	</ucontainer>
</template>

<script lang="ts" setup>
	const { data } = await useFetch("/api/hello", {
		query: {
			text: "world"
		}
	});
</script>
