import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import axios from 'axios'
import Swal from 'sweetalert2'
import sandclock from "../../../animation.json";
import { MdOutlineBrowserUpdated } from "react-icons/md"
import { TiDelete } from "react-icons/ti"
function CraftCardUser({ craft, isLoading }) {
    
    const deleteCraft =async(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:5000/delete-craft/'+id) 
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    return (

        <div>
            {
                isLoading ? <Lottie animationData={sandclock} loop={true} /> :
                    <div className='border-2 shadow-lg border-green-600 rounded-md py-2 flex flex-col gap-5 mb-3 mt-3 px-3 '>
                        <div className='h-56  overflow-hidden'><img className='mx-auto py-2 px-2 rounded-lg' src={craft.image_url} alt="" /></div>
                        <div className='text-center font-bold text-blue-700'>{craft.item_name}</div>
                        <div className='flex justify-between px-4'>
                            <div>
                                <h1 className='text-green-600 px-2 py-2 border-green-600 border-2 rounded-md font-semibold'>Price: ${craft.price}</h1>
                            </div>
                            <div>
                                <h1 className='text-red-600 px-2 py-2 border-red-600 border-2 rounded-md font-semibold'>In Stock: {craft.in_stock.toUpperCase()}</h1>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p className='text-sm font-semibold text-justify'>{craft.short_description.slice(0, 80)}...</p>
                        </div>
                        <div className='flex gap-36 md:gap-0 justify-between'>       
                                <Link to={'/update-craft/'+craft._id} className='flex gap-3 items-center btn-outline border-2 px-2 rounded-md font-semibold text-red-700'><MdOutlineBrowserUpdated className='text-3xl text-red-600 hover:text-white' />Update</Link>
                                <button onClick={()=>deleteCraft(craft._id)} className='flex gap-3 items-center btn-outline border-2 px-2 rounded-md font-semibold text-red-700'><TiDelete className='text-3xl text-red-600 hover:text-white' />Delete</button>

                        </div>
                    </div>
            }

        </div>
    )
}

export default CraftCardUser
