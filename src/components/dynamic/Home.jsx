
import Banner from './Banner'
import axios from 'axios'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
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
        <div>
            <Banner isLoading= {isLoading} crafts = {data}></Banner>
        </div>
    )
}

export default Home
