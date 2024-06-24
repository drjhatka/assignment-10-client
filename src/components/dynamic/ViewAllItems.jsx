import axios from 'axios'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import TableData from './TableData'
function ViewAllItems() {
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery({
        queryKey: ['crafts-all'],
        queryFn: async () => {
            const result = await axios.get('http://localhost:5000/get-all')
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
                
               <tbody>     
                    
                        
                    {
                        isLoading ? <p className="loading loading-infinity loading-lg"></p> :                 
                        data.map(craft=><TableData craft={craft} key={craft._id}></TableData>)
                    }
                    
                    
                    </tbody>
            </table>
        </div>
    )
}

export default ViewAllItems
