import { aa_quotes } from "$lib/data/aa_qoutes";
import type { AAQuotesType } from "./types";

export async function getAAQuotes(): Promise<AAQuotesType[]> {
  try {
    const res = new Response(JSON.stringify(aa_quotes), {
      headers: {
          "content-type": "application/json",
      },
    });
    return await res.json();
  } catch (error: any) {
    const res = new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
    return await res.json();
  }
}