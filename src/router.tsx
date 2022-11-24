import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./router/Home";
import Project from "./router/Project";
import Resume from "./router/Resume";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
