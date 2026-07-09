import { Provider } from "@/components/ui/provider";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'

//flag icons
import "flag-icons/css/flag-icons.min.css";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <div style={{ margin: "auto", maxWidth: "1320px" }}>
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
