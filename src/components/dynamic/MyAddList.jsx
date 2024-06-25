import { useContext, useState } from 'react'
import { useQuery, QueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import CraftCardUser from './CraftCardUser'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
import { AuthContext } from '../auth/AuthProvider'

function MyAddList() {
    const [customization, setCustomization] = useState('no')
    const [loadedData, setLoadedData] = useState([])
    const queryClient = new QueryClient()
    const { user } = useContext(AuthContext)
    //...fetch all posts added by the current user, assuming user is already logged in

    const { data, isLoading } = useQuery({
        queryKey: ['add-list', setLoadedData],
        queryFn: async () => {
            const result = await axios.post('http://localhost:5000/view-addlist', {
                user_email: user.email
            })
            setLoadedData(result.data)
            return result.data
        },
        onSuccess: (result) => {
            //console.log(result)
            // setLoadedData(result.data)
            console.log(result)
        },
        onError: (error) => {
        }
    })//end query

    const { mutate } = useMutation({
        mutationKey: ['filter', setLoadedData, customization],

        mutationFn: async () => {
            const result = await axios.post('http://localhost:5000/view-filterlist', {
                customization: customization,
                user_email: user.email
            })

            console.log('result', result)
            setLoadedData(result.data)
            return result.data
        },
    
        onSuccess:()=>{}
    })
    




const handleFilter = async (event) => {
  
    const value = event.target.value
    if(customization ==="yes"||customization ==='no'){

        setCustomization(value)
    }
    console.log(value)
    mutate()
    //queryClient.refetchQueries(['filter'])
}

return (
    <>
        <div className='mt-5 flex gap-4 py-4 flex-col items-center justify-center border-2'>
            <label htmlFor="category" className='font-semibold text-2xl'>Sort By Category</label>
            <select onChange={(event) => handleFilter(event)} name="category" className='w-24 font-bold text-red-500 border-2 border-green-500 text-center py-2 rounded-md input-bordered px-2  shadow-md' id="">
                
                <option value="yes">YES</option>
                <option value="no">NO</option>
            </select>
        </div>
        <div className='flex px-5 py-5 text-center shadow-lg shadow-black mt-2 border-2 bg-[#006400] '>
            <h1 className='text-center text-3xl font-semibold w-full text-white'>My Add List</h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:w-4/5 mx-auto gap-5'>
            {
                isLoading ? <Lottie className='h-56' animationData={sandclock} loop={true} /> :

                    loadedData.map(craft => {
                        return <CraftCardUser key={craft._id} craft={craft}></CraftCardUser>
                    })
            }
        </div>
    </>
)
}

export default MyAddList
