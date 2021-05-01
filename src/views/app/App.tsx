import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "./Routes";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
