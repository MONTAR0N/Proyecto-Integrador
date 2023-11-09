//style
import styles from './App.module.css';
//components to render
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
//hooks
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
//dependences
import axios from 'axios';



function App() {

   //HOOKS

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate])




   //FUNCIONES

   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            const isCharacterExists = characters.some(character => character.id === data.id);
            if (isCharacterExists) {
               window.alert('ya lo pediste hdp');
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
      } 
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
            }
         }


   const login = async (userData) => {
      try {
         
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home'); 
         
      }catch (error) {
         window.alert("Si compadre")
      }
   }
   

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }

   //RENDER

   return (
      <div className={styles.appContainer}>
         <div>
         {location.pathname !== '/' && <Nav onSearch={onSearch} random={onSearch} />}
         </div>
         <div className={styles.favs}>

         <Routes>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route
               path='/home'
               element={<Cards characters={characters} onClose={onClose} />}
               />
            <Route path='/' element={<Form login={login} />} />
            <Route path='/detail/:detailId' element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
         </Routes>
               </div>

      </div>
   );


}


export default App;
