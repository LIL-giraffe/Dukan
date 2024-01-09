import Home from "@mui/icons-material/Home";
import Orders from "./components/Orders"
import Layout from "./components/Layout";
import Payments from "./components/Payments";
import Products from "./components/Products"
import Delivery from "./components/Delivery"
import Marketing from "./components/Marketing"
import Analytics from "./components/Analytics"
import Tools from "./components/Tools"
import Discounts from "./components/Discounts"
import Audience from "./components/Audience"
import Appearance from "./components/Appearance"
import Plugins from "./components/Plugins"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/marketing" element={<Marketing/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/tools" element={<Tools/>}/>
          <Route path="/discounts" element={<Discounts/>}/>
          <Route path="/audience" element={<Audience/>}/>
          <Route path="/appearance" element={<Appearance/>}/>
          <Route path="/plugins" element={<Plugins/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
