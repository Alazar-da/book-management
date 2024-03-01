import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "./components/Books";
import AddBooks from "./components/addBooks";
import CustomerBooks from "./components/customerBooks";
import Orders from "./components/Orders";
import OrderNew from "./components/orderNew";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Nav />}>
        <Route index element={<Books />} />
        <Route path="addBooks" element={<AddBooks />} />
        <Route path="customerBooks" element={<CustomerBooks />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="orderNew" element={<OrderNew />} />
   </Route>
   </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
