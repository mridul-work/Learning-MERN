import NavBar from "./components/NavBar";
import Form1 from "./components/Form1";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="navbar">
          <NavBar />/
        </div>

        <div className="form1">
          <Form1 />
        </div>
      </div>
    </div>
  );
}

export default App;
