<template>
	<div class="h-auto">
		<article class="space-y-2 my-5">
			<div class="text-center mx-auto">
				<h1 class="text-xl font-extrabold">{{ note.title }}</h1>

				<p class="italic">{{ note.description }}</p>

				<p class="text-gray-500">
					Article last updated: {{ formatDate(note.updatedAt) }}
				</p>

				<nuxt-img
					v-if="note.img"
					:src="`/images/${note.img}`"
					:alt="note.alt"
					class="rounded-lg my-5"
				/>
			</div>

			<table-of-content v-if="note.toc" :toc="note.toc" class="my-5" />

			<nuxt-content
				:document="note"
				tag="note"
				class="prose dark:text-slate-50 dark:prose-headings:text-slate-50"
			></nuxt-content>

			<prev-next :prev="prev" :next="next" class="my-5" />
		</article>

		<div class="flex justify-between items-center my-10">
			<author :author="note.author" :tags="note.tags" class="mx-auto" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Noteslug',

	async asyncData({ $content, params }) {
		const note = await $content('notes', params.slug).fetch()
		const [prev, next] = await $content('notes')
			.only(['title', 'slug'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch()
		return { note, prev, next }
	},

	head() {
		return {
			title: this.note.title,
			meta: [
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: this.note.title },
				{ hid: 'og:type', property: 'og:type', content: 'note' },
				{
					hid: 'og:image',
					property: 'og:image',
					content: `https://my-site.com/${this.note.image}`,
				},
				// Twitter Card
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.note.title,
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: `https://my-site.com/${this.note.image}`,
				},
			],
		}
	},

	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>
