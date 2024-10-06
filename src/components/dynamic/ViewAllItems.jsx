import axios from 'axios'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import TableData from './TableData'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
import { Helmet } from 'react-helmet'
import { useState } from 'react';

function ViewAllItems() {
    <Helmet>
        <meta charSet="utf-8" />
        <title>View All Items</title>
       
    </Helmet>
 
    const [craftData, setCraftData] = useState()
    const { data, isLoading } = useQuery({
        queryKey: ['crafts-all'],
        queryFn: async () => {
            const result = await axios.get('https://assignment-10-server-one-lake.vercel.app/get-all')
            //console.log('data',result.data)
            setCraftData(result.data)
            return result.data
        }
    })
    //console.log(data)

    const handleSort= (e)=>{
        //e.preventDefault()
        //console.log('select hit', craftData.sort((a, b) => parseInt(a.price)-parseInt(b.price)) )
        const value = e.target.value
        if(value=='price'){
            console.log('Price hit')
            setCraftData(craftData.filter((a) => a.subcategory=='ceramic' ));
            console.log(craftData)
        }
    }
    return (
        <div>
            <div className='text-center'>
                <div className='py-4 border-2 bg-slate-50' >
                    <label htmlFor="filter">Sort Craft Collection</label>

                </div>
                <div className='py-4 border-b-2'>
                    <select onChange={(e)=>handleSort(e)} className='border-2 px-5 py-4 rounded-xl bg-red-800 text-white font-bold' name="filter" id="filter">
                        
                        <option value="price">Sort By Price</option>
                        <option value="rating">Sort By Rating</option>
                    </select>

                </div>
            </div>
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
                            isLoading ? <div className='flex mx-auto justify-center w-full'><Lottie className=' h-56 text-center w-full' animationData={sandclock} loop={true} /></div> :
                                craftData.map(craft => <TableData craft={craft} key={craft._id}></TableData>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ViewAllItems
