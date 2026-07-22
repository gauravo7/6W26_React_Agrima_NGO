import { data } from "react-router-dom"
import { CategoryModel } from "../model/CategoryModel"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase"

class CategoryServices{

    async AddCollection(data){
      try {
        let obj= new CategoryModel()
        obj.Name= data.name
        obj.Description= data.description

        console.log("Normal obj",obj)
        // console.log("final obj", newData)
        // let newData={...obj}

        let docRef= collection(db,"category")
        addDoc(docRef, {...obj})
        // await addDoc(docRef, newData)

        // await addDoc(collection(db,"category"), {...obj})

        return true
      } catch (error) {
            console.log(error);
            
      }

    }
    



}

export default new CategoryServices