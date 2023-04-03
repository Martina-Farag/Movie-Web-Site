import React from 'react';
// import axiosInstance from './../../axiosConfig/axiosInstance';
import axiosInstance from './../../axiosConfig/instanc';

const MoviesRedThunk = (page) => {

    return (dispatch)=>{
        
        axiosInstance.get(`movie/popular/?&page=${page}`,{

        }).then((res) => {

            console.log(res.data.results);
            // setMovies(res.data.results)
            dispatch({type:'SET_MOVIE',payload:res.data.results})

        }).catch((err) => {
            console.log(err);
        })
    }
}

export default MoviesRedThunk;
