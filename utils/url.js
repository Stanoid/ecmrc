export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
export const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL || "http://localhost:1337"

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_AD3A83EA7CEA4BEF';
export const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY || "SDG"

 /**
  * 
  * @param {Object} data the full object of indivisual item
  *  @param {string} size can be thumbnail,small or large
  * @returns Given the object of api it return its URL and size
  */

export function ImgHandler (data,size){


    switch(size){
        case 'thumbnail':
            return ROOT_URL + data.image.formats.thumbnail.url
            break;

            case 'small':
                return ROOT_URL + data.image.formats.small.url
                break;

              

                default:
                    return ROOT_URL + data.image.formats.small.url
                    break;
    }
   

}

