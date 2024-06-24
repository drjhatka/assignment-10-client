
import Banner from './Banner'
import axios from 'axios'
import {
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query'
import CraftCard from './CraftCard'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
function Home() {
    const queryClient =  useQueryClient()
    const {data, isLoading}= useQuery({
        queryKey:['crafts'],
        queryFn:async ()=>{
           const result= await axios.get('http://localhost:5000/get-all')
           //console.log(result.data)
           return result.data
        }
    })
    //console.log(data)
    return (
        <div className='w-4/5 mx-auto'>
            <Banner isLoading= {isLoading} crafts = {data}></Banner>
            <div className='grid md:grid-cols-2 gap-5  lg:grid-cols-3'>
                {
                    data && data.map(craft=>{
                        return <CraftCard isLoading={isLoading} craft={craft} key={craft._id}></CraftCard>
                    })
                }
            </div>
        </div>

    )
}

export default Home
