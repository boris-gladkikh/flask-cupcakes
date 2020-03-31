const $addCupcakeButton  = $('#add-cupcake');
const BASE_URL = 'http://localhost:5000';
const $flavorValue = $('#flavor');
const $sizeValue = $('#size');
const $ratingValue = $('#rating');
const $imageValue = $('#image');



// create an event handler that  submits form to our SERVER API

$addCupcakeButton.on('click',async function(){
  // event.preventDefault();
  let flavor = $flavorValue.val();
  let size = $sizeValue.val(); 
  let rating = $ratingValue.val();
  let image  = $imageValue.val();



  let response  =  await axios.post(
    BASE_URL + '/api/cupcakes',{
      // key: "abcdef",
      flavor: flavor,
      size: size,
      rating: rating,
      image: image
    })
    
    console.log("this is our response.data",response);

    return response.data
})