import React from 'react'
import Mpanel from './mpanel'
import { useEffect,useContext,useState } from 'react'
import DefaultLayout from '../layouts/Default'
import {MdAccountCircle,MdStar} from 'react-icons/md'
import {FaUserCircle} from "react-icons/fa"
import AuthContext from '../context/AuthContext'
import {GiStarsStack,GiRank1} from "react-icons/gi"
import Wallet from './accountpages/wallet'
import Transactions from './accountpages/transactions'
import { MAIN_STYLE } from '../utils/style'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Account() {
    const{userData,checkLogged} = useContext(AuthContext)
    const ls = require("local-storage");
    useEffect(()=>{

     checkLogged(2);
        getData();
    //console.log("rrrr",userData);
           
        
        },[])


        const getData = ()=>{

        }

        let [categories] = useState({
            المحفظة: [
              {
                id: 1,
                comp:<Wallet/>,
                icon: <MdAccountCircle/>
              }
             
            ],
            الدفعيات: [
              {
                id: 1,
               comp:<Transactions/>,
               icon: <MdAccountCircle/>
               
              },
            
            ],
            الحساب: [
              {
                id: 1,
                comp: <div>three</div>,
                icon: <MdAccountCircle/>
              }
            
            ],
          })


    return (
        <DefaultLayout>
<div style={{padding:10,marginTop:10,marginBottom:10}} >

    <div style={{border:"1px solid"+ MAIN_STYLE.primary,borderRadius:5,padding:10}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:'grey'}}>
        <FaUserCircle style={{marginRight:5,fontSize:20}} />
            <div>
                <div>
                {userData&&userData.username}
                </div>
                
     
            </div>
          
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <GiStarsStack style={{fontSize:35,color:MAIN_STYLE.primary}}/>
        <span style={{color:"grey"}}>992/2000</span>
        </div>
       
    </div>


   <div style={{padding:"5px 0px"}}>
   <div style={{backgroundColor:"#E6E6E6"}} className="w-full  rounded-full h-2 ">
  <div className="bg-primary h-2 rounded-full" style={{width:"45%"}}></div>
</div>
    </div> 



    </div>

    
</div>
   

<div className="w-full max-w-xl lg:py-4 px-1 py-0 sm:px-0">
      <Tab.Group>
        <Tab.List  className="flex space-x-1    p-1">
          {Object.keys(categories).map((category,ids) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                  'ring-white text-grey ring-opacity-0 ring-offset-0 ring-offset-primary focus:outline-none focus:ring-0',
                  selected
                    ? ' shadow text-primary'
                    : 'text-blue-100 hover:bg-white/[0.12] '
                )
              }
            >
              {category}
              
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post,id) => (
                    <div key={id} >
                    {post.comp}
                    </div>
               
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>


         </DefaultLayout>
   
    )
}
