/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { CURRENCY } from '../utils/url'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Cartel(props) {
  const [open, setOpen] = useState(true)


  const removeid = (id)=>{


  }


  return (
  <div>
       <li  className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={props.img}
                                  alt={"alt"}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={"link"}>{props.name}</a>
                                    </h3>
                                    <p className="ml-4">{`${props.price}  ${CURRENCY}` }</p>
                                  </div>
                                  {/* <p className="mt-1 text-sm text-gray-500">{props.color}</p> */}
                                  <p className="ml-4">{` commission: ${props.comm}  ${CURRENCY}` }</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                 
                                  <div className="flex" >
                                    <button onClick={()=>{props.removeItem(props.size.id)}} type="button" style={{color:'red'}} className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>

                           <hr></hr>
  </div>
  )
}
