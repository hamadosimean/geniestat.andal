import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./geniestat/style/style.css";
import GenieStatNavbar from "./geniestat/Layout/GenieStatNavbar";
import Home from "./geniestat/components/Home";
import Services from "./geniestat/components/services/Services";
import Team from "./geniestat/components/Team";
import Formations from "./geniestat/components/formations/Formations";
import Contact from "./geniestat/components/Contact";
import About from "./geniestat/components/About";
import Footer from "./geniestat/Layout/Footer";
import ServiceDetail from "./geniestat/components/services/ServiceDetail";
import FormationDetail from "./geniestat/components/formations/FormationDetail";
import Help from "./geniestat/components/Help";
import Career from "./geniestat/components/Career";
import DigitalMarketing from "./geniestat/components/DigitalMarketing";
import Tech from "./geniestat/components/Tech";
import TermsOfUse from "./geniestat/components/TermsOfUse";
import English from "./geniestat/components/English";
import DataServices from "./geniestat/components/DataServices";
import Products from "./geniestat/products/Products";
import ProductDetail from "./geniestat/products/ProductDetails";
import Blog from "./geniestat/blog/Blog";
import BlogDetails from "./geniestat/blog/BlogDetails";
import Certificats from "./geniestat/components/Certificats";
import Galery from "./geniestat/components/Galery";
import Programs from "./geniestat/components/programs/Programs";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenieStatNavbar />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="formations" element={<Formations />} />
          <Route path="formations/:id" element={<FormationDetail />} />
          <Route path="team" element={<Team />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="technologies" element={<Tech />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="english" element={<English />} />
          <Route path="data-service" element={<DataServices />} />
          <Route path="career" element={<Career />} />
          <Route path="help" element={<Help />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="certificats" element={<Certificats />} />
          <Route path="galery" element={<Galery />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="programs" element={<Programs />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
