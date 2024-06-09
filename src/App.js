import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/counter";
import CounteruseMemo from "./features/counter/counter-using-useMemo";
import CounteuseRef from "./features/counter/counter-using-usRef";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <CounteruseMemo /> */}
        <CounteuseRef />
      </header>
    </div>
  );
}

export default App;
