/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {useQueries} from 'react-query'
import axios from 'axios'

const fetchSuperHero = id => {
    return axios.get(`http://localhost:3001/superheroes/${id}`)
}

const DynamicParallelPage = ({ids}) => {
    const queryResults = useQueries(
        ids?.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            }
        })
    )

    console.log({queryResults})
    return <div>Dynamic Parallel Queries</div>
}

export default DynamicParallelPage