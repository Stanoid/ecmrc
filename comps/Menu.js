/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { MAIN_STYLE } from '../utils/style'
export default function Menu(props) {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={props.open} as={Fragment}>
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
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 left-0  max-w-md flex  ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-200 sm:duration-300"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-200 sm:duration-300"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-screen ">
                
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-hidden">
                  <div className="px-4 sm:px-6 flex align-middle justify-between">
                    <Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>
                    <button onClick={()=>{props.openHandler(false)}} >   <XIcon className="h-8 w-8 p-1 border-2 rounded-full border-black  " aria-hidden="true" /></button>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div>aa</div>
                    </div>
                    {/* /End replace */}
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
