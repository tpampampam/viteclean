
import { useEffect } from 'react'
import './App.css'
import PostList from './components/PostList'
import { fetchPost } from './redux/postSlice/postSlice'
import { useAppDispatch } from './redux/store/store'
import Search from './components/Search'

function App() {

  const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])

  return (
    <>
      <Search/>
      <PostList amount={5}/>
    </>
  )
}

export default App
