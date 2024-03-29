import React from "react";
import DefaultLayout from "../../layouts/Default";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingButton from "../../comps/buttons/loadingButton";
import { Flip, Slide, toast, ToastContainer } from "react-toastify";
import { MAIN_STYLE } from "../../utils/style";
import { MdChevronLeft, MdDeleteForever } from "react-icons/md";
import { API_URL } from "../../utils/url";
function EditForm(props) {
  const [name, setname] = useState("");
  // const [cat, setcat] = useState(cats&&cats.length!==0?cats[0].id:null);
  const [sercats, setsercats] = useState();
  const [desc, setdesc] = useState("");
  const [stock, setstock] = useState([]);
  const [colors, setcolors] = useState([]);
  const ls = require("local-storage");
  const [image, setImage] = useState([]);
  const [cleanUp, setCleanUp] = useState(null);

  const [url, setUrl] = useState("");
  const [top, settop] = useState("");
  const [tstock, settstock] = useState("");
  const [tprice, settprice] = useState("");
  const [stokid, setStokid] = useState("");
  const [prodid, setProdid] = useState("");

  const [lod, setlod] = useState(false);
  const [colorname, setcolorname] = useState("");
  const [colovalue, setcolovalue] = useState("");

  useEffect(() => {
    getProductData();
  }, []);

  async function getProductData() {
    const product_res = await fetch(
      `${API_URL}/products/${props.Pid}?func=getFullProduct`
    );
    const found = await product_res.json();

    console.log(found);
    setProdid(found.data.id);
    setname(found.data.attributes.name);
    setdesc(found.data.attributes.description);
    // setCleanUp(found.data.attributes.stocks.data);
    settop(found.data.attributes.stock.data.attributes.comm);
    settstock(found.data.attributes.stock.data.attributes.stock);
    settprice(found.data.attributes.stock.data.attributes.price);

    setStokid(found.data.attributes.stock.data.id)
    setImage(found.data.attributes.image)
    //  console.log("alstock",old)

    // for (let i = 0; i < image.length; i++) {
    //  console.log(image[i])
      
    // }


    console.log(found.data.attributes.image);

    // setcolors(found.data.attributes.colors);

    // console.log(found)
  }

  const addstock = () => {
    const old = stock;
    const ob = { ob: top, stock: tstock, price: tprice };

    const joind = old.concat(ob);

    setstock(joind);
  };

  const deletStock = (index) => {
    const sstock = stock;
    // console.log("indev stock",sstock.slice([0,1]))

    const newar = [];
    for (let i = 0; i < sstock.length; i++) {
      console.log("aaaa", i);
      if (i == index) {
      } else {
        newar.push(sstock[i]);
      }
    }

    console.log(newar);
    setstock(newar);
  };

  const deletColor = (index) => {
    const ccolor = colors;
    // console.log("indev stock",sstock.slice([0,1]))

    const newar = [];
    for (let i = 0; i < ccolor.length; i++) {
      console.log("aaaa", i);
      if (i == index) {
      } else {
        newar.push(ccolor[i]);
      }
    }

    console.log(newar);
    setcolors(newar);
  };

  const addcolor = () => {
    const old = colors;
    const ob = { color_name: colorname, color_value: colovalue };
    console.log(ob);
    const joind = old.concat(ob);
    setcolors(joind);
  };

  const addimg = (ob) => {
    const old = image;

    const joind = old.concat(ob);
    setImage(joind);
    console.log(joind);
  };

  const deleteimg = (index) => {
    console.log("index", index);
    const old = image;

    const newar = [];
    for (let i = 0; i < old.length; i++) {
      console.log("aaaa", i);
      if (i == index) {
      } else {
        newar.push(old[i]);
      }
    }

    setImage(newar);
    console.log(image);
  };

  const upload = (ob) => {
   
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + ls.get("atkn"),
       
      },
      body: JSON.stringify(ob),
    };
    fetch(`${API_URL}/products/${ob.data.id}?func=updateProduct`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
      console.log(data)
          setlod(false);
          props.pagdler(1);
         
        
      });
    

  };

  const cleanFunc = (name) => {
    for (let i = 0; i < cleanUp.length; i++) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ls.get("atkn"),
        },
      };
      fetch(`${API_URL}/stocks/${cleanUp[i].id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (i == cleanUp.length - 1) {
            console.log("clean");
            notify("success", `Product ${name} has been Edited.`);
            setlod(false);
            props.pagdler(1);
            ////done
          }
        });
    }
  };

  const deleteProduct = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + ls.get("atkn"),
      },
    };
    fetch(`${API_URL}/products/${props.Pid}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        notify("success", `Product  has been Deleted.`);

        props.pagdler(1);
        ////done
      });
  };

  const uploadImage = () => {
    setlod(true);
    const upob = {
      data: {
        id:prodid,
        name: name,
        description: desc,
        ncomm: top,
        nstock:tstock,
        nprice:tprice,
        stockid:stokid,
        colors: colors,
        catagories: 1,
      },
    };

    console.dir(upob);

    let imar = [];
    let doo = new Promise(function (suc) {
      // "Producing Code" (May take some time)

      // for (let i = 0; i < image.length; i++) {

      //     console.log("began")
      //     const data = new FormData()
      //     data.append("file", image[i])
      //     data.append("upload_preset", "products")
      //     data.append("cloud_name","strapimedia")
      //     fetch("  https://api.cloudinary.com/v1_1/strapimedia/image/upload",{
      //     method:"post",
      //     body: data
      //     })
      //     .then(resp => resp.json())
      //     .then(data => {

      //         if(i==image.length-1){

      //              imar.push({"url":data.url})
      //             upob.data.image = imar;
      //             console.log("very very novel",upob)
      //             upload(upob)
      //         }else{
      //             imar.push({"url":data.url})
      //             console.log("very novel",upob)
      //         }
      // //    upob.data.image = data.url;
      // //    upload(upob)
      //     })
      //     .catch(err => console.log(err))

      // }

      upob.data.image =
        '[{"url": "http://res.cloudinary.com/strapimedia/image/upload/v1644231459/awezxxuppkemoic0jctp.png"}]';
      upload(upob);
    });
    doo.then(function (ob) {});
  };

  const notify = (type, msg) => {
    const options = {
      hideProgressBar: true,
      draggable: true,
      closeButton: false,
    };
    switch (type) {
      case "success":
        toast.success(msg, options);
        break;

      case "error":
        toast.error(msg, options);
        break;

      case "warn":
        toast.warn(msg, options);
        break;
    }
  };

  return (
    <div>
      <ToastContainer limit={3} />
      <div style={{ minHeight: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            onClick={() => {
              props.pagdler(1);
            }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <MdChevronLeft
              style={{
                color: "white",
                backgroundColor: MAIN_STYLE.primary,
                fontSize: 25,
                marginRight: 5,
                borderRadius: 100,
                padding: 0,
              }}
            />
            <span>Back</span>
          </div>

          <div
            onClick={() => {
              deleteProduct();
            }}
            style={{
              display: "flex",
              backgroundColor: "red",
              padding: 5,
              borderRadius: 5,
              justifyContent: "flex-start",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <MdDeleteForever
              style={{
                color: "white",
                fontSize: 25,
                marginRight: 5,
                borderRadius: 100,
                padding: 0,
              }}
            />
            <span style={{ color: "white" }}>Delete product</span>
          </div>
        </div>
        <div
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <input value={name} placeholder='name' type={"text"} onChange={(event)=>{setname(event.target.value)}} />
               <input value={desc} placeholder='description' type={"text"} onChange={(event)=>{setdesc(event.target.value)}} />
               <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input> */}
          <div>
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Product informations
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Make it as informative as you can to convert sales
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company-website"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Product name
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                value={name}
                                onChange={(event) => {
                                  setname(event.target.value);
                                }}
                                type="text"
                                name="company-website"
                                id="company-website"
                                className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300"
                                placeholder="Product name"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              value={desc}
                              onChange={(event) => {
                                setdesc(event.target.value);
                              }}
                              id="about"
                              name="about"
                              rows="3"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            ></textarea>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description of the product.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Catagory
                          </label>
                          {/* <select value={cat} onChange={(event)=>{setcat(event.target.value)}} id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
               
                 {
                      
                    cats&&cats.map((cat)=>{
                     return <option key={cat.id} value={cat.id} >{cat.attributes.Name}</option>
                     })
                 }
                </select> */}

                          <p
                            style={{
                              color: MAIN_STYLE.primary,
                              textAlign: "right",
                              textDecoration: "underline",
                            }}
                          >
                            Add new catagory
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Product images
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke={MAIN_STYLE.primary}
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <input
                                    id="file-upload"
                                    onChange={(e) => {
                                      addimg(e.target.files[0]);
                                    }}
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div style={{ padding: 10 }}>
                            <div
                              style={{
                                display: image ? "flex" : "none",
                                flexWrap: "wrap",
                              }}
                              className="grid grid-cols-6 gap-2"
                            >
                              {/* {image &&
                                image.map((img, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="col-span-6 sm:col-span-3 lg:col-span-2"
                                    >
                                      <div
                                        style={{
                                          fontSize: 13,
                                          color: "red",
                                          textDecoration: "underline",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          deleteimg(index);
                                        }}
                                      >
                                        Delete
                                      </div>
                                      <img
                                        width={100}
                                        height={100}
                                        src={URL.createObjectURL(img)}
                                      />
                                    </div>
                                  );
                                })} */}
                            </div>
                            {/* <div onClick={()=>{console.log(URL.createObjectURL(image))}}>console image</div> */}
                            <div
                              style={{
                                display: image ? "none" : "block",
                                color: "grey",
                                fontWeight: "bold",
                              }}
                            >
                              No images
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Stock and pricing
                    </h3>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">


                      <div className="grid grid-cols-6 gap-6">
              

              <div className="col-span-6 md:col-span-3 xl:col-span-3 lg:col-span-3">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">Commission per unit</label>
                  <input value={top}  onChange={(event)=>{settop(event.target.value)}} type="number" name="city" id="city" autoComplete="address-level2" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div className="col-span-6 md:col-span-3 xl:col-span-3 lg:col-span-3">
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">Stock</label>
                  <input value={tstock}  onChange={(event)=>{settstock(event.target.value)}} type="number" name="region" id="region" autoComplete="address-level1" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div className="col-span-6 md:col-span-6 xl:col-span-6 lg:col-span-6">
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Price</label>
                  <input value={tprice}  onChange={(event)=>{settprice(event.target.value)}} type="number" name="postal-code" id="postal-code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                <div className='col-span-12'>
                <div style={{float:'right'}} className="col-span-4 sm:col-span-3 lg:col-span-2">
                 </div>
                
                </div>
            <div>
                
            </div>
              </div>
                      </div>

                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>

            {/* <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <p className="mt-1 text-sm text-gray-600">
          Decide which communications you'd like to receive and how.
        </p>
      </div>
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <fieldset>
              <legend className="text-base font-medium text-gray-900">By Email</legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="candidates" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="offers" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                    Everything
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>`
    </div>
  </div>
</div> */}
          </div>
          <div style={{ display: "flex", marginTop: 20,marginBottom:60 }}>
            <LoadingButton
              act={uploadImage}
              text={"Update"}
              lod={lod}
              msg={"Updating ..."}
            />

            {/* <span   onClick={uploadImage} style={{backgroundColor:MAIN_STYLE.primary,color:"white",padding:"10px 15px",borderRadius:5,cursor:'pointer',margin:"auto"}}>Upload</span>
             */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;

// export async function getServerSideProps(){
//     const product_res = await fetch(`${API_URL}/catagories`);
//     const found = await product_res.json();

//     console.log("aaaaaaaaaaaaaaaaaaa",found)

//     if(found==undefined||found==null||found=={}||found==[]){
//       return {
//         props:{
//             cats: null
//         }
//     }
//     }else{
//       return {
//         props:{
//             cats:found.data
//         }
//     }
//     }

// }
