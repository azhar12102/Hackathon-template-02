
import Hero from "./components/hero";
import Brand from "./components/brands";
import Ceramics from "./components/ceramics";
import Product from "./components/products";
import Benefit from "./components/benefit";
import Touch from "./components/touch";
import ProductListing from "./productlistiing/page";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export default function Home() {
  return (
   <div>
    <Navbar/>
      <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
<ProductListing/>
<Footer/>
   </div>
  );
}
