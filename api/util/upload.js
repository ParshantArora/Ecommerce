import { uploadFile } from '../../controllers/util';
export default {
    method :'POST',
    path : '/util/upload',
    config : {
        auth : 'jwt',
        payload :{
            output : 'stream',
            allow : 'multipart/form-data',
            maxBytes  : 1e7
        }
    },
 handler  : uploadFile
}