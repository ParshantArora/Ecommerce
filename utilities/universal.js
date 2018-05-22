
/*
Author : Parshant Nagpal
Description : common use functions
filename  : account.js
*/
import fs from 'fs';
import slugify from 'slugify';

export const generateRandom = (length = 32, alphanumeric = true) => {
    let data = '',
        keys = '';
    if (alphanumeric) {
        keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    } else {
        keys = '0123456789';
    }

    for (let i = 0; i < length; i++) {
        data += keys.charAt(Math.floor(Math.random() * keys.length));
    }
    return data;
}

export const imageFilter = fileName => {
    if (!fileName.match(/\.(jpg|jpeg|png|gif)$/)) {
        return false;
    }
    return true;
}

export const uploader = (file, options) => {
    if (!file) throw new Error('no File(s)')
    return Array.isArray(file) ? _filesHandler(file, options) : _fileHandler(file, options);
};

const _filesHandler = (file, options) => {
    if (!file || !Array.isArray(file)) throw new Error('no Files')

    const promises = file.map(x => _fileHandler(x, options));
    return Promise.all(promises);
};

const _fileHandler = function (file, options) {
    console.log(file)
    if (!file) throw new Error('No file');
    if (options.fileFilter && !options.fileFilter(file.hapi.filename)) {
        throw new Error('type not allowed')
    };

    const fileName = slugify(`${generateRandom(5)}_${file.hapi.filename}`);
    const originalName = file.hapi.filename;
    const path = `${options.dest}${fileName}`;
    const fileStream = fs.createWriteStream(path);
    return new Promise((resolve, reject) => {
        file.on('error', function (err) {
            reject(err);
        });
        file.pipe(fileStream);
        file.on('end', function (err) {
            const fileDetails = {
                fileName,
                originalName,
                mimeType: file.hapi.headers['content-type'],
                size: fs.statSync(path).size
            };
            resolve(fileDetails);
        })
    })

}


