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
    const queryClient = useQueryClient()
    const [seeAll, setSeeAll]= useState(false)
    const {data, isLoading}= useQuery({
        queryKey:['crafts'],
        queryFn:async ()=>{
           const result= await axios.get('http://localhost:5000/get-all')
           return result.data
        },//end use query
        onSuccess:()=>{
            
        }
    })//end query

    return (
        <div className='w-4/5 mx-auto'>
            <div className='shadow-md rounded-md bg-[#FF5733]  mb-6 px-4 py-4 text-4xl'>
                    <h1 className='py-4 border-b-4 text-white   border-b-white  pl-10'>New Arrivals <br /><small>Fresh off the oven!</small></h1>
            </div>
            <div className='border-2 bg-slate-400 py-2'>
                <Banner isLoading= {isLoading} crafts = {data}></Banner>
            </div>
            <div className='shadow-md rounded-md bg-[#93C572]  mb-0 mt-5  px-4 py-4 text-4xl'>
                    <h1 className='py-4 border-b-4 text-white   border-b-white  pl-10'>Most Popular Cookwares <br /><small>A touch of elegance!</small></h1>
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
            
            <div className='shadow-md rounded-md bg-[#FF5733]  mb-6 px-4 py-4 text-4xl'>
                    <h1 className='py-4 border-b-4 text-white   border-b-white  pl-10'>Craft Categories <br /><small>you'd love to own!</small></h1>
            </div>
            
            <div className='flex justify-center'>
                {data.length>=6 && <button onClick={()=>setSeeAll(!seeAll)} className='btn btn-info text-white'>{seeAll?'See Less':'See All'}</button>}
            </div>
        </div>

    )
}

export default Home
