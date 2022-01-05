import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
