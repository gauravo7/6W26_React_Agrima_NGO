import { data } from "react-router-dom"
import { CategoryModel } from "../model/CategoryModel"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../../firebase"

class CategoryServices {

  async AddCollection(data) {
    try {
      let obj = new CategoryModel()
      obj.CategoryName = data.CategoryName
      obj.Description = data.Description

      console.log("Normal obj", obj)
      // console.log("final obj", newData)
      // let newData={...obj}

      let docRef = collection(db, "category")
      addDoc(docRef, { ...obj })
      // await addDoc(docRef, newData)

      // await addDoc(collection(db,"category"), {...obj})

      return true
    } catch (error) {
      console.log(error);

    }
  }

  async all(){
    try {
      let cateDocs= await getDocs(collection(db, "category" ))
      // console.log(cateDocs.docs[0].data());

      let cateData= cateDocs.docs.map((el)=>{
        return {id: el.id, ...el.data()}
      })

      // console.log(cateData)
      return cateData
      
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  async delete(id){
    try {
      await deleteDoc(doc(db,"category",id))
      return true
      
    } catch (error) {
      console.log(error);
      return false
      
    }
  }


  async Single(id){
     try{

      let res = await getDoc(doc(db,"category",id))
 
      let catedata = res.data();

      return catedata

     }
     catch(err){
      console.log(err)
     }
  }


  async Update(data,id){

   console.log(id);

    try {
      
      let obj = new CategoryModel()
      obj.CategoryName = data.CategoryName
      obj.Description = data.Description

      await updateDoc(doc(db,"category",id),{ ...obj })

       return 1

    } catch (error) {

      console.log(error.message);
      return 0

    }
  }

}

export default new CategoryServices