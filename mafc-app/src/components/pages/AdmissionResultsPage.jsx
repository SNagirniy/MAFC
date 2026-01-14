import AdmissionResultsSection from "../modules/AdmissionResultsSection/AdmissionResultsSection";
import EmptyState from "../modules/EmptyState/EmptyState";

const AdmissionResultsPage = ({resultsList})=> {
    if(!resultsList || resultsList?.length === 0){return <EmptyState/>}
    return <AdmissionResultsSection resultsList={resultsList}/>
};

export default AdmissionResultsPage;