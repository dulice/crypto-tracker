import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Market from "./pages/Market";
import CryptoDetails from "./pages/CryptoDetails";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/market" element={ <Market /> } />
          <Route path="/discover" element={ <Discover /> } />
          <Route path="/market/:id" element={ < CryptoDetails /> } />
          <Route path="/signin" element={ <SignIn /> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
