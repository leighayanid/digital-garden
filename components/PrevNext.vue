<template>
	<div class="flex justify-between">
		<div v-if="prev" class="flex flex-col border px-4 py-2">
			<h1>Previous</h1>
			<NuxtLink
				:to="`/notes/${prev.slug}`"
				class="font-bold text-primary hover:underline p-2 border-primary"
			>
				{{ prev.title }}
			</NuxtLink>
		</div>
		<div class="flex flex-col border px-4 py-2">
			<h1>Next</h1>
			<NuxtLink
				v-if="next"
				:to="`/notes/${next.slug}`"
				class="font-bold hover:underline text-xl"
			>
				{{ next.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		prev: {
			type: Object,
			default: () => null,
		},
		next: {
			type: Object,
			default: () => null,
		},
	},
}
</script>
