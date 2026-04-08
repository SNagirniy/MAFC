import HotlineAndComplaintBox from "@/components/modules/HotlineAndComplaintBox/HotlineAndComplaintBox";
import SectionWrapper from "@/components/layouts/SectionWrapper";

const HotlineAndComplaint =({title='Маєте запитання або пропозиції?', description='Ми на зв’язку — пишіть або телефонуйте, будемо раді допомогти', url})=> {

    return <section>
        <SectionWrapper>
            <HotlineAndComplaintBox 
                title={title}
                description={description}
                url={url}/>
        </SectionWrapper>
        </section>

}

export default HotlineAndComplaint;