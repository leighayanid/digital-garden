<template>
	<div>
		<p class="mb-2">Tags:</p>
		<ul class="flex flex-wrap mr-2">
			<li
				v-for="(tag, index) in tags"
				:key="index"
				class="
					mr-1
					mb-1
					border border-gray-500
					text-gray-500
					px-2
					rounded-full
					text-sm
					hover:bg-black hover:text-white
				"
			>
				<NuxtLink :to="`/notes/tag/${tag}`">{{ tag }}</NuxtLink>
			</li>
		</ul>
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
