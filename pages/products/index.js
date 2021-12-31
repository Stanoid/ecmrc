import React ,{useState,useEffect} from 'react'
import Nav from '../../comps/nav'
import Card from '../../comps/card/Card';
import DefaultLayout from '../../layouts/Default';
import { API_URL,ROOT_URL } from '../../utils/url';


export default function Products() {

  const [Fdata,setFData] = useState([]);



    return (
      <main>
       <DefaultLayout>
      <div style={{marginTop:50,textAlign:'center'}}>loading...</div>
         
        </DefaultLayout>
        </main>
    )
}


