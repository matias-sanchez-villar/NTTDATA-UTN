import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./routes/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>
);

/*
<BrowserRouter>
    <App />
</BrowserRouter>
*/
