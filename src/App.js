import "./App.css";
import NavbarHeader from "./components/NavbarHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselBanner from "./components/CarouselBanner";
import CardItemList from "./components/CardItemList";
import Footer from "./components/Footer";
import PopupChat from "./components/PopupChat";

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <div className="banner-list py-3">
        <CarouselBanner />
        <CardItemList />
      </div>
      <Footer />
      <PopupChat />
    </div>
  );
}

export default App;
