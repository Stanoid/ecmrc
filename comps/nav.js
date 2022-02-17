import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext,useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';
import Head from 'next/head';
import Cart from './cart';
import { useRef } from 'react';
import {BiMenuAltLeft} from 'react-icons/bi'
import {MdOutlineAccountCircle,MdOutlineLogout,MdOutlineShoppingCart} from 'react-icons/md'
import AuthContext from '../context/AuthContext';


export default function Nav(props) {
  const childCompRef = useRef()

  const router = useRouter();
  const isaccount = router.pathname==="/account"
 const [open,setOpen] = useState(false);
 const [openCart,setOpenCart] = useState(false);
    const {user,logOutUser} = useContext(AuthContext);

    

    const handleOpen =(open)=>{
setOpen(open)
 
    }

    const updateCart=()=>{
     
    }

    const handleOpenCart =(open)=>{
      setOpenCart(open)
      
          }

    return (
      <div>
    <div className='shadow-sm'  style={{display:"flex",width:'100%',position:"fixed",backgroundColor:'white',
    alignContent:'center',justifyContent:"space-between",padding:15,paddingBottom:7,zIndex:10}}>
    <Menu openHandler={handleOpen}  open={open} />
    <Cart ref={childCompRef}   openHandler={handleOpenCart} open={openCart} />
    <div>
    <BiMenuAltLeft onClick={()=>{setOpen(true)}} style={{fontSize:30}} />
    </div>
    
    <Link href="/" class="navbar-brand" >
      <div>
      <Image src={'/../public/newlo.svg'} width={110} height={40} />
      </div>
        </Link>



      {user?(
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{marginRight:20}} >  
            
            <MdOutlineShoppingCart onClick={()=>{setOpenCart(true); childCompRef.current.showAlert();}} style={{fontSize:29,cursor:"pointer"}} />
         </div>
         <div >
         <Link  href={"/account"}>
            {/* <a> {user.email}</a> */}
             
            {isaccount?<MdOutlineLogout onClick={logOutUser} style={{fontSize:30,color:'#F78181',cursor:'pointer'}} /> :<MdOutlineAccountCircle style={{fontSize:30,cursor:'pointer'}} /> }
        
         </Link>
         </div>
        </div>
         
      ) : (
        <div >
        <Link href={"/login"}>
        {isaccount?<MdOutlineLogout  onClick={logOutUser} style={{fontSize:30,color:'#F78181',cursor:"pointer"}} /> : <MdOutlineAccountCircle  style={{fontSize:30,cursor:'pointer'}} /> }
        
        
    </Link>
    </div>
      )}
     
        </div>

        <div style={{display:"flex",width:'100%',backgroundColor:'white',
    alignContent:'center',justifyContent:"space-between",padding:15,paddingBottom:7,zIndex:10}}>
        <div>
      <div style={{height:50}}></div>
      </div>
    </div>
        </div>
    )
}
