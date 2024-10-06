import { useState } from 'react'
import Banner from './Banner'
import axios from 'axios'
import {
    useQuery,
    useQueryClient,

} from '@tanstack/react-query'
import {Helmet} from "react-helmet";
import CraftCard from './CraftCard'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
import SubcategoryCard from './SubcategoryCard'


function Home() {
  
    <Helmet>
                <meta charSet="utf-8" />
                <title>Kumar Para Home</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
    const queryClient = useQueryClient()
    const [categories, setCategories] = useState()
    const [seeAll, setSeeAll] = useState(false)
    const { data, isLoading } = useQuery({
        queryKey: ['crafts'],
        queryFn: async () => {
            //https://assignment-10-server-36xvk9846-bishawjit-kumar-deys-projects.vercel.app/
            const result = await axios.get('https://assignment-10-server-one-lake.vercel.app/get-all')
            return result.data
        },//end use query
        onSuccess: () => {

        }
    })//end query

    const { categoryData } = useQuery({
        queryKey: 'category-list',
        queryFn: async () => {
            const result = await axios.get('https://assignment-10-server-one-lake.vercel.app/get-categories')
            setCategories(result.data)
            console.log('Cat=> ', result.data)
            return result.data
        }
    })
    console.log('Categories ', categoryData)
    return (
        <div className='w-4/5 mx-auto'>
            <div className='shadow-md rounded-md bg-[#FF5733]  mb-6 px-4 py-2 text-3xl'>
                <h1 className=' border-b-2 text-white   border-b-white  pl-10'>New Arrivals <br /><small>Fresh off the oven!</small></h1>
            </div>
            <div className='border-2 bg-slate-400 py-2'>
                <Banner isLoading={isLoading} crafts={data}></Banner>
            </div>
            <div className='shadow-md rounded-md bg-[#93C572]  mb-0 mt-5  px-4 py-4 text-4xl'>
                <h1 className=' border-b-2 text-white   border-b-white  pl-10'>Most Popular Cookwares <br /><small>A touch of elegance!</small></h1>
            </div>
            <div className='grid md:grid-cols-2 gap-5  lg:grid-cols-3'>
                {
                    isLoading ?
                        <Lottie className='h-56' animationData={sandclock} loop={true} /> :
                        !seeAll ? data.slice(0, 6).map(craft => {
                            return <CraftCard isLoading={isLoading} craft={craft} key={craft._id}></CraftCard>
                        }) :
                            data.map(craft => {
                                return <CraftCard isLoading={isLoading} craft={craft} key={craft._id}></CraftCard>
                            })
                }

            </div>


            {!isLoading &&
                <div className='flex justify-center mt-2 mb-4'>
                    {data.length >= 6 && <button onClick={() => setSeeAll(!seeAll)} className='btn btn-info text-white'>{seeAll ? 'See Less' : 'See All'}</button>}
                </div>

            }
            <div className='shadow-md rounded-md bg-[#FF5733]  mb-6 px-4 py-2 text-3xl'>
                <h1 className=' border-b-2 text-white   border-b-white  pl-10'>Craft Categories <br /><small>you'd love to own!</small></h1>
            </div>

            <div className='grid  gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories?.map(category => {
                        return <SubcategoryCard key={category._id} category={category}></SubcategoryCard>
                    })
                }

            </div>

            {/* EXTRA SECTIONS */}
            <div
                className="hero rounded-md mt-5 mb-5"
                style={{
                    backgroundImage: "url('https://i.ibb.co/GJK2CVY/raindrop.webp')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Join Our Community of Members</h1>
                        <p className="mb-5 text-lg">
                            Explore the possibility of a green and sustainable earth and let us live in harmony with nature. Get Started today and contribute positively
                        </p>
                        <button className="btn btn-secondary font-semibold text-xl">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-50 shadow-xl border-2 rounded-md mb-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Carbon Emission Endeavour</h1>
                        <p className="py-6 lg:w-[60%] text-justify">
                            We are working hard to reduce CO2 emmission and sustain a greener and cleaner earth. You contributions are appreciated
                        </p>
                        <button className="btn btn-info text-white">Donate Now</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home
