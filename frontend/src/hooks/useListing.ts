// TODO: Implement hook for fetching single listing
// Requirements:
// - Use GraphQL query (urql or Apollo)
// - Fetch detailed listing information
// - Include related data (location, pricing)
// - Handle loading and error states

export function useListing(id: number) {
  return {
    listing: null,
    loading: false,
    error: null,
  };
}
