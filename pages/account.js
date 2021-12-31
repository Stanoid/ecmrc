import Head from "next/head";
import { useContext,useState,useEffect } from "react";
import Link from "next/link";
import { API_URL } from "../utils/url";
import DefaultLayout from "../layouts/Default";
import AuthContext from "../context/AuthContext";


const useOrders =(user,getToken)=>{
    const [orders,setOrders]= useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{

        const fetchOrders = async ()=>{
            if(user){
                try{
                    setLoading(true)
                    const token = await getToken();
                    const order_res = await fetch(`${API_URL}/orders`,{
                        headers:{
                            'Authorization': `Bearer ${token}`
                        }
                    })

                    const data = await order_res.json();
                    setOrders(data);

                }catch(err){
                    setOrders([]);
                    console.log(err)
                }
                setLoading(false);
            }
        }

        fetchOrders();
    },[user])
     

    return {orders,loading}
}

export default function Account(){

    const {user,logOutUser,getToken} = useContext(AuthContext)

    const {orders,loading} = useOrders(user,getToken);
    console.log("aaaaaaaaaaaaaaaa",orders);

    if(!user){
        return(
            <DefaultLayout>
                <p>Please Login to view account</p>
            </DefaultLayout>
        )
    }



    return(
        <DefaultLayout>
            <Head>
                <title>Account page</title>
                <meta name="description" content="Account page view purchases" />
            </Head>
            <div style={{padding:10}}>

            <h1 style={{marginTop:100}}>
             Account profile
            </h1>

            <h1>
             Orders
            </h1>
           
            

            <div>

            <div style={{display:"flex",justifyContent:'space-between',alignItems:"center",fontWeight:'bold',marginBottom:20}}>
                <div>
                   id
                </div>

                <div>
                  total
                </div>

                <div>
                   status
                </div>

                <div>
                   date
                </div>
                 </div>
                 {loading && <p>Loading your orders....</p>}
                { orders&& orders.map(order=>(
                 
                 <div key={order.id} style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
                <div>
                    {order.id}
                </div>

                <div>
                    {order.total}
                </div>

                <div>
                    {order.status}
                </div>

                <div>
                    {new Date(order.published_at).toLocaleDateString('en-EN')}
                </div>
                 </div>

                ))}


            </div>


            <a href="#" onClick={logOutUser}> Logout</a>

            </div>
           
        </DefaultLayout>
    )
}