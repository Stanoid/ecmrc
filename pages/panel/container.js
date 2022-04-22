import React from 'react';
import ProductsTap from './productsTap';
import OrderList from './orderList';
import GroupList from './groupList';
function Container(props) {
  switch(props.page){
      case 0:
        return <div>next</div>
          break;

          case 1:
           
            return <ProductsTap userData={props.userData}/>
            break;

            case 2:
                return <GroupList  userData={props.userData} />
                break;

                case 3:
                  return <OrderList  userData={props.userData} />
                  break;

                default:
                    return <div>Defaluting from container element</div>
                    break;


  }
}

export default Container;
