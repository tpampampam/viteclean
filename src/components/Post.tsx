

import style from '../styles/Post.module.css'

const Post = ({id, title, body}: any) => {

    return(
        <div className={style.wrapper}>
            Number: {id}
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post;