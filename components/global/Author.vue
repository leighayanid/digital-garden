<template>
	<div class="flex items-start text-left">
		<img :src="author.image" class="h-20 w-20 rounded-full mr-3" />
		<div class="leading-1 items-center">
			<p>Author: {{ author.name }}</p>
			<p class="text-gray-500">{{ author.bio }}</p>
			<app-tags :tags="tags" class="mb-5 mx-auto" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		author: {
			type: Object,
			required: true,
		},
		tags: {
			type: Array,
			required: true,
		},
	},
}
</script>
