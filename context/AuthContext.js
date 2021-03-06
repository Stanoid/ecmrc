import { createContext,useState,useEffect } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";

import { MAGIC_PUBLIC_KEY,API_URL } from "../utils/url";
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
const AuthContext = createContext();


let magic
export const AuthProvider = (props)=>{

    const[user,setUser] = useState(null);
    const[stype,setStype] = useState(null);
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
                        ls.set("atkn",data.jwt);
            
                     setUser(data.user.username)
                     setStype(data.user.type)
                     switch(data.user.type){
                       case 1:
                        notify("success",`Welcom back ${data.user.username}, you will be redirected.`)
                        router.replace("/")
                         break;

                         case 2:
                          notify("success",`Welcom back ${data.user.username}, you will be redirected.`)
                          router.replace("/panel")

                           break;

                           case 3:
                            notify("success",`Welcom back ${data.user.username}, you will be redirected.`)
                            router.replace("/dpanel")
  
                             break;

                           default:
                            notify("success",`Welcom back ${data.user.username}, you will be redirected.`)
                            router.replace("/")
  
                             break;
                     }
                       
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
            router.push("/login");
        }catch(err){

        }
            }


             const checkLogged = async()=>{

                if(ls.get("atkn")){
                    
                }else{
                    return
                }
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Bearer ' + ls.get("atkn")
                    },
                  
                };
                fetch(`${API_URL}/users/me`, requestOptions)
                    .then(response => response.json())
                    .then(data =>{

                      console.log("data",data)
                     
                      if(data.id){
                    setUser(data.username);
                    switch(data.type){
                      case 1:
                     
                       router.replace("/")
                        break;

                        case 2:
                   
                         router.replace("/panel")

                          break;

                          case 3:
                         
                           router.replace("/dpanel")
 
                            break;

                          default:
                      
                          // router.replace("/login")
 
                            break;
                    }
                 
                      }else{
                        setUser(null);
                      }
                       
                       
                    });

                


             }

            useEffect(()=>{
               
                //checkLogged();
            }, [])


return(
    <AuthContext.Provider value={{user,loginUser,logOutUser,notify,stype,checkLogged}}>
          <ToastContainer  limit={3}/>
        {props.children}
    </AuthContext.Provider>
)
}

export default AuthContext