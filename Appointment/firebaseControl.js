const firebaseConfig = require('./firebaseConfig.js');
const { initializeApp } = require('firebase/app');
const { getStorage, uploadBytes, ref } = require('firebase/storage');

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function uploadPdf(buffer, name){
    const fileRef = ref(storage, `contracts/${name}`);
    return uploadBytes(fileRef, buffer);
}

module.exports = {
    uploadPdf
}
