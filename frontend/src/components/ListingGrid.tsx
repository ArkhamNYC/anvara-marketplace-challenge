import { ListingCard } from "./ListingCard";

interface ListingGridProps {
    listings: Array<{
      id: number;
      name: string;
      description: string;
      startDate?: Date;
      endDate?: Date;
    }>;
  }
  
  export function ListingGrid({ listings }: ListingGridProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* TODO: Implement grid layout
            Required Features:
            - Responsive grid of ListingCards
            - Loading skeleton
            - Empty state
            - Error state
        */}
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    );
  }