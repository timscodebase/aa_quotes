import type { PageServerLoad } from './$types'
import { base_url } from '$lib/config'

export const load = (async () => {
  const aa_quotes_res = await fetch(`${base_url}/api/aa_quotes`)
  const big_book_quotes_res = await fetch(`${base_url}/api/big_book_quotes`)
  const aa_quotes = await aa_quotes_res.json()  
  const big_book_quotes = await big_book_quotes_res.json()    

  return {
    aa_quotes,
    big_book_quotes
  };
}) satisfies PageServerLoad;