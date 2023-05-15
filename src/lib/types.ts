export type AAQuotesType = {
  quote: string;
}

export type BigBookQuotesType = {
  quote: string;
  book_location: string;
}

export type PageData = {
  aa_quotes: AAQuotesType[];
  
}