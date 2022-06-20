import Nav from '../comps/navA';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Promo from '../comps/promo';
import Head from 'next/head';
export default function DefaultLayout({ children }) {
 
  const [openPromo,setOpenPromo]= useState(false);
    const router = useRouter();
    const ishome = router.pathname==="/"
  

  return (
    <>
      {/* <Nav /> */}
      
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&family=Roboto:wght@500&display=swap" rel="stylesheet"/>
    </Head>
     
      <main>{children}</main>
     
     {/* <footer  className='bg-primary' style={{cursor:'pointer',textAlign:'center',color:'white',paddingTop:20,paddingBottom:20}}>
       Bendari 2022
    
     <Promo open={openPromo} openHandler={setOpenPromo} />
     </footer> */}
    </>
  )
}