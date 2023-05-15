<script lang="ts">
	import type { AAQuotesType, BigBookQuotesType } from '$lib/types'
	import { onMount } from 'svelte'

	export let quotes: AAQuotesType | BigBookQuotesType
	export let speed: number = 3000

	let index = 0

	function nextQuote() {
		index = (index + 1) % quotes.length
	}

	function prevQuote() {
		index = (index + quotes.length - 1) % quotes.length
	}

	onMount(() => {
		let interval = setInterval(() => {
			index = (index + 1) % quotes.length
		}, speed)

		return () => clearInterval(interval)
	})

	$: $quote = quotes[index]
</script>

<div class="slidder">
	<button on:click={prevQuote}>prev</button>
	<div class="quote">
		<p>{$quote.quote}</p>
		{#if $quote.book_location}
			<p>{$quote.book_location}</p>
		{/if}
	</div>
	<button on:click={nextQuote}>next</button>
</div>

<style>
</style>
