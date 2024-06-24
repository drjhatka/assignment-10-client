import React from 'react'
import {useQuery, QueryClient} from '@tanstack/react-query'
import axios from 'axios'
function MyAddList() {
    //...fetch all posts added by the current user, assuming user is already logged in
    const queryClient = new QueryClient()
    const {data, isLoading} = useQuery({
        queryKey:['add-list'],
        queryFn:async()=>{
            return await axios.get('http://localhost:5000/get-addlist')
        },
        onSuccess:()=>{

        },
        onError:()=>{
            
        }
    })
    return (
        <div>
            
        </div>
    )
}

export default MyAddList
