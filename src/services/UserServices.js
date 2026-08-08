import { addDoc, doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import AuthServices from "./AuthServices"
import { UserModel } from "../model/UserModel"


class UserServices{

    async login(email,password){

        try{
            let UserCreed= await signInWithEmailAndPassword(auth, email, password )
            let uid= UserCreed.user.uid
            console.log(uid)

            let UserDocs= await getDoc(doc(db, "users", uid))


            console.log(UserDocs);
        
            let userData= UserDocs.data();

            AuthServices.setData(userData, uid)

            return userData.userType


        }catch(error){
            console.log(error);
            return 0
        }
        
    }

    async Register(data){
        try {

          let usercreeds=await  createUserWithEmailAndPassword(auth,data.email, data.password)
          let uid= usercreeds.user.uid

          let obj=new UserModel()
          obj.name=data.name
          obj.email=data.email

         await setDoc(doc(db,"users", uid), {...obj})


         AuthServices.setData({...obj}, uid)
         return 1
         
          
            
        } catch (error) {
            console.log(error);
            return 0
            
        }
    }

}
export default new UserServices