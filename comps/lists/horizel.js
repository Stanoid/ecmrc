import React from 'react';
import { MAIN_STYLE } from '../../utils/style';
function Horizel(props) {
  return <div  onClick={()=>{props.pager(props.id)}} className='transition ease-in-out hover:bg-gray hover:text-white' style={{display:"flex",flexDirection:'row',alignItems:'center',padding:10,paddingTop:15,paddingBottom:15,borderRadius:5,cursor:"pointer",backgroundColor:props.current==props.id?"lightgrey":"white",marginTop:10}}>


<div className="grid grid-cols-12 gap-1" style={{width:'100%'}}>
  <div style={{color:MAIN_STYLE.primary,display:'flex',justifyContent:"flex-start", alignItems:"center",fontSize:25,fontWeight:'bold'}} className='col-span-3'>
  <props.icon/>
  </div>
  
 
  <div style={{color:'#1c1c1c',textAlign:'left',fontWeight:"bold"}} className='col-span-9'>
     {props.text}
  </div>

</div>
  </div>;
}

export default Horizel;
