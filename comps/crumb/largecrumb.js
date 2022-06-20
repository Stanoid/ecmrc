import React from 'react'
import randomColor from 'randomcolor'
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import Styles from "../../styles/Home.module.css"
import { MAIN_STYLE } from '../../utils/style';

export default function LargeCrumb(props) {
    const [cimg,setCimg] = useState("");
    const router = useRouter();
    const color = randomColor({
        luminosity: 'dark',
        hue :"green",
        
   
        
       
     });

     useEffect(() => {
     if(props.img!=null){
        let imm = props.img;
        let ino = imm.split("/", 6).join("/").length
        let res = "";
       console.log(props.cat)
      let head = imm.slice(0,ino+1);
      let foot = imm.slice(ino+1,imm.length);
      console.log("head",head);
      console.log("foot",foot);
      let nx = head.concat("w_1000,ar_1:1,c_fill/")
      nx = nx.concat(foot);
      console.log("nx",nx)
      console.log("result",head.concat(foot))
      setCimg(nx);
     }
         }, [])
    return (

        <div>

<div   style={{marginBom:20,display:'inline-block',textAlign:'left',width:props.half?"60%":"100%"}}>

<div onClick={()=>{router.push(`/catagories/${props.id}`)}} style={{width:"100%",height:"100%",borderRadius:5,display:'flex',alignItems:'center',justifyContent:"center"}}>
{/* <div style={{position:"absolute",zIndex:10,display:loading?'flex':'none', justifyContent:'center',alignItems:'center' }}>
<div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
<div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
<div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
</div> */}
<img
quality={"50"}
 width={"100%"}
  height={"100%"} 
  
  style={{objectFit:'cover',width:'100%',height:'100%',borderRadius:8}}


    className={[Styles.nextimg]} 
    src={cimg} 
    />
</div>

<div onClick={()=>{router.push(`/catagories/${props.id}`)}}className={Styles.ptfont} style={{color:"#585858",fontSize:'15px',marginTop:10,marginBottom:5,lineHeight:1.2,textTransform:'capitalize',wordSpacing:0.6}} >
   
    {props.name}
    {/* <div style={{color:"grey",fontSize:12,display:'flex',alignItems:'center'}}>{props.vendor} <BsCheckCircleFill style={{color:MAIN_STYLE.primary,marginLeft:3,display:props.ver?"block":"none"}} /> </div> */}
</div>

{/* <div className={Styles.MAIN_FONT} style={{fontSize:'1rem',marginTop:3,marginBottom:3}} >
    {props.description.length>=19?props.description.slice(0,19)+"...":props.description}
</div> */}

{/* <div className='grid grid-cols-5 gap-x-0'>

<div className='col-span-2' >
<span style={{color:"grey",fontSize:8}} 
className={Styles.MAIN_FONT}>  <span style={{fontWeight:"bold",color:MAIN_STYLE.primary,fontSize:20}} >{parseFloat(props.price.comm)} </span> عمولة
</span>
</div>

<div className='col-span-3' > 
<span style={{color:"grey",fontSize:8,float:"right"}} 
className={Styles.MAIN_FONT}> {`${CURRENCY} `} <span style={{fontWeight:"bold",color:"#1c1c1c",fontSize:20}} >{parseFloat(props.price.price)} </span></span>


</div>
</div> */}


{/* <div  style={{marginTop:10}} className='grid grid-cols-5  gap-x-2 gap-y-3' >

<div onClick={()=>{router.push(`/catagories/${props.cat[0].id}`)}} className='col-span-2' >
<span style={{color:"white",backgroundColor:MAIN_STYLE.primary,padding:"1px 5px 1px 5px",
borderRadius:"3px 5px 0px 5px",fontSize:13}}>{props.cat[0].Name}
</span>

</div>

</div> */}



  </div>

        </div>
      
            
// {/* <div className={Styles.MAIN_FONT} onClick={()=>{router.push(`/catagories/${props.id}`)}} style={{padding:"0px 7px 0px 7px",margin:2,marginTop:0,color:"white",borderRadius:"3px 5px 0px 5px",backgroundColor:MAIN_STYLE.primary,
// display:'inline-block',cursor:"pointer"}} >
// {props.name}
// </div> */}




       
    )
}
