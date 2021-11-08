import 'regenerator-runtime/runtime'
import  axios from  'axios';

const API_KEY = 'a5837db97d72016c81a7a776f4240db9'
const BASE_URL = 'http://gateway.marvel.com/v1/public/comics'



class GetApiData {
  async getData(url) {

    try {
     const response =  await axios.get(url, {
      params: {
        'apikey': API_KEY,
        'limit': 50
      }
    }).then(res => res.data.data.results)
      return response
    } catch (error) {
      console.log(error.message)
    }
  }
}

const getApiData = new GetApiData()
let data = getApiData.getData(BASE_URL)
data.then(data => {console.log('Результат ', data)})


