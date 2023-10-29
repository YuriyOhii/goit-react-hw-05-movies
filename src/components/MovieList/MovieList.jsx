import { Movie } from '../Movie/Movie'
export const MovieList = ({films}) => {
    return(
        <ul>
            {films.map(el=><li key={el.id}><Movie film={el}/></li>)}
        </ul>
    )
}