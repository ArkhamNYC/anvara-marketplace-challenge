interface ListingCardProps {
    id: number;
    name: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
  }
  
  export function ListingCard({ id, name, description }: ListingCardProps) {
    return (
      <div data-id={id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        {/* TODO: Implement listing card
            Required Features:
            - Display listing image if available
            - Show listing type badge
            - Display dates
            - Add link to detail page
        */}
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }