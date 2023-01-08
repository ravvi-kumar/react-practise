import "./App.css";
import { MyContextProvider } from "./context/myContext";
import MyAnotherComp from "./MyAnotherComp";
import MyComp from "./MyComp";
import ObjArrComp from "./ObjArrComp";

function App() {
  console.log("App Component rendered");
  return (
    <div className="App">
      {/* <MyContextProvider>
        <MyComp />
      </MyContextProvider>
      <MyContextProvider>
        <MyAnotherComp />
      </MyContextProvider> */}
      <ObjArrComp />
    </div>
  );
}

export default App;
