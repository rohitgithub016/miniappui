import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { store } from "./store.ts";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </Provider>
  </StrictMode>
);
