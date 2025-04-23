import Hero from "../modules/hero/Hero";
import News from "../modules/news/News";
import GovernmentResourses from "../modules/GovernmentResourses/GovernmentResourses";
import Profesions from "../modules/profesions/Profesions";
import QuickAccessPanel from "../modules/quickAccessPanel/QuickAccessPanel";

const HomePage = ()=>{
return (
    <>
    <Hero/>
    <QuickAccessPanel/>
    <Profesions/>
    <News title={'НАШ ГЕКТАР НОВИН'} subtitle={'КОЖЕН ДЕНЬ ЗАСІВАЄМО ІНФОРМАЦІЙНЕ ПОЛЕ!'}/>
    <GovernmentResourses/>
    </>
)
};

export default HomePage;