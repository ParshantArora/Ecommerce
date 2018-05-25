/*
Author : Parshant Nagpal
Description : all common controllers
filename  : util.js
*/
import { successAction, failAction } from '../utilities/rest';
import { uploader, imageFilter } from '../utilities/universal';
import { updateMultipleImagesService, updateSingleImageService } from '../utilities/methods';
import Files from '../collections/files';
const UPLOAD_PATH = 'assets/';
const fileOptions = { dest: UPLOAD_PATH, fileFilter: imageFilter }

/*
File upload to server
*/

export const uploadFile = async (request, h) => {
    const { payload, auth: { credentials: { user } } } = request;
    console.log("payload", payload['image'])
    const file = payload['file'];
    try {
        const data = await uploader(file, fileOptions);
        console.log(Array.isArray(data));
        let photoIdData
        if (Array.isArray(data)) {
            photoIdData = await updateMultipleImagesService(data, user)

        } else {
            console.log("datares", data)
            photoIdData = await updateSingleImageService({ ...data, user })
        }
        return successAction(photoIdData);
    } catch (error) {
        failAction(error.message)
    }
}

/*
show the file based on id
*/

export const downloadFile = async (request, h) => {

    let user = await Files.getFile({ id: request.params.fileName });;
    console.log("useruseruser", { id: request.params.fileName }, user.path)
    let path = user.path;
    return h.file(path)
}