<template>
	<div>
		<input
			v-model="searchQuery"
			type="search"
			autocomplete="off"
			placeholder="Search Notes"
			class="
				px-3
				py-1
				rounded-full
				text-sm text-slate-800
				border-1 border
				relative
			"
		/>
		<ul v-if="notes.length" class="absolute" @click="searchQuery = ''">
			<li v-for="note of notes" :key="note.slug" class="p-2">
				<NuxtLink :to="`/notes/${note.slug}`" class="p-1">
					{{ note.title }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: '',
			notes: [],
		}
	},
	watch: {
		async searchQuery(searchQuery) {
			if (!searchQuery) {
				this.notes = []
				return
			}
			this.notes = await this.$content('notes')
				.limit(6)
				.search(searchQuery)
				.fetch()
		},
	},
	methods: {
		// clear search query and hide search results
		close() {
			this.searchQuery = ''
		},
	},
}
</script>
