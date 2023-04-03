import axios from 'axios'

const axiosInstance=axios.create({
    // 'https://api.themoviedb.org/3/movie/popular?api_key=ff257cc3a4612c9f4a8612204d6a4b0c',
    // `https://api.themoviedb.org/3/search/movie?api_key=ff257cc3a4612c9f4a8612204d6a4b0c`
     
    baseURL:'https://api.themoviedb.org/3/',
  
    headers:{
        'authorization':"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI1N2NjM2E0NjEyYzlmNGE4NjEyMjA0ZDZhNGIwYyIsInN1YiI6IjY0MGU2NTcxYjQyMjQyMDA4YTJkYTAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgiR1EugUT2ZQnyrgk-_tkCtCY5cNMOPjRY31qhhhPI",
        //   'lang':'en'
    },
    params:{
        'api_key':'ff257cc3a4612c9f4a8612204d6a4b0c',
    }

})

export default axiosInstance