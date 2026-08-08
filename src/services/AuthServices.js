class Authservices{

    setData(data,uid){
        console.log(data);

        // sessionStorage.setItem("name",data.name)
        localStorage.setItem("name",data.name)
        localStorage.setItem("email",data.email)
        localStorage.setItem("userType",data.userType)
        localStorage.setItem("uid",uid)
        localStorage.setItem("isLogin",true)
        
    }

    getName(){
       return localStorage.getItem("name")
    }
    getUserType(){
       return localStorage.getItem("userType")
    }
    getisLogin(){
       return localStorage.getItem("isLogin")
    }

    clear(){
        localStorage.clear()
    }
}

export default new Authservices