import { HashRouter , Routes, Route } from "react-router-dom";

import Books from "./components/Books";
import AddBooks from "./components/addBooks";
import CustomerBooks from "./components/customerBooks";
import Orders from "./components/Orders";
import OrderNew from "./components/orderNew";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="bg-white">
      <HashRouter >
    <Routes>
    <Route path="/" element={<Nav />}>
        <Route index element={<Books />} />
        <Route path="addBooks" element={<AddBooks />} />
        <Route path="customerBooks" element={<CustomerBooks />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="orderNew" element={<OrderNew />} />
        <Route path="About" element={<About/>} />
   </Route>
   </Routes>
  </HashRouter>

    </div>
  );
}

export default App;
