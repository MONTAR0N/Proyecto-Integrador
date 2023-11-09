import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import styles from "./Detail.module.css"

const Detail = () => {

    //HOOKS

    const { detailId } = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [detailId]);


    //RENDER

    return (
        <div className={styles.detailContainer}>
            {character.name ? (
                <>

                    <h1>{character.name}</h1>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <p>Location: {character.location.name}</p>
                    <img src={character.image} alt="img" className={styles.image}/>
                </>
            ) : (
                <h3>Loading...</h3>
            )
            }

        </div>
    )
}
export default Detail;

