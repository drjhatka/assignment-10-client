import axios from 'axios'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import TableData from './TableData'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
function ViewAllItems() {
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery({
        queryKey: ['crafts-all'],
        queryFn: async () => {
            const result = await axios.get('https://assignment-10-server-3tp0yxj1y-bishawjit-kumar-deys-projects.vercel.app/get-all')
            //console.log(result.data)
            return result.data
        }
    })
    console.log(data)
    return (
        <div>
            <table className='table table-compact w-full'>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Subcategory</th>
                        <th>In Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
               <tbody className=''>     
                    
                        
                    {
                        isLoading ?<div className='flex mx-auto justify-center w-full'><Lottie className=' h-56 text-center w-full' animationData={sandclock} loop={true} /></div>:                 
                        data.map(craft=><TableData craft={craft} key={craft._id}></TableData>)
                    }
                    
                    
                    </tbody>
            </table>
        </div>
    )
}

export default ViewAllItems
