import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/actions"
import styles from './Favorites.module.css'

    //HOOKS

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    //FUNCTIONS

    const handleChange = (event) => {
        if (event.target.name === "filter") {
            dispatch(filterCards(event.target.value))
        } else {
            dispatch(orderCards(event.target.value))
        }
    };

    //RENDER
    return (
        <div>
        <div>

            <select name="order" 
            onChange={handleChange} 
            id="order">
                <option value="A">Ascendent</option>
                <option value="D">Descendent</option>
            </select>
            <select name="filter"
            id="filter" 
            onChange={handleChange} 
            >
                <option value="ALL">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className={styles.containerFav}>

        {
            myFavorites.map(({id, name, status, species, gender, image, origin}) => {
                return (
                    
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    image={image}
                    origin={origin}
                    />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Favorites