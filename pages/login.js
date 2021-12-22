import Head from "next/head";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import DefaultLayout from "../layouts/Default";
import { useState } from "react";
import { MAIN_STYLE } from "../utils/style";

import Styles from "../styles/Home.module.css"
export default function Loign (){

    const [email,setEmail] = useState("");
    const {loginUser,loading} = useContext(AuthContext);
    const [loglod,setLoglod] = useState(false);

    const handleSubmit =(event)=>{
     
        event.preventDefault();
        loginUser(email)
    }
    return( 
        <DefaultLayout>
            <Head>
                <title>Login</title>
                <meta name="description" content={"Login her to make purchase"} />
            </Head>

<div style={{padding:15,height:'100%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>


<div style={{marginTop:30}}>

<h1 className={Styles.maintype}>Login or Sign up</h1>
<div className={Styles.subtype}>
    Login to Bendari to enjoy the best shopping experience in sudan.
</div>
 <form  style={{marginTop:40}} onSubmit={handleSubmit}>
     <div style={{margin:10}}>
     <input 
     className="ptfont"
     placeholder="Email address"
     style={{width:'100%',fontSize:20,padding:3,border:'0px',borderBottom:`3px solid ${MAIN_STYLE.secondary}`}}
     value={email} onChange={(even)=>{setEmail(even.target.value)}} type="email" />
   
     </div>
       <button className="ptfont" style={{backgroundColor:MAIN_STYLE.secondary,
        border:"0px",padding:"5px 10px 5px 10px",fontWeight:'bold',color:'white',margin:10
        ,borderRadius:5}} type={loading?"button":"submit"} > {loading?"Loggin in ...":" Login / Signup"} </button>
 </form>

</div>
          

 </div>

        </DefaultLayout>
    )
}