
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'
let result = null;
let result2=null;
let result3=null;
result = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", result);
result2 = await OMDBSearchComplete("cars", 1);
console.log("OMDBSearchComplete", result2);
result3 = await OMDBGetByImdbID("cars", 1);
console.log("OMDBGetByImdbID", result3);