import { QueryClient, QueryClientProvider } from "react-query";
import Header from "views/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "contexts/filterProvider";

import "./App.css";

import { ThemeWrapper } from "./App.style";

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
        <FilterProvider>
          <ThemeWrapper>
            <Header />
            <Routes />
          </ThemeWrapper>
        </FilterProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
