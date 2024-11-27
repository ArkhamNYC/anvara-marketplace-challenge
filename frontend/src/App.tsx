import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuctionView } from './components/AuctionView';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4">
        <AuctionView id={1} />
      </div>
    </QueryClientProvider>
  );
}

export default App;