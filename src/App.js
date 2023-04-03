
import './App.css';
import Header from './Components/Navbar/navbar';
import UsersList from './Components/usersList/usersList';
import UsersListFunctional from './Components/usersList/usersListFunctional';
import AddUser from './Components/addUser/addUser';
import AddUserRHF from './Components/addUser/addUserRHF';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home/home';
import ContactUs from './Pages/ContactUs/contactUs';
import AboutUs from './Pages/AboutUs/aboutUs';
import NotFound from './Pages/NotFound/notFound';
import Details from './Pages/productDetails/details';
import Products from './Pages/Products/products';
import AddProduct from './Components/AddProduct/addProduct';
import DeleteProduct from './Components/DeleteProduct/deleteProduct';
import Favourites from './Pages/Favourites/favourites';
import Protected from './Components/Guard/protected';
import Form from './Components/Login/form';
import FavouritesClass from './Pages/Favourites/favouritesClass';
import { LangProvider } from './Contexts/language';
import { IsloggedProvider } from './Contexts/isLogged';
import Logout from './Components/Logout/logout';


function App() {

  const [lang,setlang] = useState ('ENG');
  const [isLogged,setIsLogged] = useState (false);

  return (

    <div>
      <LangProvider value={{lang,setlang}}>
      <IsloggedProvider value={{isLogged,setIsLogged}}>

      <Header emp={{ name: 'Martina', age: 23 }} />
      {/* my API Key (from > https://www.themoviedb.org/settings/api): ff257cc3a4612c9f4a8612204d6a4b0c */}
      {/* https://api.themoviedb.org/3/movie/popular?api_key=ff257cc3a4612c9f4a8612204d6a4b0c */}
      <div className="container my-5">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Guard */}

          <Route path="/favourites" element={        
             <Protected >   {/* isLogged={isLogged} */}
               <Favourites/>
             </Protected>} 
          />  

          {/* <Route path="/favourites" element={<Favourites />} /> */}
          {/* <Route path="/favourites" element={<FavouritesClass />} /> */}


          <Route path="/login" element={<Form  />} />   {/* props = {setIsLogged()} */}
          <Route path="/logout" element={<Logout  />} />
          
          <Route path="/products" element={<Products />}>
            {/* <Route index element={<AddProduct/>}/>  */}
            <Route path="add" element={<AddProduct />} />
            <Route path="delete" element={<DeleteProduct />} />
          </Route>

          <Route path="/details/:id" element={<Details />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>

        

      </div>

      </IsloggedProvider>
      </LangProvider>

    </div>





  );
}

export default App;
