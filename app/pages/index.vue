<template>
	<UContainer class="text-center space-y-10 mt-20">
		<div class="text-center space-y-4">
			<UH1>
				Some title
			</UH1>
			<UH2>{{ data }}</UH2>
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
	</UContainer>
</template>

<script lang="ts" setup>
	const { data } = await useFetch("/api/hello", {
		query: {
			text: "world"
		}
	});
</script>
