 import { QueryClient, QueryClientProvider } from "react-query";
 import { ReactQueryDevtools } from 'react-query/devtools'
  import Repositories from "./components/Repositories";
 
  const queryClient = new QueryClient({});
 
  const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
       
 
        {/* The rest of your application */}
      <h1>hello</h1>
      <Repositories />
        <ReactQueryDevtools initialIsOpen={false} /> 
 
      </QueryClientProvider>
    );
  };
 
  export default App;