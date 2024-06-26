import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import {Link} from 'react-router-dom'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
import CategoryCard from './CategoryCard';

function CategoryAll() {
    const category_name = useParams().category
    console.log(category_name)
    const { data, isLoading } = useQuery({
        queryKey: ['crafts-by-category'],
        queryFn: async () => {
            const result = await axios.post('https://assignment-10-server-3tp0yxj1y-bishawjit-kumar-deys-projects.vercel.app/get-craft-by-category/' + category_name)
            return result.data
        },//end use query
        onSuccess: () => {

        }
    })//end query

    return (
        <div>
            
            <div>
                <div className='shadow-md rounded-md bg-[#FF5733]  mb-6 px-4 py-2 text-3xl'>
                    <h1 className='text-3xl text-white'>{category_name.toUpperCase() } ITEMS</h1>
                </div>
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            !isLoading && data.map(craft=>{ return <CategoryCard key={craft._id} craft={craft}></CategoryCard>
                            })
                        }

                    </div>
                </div>
            
        </div>
    )
}

export default CategoryAll
