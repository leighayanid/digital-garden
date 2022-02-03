<template>
	<nav class="dark:bg-slate-800 bg-slate-100 p-4">
		<p>Table of Contents</p>
		<ul>
			<li
				v-for="link of toc"
				:key="link.id"
				:class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
			>
				<NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		toc: {
			type: Array,
			required: true,
		},
	},
}
</script>
