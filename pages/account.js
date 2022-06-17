import React from 'react'
import Mpanel from './mpanel'
import { useEffect,useContext } from 'react'
import DefaultLayout from '../layouts/Default'
import {MdAccountCircle} from 'react-icons/md'
import AuthContext from '../context/AuthContext'
import { MAIN_STYLE } from '../utils/style'
export default function account() {
    const{userData,checkLogged} = useContext(AuthContext)

    useEffect(()=>{

     checkLogged(2);
        getData();
    console.log("rrrr",userData);
           
        
        },[])


        const getData = ()=>{

        }


    return (
        <DefaultLayout>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >

       <div>
           <MdAccountCircle style={{color:MAIN_STYLE.primary,fontSize:100,marginRight:10}}/>
       </div>

       <div style={{display:"flex",justifyContent:"center",alignItems:'flex-start',flexDirection:"column",}}>

       <div>
       {userData&& userData.username}
    </div>

    <div>
       { userData&& userData.email}
    </div>

    <div>
       { userData&& userData.phone}
    </div>

    <div>
       { userData&& userData.adress}
    </div>

    



       </div>
  
        </div>
        </DefaultLayout>
   
    )
}
