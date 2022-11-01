import { Route, Switch } from "react-router-dom";
import { useAuth } from "contexts";
import { LogIn, SignUp } from "features";
import { Layout, PrivateRoute } from "components";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <PrivateRoute path="/" component={Layout} />
    </Switch>
  );
}

export default App;
