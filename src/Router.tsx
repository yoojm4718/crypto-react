import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyle";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/:coinId" element={<Coin />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default Router;
