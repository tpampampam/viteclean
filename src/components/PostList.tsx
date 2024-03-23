import { postSelector } from "../redux/postSlice/postSlice";
import { useAppSelector } from "../redux/store/store";
import Post from "./Post";



const PostList = ({amount}:{amount: number}) => {

   const {list, isLoading} = useAppSelector(postSelector)

    const posts = list.filter((_ : never,i: number) => i < amount)
//    if(isLoading) return <h2>Loading...</h2>

    return(
        <div>
            {posts.map((post: any) => (
                <Post key={post.id} {...post}/>
            ))}
        </div>
    )
}

export default PostList;

