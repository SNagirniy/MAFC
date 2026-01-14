const findDocuments = (docxList,topic)=> docxList?.find((el) =>{ const name = el?.topic || el?.folderName; return name?.toLowerCase() === topic?.toLowerCase()});

export default findDocuments;