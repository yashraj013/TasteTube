import ImageKit from "imagekit";

console.log("PUBLIC KEY:", process.env.IMAGEKIT_PUBLIC_KEY);

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, fileName){
    const result = await imagekit.upload({
        file: file,
        fileName: fileName
    })
    return result;  // return the url of uploaded file

}

export {
    uploadFile
}