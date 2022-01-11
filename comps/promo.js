/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState,useEffect,useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdDownload } from 'react-icons/md'
import { API_URL, ROOT_URL} from '../utils/url'
import styles from '../styles/Home.module.css'
import { XIcon } from '@heroicons/react/outline'
import { MAIN_STYLE } from '../utils/style'
const Promo = (props) => {
  

    const ls= require("local-storage")
    const promos = ls.get("promo");
    const [promoData,setPromoData] =useState();
    
  useEffect( async () => {



    // setPromoData(ls.get("promo"));
    // console.log(promoData)    


    
 },[])


if(promos){

  
  return (
    <Transition.Root  show={props.open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden z-20" onClose={()=>{props.openHandler(false)}}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black lg:bg-black  bg-opacity-25 lg:bg-opacity-50 transition-opacity" />
          </Transition.Child>
          <div className="fixed bottom-0 right-0 lg:bottom-0 max-h-1/2   max-w-md flex ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-200 sm:duration-300"
              enterFrom="translate-y-full lg:translate-y-full"
              enterTo="translate-y-0 lg:translate-y-0 "
              leave="transform transition ease-in-out duration-200 sm:duration-300"
              leaveFrom="translate-y-0 lg:translate-y-0 "
              leaveTo="translate-y-full lg:translate-y-full"
            >
              <div className="relative w-screen ">
                
                <div className="h-screen-1/2 flex flex-col py-6 rounded-t-lg rounded-r-lg lg:rounded-r-none   bg-white shadow-lg overflow-y-hidden">
                <div className='lg:hidden flex' style={{justifyContent:'center',alignItems:'center'}}>
                          <div onClick={()=>{props.openHandler(false)}} style={{width:100,height:5,backgroundColor:MAIN_STYLE.primary,borderRadius:100,opacity:0.7}}></div>
                      </div>
                 

                <div style={{padding:20}}>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                   <img
      style={{objectFit:'cover',width:'50%',height:'50%',borderRadius:"100%",border:`3px solid ${MAIN_STYLE.primary}`,padding:3}}
      
          className={styles.nextimg} 
          // src={ROOT_URL+promos.data.attributes.image.data.attributes.hash+promos.data.attributes.image.data.attributes.ext} 
          />
                   </div>

                <div style={{fontWeight:'bold',textAlign:'center',fontSize:27,marginBottom:0,color:MAIN_STYLE.primary}}>{promos.data&&promos.data.attributes.name}</div> 
                <div style={{textAlign:'center',fontSize:15,marginBottom:15}}>{promos.data&&promos.data.attributes.job}</div> 
              <div>Email: <a style={{color:'blue',textDecoration:'underline'}} href={`mailto:${promos.data&&promos.data.attributes.email}`} >{promos.data&&promos.data.attributes.email}  </a></div> 
             
              <div>Phone: {promos.data&&promos.data.attributes.phone}</div>  
              <div> Twitter: {promos.data&&promos.data.attributes.twitter_link}</div>   
              <div>Github: {promos.data&&promos.data.attributes.github_link}</div>   
              {/* <a href={`${API_URL}${promos.resume.url}`} > */}
              <div style={{display:"flex",cursor:'pointer',justifyContent:'center',margin:20,alignItems:'center',
              padding:10,borderRadius:10,backgroundColor:MAIN_STYLE.primary,color:'white'} } className='shadow-md hover:bg-white'>
                    Download full CV <MdDownload style={{marginLeft:5,fontSize:20}}/>
                    </div> 
                    {/* </a> */}
             <div className="text-lg font-medium text-gray-900 " style={{marginTop:10}}>Project:</div>
             <p style={{padding:5}}>
                 {promos.data&&promos.data.attributes.project_desc}
                   </p>
                </div>

                 
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} else{

  return(
    <div>Missing data </div>
  )

}


}

export default Promo;
