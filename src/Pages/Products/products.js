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
import MoviesRedThunk from '../../store/actions/MoviesRedThunk';
import changeMovies from './../../store/reducers/Movies';

const Products = () => {
    const [counter, setCouter] = useState(0);
    // const [Movies, setMovies] = useState([])
    var [page, setPage] = useState(1)
    var [MovieName, setMovieName] = useState("")
    var [Movie, setMovie] = useState([])

    let FavList = useSelector((state)=>state.addFav.Fav); // recieving fav list from the reducer
    let MovList = useSelector((state)=>state.changeMovies.Movies); // recieving movie list from the movies reducer (redux thunk)


    var [Fav, setFav] = useState(FavList);
    console.log(FavList ); 

    const dispatch = useDispatch();   // useDispatch return function that calls my actions

    useEffect(() => {
    // https://api.themoviedb.org/3/movie/550?api_key=ff257cc3a4612c9f4a8612204d6a4b0c
    // https://api.themoviedb.org/3/movie/popular?api_key=ff257cc3a4612c9f4a8612204d6a4b0c

        // axiosInstance.get(`movie/popular/?&page=${page}`,{
        //     headers:{},
        //     // params:{limit:2}
        // }).then((res) => {
        //     console.log(res.data.results);

            // setMovies(res.data.results)
        // }).catch((err) => {
        //     console.log(err);
        // })

        // use Redux Thunk
        dispatch(MoviesRedThunk(page));
        

    }, [page])


    const search = () => {
        axiosInstance.get(`search/movie?&query=${MovieName}`,{
            headers:{},
        }).then((res) => {
            console.log(res.data.results);
            setMovie(res.data.results)
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleChange = (e) => {
        // console.log(e.target);
        // var M = document.getElementById("in");
        setMovieName(e.target.value);

        if (!e.target.value) {
            setMovie([]);
        }
    }

    const Next=()=>{
        if(page<1000){
            page = page+1;
            setPage(page)
            console.log(page);
        }
    }
    const Prev=()=>{
        if(page>0){
            page = page-1;
            setPage(page)
            console.log(page);
        }
    }

    const addFav=(e,movie)=>{
        if( e.target.className !== "bi bi-heart-fill m-5"){  // add to fav

            e.target.className ="bi bi-heart-fill m-5";
            Fav.push(movie);
            setFav([...Fav]);
            console.log(Fav);
            dispatch(changeFavA(Fav));
        }
        else { // remove from fav  //  else if ( FavList[i]==movie )
            e.target.className ="bi bi-heart m-5"

            var index = Fav.indexOf(movie);
            if (index != -1) {
                Fav.splice(index, 1);
            }
            setFav([...Fav]);
            console.log(Fav);
            dispatch(changeFavR(Fav));
        }
        
    }

    return (
        <div>

            <h3>Search</h3>
        <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1" onClick={() => { search() }}>
                <i class="bi bi-search"></i>
                </Button>
                <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                value={MovieName}
                id="in"
                onChange={(e) => { handleChange(e) }}
                />
        </InputGroup>

        
        { (Movie.length!=0) ?
            <Row xs={3} md={4} className="g-4">
            {Movie.map((movie, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link className="btn btn-primary" to={`/details/${movie.id}`} >Details</Link>
                <i className="bi bi-heart m-5" onClick={(e)=>{ addFav(e,movie) } }></i>  {/* onClick={(e)=>{ addFav(e,movie) } } */}
                {/* className={(Fav[idx]===movie)? "bi bi-heart-fill m-5":"bi bi-heart m-5"} */}

                </Card.Body>
            </Card>
            </Col>
            ))}
            </Row>
        :
            <Row xs={3} md={4} className="g-4">
                {MovList.map((movie, idx) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Link className="btn btn-primary" to={`/details/${movie.id}`} >Details</Link>
                        <i className="bi bi-heart m-5" onClick={(e)=>{ addFav(e,movie) } }></i>  {/* onClick={(e)=>{ addFav(e,movie) } }  */}
                        {/* className={(Fav[idx]===movie)? "bi bi-heart-fill m-5":"bi bi-heart m-5"} */}
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        }

            <Outlet  context={[counter, setCouter]}/>

            <nav aria-label="...">
                <ul className="pagination">

                    <li className="page-item">
                    <span className="page-link" onClick={()=>{Prev()}}>Previous</span>
                    </li>

                    <li className="page-item">
                    <a className="page-link" onClick={()=>{Next()}}>Next</a>
                    </li>

                </ul>
            </nav>

            {/* <Button className="btn btn-primary" onClick={()=>{Prev()}}>Previous</Button>
            <Button className="btn btn-primary" onClick={()=>{Next()}}>Next</Button> */}
        </div>
    );
}

export default Products;
