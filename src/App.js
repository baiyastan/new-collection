import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { About, Contact, Home, NotFound, ProductPage, Why } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why" element={<Why />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
