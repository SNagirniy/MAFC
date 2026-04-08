import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import Topbar from "../modules/topbar/Topbar";

const PageLayout = ({social,contactsData,children})=> {
    return (
        <>
        <Topbar social={social} />
        <Header/>
        <main >{children}</main>
        <Footer social={social} contactsData={contactsData}/>
        </> 
        )
};


export default PageLayout