import { downloadFile } from '../../controllers/util';

export default {
    method  : 'GET',
    path : '/util/file/{fileName}',
    config : {
        auth : false
    },
    handler  : downloadFile
};

