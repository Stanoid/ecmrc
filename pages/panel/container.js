import React from 'react';
import ProductsTap from './productsTap';
function Container(props) {
  switch(props.page){
      case 0:
        return <div>next</div>
          break;

          case 1:
           
            return <ProductsTap userData={props.userData}/>
            break;

            case 2:
                return <div>nextnext</div>
                break;

                default:
                    return <div>Defaluting</div>
                    break;


  }
}

export default Container;
