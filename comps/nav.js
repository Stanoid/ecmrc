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
import {MdOutlineAccountCircle,MdOutlineLogout,MdOutlineShoppingCart,MdSearch,MdPlaylistAddCheck,MdOutlineSupport,MdAccountCircle} from 'react-icons/md'
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
    <div className='shadow-sm hidden xl:flex md:hidden lg:flex'  style={{width:'100%',position:"fixed",backgroundColor:"white",
    alignContent:'center',justifyContent:"space-between",padding:15,paddingBottom:7,zIndex:10,color:MAIN_STYLE.grey}}>
    <Menu openHandler={handleOpen}  open={open} />
    <Cart ref={childCompRef}   openHandler={handleOpenCart} open={openCart} />
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

<div style={{display:"flex",justifyContent:"center",alignItems:"space-between"}}>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<Link href="/" class="navbar-brand" >
      <div>
      <Image src={'/nnng.svg'} width={110} height={40} />
      </div>
        </Link>
        </div>

       

</div>
     
        </div>

        <div className='flex md:flex xl:hidden lg:hidden shadow-sm' style={{width:'100%',backgroundColor:'white',
    alignContent:'center',justifyContent:"space-between",padding:5,paddingBottom:7,zIndex:10,position:"fixed"}}>
     



    <div  style={{top:0,zIndex:10,backgroundColor:"white",display:"flex",
justifyContent:"center",alignItems:"center",zIndex:1
}}>
      <Image src={'/nnng.svg'} width={110} height={40} />
</div>

<Link  href={"/help"}>
 <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:'center',color:MAIN_STYLE.primary}}>
             <MdOutlineSupport style={{fontSize:30,cursor:'pointer'}} />
             <div style={{fontWeight:"bold",fontSize:10,color:MAIN_STYLE.grey}} > المساعدة </div>

      </div>
      </Link>

{/* <div style={{position:'absolute', top:0,left:0,zIndex:0}}>
      <Image  src={'/dec1.svg'} width={200} height={200} />
      </div> */}

      
    </div>
    <div style={{height:60}} ></div>
    



    <div className='shadow-sm flex xl:hidden md:flex lg:hidden'  style={{width:'100%',zIndex:10,position:"fixed",bottom:0,backgroundColor:"white",
    alignContent:'center',justifyContent:"space-around",color:MAIN_STYLE.grey}}>
    <Menu openHandler={handleOpen}  open={open} />
    <Cart ref={childCompRef}   openHandler={handleOpenCart} open={openCart} />
     
       <>
      
       <Link  href={"/"}>
              <div style={{display:"flex",padding:10,justifyContent:"center",flexDirection:"column",alignItems:'center',color:MAIN_STYLE.primary}}>
              <MdSearch  onClick={()=>{}} style={{fontSize:29,cursor:"pointer"}} />
                <div style={{fontWeight:"bold",fontSize:13,color:MAIN_STYLE.grey}} > تصفح </div>
              </div>
              </Link>


            <div style={{display:"flex",padding:10,justifyContent:"center",flexDirection:"column",alignItems:'center',color:MAIN_STYLE.primary}}>
            <MdOutlineShoppingCart onClick={()=>{setOpenCart(true); childCompRef.current.showAlert();}} style={{fontSize:29,cursor:"pointer"}} />
              <div style={{fontWeight:"bold",fontSize:13,color:MAIN_STYLE.grey}} > السلة </div>
            </div>
            

            {/* <Link  href={stype===1?"/mpanel":"/panel"}>
          
             
         
            
             <div style={{display:"flex",padding:10,justifyContent:"center",flexDirection:"column",alignItems:'center'}}>
             <MdGridView style={{fontSize:30,cursor:'pointer'}} />
             <div style={{fontWeight:"bold",fontSize:13}} > الفئات </div>

             </div>
              
           
         </Link> */}

       
       
         <Link  href={stype===1?"/mpanel":"/panel"}>
            {/* <a> {user.email}</a> */}
             
         
            
             <div style={{display:"flex",padding:10,justifyContent:"center",flexDirection:"column",alignItems:'center',color:MAIN_STYLE.primary}}>
             <MdPlaylistAddCheck style={{fontSize:30,cursor:'pointer'}} />
             <div style={{fontWeight:"bold",fontSize:13,color:MAIN_STYLE.grey}} > الطلبات </div>

             </div>
              
           
         </Link>

         <Link  href={"/help"}>
            {/* <a> {user.email}</a> */}
             
         
            
             {/* <div style={{display:"flex",padding:10,justifyContent:"center",flexDirection:"column",alignItems:'center',color:MAIN_STYLE.primary}}>
             <MdOutlineSupport style={{fontSize:30,cursor:'pointer'}} />
             <div style={{fontWeight:"bold",fontSize:13,color:MAIN_STYLE.grey}} > المساعدة </div>

             </div> */}

<div style={{display:"flex",padding:10,justifyContent:"center",flexDirection:"column",alignItems:'center',color:MAIN_STYLE.primary}}>
             <MdOutlineAccountCircle style={{fontSize:30,cursor:'pointer'}} />
             <div style={{fontWeight:"bold",fontSize:13,color:MAIN_STYLE.grey}} > الحساب </div>

             </div>
              
           
         </Link>


       


       
         </>
     
         
        
        </div>

        {/* <div style={{display:"flex",width:'100%',backgroundColor:'white',
    alignContent:'center',justifyContent:"space-between",padding:15,paddingBottom:7,zIndex:10}}>
        <div>
      <div style={{height:50}}></div>
      </div>
    </div> */}

        </div>
    )
}
