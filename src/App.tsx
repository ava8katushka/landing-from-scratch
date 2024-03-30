import "./App.css";
import "bulma/css/bulma.min.css";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="column is-one-third">
          <Menu/>
        </div>
        <div className="column">Second column</div>
      </div>
    </div>
  );
}

export default App;
