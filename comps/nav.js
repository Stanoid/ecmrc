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
import {MdOutlineAccountCircle,MdOutlineLogout,MdOutlineShoppingCart,MdSearch,MdMenu} from 'react-icons/md'
import AuthContext from '../context/AuthContext';
import { MAIN_STYLE } from '../utils/style';


export default function Nav(props) {
  const childCompRef = useRef()

  const router = useRouter();
  const isaccount = router.pathname==="/panel"|| router.pathname==="/mpanel";
 const [open,setOpen] = useState(false);
 const [openCart,setOpenCart] = useState(false);
    const {user,logOutUser,stype} = useContext(AuthContext);

    

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
    <div className='shadow-sm'  style={{display:"flex",width:'100%',position:"fixed",backgroundColor:"white",
    alignContent:'center',justifyContent:"space-between",padding:15,paddingBottom:7,zIndex:10,color:MAIN_STYLE.grey}}>
    <Menu openHandler={handleOpen}  open={open} />
    <Cart ref={childCompRef}   openHandler={handleOpenCart} open={openCart} />
   

<div style={{display:"flex",justifyContent:"center",alignItems:"space-between"}}>
  {/* <div onClick={()=>{setOpen(true)}} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <MdMenu style={{color:MAIN_STYLE.grey,fontSize:20}} />
  </div> */}
  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<Link href="/" class="navbar-brand" >
      <div>
      <Image src={'/nnng.svg'} width={110} height={40} />
      </div>
        </Link>
        </div>

</div>
  
    
   

        <div className='hidden lg:block xl:block md:block '>
        {/* <div className=" bg-white w-96 grid grid-cols-9 p-2">
          <div className='col-span-8  span justify-start items-center'>
     <input placeholder='Search anything...' style={{width:"100%",height:'100%',border:0,fontSize:17,outline:"none"}} />
          </div>
          <div className='col-span-1 flex justify-center items-center'  >
            <MdSearch style={{color:MAIN_STYLE.grey,fontSize:20}} />
          </div>
</div> */}
    </div>



      {user?(
        <div style={{display:'flex',flexDirection:'row',color:MAIN_STYLE.grey}}>
        <div style={{marginRight:20}} >  
            
            <MdOutlineShoppingCart onClick={()=>{setOpenCart(true); childCompRef.current.showAlert();}} style={{fontSize:29,cursor:"pointer"}} />
         </div>
         <div >
         <Link  href={stype===1?"/mpanel":"/panel"}>
            {/* <a> {user.email}</a> */}
             
            {isaccount?<MdOutlineLogout onClick={logOutUser} style={{fontSize:30,color:MAIN_STYLE.grey,cursor:'pointer'}} /> :<MdOutlineAccountCircle style={{fontSize:30,cursor:'pointer'}} /> }
        
         </Link>
         </div>
        </div>
         
      ) : (
        <div >
        <Link href={"/login"}>
        {isaccount?<MdOutlineLogout  onClick={logOutUser} style={{fontSize:30,color:'black',cursor:"pointer"}} /> : <MdOutlineAccountCircle  style={{fontSize:30,cursor:'pointer'}} /> }
        
        
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
