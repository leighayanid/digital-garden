<template>
	<div class="flex items-start text-left">
		<img
			src="https://github.com/leighayanid.png"
			class="h-20 w-20 rounded-full mr-3"
		/>
		<div class="leading-1 items-center">
			<p>Author: Leigh Dinaya</p>
			<p class="text-gray-500">Front-end developer, writer, and a gym rat.</p>
			<app-tags :tags="tags" class="mb-5 mx-auto" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tags: {
			type: Array,
			required: true,
		},
	},
}
</script>
