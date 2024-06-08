<script>
	export let data;
</script>

{#if !data.session?.loggedIn}
	<slot />
{:else}
	<!-- Login -->
{/if}

<style lang="scss" global>
    @import 'src/styles/style.scss';
</style>