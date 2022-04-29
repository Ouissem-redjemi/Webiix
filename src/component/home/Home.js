
import Header from "../header/Header";
import Menu from "../navbar/Nav";
import Services from "../service/Services";
import Realisations from "../realisations/realisations";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div>
            <Menu/>
            <Header />
            <Services/>
            <Realisations />
            <Footer/>
        </div>
    )
}


export default Home;