import axios from 'axios';

export const uploadImg = async (file) =>{
    // Defining our variables
    const UPLOAD_PRESET = 'caMay_22' // Insert yours
    const CLOUD_NAME = 'camay22' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', file)
    FORM_DATA.append('upload_preset',UPLOAD_PRESET)
    // Sending a post method request to Cloudniarys' API
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        return res.data; // return url to the img
    } catch(err) {
        console.error('ERROR!', err)
    }
}