<template>
	<div>
		<h1>#{{ params.tag }}</h1>
		<notes-list :notes="notes"></notes-list>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const tag = params.tag
		const notes = await $content('notes')
			.only(['title', 'slug', 'createdAt', 'tags'])
			.where({ tags: { $contains: tag } })
			.sortBy('createdAt', 'asc')
			.fetch()

		return {
			notes,
			params,
		}
	},
}
</script>
