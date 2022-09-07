import "./App.css";
import { Button, Input, Checkbox } from "./components";

function App() {
  return (
    <div className="App">
      {/* <div className="card">
        <div className="card__header">
          <span className="card__header__title">Sign In</span>
        </div> */}
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Checkbox checked={true} />
      <Button type="primary">Sign Up</Button>
      {/* </div> */}
    </div>
  );
}

export default App;
