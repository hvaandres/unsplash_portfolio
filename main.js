
const dotenv = require('dotenv');

dotenv.config()
console.log(process.dotenv.myAccessKey)

//const unsplash = process.dotenv.myAccessKey
  
//  unsplash.photos.get(
//     { photoId: '123' },
//     // `fetch` options to be sent only with _this_ request
//     { headers: { 'X-Custom-Header-2': 'bar' } },
//   );