import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { About, Contact, Home, NotFound, Service, Why } from "./pages";

import "./App.css";

function App() {
  return <div className="wrapper">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/why" element={<Why />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>;
}

export default App;
