/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {useMutation, useQueryClient} from 'react-query'
import {request} from '../utils'

const addSuperHeroes = (hero) => {
    return request({url: '/superheroes', method: 'post', data: hero})
}

export const useAddSuperHeroesData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHeroes, {
        // onSuccess: (data) => {
        //     // queryClient.invalidateQueries('super-heroes')
        //     queryClient.setQueryData('super-heroes', oldQueryData => {
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData.data, data.data]
        //         }
        //     })
        // }
        onMutate: async (newHero) => {
            await queryClient.cancelQueries('super-heroes')
            const previousHeroData = queryClient.getQueryData('super-heroes')
            queryClient.setQueryData('super-heroes', oldQueryData => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, {id: oldQueryData?.data?.length + 1, ...newHero}]
                }
            })
            return {
                previousHeroData
            }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData('super-heroes', context.previousHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heroes')
        }
    })
}
