import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import Topbar from "../modules/topbar/Topbar";

const PageLayout = ({children})=> {
    return (
        <>
        <Topbar/>
        <Header/>
        <main >{children}</main>
        <Footer/>
        </>
        
            )
};


export default PageLayout