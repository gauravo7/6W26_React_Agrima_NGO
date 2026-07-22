import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"


class UserServices{

    async login(email,password){

        try{
            let UserCreed= await signInWithEmailAndPassword(auth, email, password )
            let uid= UserCreed.user.uid
            console.log(uid)

            let UserDocs= await getDoc(doc(db, "users", uid))


            console.log(UserDocs);
            


            let userData= UserDocs.data();

            return userData.userType


        }catch(error){
            console.log(error);
            return 0
        }
        
    }

}
export default new UserServices