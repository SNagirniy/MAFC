import DocsListSection from "../modules/DocsListSection/DocsListSection";
import YourSafetyEduSection from "../modules/YourSafetyEduSection/YourSafetyEduSection";
import EmptyState from "../modules/EmptyState/EmptyState";

const YourSafetyPage =({docList, videoList})=> {
if(!docList && !videoList) return <EmptyState/>;

    return (
        <>
        <DocsListSection 
        title={'Пам’ятки з безпеки'}
        docs_list={docList}
        />
        <YourSafetyEduSection
        videoList={videoList?.video_item}
        title={'Безпека життєдіяльності'}
        />
        </>
    )
};

export default YourSafetyPage;