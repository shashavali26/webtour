
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Package from "./Components/Package/Package";
import Place from "./Components/Places/Place";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Title title="Explore" message="what we offer are given below"/>
    <Programs/>
    <Title title="International" message="We offer international trips"/>
    <About/>
    <Title title="Trending Places" message="lets check the information below"/>
    <Place/>
    <Title title="Reviews" message="Have a look at our customer reviews"/>
    <Package/>
    <Title title="Contact Us"/>
    <Contact/>

    </>
  );
}

export default App;
