import NMTLIst from "../modules/NMTList/NMTlist";
import EmptyState from "../modules/EmptyState/EmptyState";

const E_LibraryPage = ({libraryData})=> {
    if(!libraryData || libraryData?.length === 0) return <EmptyState/>;

    const libListTorender = libraryData?.map((el)=> {return {id: el?.id, url: el?.link?.url, title: el?.profession?.educational_program}})

    return <NMTLIst 
            linkList={libListTorender} 
            title={'Е-бібліотека'} 
            type={'secondary'}/>
}

export default E_LibraryPage;