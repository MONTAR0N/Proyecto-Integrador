
import Card from '../Card/Card';
import style from "./Cards.module.css"
const Cards = ({ characters, onClose }) => {



   //RENDER

   return (
      <div className= {style.cardsContainer}>
         {
            characters.map(({ id, name, image, gender}) => {
               return <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  gender={gender}
                  onClose={onClose}
               />
            })
         }

      </div>
   )
};

export default Cards;