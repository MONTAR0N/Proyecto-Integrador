import { useState } from "react";
import styles from './SearchBar.module.css'

const SearchBar = ({ onSearch, handleRandomClick }) => {

   //HOOKS

   const [id, setId] = useState('')

   //FUNCIONES

   const handleChange = (event) => {
      setId(event.target.value)
   };

   //RENDER

   return (
      <div className={styles.searchContainer}>
         <input type='search' value={id} onChange={handleChange} className={styles.input}/>
         <button onClick={() => onSearch(id)} className={styles.button}>Buscar</button>
         <button onClick={() => handleRandomClick()} className={styles.button}>Random</button>

      </div>
   );
}

export default SearchBar
