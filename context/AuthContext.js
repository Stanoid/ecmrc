import { createContext,useState,useEffect } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/url";
const AuthContext = createContext();


let magic
export const AuthProvider = (props)=>{

    const[user,setUser] = useState(null);
    const [loading,setLoading]= useState(false);
    const router = useRouter();

   const hello ="hello from provider";
    /**
     * adds user to email
     * @param {string} email 
     */
    const loginUser = async (email)=>{
     setLoading(true)
        try{
        await magic.auth.loginWithMagicLink({email});
        setUser({email});
      
        router.push("/");
        }catch(err){
        setUser(null)
        }

        setLoading(false)
     

    }



    /**
     * retreives the token from magic servers
     */

    const getToken = async()=>{
        try{
  const token = await magic.user.getIdToken()
  return token
        }catch(err){

        }
    }



   /**
     * set user to null
     *
     */
    const logOutUser = async ()=>{
    
        try{

            await magic.user.logout();
            setUser(null);
            router.push("/");
        }catch(err){

        }
            }


             const checkLogged = async()=>{
                 try{
                const isLogged = await magic.user.isLoggedIn();
                if(isLogged){
                    const{email} = await magic.user.getMetadata();
                    setUser({email})
                const token = await getToken();
                console.log(token)
                    

                }
            
                 }catch(err){

                 }
             }

            useEffect(()=>{
                magic = new Magic(MAGIC_PUBLIC_KEY);
                checkLogged();
            }, [])


return(
    <AuthContext.Provider value={{user,loginUser,logOutUser,getToken,loading}}>
        {props.children}
    </AuthContext.Provider>
)
}

export default AuthContext