<template>
	<blockquote :cite="cite">
		<slot />
		<footer v-if="cite">
			&mdash;
			<BaseLink :href="cite">{{ srcText }}</BaseLink>
		</footer>
	</blockquote>
</template>

<script>
export default {
	props: {
		cite: {
			type: String,
			default: "",
		},
		srcText: {
			type: String,
			default: "Source",
		},
	},
	data() {
		// This solely exists to appear in the coverage report
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import "@styles";
</style>
