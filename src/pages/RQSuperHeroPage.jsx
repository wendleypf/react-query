/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {useParams} from 'react-router-dom'
import {useSuperHeroData} from '../hooks'

const RQSuperHeroPage = () => {
    const {id} = useParams()
    const {isLoading, isError, error, data} = useSuperHeroData(id)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQSuperHero Page</h2>
            <ul>
                <li>Id: {data?.data.name}</li>
                <li>Name: {data?.data.name}</li>
                <li>AlterEgo: {data?.data.alterEgo}</li>
            </ul>
        </>
    );
};

export default RQSuperHeroPage;
