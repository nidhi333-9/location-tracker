import "./App.css";
import SearchBar from "../components/SearchBar";
import Maps from "../components/Maps";
function App() {
  return (
    <div className="App">
      <div className="box">
        <h4>Get the Population of any country!</h4>
        <SearchBar />
        <Maps />
      </div>
    </div>
  );
}

export default App;
