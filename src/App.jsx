/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import './App.css'
import {
    BrowserRouter,
    Routes,
    Route, Link
} from 'react-router-dom'
import {
    HomePage,
    RQSuperHeroesPage,
    RQSuperHeroPage,
    SuperHeroesPage,
    ParallelQueriesPage,
    DynamicParallelPage, DependentQueriesPage, PaginatedQueriesPage, InfiniteQueriesPage
} from './pages'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()

const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/super-heroes'>Traditional Super Heroes</Link>
                                </li>
                                <li>
                                    <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
                            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
                            <Route path='/rq-super-heroes/:id' element={<RQSuperHeroPage/>}/>
                            <Route path='/parallel-queries' element={<ParallelQueriesPage/>}/>
                            <Route path='/dynamic-parallel' element={<DynamicParallelPage ids={[1, 3]}/>}/>
                            <Route path='/rq-dependent' element={<DependentQueriesPage email='vishwas@example.com'/>}/>
                            <Route path='/rq-paginated' element={<PaginatedQueriesPage/>}/>
                            <Route path='/rq-infinite' element={<InfiniteQueriesPage/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
            </QueryClientProvider>
        </>
    )
}

export default App
