import { useParams } from 'react-router-dom'
import axios from 'axios'
import { LiaMoneyBillSolid } from "react-icons/lia";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
function ViewDetails() {
    const id = useParams().id
    //console.log(id)
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery({
        queryKey: ['craft'],
        queryFn: async () => {
            const result = await axios.get('http://localhost:5000/get-craft/' + id)
            return result.data
        }
    })
    function convertRating (rating) {
        const rating_array = []
        for (let index = 1; index <6; index++) {
            
            if(index<=rating){
                //insert defaultChecked
                rating_array.push(<input type="radio" name="rating-3" className="mask mask-heart bg-red-400" defaultChecked />)       
            }
            else{
                rating_array.push(<input type="radio" name="rating-3" className="mask mask-heart bg-gray-400"  />)       
            }
            
        }
        return rating_array
    }//end function
    console.log(convertRating(4))
    return (
        <>
            {
                isLoading ? <span className="loading text-red-600 loading-infinity loading-lg"></span> :

                    <div>
                        <div className='w-full border-2 bg-amber-500 text-white py-4 text-center font-semibold'>
                            <h1>Product Details</h1>
                        </div>
                        <div className='grid lg:grid-cols-2'>
                            <div className='border-2 rounded-md'>
                                <img src={data.image_url} alt="" />
                            </div>
                            <div className='flex gap-5 flex-col md:w-4/5 md:mx-auto font-semibold px-4 py-4'>
                                <div className='border-b-2 text-center py-4'>
                                    <h1 className='text-2xl font-semibold'>{data.item_name}</h1>
                                </div>
                                <div className=' flex justify-center gap-2  items-center  mt-2 '>
                                    <LiaMoneyBillSolid className='text-green-500 text-2xl  font-bold' />
                                    <h1 className='text-green-500 text-2xl'>Price ${data.price}</h1>
                                </div>
                                <div className='py-4 border-b-2 border-green-900'>
                                    <h1 className='text-md text-justify font-semibold'>{data.short_description}</h1>
                                </div>
                                <div className='flex gap-2'>

                                    <div className="badge badge-secondary py-4 px-2 "> <span className='text-xs'> Category: {data.subcategory}</span></div>
                                    <div className="badge badge-secondary py-4 px-2 "> <span className='text-xs'>Processing Time<br></br> {data.processing_time} Days</span></div>
                                    <div className="rating gap-1   flex items-center">
                                        <h1 className='text-sm'>Rating</h1>
                                        {
                                            convertRating(data.rating).map(element=>{
                                                return element
                                            })
                                        }
                                    </div>

                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='px-3 py-3 border-2 border-red-500 rounded-md'>Customization: <span className='text-green-500'>{data.customization.toUpperCase()}</span></h1>
                                    <h1 className='px-3 py-3 border-2 border-red-500 rounded-md'>In Stock: <span className='text-red-500'>{data.in_stock.toUpperCase()}</span></h1>
                                </div>

                                <div className='flex mt-2 justify-center'>
                                        <button className='btn btn-lg btn-info text-white'>Order Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </>

    )
}

export default ViewDetails
