import { LogIn, SignUp } from "./features";
import { Route, Switch } from "react-router-dom";
import { useAuth } from "./contexts";
// import { PrivateRoute } from "./components";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <Switch>
      {/* <PrivateRoute exact path="/" component={null} /> */}
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
    </Switch>
  );
}

export default App;
