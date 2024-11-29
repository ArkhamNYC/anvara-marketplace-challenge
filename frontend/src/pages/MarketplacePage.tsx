import { ListingGrid } from "../components/ListingGrid";

export function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Marketplace</h1>
        {/* TODO: Implement filtering/search
            Required Features:
            - Search by listing name
            - Filter by type (Event, OutOfHome, OnProduct)
            - Sort by date
        */}
      </header>
      <main>
        <ListingGrid 
          listings={[]} /* TODO: Replace with fetched data */
        />
        {/* TODO: Implement:
            - GraphQL data fetching
            - Loading state
            - Error handling
        */}
      </main>
    </div>
  );
}