import Navbar from "./componants/navbar";
import Searchbar from "./componants/searchbar";
import Products from "./componants/product";
import Footer from "./componants/footer";
import About from "./componants/about";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </div>)
}

export default App
