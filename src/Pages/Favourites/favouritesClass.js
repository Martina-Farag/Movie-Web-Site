import React, {Component} from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import changeFavA from '../../store/actions/addFav';

class FavouritesClass extends Component {
    render(){

        var FAV = this.props.Movies;
        console.log(FAV);

        const addFav=(movie)=>{  // remove from fav
            var index = FAV.indexOf(movie);
            if (index !== -1) {
                FAV.splice(index, 1);
            }
            console.log(FAV);
            // dispatch(changeFavR(this.props));
            this.props.changeFavourites(FAV);
        }


        return (
            <div>

            <h3>Favourites Movies :  { FAV.length } </h3>
            <Row xs={3} md={4} className="g-4">
                {FAV.map((movie, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Link className="btn btn-primary" to={`/details/${movie.id}`} >Details</Link>
                    <i className="bi bi-trash3-fill m-5 " onClick={()=>{ addFav(movie) }  }></i>

                    </Card.Body>
                </Card>
                </Col>
                ))}
            </Row>
        
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        Movies: state.addFav.Fav
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changeFavourites:(Fav)=>dispatch(changeFavA(Fav))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesClass) ;  
// connect : returns function from react redux and we put our class that wants to access that function returning. 
// mapStateToProps : is a function i will handle here in the class, this function will have parameter it will recieves from the store after the connection will recieves the state from the store the store.