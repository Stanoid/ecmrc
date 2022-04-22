import React from 'react';
import { useState } from 'react';
import UploadForm from '../uploadform';
import { MAIN_STYLE } from '../../utils/style';
import ProductsList from './productslist';
import { MdAdd } from 'react-icons/md';
import EditForm from './editform';
import GroupEdit from './groupEdit';

import GroupCreate from './groupCreate';
function ProductsTap(props) {

  const [page, setPage] = useState(1);
  const [pid, setPid] = useState(null);
  const [gid, setGid] = useState(null);


const handlePage = (pageid,productid,groupId)=>{
setPage(pageid);
console.log(productid)
if(productid){
  setPid(productid);
}

if(groupId){
  setGid(groupId);
}

}

 switch(page){
case 1:

  return <div> 
    <ProductsList userData={props.userData} pagdler={handlePage} />
  </div>
  break;

  case 2:
    return <div><UploadForm userData={props.userData}  pagdler={handlePage} /></div>
  break;

  case 2:
    return <div><UploadForm userData={props.userData}  pagdler={handlePage} /></div>
  break;

 

  case 4:
    return <div><EditForm userData={props.userData} Pid={pid}  pagdler={handlePage} /></div>
  break;

  case 5:
    return <div><GroupCreate userData={props.userData} Pid={pid}  pagdler={handlePage} /></div>
  break;

  case 6:
    return <div><GroupEdit userData={props.userData} Pid={pid} Gid={gid}  pagdler={handlePage} /></div>
  break;

  default:
    return <div>product page</div>
    break;
 }
}

export default ProductsTap;
