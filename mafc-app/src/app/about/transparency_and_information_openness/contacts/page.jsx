import HotlineAndComplaintBox from "@/components/modules/HotlineAndComplaintBox/HotlineAndComplaintBox";
import SectionWrapper from "@/components/layouts/SectionWrapper";

const HotlineAndComplaint =()=> {

    return <section>
        <SectionWrapper>
            <HotlineAndComplaintBox 
                title={'Маєте запитання або пропозиції?'}
                description={'Ми на зв’язку — пишіть або телефонуйте, будемо раді допомогти.'}/>
        </SectionWrapper>
        </section>

}

export default HotlineAndComplaint;