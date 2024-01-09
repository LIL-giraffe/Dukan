import Layout from "./components/Layout";
import Payments from "./components/Payments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/payments" element={<Payments/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
