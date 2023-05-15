<script lang="ts">
	import QuoteSlider from '$lib/components/QuoteSlider.svelte';
	import type { PageData } from '$lib/types';

	export let data: PageData;
	$: aa_quotes = data.aa_quotes;
	$: big_book_quotes = data.big_book_quotes;
</script>

<QuoteSlider quotes={aa_quotes} />
<QuoteSlider quotes={big_book_quotes} />

<style>
</style>
