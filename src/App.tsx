import { LogIn, SignUp } from "./features";
import { Route, Switch } from "react-router-dom";
import { useAuth } from "./contexts";
import { Layout, PrivateRoute } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  const { loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute path="/" component={Layout} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
