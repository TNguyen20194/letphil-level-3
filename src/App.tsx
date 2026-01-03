import './App.css'

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
      src: "",
      alt: "Apple Logo"
    },
    search: {
      src: "",
      alt: "Search Icon"
    },
    bag: {
      src: "",
      alt: "Bag Icon"
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
