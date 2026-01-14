import DocsListSection from "../modules/DocsListSection/DocsListSection";
import RteTextBox from "../elements/rteTextBox/RteTextBox";
import GallerySection from "../modules/GallerySection/GallerySection";
import EmptyState from "../modules/EmptyState/EmptyState";

const DormitoryPage = ({docx, pageData})=> {
if(!pageData && !docx) return <EmptyState/>;

    return(
        <>
        <DocsListSection title={'Наш гуртожиток'} docs_list={docx}/>
        {pageData?.description && <RteTextBox markdown={pageData?.description}/>}
        {pageData?.images && <GallerySection imageArr={pageData?.images}/>}
        </>
    )
};

export default DormitoryPage;