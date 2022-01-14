import { createContext,useState,useEffect } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";

import { MAGIC_PUBLIC_KEY,API_URL } from "../utils/url";
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
const AuthContext = createContext();


let magic
export const AuthProvider = (props)=>{

    const[user,setUser] = useState(null);
    const [loading,setLoading]= useState(false);
    const router = useRouter();
    const ls = require("local-storage")
   const hello ="hello from provider";
    /**
     * adds user to email
     * @param {string} email 
     */
    const loginUser = async (email,password)=>{
    
        if(email==""||password==""){
            notify("error","Empty email or password")
            return
        }

            const requestOptions = {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "identifier":email,
                   "password":password
                })
            };
            fetch(`${API_URL}/auth/local`, requestOptions)
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    
                    if(data.jwt){
                        ls.set("utkn",data.jwt);
            
                     setUser(data.user.username)
                        notify("success",`Welcom back ${data.user.username}, you will be redirected.`)
                        router.replace("/")
                    }else{
                        notify("error","Invalid email or password")
                    }
                });
    
           
    
    
        
     

    }



    const notify = (type,msg)=>{

        const options={
          hideProgressBar:true,
          draggable:true,
          closeButton:false,
          
        }
        switch(type){
          case 'success':
            toast.success(msg,options)
            break;
    
            case 'error':
              toast.error(msg,options)
              break;
    
              case 'warn':
                toast.warn(msg,options)
                break;
    
              
    
        }
       
      }


    /**
     * retreives the token from magic servers
     */

  



   /**
     * set user to null
     *
     */
    const logOutUser = async ()=>{
    
        try{

          
            setUser(null);
            router.push("/");
        }catch(err){

        }
            }


             const checkLogged = async()=>{

                if(ls.get("utkn")){
                    
                }else{
                    return
                }
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Bearer ' + ls.get("utkn")
                    },
                  
                };
                fetch(`${API_URL}/users/me`, requestOptions)
                    .then(response => response.json())
                    .then(data =>{
                     
                      if(data.id){
                    setUser(data.username);
                 
                      }else{
                        setUser(null);
                      }
                       
                       
                    });

                


             }

            useEffect(()=>{
               
                checkLogged();
            }, [])


return(
    <AuthContext.Provider value={{user,loginUser,logOutUser,notify}}>
          <ToastContainer  limit={3}/>
        {props.children}
    </AuthContext.Provider>
)
}

export default AuthContext