/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {useQuery} from 'react-query'
import {request} from '../utils'

const fetchSuperHeroes = () => {
    return request({url: '/superheroes'})
}

const fetchFriends = () => {
    return request({url: '/friends'})
}

const ParallelQueriesPage = () => {
    const {data: superHeroes} = useQuery('super-heroes', fetchSuperHeroes)
    const {data: friends} = useQuery('friends', fetchFriends)
    console.log(superHeroes)
    console.log(friends)
    return (
        <div>
            ParallelQueriesPage
        </div>
    );
};

export default ParallelQueriesPage;
