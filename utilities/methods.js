import Files from '../collections/files';


export const updateSingleImageService = async payload => {
let dataToBeInserted = {
    path : 'assets/'+ payload.fileName,
    name  : payload.fileName,
    size : payload.size,
    mimeType : payload.mimeType,
    userId : payload.user.id
};
let insertion = await Files.inserData(dataToBeInserted);
return insertion.id;
}

export const updateMultipleImagesService = async (payload,user) => {
   let dataToBeInserted = [], idsToBeShown = [];
    payload.map((resdata)=>{
        dataToBeInserted.push({
            path : 'assets/'+ resdata.fileName,
            name  : resdata.fileName,
            size : resdata.size,
            mimeType : resdata.mimeType,
            userId : user.id
        });
       
    })
    
    let insertion = await Files.bulkDataInsert(dataToBeInserted);
    console.log("insertion",insertion)
    insertion.map((resdata)=>{
        idsToBeShown.push(resdata.id)
    })
    return idsToBeShown;
    }