<template>
	<div>
		<app-hero />
		<hr class="mt-5 mb-5" />
		<div class="btn-group">
			<button
				class="dark:bg-slate-800 bg-slate-200 px-2 py-1 text-sm rounded-full"
				@click="sortBy('desc')"
			>
				Latest
			</button>
			<button
				class="dark:bg-slate-800 bg-slate-200 px-2 py-1 text-sm rounded-full"
				@click="sortBy('asc')"
			>
				Oldest
			</button>
		</div>
		<div class="md:flex flex-col-reverse md:flex-row items-baseline">
			<notes-list :notes="notes" class="mt-2 flex-1" />
			<app-tags
				:tags="tags"
				class="
					md:w-1/4
					w-full
					dark:bg-slate-800
					bg-slate-200
					rounded-md
					p-2
					md:mt-0
					mt-2
				"
			/>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const notes = await $content('notes')
			.only(['title', 'slug', 'date', 'tags'])
			.sortBy('date', 'desc')
			.fetch()

		const tags = notes.reduce((tags, note) => {
			note.tags.forEach((tag) => {
				if (!tags.includes(tag)) {
					tags.push(tag)
				}
			})

			return tags
		}, [])

		return {
			notes,
			tags,
		}
	},

	head() {
		return {
			script: [
				{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
			],
		}
	},

	methods: {
		// filter notes by ascending/descending order of createdAt
		async sortBy(order) {
			this.notes = await this.$content('notes')
				.only(['title', 'slug', 'date', 'tags'])
				.sortBy('date', order)
				.fetch()
		},
	},
}
</script>
