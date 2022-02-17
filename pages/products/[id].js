import React ,{useState,useEffect,useContext} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { API_URL,ROOT_URL,CURRENCY } from '../../utils/url';
import DefaultLayout from '../../layouts/Default';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
import Counter from '../../comps/counter';
import { StarIcon } from '@heroicons/react/solid'
import { MdClose } from 'react-icons/md';
import { RadioGroup } from '@headlessui/react'
import SimpleImageSlider from "react-simple-image-slider";

import CartContext from '../../context/NotiContext';
const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product({productel}) {
  const [selectedColor, setSelectedColor] = useState(productel.attributes.colors[0].color_name)
  const [selectedSize, setSelectedSize] = useState(0)
  const [qty,setQty] = useState(1);
  const  ls = require('local-storage');
  const router = useRouter();
  const [qlimit,setQlimit] = useState(0)
  const [price,setPrice]=useState();
  const [hasof,setHasOf] = useState(0);


  useEffect(() => {

    if(!ls.get("cart")){
      ls.set("cart",[])
      console.log("cart set")
       }else{
        console.log("cart already exists ")
       }
   
   try {
    if(productel.attributes.colors.data[0]){
     
      setSelectedColor(productel.attributes.colors.data[0]);
     
    }
   } catch (error) {
     
   }
  
   



   try {

    let least= productel.attributes.stocks.data[0].attributes.stock_price;
    let seleq = 0;
    let seleid = 0;
    let selname = "";
 
    console.log("aaaaaa",least)    
     for (let i = 0; i < productel.attributes.stocks.data.length; i++) {
  
       try{
         
         if(productel.attributes.stocks.data[i].attributes.stock_price <= least && productel.attributes.stocks.data[i].attributes.stock>0){
      
          least = productel.attributes.stocks.data[i].attributes.stock_price;
          seleid = productel.attributes.stocks.data[i].id
          seleq = productel.attributes.stocks.data[i].attributes.stock
          console.log("aaaaaaaaaaaaaaa",productel.attributes.stocks.data[i].attributes.stock)
          selname = productel.attributes.stocks.data[i].attributes.option_name
         } 
       }catch(err){
       
       }
      
       
     }
  
     // alert(least);
     
    setPrice(least)
    // console.log("noooooooooooonon",seleq)
    setQlimit(seleq);
    setSelectedSize({id:seleid,name:selname})
     
   } catch (error) {
    setPrice("Unknown price")
   } 

  
  },[]);



  // if(!productel){
  //  return<DefaultLayout> <div style={{width:'100vw',height:'100vh',display:'flex'}}> 
  //  <div style={{margin:'auto',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
  //    <MdClose style={{fontSize:150,padding:20,backgroundColor:'#F7819F',color:'white',borderRadius:'100%'}}/>
  //    <div className='text-2xl font-sans mt-5'>
  //    Nothing to see here
  //    </div>

  //    <div className='text-lg font-sans mt-5 ' style={{color:'blue',textDecoration:'underline'}}>
  //      <Link href={"/"}>
  //      Browse Products
  //      </Link>
   
  //    </div>
    
  //  </div>
  //   </div></DefaultLayout>
  // }


  const notify = (type,msg)=>{

    const options={
      hideProgressBar:true,
      draggable:true,
      closeButton:false,
      
    }
    switch(type){
      case 'success':
        toast.success(msg,options)
        break;

        case 'error':
          toast.error(msg,options)
          break;

          case 'warn':
            toast.warn(msg,options)
            break;

          

    }
   
  }
  const sizeHandler = (op)=>{
    console.log(op.attributes.stock)
   setSelectedSize({id:op.id,name:op.attributes.option_name});
   setPrice(op.attributes.stock_price)
   setQlimit(op.attributes.stock)
   setQty(0);
   handleHasOf(op.id);
  
  }

  const colorHandler = (value)=>{
    setSelectedColor(value)
    console.log(value)
  }


 

  const handleHasOf=(id)=>{
    const  cart = ls.get("cart");
    let hass = 0;
    for (let i = 0; i < cart.length; i++) {
     if(cart[i].opt.id==id){
      hass = hass+cart[i].qty;
     }
      
    }
    setHasOf(hass);
    console.log("hasof triggered",hass)
  }

  const imgval = ()=>{
    try{
    return  ROOT_URL+productel.attributes.image.data[0].hash+productel.attributes.image.data[0].ext
    }catch(err){
return null
    }
  }


  const nameval=()=>{
    try {
      return productel.attributes.name
    } catch (err) {
      return null
    }
  }

  const hasStocks=()=>{
    try {
      if(productel.attributes.stocks){
        return true
      }else{
        return false
      }
    } catch (err) {
      return false
    }
  }

  const descval=()=>{
    try {
  return  productel.attributes.description
    } catch (err) {
      return null
    }
  }

  const handleCart=()=>{
 const order = {
   'id':productel.id,
   'name': nameval(),
   'price':price,
   'qty':qty,
   'color': selectedColor,
   'img':productel.attributes.image[0].url,
   'opt':selectedSize, 
 }

 const tempCart = ls.get("cart");

//  console.log(order);
//  return
 if(tempCart.length==0){
      console.log(order.id," not exists")
      tempCart.push(order);
       ls.set("cart",tempCart);
       setQty(0);
       handleHasOf(order.id);
       notify("success","Added to cart")
      return;
    }

  let existso = 0;
  let total = 0;
    for (let i = 0; i < tempCart.length; i++) {
    //  console.log(tempCart[i].opt.id,selectedSize.id)

    if(tempCart[i].opt.id===selectedSize.id&&tempCart[i].color===selectedColor){
      existso =1;
     
      console.log("exists")
      tempCart[i].qty = tempCart[i].qty+ qty;
    }else{
     
    }
      
    }

    if(existso==0){
      tempCart.push(order);
    }

    ls.set("total",total);

    ls.set("cart",tempCart)
    setQty(0);
    handleHasOf(order.id);
    notify("success","Added to cart")




  }


  if(router.isFallback){
    return <div>fallbacking...</div>
  }

  return (
      <DefaultLayout>
        <ToastContainer  limit={3}/>
    <div className="bg-white pt-10">
      <div className="pt-6">

        
      

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 hidden">
          <div style={{display:productel&&productel.attributes.image[0]?"flex":"none"}} className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
               src={productel.attributes.image[0]&&productel.attributes.image[0].url}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div style={{display:productel&&productel.attributes.image[1]?"flex":"none"}} className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
              src={productel.attributes.image[1]&&productel.attributes.image[1].url}
                alt={product.images[1].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div style={{display:productel&&productel.attributes.image[2]?"flex":"none"}} className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={productel.attributes.image[2]&&productel.attributes.image[2].url}
                alt={product.images[2].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div style={{display:productel&&productel.attributes.image[3]?"flex":"none"}}  className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
               src={productel.attributes.image[3]&&productel.attributes.image[3].url}
              alt={productel.attributes.image}
              className="w-full h-full object-center object-cover"
            />
          </div>

        </div>

   
        <div className='lg:hidden xl:hidden '  style={{height:440}}>
          <div   className='lg:hidden xl:hidden ' >
 <SimpleImageSlider
        width={"100%"}
        height={"50%"}
        images={productel.attributes.image}
        showBullets={true}
        showNavs={true}
      />
      </div>
 </div>
 

       

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{nameval()}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{`${price} ${CURRENCY}`}</p>

          
          

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                <RadioGroup value={selectedColor} onChange={colorHandler} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {productel.attributes.colors? productel.attributes.colors.map((color) => (
                      <div key={color.color_name}  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                      <RadioGroup.Option
                        key={color.color_name}
                        
                        value={color.color_name}
                        style={{backgroundColor:color.color_value}}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            `-m-0.5 relative p-0.5  rounded-full flex items-center justify-center cursor-pointer focus:outline-none`
                          )
                        }
                      >
                        <RadioGroup.Label as="p" className="sr-only">
                          {color.color_name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                      <div style={{marginTop:10}} >{color.color_name}</div>
                      </div>
                    )): <div className='font-bold text-gray'> No colors available</div>}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">Options</h3>
               
                </div>

                <RadioGroup value={selectedSize} onChange={sizeHandler} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose an option</RadioGroup.Label>
                  <div className="grid  gap-4 md:grid-cols-3 sm:grid-cols-8 lg:grid-cols-3">
                    {hasStocks()? productel.attributes.stocks.data.map((stock) => (
                      <RadioGroup.Option
                        key={stock.id}
                        value={stock}

                        disabled={!stock.attributes.stock>0}
                        className={({ active }) =>
                          classNames(
                            stock.attributes.stock>0
                              ? 'bg-white shadow-md text-gray-900 cursor-pointer'
                              : 'bg-gray-50 text-gray cursor-not-allowed',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p"><div >
                              <div>{stock.attributes.option_name}</div>
                              <div>{`${stock.attributes.stock_price} ${CURRENCY}`}</div>
                              <div style={{color:'red',marginTop:4}}>{`${stock.attributes.stock} Left`}</div>
                              </div></RadioGroup.Label>
                            {stock.attributes.stock>0 ? (
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-primary  ' : 'border-black',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <div
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </div>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    )):null}
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center justify-between mt-9">
                  <h3 className="text-sm text-gray-900 font-medium">Quantity</h3>
               
                </div>

              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Counter limit={qlimit-hasof}  qty={qty} setQ={setQty} />
              </div>
              {/* <div onClick={()=>{console.log(selectedColor)}}>Has of</div>
              <div onClick={()=>{console.log(ls.clear("cart"))}}>clear cart</div> */}
              
            </form>
            <button
              onClick={ qty==0?()=>{notify("warn","Select Quantity")}:()=>{handleCart()}}
                className="mt-10 w-full bg-secondary border border-transparent rounded-md py-3 
                px-8 flex  items-center justify-center text-base font-medium text-white hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md"
                style={{backgroundColor:qty==0?'grey':''}}
              >
                Add to Cart
              </button>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{descval()}</p>
              </div>
            </div>

         

           
          </div>
        </div>
      </div>
    </div>
    </DefaultLayout>
  )
}


export async function getServerSideProps({params:{id}}){
    const product_res = await fetch(`${API_URL}/products/${id}?populate=*`);
    const found = await product_res.json();
   
    console.log("aaaaaaaaaaaaaaaaaaa",found)

    if(found==undefined||found==null||found=={}||found==[]){
      return {
        props:{
            productel: null
        }
    }
    }else{
      return {
        props:{
            productel:found.data
        }
    }
    }

   
}

// export async function getStaticPaths(){
// const product_res = await fetch(`${API_URL}/products`);
// const product = await product_res.json();

// return {
//     paths: product.map(product=>({
//         params:{id: String(product.id)}
//     })),
   
//     fallback:true
// }

// }