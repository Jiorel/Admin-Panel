import { LogIn, SignUp } from "./features";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
    </BrowserRouter>
  );
}

export default App;
