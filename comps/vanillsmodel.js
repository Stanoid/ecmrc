/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIconreact,XIcon } from '@heroicons/react/outline'
import {BsBoxSeam,BsDownload} from 'react-icons/bs'
import { API_URL ,CURRENCY} from "../utils/url";
import { MAIN_STYLE } from '../utils/style';
export default function VanillaModel(props) {
  const [open, setOpen] = useState(true)

 
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root  show={props.open} as={Fragment}>
      
    <Dialog as="div" className="fixed inset-0 overflow-hidden z-20" onClose={()=>{props.openHandler(true)}}>
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
          <Dialog.Overlay  className="absolute inset-0 bg-black lg:bg-black  bg-opacity-10 lg:bg-opacity-50 transition-opacity" />
        </Transition.Child>
        <div className="fixed bottom-0 right-0 lg:top-0 max-h-1/2 text-right   max-w-md flex ">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-200 sm:duration-300"
            enterFrom="translate-y-full lg:-translate-y-full"
            enterTo="translate-y-0 lg:-translate-y-0 "
            leave="transform transition ease-in-out duration-200 sm:duration-300"
            leaveFrom="translate-y-0 lg:-translate-y-0 "
            leaveTo="translate-y-full lg:-translate-y-full"
          >
            <div className="relative w-screen ">
        
              
              <div className="h-screen-1/2 flex flex-col py-6 rounded-t-lg rounded-r-lg lg:rounded-r-none lg:rounded-t-none  bg-white shadow-lg overflow-y-hidden">
              <div className='lg:hidden flex' style={{justifyContent:'center',alignItems:'center'}}>
                        <div onClick={()=>{props.openHandler(false)}} style={{width:100,height:5,backgroundColor:'grey',borderRadius:100}}></div>
                    </div>
                <div className="px-4 sm:px-6 flex align-middle justify-between">
                <div className=' lg:block' onClick={()=>{props.openHandler(false)}} >   <XIcon className="h-8 w-8 p-1 border-2 rounded-full border-black  " aria-hidden="true" /></div>  
                  <Dialog.Title className="text-lg font-medium text-gray-900 text-right  ">{props.title} </Dialog.Title>
                
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
            
                   
    {props.content}
                 
 
                                   
                
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  )
}
