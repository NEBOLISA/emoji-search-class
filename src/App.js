import { Component } from "react";
import "./App.css";
import Searchbox from "../../emojisearch1/src/components/Searchbox";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="app-name">&#128525;Emoji Search&#128525;</h1>
          <Searchbox />
        </header>
      </div>
    );
  }
}

export default App;
