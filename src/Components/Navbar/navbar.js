import React, { useContext } from 'react'
// import Link from './../Link/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom'
import { connect, useSelector } from 'react-redux';
import './navbar.css'
import { langContext, LangProvider } from '../../Contexts/language';
import changeFavA from '../../store/actions/addFav';


class Header extends React.Component {

    static contextType = langContext
    constructor() {

        super()
        console.log("From Constructor");  //1
        this.state = {
            name: "Martina",
            JobTitle: "Web Developer",
            // lang : langContext
            // FavList : useSelector((state)=>state.Fav)
            //   products:[],
            //   adress:{
            //   },
        }
        // FavList = useSelector((state)=>state.Fav);
    }

    // FavList = useSelector((state)=>state.Fav);

    componentDidMount() {


        console.log("From DidMount"); //3
    }

    componentDidUpdate() { //updating

        console.log("From DidUpdate");

    }

    componentWillUnmount() { //UnMounting
        //Clean up method
        console.log("From WillUnmount");

    }

    handleChange = () => {

        this.setState({ name: (this.state.name == 'Martina') ? 'Salma' : 'Martina' })
    }

    render() {
        console.log("From Render");//2

        // console.log(this.props);
        // const {lang,setlang} = useContext(langContext);
        // var lang = langContext;
        const Lang = this.context.lang //langContext;
        

        var FAV = this.props.Movies;
        return <>
    
            <Navbar bg="light" expand="lg" >
                <Container>
                    <Navbar.Brand to="/products" className="mx-5">Movies Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <NavLink className="mx-5" to="/about">About Us</NavLink> */}
                            {/* <NavLink to="/contact" className="mx-5">Contact Us</NavLink> */}
                            <NavLink to="/" className="mx-5 Navv">Home</NavLink>
                            <NavLink to="/products" className="mx-5 Navv">Movies</NavLink>
                            <NavLink to="/favourites" className="mx-5 Navv">Favourites </NavLink>
                            <h6 id='favC' > { FAV.length } </h6>
                            {/* <h4>{this.state.FavList.length}</h4> */}
                            <NavLink to="/login" className="mx-5 Navv">Login</NavLink>
                            <NavLink to="/logout" className="mx-5 Navv">Logout</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                    
                    {/* <LangProvider value={{lang,setlang}}> */}
                        {/* <ButtonHolder /> */}

                        <h6>Langeage : {this.context.lang}</h6>
                        
                    {/* </LangProvider>  */}
                </Container>
            </Navbar>

        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header) ;
