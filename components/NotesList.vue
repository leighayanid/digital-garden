<template>
	<ul>
		<li v-for="note of notes" :key="note.slug">
			<base-card>
				<NuxtLink :to="`/notes/${note.slug}`">
					<div class="flex items-center">
						<p class="font-thin text-sm">{{ formatDate(note.date) }} -</p>
						<h2 class="ml-2 underline">{{ note.title }}</h2>
					</div>
				</NuxtLink>
			</base-card>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		notes: {
			type: Array,
			required: true,
		},
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', day: 'numeric', month: 'long' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>
