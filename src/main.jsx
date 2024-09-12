import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster
      toastOptions={{
        style: {
          background: "rgb(34 54 211)",
          color: "#fff",
        },
      }}
    />
    <App />
  </>
);
