// TODO: Implement hook for fetching listings
// Requirements:
// - Use GraphQL query (urql or Apollo)
// - Support filtering by type (Event/OutOfHome/OnProduct)
// - Support search by name
// - Support sorting by date
// - Handle loading and error states

export function useListings() {
  return {
    listings: [],
    loading: false,
    error: null,
  };
}
