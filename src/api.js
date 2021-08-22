import axios from 'axios'
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyCNzvn9VTrcuuDaouVLEs26_N3BQm6yFRU',
   },
})

export default request
