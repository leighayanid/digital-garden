<template>
	<div>
		<app-hero />
		<hr class="mt-5 mb-5" />
		<div class="">
			<base-collapse class="mt-5">
				<div class="btn-group">
					<button
						class="
							border
							dark:bg-slate-800
							bg-slate-200
							px-2
							py-1
							text-sm
							rounded-full
						"
						@click="sortBy('desc')"
					>
						Latest
					</button>
					<button
						class="
							border
							px-2
							py-1
							text-sm
							import
							CollapseComp
							from
							'~/components/base/CollapseComp.vue'
							rounded-full
						"
						@click="sortBy('asc')"
					>
						Oldest
					</button>
				</div>
				<app-tags
					:tags="tags"
					class="dark:bg-slate-800 bg-slate-200 p-2 md:mt-0 mt-5 rounded-lg"
				/>
			</base-collapse>
			<notes-list :notes="notes" class="mt-2 flex-1" />
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
