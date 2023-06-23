//Basic concept: upload images to an exteral server using an API and return the new 
//image URL as a string and save it in the database to save image load
// time as you can use diffrent quality for diffrent sizes


const Upload_image_preset =()=>{
 //create an empty data object to store request parameters.  
const data = new FormData();

data.append("file", image);
//image variable is refering to the input file (image) can be accessed with event.target.files[0].

data.append("upload_preset", "products");
// upload preset is refering to an imagerepository on cloudinary named 'products'
//you can create your own repository or use mine for testing.

data.append("cloud_name", "strapimedia");
//cloudname strapimedia is the server i created you can use it for testing.sS

fetch(" https://api.cloudinary.com/v1_1/strapimedia/image/upload", {
  method: "post",
  body: data,
})
// the request body.
  .then((resp) => resp.json())
  .then((data) => {

  console.log(data.url)
//data.url is returned as a string and can be stored as a string in a php
// database and fetched and loaded directly on html.

  })
  .catch((err) => console.log(err));
//simple error handler for exeptions and error messages.

}