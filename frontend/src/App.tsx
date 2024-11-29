import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MarketplacePage } from './pages/MarketplacePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MarketplacePage />
      {/* TODO: Add routing to switch between Marketplace and ListingDetail pages */}
    </QueryClientProvider>
  );
}

export default App;