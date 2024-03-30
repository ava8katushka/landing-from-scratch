import "./App.css";
import "bulma/css/bulma.min.css";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="columns">
        <div className="column is-one-third">
          <Menu/>
        </div>
        <div className="column is-two-thirds">
          <Page/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
