import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import axiosInstance from './../../axiosConfig/instanc';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux';
import changeFavA from '../../store/actions/addFav';
import changeFavR from './../../store/actions/removeFav';

const Favourites = () => {
    
    // var [Fav, setFav] = useState([])

    let FavList = useSelector((state)=>state.addFav.Fav); // recieving fav list from the reducer
    var [Fav, setFav] = useState(FavList)

    const dispatch = useDispatch();   // useDispatch return function that calls my actions

    const addFav=(movie)=>{
        // remove from fav

        var index = Fav.indexOf(movie);
        if (index != -1) {
            Fav.splice(index, 1);
        }
        setFav([...Fav]);
        console.log(Fav);
        dispatch(changeFavR(Fav));
    }

    return (
        <div>

            <h3>Favourites Movies :  { FavList.length } </h3>
        <Row xs={3} md={4} className="g-4">
            {Fav.map((movie, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link className="btn btn-primary" to={`/details/${movie.id}`} >Details</Link>
                <i className="bi bi-trash3-fill m-5 " onClick={(idx)=>{ addFav(movie) } }></i>

                </Card.Body>
            </Card>
            </Col>
            ))}
        </Row>
        
        </div>
    );
}

export default Favourites;
