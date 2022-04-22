import React from 'react';
import ProductsTap from './productsTap';
import GroupList from './groupList';
function Container(props) {
  switch(props.page){
    

          case 0:
           
            return <ProductsTap userData={props.userData}/>
            break;

            case 1:
                return <GroupList  userData={props.userData} />
                break;

                default:
                    return <div>Defaluting</div>
                    break;


  }
}

export default Container;
