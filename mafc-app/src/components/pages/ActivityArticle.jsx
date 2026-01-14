import ActivityArticle from "../modules/ActivityArticle/ActivityArticle";
import EmptyState from "../modules/EmptyState/EmptyState";


const ActivityArticlePage= async ({activity})=> {
    if(!activity) return <EmptyState/>;

    return <ActivityArticle activity={activity?.activity} />

};

export default ActivityArticlePage;