import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store/store";
import { fetchPost, filterPosts } from "../redux/postSlice/postSlice";


const Search = () => {

    const [searchValue, setSearch] = useState('')
    const dispatch = useAppDispatch()

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        if(!searchValue) dispatch(fetchPost())
        dispatch(filterPosts(searchValue))
    },[searchValue])

    return(
        <>
            <input type="search" value={searchValue} onChange={changeValue}/>
        </>
    )
}

export default Search;