/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {useQuery, useQueryClient} from 'react-query'
import {request} from '../utils'

const fetchSuperHero = (id) => {
    return request({url: `/superheroes/${id}`})
}

export const useSuperHeroData = (id) => {
    const queryClient = useQueryClient()
    return useQuery(['super-hero', id], () => fetchSuperHero(id), {
        initialData: () => {
            const hero = queryClient
                .getQueryData('super-heroes')
                ?.data?.find(hero => hero.id === parseInt(id))
            if (hero) {
                return {data: hero}
            } else {
                return undefined
            }
        }
    })
}