import { addDoc, collection } from "firebase/firestore"
import { CampaignModel } from "../model/CampaignModel"
import { db } from "../../firebase"
import { data } from "react-router-dom"

class CampaignServices{
    
    async Campaign(data){
          try {
            let obj= new CampaignModel()
            obj.CategoryId= data.categoryId
            obj.Title= data.title
            obj.Description= data.description
    
            console.log("Normal obj",obj)
            // console.log("final obj", newData)
            // let newData={...obj}
    
            let docRef= collection(db,"campaign")
            addDoc(docRef, {...obj})
            // await addDoc(docRef, newData)
    
            // await addDoc(collection(db,"campaign"), {...obj})
    
            return true
          } catch (error) {
                console.log(error);
                
          }
    
        }
}

export default new CampaignServices