import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavbarHeader from "./components/NavbarHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselBanner from "./components/CarouselBanner";
import CardItemList from "./components/CardItemList";
import Footer from "./components/Footer";
import PopupChat from "./components/PopupChat";
import Tdee from "./components/Tdee";
import Reason from "./components/Reason";
import SliderList from "./components/SliderList";

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <div className="banner-list py-3">
        <CarouselBanner />
        <CardItemList />
      </div>
      <Tdee/>
      <Reason />
      <SliderList />
      <Footer />
      <PopupChat />
    </div>
  );
}

export default App;
