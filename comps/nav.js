import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import {BiMenuAltLeft} from 'react-icons/bi'
import {MdOutlineAccountCircle,MdOutlineLogout} from 'react-icons/md'
import AuthContext from '../context/AuthContext';
export default function Nav() {


  const router = useRouter();
  const isaccount = router.pathname==="/account"

    const {user,logOutUser} = useContext(AuthContext);

    return (
    <div  style={{display:"flex",
    alignContent:'center',justifyContent:"space-between",padding:15}}>
    
    <div>
    <BiMenuAltLeft style={{fontSize:30}} />
    </div>
    
    <Link href="/" class="navbar-brand" >
      <div>
      <Image src={'/../public/newlo.svg'} width={110} height={40} />
      </div>
        </Link>



      {user?(
        <div >
         <Link  href={"/account"}>
            {/* <a> {user.email}</a> */}
            
            {isaccount?<MdOutlineLogout onClick={logOutUser} style={{fontSize:30,color:'#F78181'}} /> :<MdOutlineAccountCircle style={{fontSize:30}} /> }
        
         </Link>
         </div>
      ) : (
        <div >
        <Link href={"/login"}>
        {isaccount?<MdOutlineLogout  onClick={logOutUser} style={{fontSize:30,color:'#F78181'}} /> : <MdOutlineAccountCircle  style={{fontSize:30}} /> }
        
        
    </Link>
    </div>
      )}
     
        </div>
    )
}
