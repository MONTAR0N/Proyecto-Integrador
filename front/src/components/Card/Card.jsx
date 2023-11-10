
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import style from "./Card.module.css"

const Card = ({ id, name, image, onClose, gender }) => {

   //HOOKS

   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const allFavorites = useSelector((state) => state.allFavorites)

   useEffect(() => {
      allFavorites.forEach((fav) => {
            if (fav.id === id) {
                  setIsFav(true);
            }
      });
}, [allFavorites, id]);
   //FUNCTIONS

   const handleFavorite = (isFav) => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFavorite(id))
      } else {
         setIsFav(true);
         dispatch(addFavorite({ name, image, onClose, id, gender }))
      }
   }


   

   //RENDER

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={() => handleFavorite(isFav)} className={style.corazon}>💙</button>
            ) : (
               <button onClick={() => handleFavorite(isFav)} className={style.corazon}>🤍</button>
            )
         }
         {
            location.pathname !== "/favorites"
               ? <button onClick={() => onClose(id)} className={style.close}>X</button>
               : ""
            }

         <h2>{id}</h2>
         <Link to={`/detail/${id}`}>
         <img src={image} alt={name} className={style.foto}/>
         </Link>
            <h2>{name}</h2>
      </div>
   );
}

export default Card


