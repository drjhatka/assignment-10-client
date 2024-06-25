import {useState} from 'react'
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
    const [seeAll, setSeeAll]= useState(false)
    const {data, isLoading}= useQuery({
        queryKey:['crafts'],
        queryFn:async ()=>{
           const result= await axios.get('http://localhost:5000/get-all')
           return result.data
        }//end use query
    })//end query
    return (
        <div className='w-4/5 mx-auto'>
            <div className='border-2 bg-slate-400 py-2'>
                <Banner isLoading= {isLoading} crafts = {data}></Banner>

            </div>
            <div className='grid md:grid-cols-2 gap-5  lg:grid-cols-3'>
                {
                    isLoading? 
                    <Lottie className='h-56' animationData={sandclock} loop={true} />:
                    !seeAll ? data.slice(0,6).map(craft=>{
                        return <CraftCard isLoading={isLoading} craft={craft} key={craft._id}></CraftCard>
                    }):
                    data.map(craft=>{
                        return <CraftCard isLoading={isLoading} craft={craft} key={craft._id}></CraftCard>
                    })
                }

            </div>
            <div className='flex justify-center'>
                <button onClick={()=>setSeeAll(!seeAll)} className='btn btn-info text-white'>{seeAll?'See Less':'See All'}</button>
            </div>
        </div>

    )
}

export default Home
