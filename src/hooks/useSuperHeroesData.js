/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {useQuery} from 'react-query'
import {request} from '../utils'

const fetchSuperHeroes = () => {
    return request({url: '/superheroes'})
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(
        'super-heroes',
        fetchSuperHeroes, {
            onSuccess,
            onError
        })
}