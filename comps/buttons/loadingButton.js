import React from 'react'

export default function loadingButton(props) {
    return (
        <div   className="bg-white px-10 cursor-pointer  rounded-xl w-screen  max-w-sm">
        <div onClick={props.act} class="mt-4 w-full text-center bg-primary text-white py-2 rounded-md text-lg tracking-wide">
        {props.lod?props.msg:props.text}
      </div>
      </div>
    )
}
