import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import axiosInstance from '../../axiosConfig/instanc';
import { Link } from 'react-router-dom';


// {"adult":false,"backdrop_path":"/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg","genre_ids":[16,12,35,10751],
// "id":315162,"original_language":"en","original_title":"Puss in Boots: The Last Wish",
// "overview":"Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
// "popularity":2700.624,"poster_path":"/kuf6dutpsT0vSVehic3EZIqkOBt.jpg","release_date":"2022-12-07",
// "title":"Puss in Boots: The Last Wish","video":false,"vote_average":8.4,"vote_count":4453}

const Details = () => { 
    const { id } = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        axiosInstance.get(`/${id}?api_key=ff257cc3a4612c9f4a8612204d6a4b0c`).then((res) => {
            console.log(res.data);
            setProduct(res.data)

        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (
    
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`} style={{height: '150px'}} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.overview}</p>
                    {/* <a to={"/products"} className="btn btn-primary">Go Back</a> */}
                    <Link className="btn btn-primary" to={"/products"} >Go Back</Link>

                </div>
        </div>
    );
}

export default Details;
