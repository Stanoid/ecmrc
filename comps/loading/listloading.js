import React from 'react'
import { useState } from 'react'
import Loading from "../../img/pulse.gif"
import Image from "next/image"
import { MAIN_STYLE } from '../../utils/style'

function ListLoading(props) {
  return (
    <div style={{display:props.lod?"flex":"none",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        {/* <Loading/> */}
            {/* <Image src={Loading} height={props.width} /> */}

            <div className="lds-facebook"><div></div><div></div><div></div></div>
            <div style={{}}>
                {props.text?props.text:"Loading ..."}
            </div>
            {/* <object type="image/svg+xml" data="/pulse.svg">svg-animation</object> */}
    </div>
  )
}

export default ListLoading