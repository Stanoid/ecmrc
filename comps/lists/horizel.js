import React from 'react';
import { MAIN_STYLE } from '../../utils/style';
function Horizel(props) {
  return <div  onClick={()=>{props.pager(props.id)}} className='transition ease-in-out rounded-none lg:rounded-md xl:rounded-md  hover:bg-gray hover:text-white' style={{display:"flex",flexDirection:'row',alignItems:'center',padding:10,paddingTop:15,paddingBottom:15,cursor:"pointer",backgroundColor:props.current==props.id?"lightgrey":"white",marginTop:10}}>


<div className="grid grid-cols-12 gap-0" style={{width:'100%'}}>
  <div style={{color:MAIN_STYLE.primary,display:'flex', alignItems:"center",fontSize:25,fontWeight:'bold'}} className='col-span-12 xl:col-span-3 lg:col-span-3  xl:justify-start lg:justify-start justify-center '>
  <props.icon/>
  </div>
  
 
  <div style={{color:'#1c1c1c',textAlign:'left',fontWeight:"bold"}} className='col-span-12 xl:col-span-9 lg:col-span-9'>
     {props.text}
  </div>

</div>
  </div>;
}

export default Horizel;
