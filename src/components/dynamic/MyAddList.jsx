import {useContext} from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import CraftCardUser from './CraftCardUser'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
import { AuthContext } from '../auth/AuthProvider'

function MyAddList() {
    const {user} = useContext(AuthContext)
    //...fetch all posts added by the current user, assuming user is already logged in
    
    const {data, isLoading} = useQuery({
        queryKey:['add-list'],
        queryFn:async()=>{
            return await axios.post('http://localhost:5000/view-addlist',{
                    user_email:user.email
                })
        },
        onSuccess:(result)=>{
            console.log(result.data)
        },
        onError:(error)=>{
            console.log(error)
        }
    })//end query
    
    return (
       <> 
        <div className='flex px-5 py-5 text-center shadow-lg shadow-black mt-2 border-2 bg-[#006400] '>
            <h1 className='text-center text-3xl font-semibold w-full text-white'>My Add List</h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:w-4/5 mx-auto gap-5'>
            {
                isLoading? <Lottie className='h-56' animationData={sandclock} loop={true} />:
                data.data.map(craft =>{
                    return <CraftCardUser key={craft._id} craft={craft}></CraftCardUser>
                })
            }
        </div>
        </>
    )
}

export default MyAddList
