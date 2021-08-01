import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import CakeShop from "./Components/CakeShop";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop />
      </div>
    </Provider>
  );
}

export default App;
