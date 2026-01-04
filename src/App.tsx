import './App.css';
// Header assets
import appleLogo from "./assets/apple-logo-svgrepo-com.svg";
import searchLogo from "./assets/search-svgrepo-com.svg";
import bagLogo from "./assets/bag-svgrepo-com.svg";

// Body assets
import iphoneBanner from "./assets/iphone17.png";
import appleWatchBanner from "./assets/apple-watch-series.png";
import ipadAir from "./assets/ipadAir.png";
import airpodPro from "./assets/airpodPro.png";
import appleCard from "./assets/appleCard.png";
import fitnessCard from "./assets/fitness.png";
import macbookPro from "./assets/macbookPro.png";

import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"

function App() {
  const navLinks =[
    {link: "Store", href:""},
    {link: "Mac", href:""},
    {link: "Ipad", href:""},
    {link: "Iphone", href:""},
    {link: "Watch", href:""},
    {link: "Vision", href:""},
    {link: "Airpods", href:""},
    {link: "TV & Home", href:""},
    {link: "Entertainment", href:""},
    {link: "Accessories", href:""},
    {link: "Support", href:""}
  ];

  const images={
    logo: {
      src: appleLogo,
      alt: "Apple Logo"
    },
    search: {
      src: searchLogo,
      alt: "Search"
    },
    bag: {
      src: bagLogo,
      alt: "Bag"
    }
  }

  return (
    <>
    {/* same as function Header({ navLinks, images} ) : HeaderProps) */}
    <Header navLinks={navLinks} images={images}/>
    <Body />
    <Footer />
    </>
  )
}

export default App
