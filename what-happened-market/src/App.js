import Footer from "./components/Footer";
import Header from "./components/Header"
import Banner from "./components/Banner"
import BestProduct from "./components/BestProduct"
import ShowProduct from "./components/ShowProduct"
import BrandStory from "./components/BrandStory";
import Outstanding from "./components/Outstanding";
import WhatDetail from "./components/WhatDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BestProduct />
      <ShowProduct />
      <BrandStory/>
      <Outstanding />
      <WhatDetail />
      <Footer />
    </div>
  );
}

export default App;
