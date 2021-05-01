import { QueryClient, QueryClientProvider } from "react-query";
import Header from "views/header/Header";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

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
    <Router forceRefresh>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
