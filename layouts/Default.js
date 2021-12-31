import Nav from '../comps/nav'
import { useRouter } from 'next/router'

import Head from 'next/head';
export default function DefaultLayout({ children }) {
 
  
    const router = useRouter();
    const ishome = router.pathname==="/"
  

  return (
    <>
      <Nav />
      
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&family=Roboto:wght@500&display=swap" rel="stylesheet"/>
    </Head>
     
      <main>{children}</main>
     
    </>
  )
}