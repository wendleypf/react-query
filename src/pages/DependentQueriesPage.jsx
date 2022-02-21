/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = email => {
    return axios.get(`http://localhost:3001/users/${email}`)
}

const fetchCoursesByChannelId = channelId => {
    return axios.get(`http://localhost:3001/channels/${channelId}`)
}

const DependentQueriesPage = ({ email }) => {
    const { data: user } = useQuery(['user', email], () =>
        fetchUserByEmail(email)
    )
    const channelId = user?.data?.channelId
    useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    })
    return <div>DependentQueries</div>
}

export default DependentQueriesPage