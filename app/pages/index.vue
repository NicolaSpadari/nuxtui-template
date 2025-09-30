<template>
	<div class="text-center space-y-10 mt-20">
		<div class="text-center space-y-4">
			<ProseH1>
				Some title
			</ProseH1>
			<ProseH2>{{ data?.value }}</ProseH2>
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
	</div>
</template>

<script lang="ts" setup>
	const { data } = await useFetch<MyInterface>("/api/hello", {
		query: {
			text: "world"
		}
	});
</script>
