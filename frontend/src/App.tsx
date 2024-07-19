import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
          <Route path="/editproduct/:id" element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
