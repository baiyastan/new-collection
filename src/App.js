import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  About,
  Catalog,
  Contact,
  Home,
  NotFound,
  ProductPage,
  Review,
  Why,
} from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why" element={<Why />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
