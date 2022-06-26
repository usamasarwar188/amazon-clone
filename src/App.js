import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
// ---
// new changes
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
