import { LogIn, SignUp } from "./features";
import { BrowserRouter, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

function App() {
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const localStorageUser = localStorage.getItem("user");

  //   if (localStorageUser) {
  //     setUser(JSON.parse(localStorageUser));
  //   }

  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
    </BrowserRouter>
  );
}

export default App;
