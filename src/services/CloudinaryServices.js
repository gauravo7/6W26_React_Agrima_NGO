import axios from "axios"

const CloudName = "qiizwfit"
const Preset = "react1st"

class CloudinaryServices {

    async ImageUpload(image) {
        try {
            let formdata = new FormData()

            formdata.append("file", image)
            formdata.append("upload_preset", Preset)

            let url = await axios.post(`https://api.cloudinary.com/v1_1/${CloudName}/image/upload`, formdata)

            return url.data.secure_url



        } catch (error) {

        }
    }

}

export default new CloudinaryServices