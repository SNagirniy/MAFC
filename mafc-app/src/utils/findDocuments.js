const findDocuments = (docxList,topic)=> docxList?.find(doc => doc?.topic?.toLowerCase() === topic);

export default findDocuments;