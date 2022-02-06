<template>
	<div class="flex flex-col">
		<div>
			<button
				class="flex items-center text-sm border rounded-lg px-2 py-1"
				@click="toggle = !toggle"
			>
				Filter
				<span
					><svg
						v-if="toggle"
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 15l7-7 7 7"
						/>
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</span>
			</button>
		</div>

		<div v-show="toggle" class="bg-slate-800 p-2 mt-2 rounded-lg">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			toggle: false,
		}
	},
}
</script>
