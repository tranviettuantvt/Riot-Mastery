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
import { Food } from "./context";
import { useState } from "react";
import CardtemDetail from "./components/CardtemDetail";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Food.Provider value={{ show, setShow, handleClose, handleShow }}>
        <NavbarHeader />
        <div className="banner-list py-3">
          <CarouselBanner />
          <CardItemList />
          <CardtemDetail />
        </div>
        <Tdee />
        <Reason />
        <SliderList />
        <Footer />
        <PopupChat />
      </Food.Provider>
    </div>
  );
}

export default App;
