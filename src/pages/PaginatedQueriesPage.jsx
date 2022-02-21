/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {useState} from 'react'
import {useQuery} from 'react-query'
import {request} from '../utils'

const fetchColors = pageNumber => {
    return request({url: `/colors?_limit=2&_page=${pageParam}`})
}

const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, isError, error, data, isFetching} = useQuery(
        ['colors', pageNumber],
        () => fetchColors(pageNumber),
        {
            keepPreviousData: true
        }
    )

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>
                {data?.data.map(color => {
                    return (
                        <div key={color.id}>
                            <h2>
                                {color.id}. {color.label}
                            </h2>
                        </div>
                    )
                })}
            </div>
            <div>
                <button
                    onClick={() => setPageNumber(page => page - 1)}
                    disabled={pageNumber === 1}>
                    Prev Page
                </button>
                <button
                    onClick={() => setPageNumber(page => page + 1)}
                    disabled={pageNumber === 4}>
                    Next Page
                </button>
            </div>
            {isFetching && 'Loading'}
        </>
    )
}

export default PaginatedQueriesPage