/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {useSuperHeroesData, useAddSuperHeroesData} from '../hooks'

const RQSuperHeroesPage = () => {
    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            name: '',
            alterEgo: ''
        },
        onSubmit: values => {
            console.log(values)
            addHero(values)
        }
    })
    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error)
    }

    const {isLoading, isError, isFetching, error, data, refetch} = useSuperHeroesData(onSuccess, onError)
    const { mutate: addHero } = useAddSuperHeroesData()
    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h2>RQSuperHeroesPage</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={handleChange}
                    />
                    <label htmlFor='alterEgo'>Alter Ego</label>
                    <input
                        type='text'
                        id='alterEgo'
                        name='alterEgo'
                        onChange={handleChange}
                    />
                    <button type='submit'>Save</button>
                </form>
            </div>
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map(hero => (<div key={hero.name}>
                <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            </div>))}
        </>
    )
}

export default RQSuperHeroesPage
