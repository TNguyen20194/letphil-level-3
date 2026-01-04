import './App.css';
import appleLogo from "./assets/apple-logo-svgrepo-com.svg";
import searchLogo from "./assets/search-svgrepo-com.svg";
import bagLogo from "./assets/bag-svgrepo-com.svg";

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
    <Header navLinks={navLinks} images={images}/>
    <Body />
    <Footer />
    </>
  )
}

export default App
