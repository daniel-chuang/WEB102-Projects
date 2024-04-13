import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import DetailView from "./pages/DetailView.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index={true} path="/" element={<App />} />
      <Route index={false} path="/view/:id" element={<DetailView />} />
      <Route index={false} path="/update/:id" element={<UpdatePage />} />
      <Route index={false} path="/newcrew" element={<CreatePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>

  //   <Routes>
  //     <Route path="/" element={<Navbar />}>
  //       <Route index={true} element={<App />} />
  //       <Route
  //         index={false}
  //         path="/coinDetails/:symbol"
  //         element={<DetailView />}
  //       />
  //       <Route path="*" element={<NotFound />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
);
