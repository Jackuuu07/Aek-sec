import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/HeroBanner";
import QuickLinks from "../Components/QuickLinks";
import LatestProducts from "../Components/LatestProducts";
import BrowseTechnology from "../Components/BrowseTechnology";
import ImageTextSection from "../Components/ImageTextSection";
import InsideCisco from "../Components/InsideCisco";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <QuickLinks />

      <LatestProducts />

      <ImageTextSection />

      <BrowseTechnology />

      <InsideCisco />
 
      <Footer />
    </>
  );
}
