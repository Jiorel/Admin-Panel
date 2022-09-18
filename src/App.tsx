import { LogIn, SignUp } from "./features";
import { Route } from "react-router-dom";
import { useAuth } from "./contexts";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
    </>
  );
}

export default App;
