import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { CampaignModel } from "../model/CampaignModel"
import { db } from "../../firebase"
import { data } from "react-router-dom"

class CampaignServices {

  async Campaign(data) {
    try {
      let obj = new CampaignModel()
      obj.CategoryId = data.CategoryId
      obj.Title = data.Title
      obj.Description = data.Description
      obj.TargetAmount= data.TargetAmount
      obj.CollectedAmount= data.CollectedAmount
      obj.ImageUrl = data.ImageUrl

      console.log("Normal obj", obj)
      // console.log("final obj", newData)
      // let newData={...obj}

      let docRef = collection(db, "campaign")
      addDoc(docRef, { ...obj })
      // await addDoc(docRef, newData)

      // await addDoc(collection(db,"campaign"), {...obj})

      return true
    } catch (error) {
      console.log(error);

    }

  }

  async all() {
    try {
      let cateDocs = await getDocs(collection(db, "campaign"))
      // console.log(cateDocs.docs[0].data());

      let cateData = cateDocs.docs.map((el) => {
        return { id: el.id, ...el.data() }
      })

      console.log(cateData)
      return cateData

    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  async delete(id){
        try {

            await deleteDoc(doc(db,"campaign",id))

            return true

        } catch (error) {
            console.log(error);
            return false
            
        }
    }
}

export default new CampaignServices