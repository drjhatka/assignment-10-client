import axios from 'axios';
import Swal from 'sweetalert2'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";

function UpdateCraft() {
    const id = useParams().id
    //console.log(id)
    const { data, isLoading } = useQuery({
        queryKey: ['crafts'],
        queryFn: async () => {
            const result = await axios.get(`http://localhost:5000/get-craft/${id}`)
            return result.data
        }//end use query
    })
    const handleUpdateCraft = (id) => {
        event.preventDefault()
        //console.log(event.target.image_url.value)
        const inputValues = [
            event.target.image_url.value,//0
            event.target.item_name.value,//1
            event.target.subcategory.value,//2
            event.target.short_description.value,//3
            event.target.price.value,//4
            event.target.rating.value,//5
            event.target.processing_time.value,//6           
            event.target.user_name.value,//7      
            event.target.user_email.value,//8      
            event.target.in_stock.value,//9      
            event.target.customization.value,//10      
        ]
        console.log('ID ',id)
        axios.put(`http://localhost:5000/update-craft/${id}`, {
            image_url: inputValues[0],
            item_name: inputValues[1],
            subcategory: inputValues[2],
            short_description: inputValues[3],
            price: inputValues[4],
            rating: inputValues[5],
            processing_time: inputValues[6],
            in_stock: inputValues[9],
            customization: inputValues[10],
            user_name: inputValues[7],
            user_email: inputValues[8],
        })
            .then(function (response) {
                if (response.data.acknowledged) {
                    Swal.fire({
                        title: 'Product Updated!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Product Could not be added',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });

    }
    return (
        <>
            {
                isLoading ? <Lottie className='h-56' animationData={sandclock} loop={true} /> :
                    <div key={Math.random() * 100} className=' border-2 pt-5 '>
                        <div className='flex px-5 mb-4 py-5 text-center shadow-lg shadow-slate-500 mt-2 border-2 bg-[#006400] '>
                            <h1 className='text-center text-3xl font-semibold w-full text-white'>Update Craft</h1>
                        </div>
                        <form onSubmit={()=> handleUpdateCraft(data._id)} className='flex flex-col gap-4 md:justify-center md:items-center'>

                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Image URL:</span>
                                <input type="text" name='image_url' className="w-[100%]" defaultValue={data.image_url} placeholder="Enter Image URL" />
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Item Name:</span>
                                <input type="text" name='item_name' className="w-[100%]" defaultValue={data.item_name} placeholder="Enter Item Name" />
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Subcategory:</span>
                                <input type="text" name='subcategory' className="w-[100%]" defaultValue={data.subcategory} placeholder="Enter subcategory" />
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Short Description:</span>
                                <input type="text" rows='3' cols='20' name='short_description' className="w-[100%]" defaultValue={data.short_description} placeholder="Enter short description" />
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Price</span>
                                <input type="text" name='price' className=" w-[100%]" defaultValue={data.price} placeholder="Enter price" />
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2   flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Rating</span>
                                <select defaultValue={data.rating} className='w-15 border-2 px-2 py-2 rounded-md border-green-800 text-center' name="rating" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                            <label className="input w-full lg:w-3/5  font-semibold text-red-800 border-b-2 flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Enter Processing Time</span>
                                <input type="text" name='processing_time' className="w-36 px-2 py-2 border-2 border-green-900 rounded-md" defaultValue={data.processing_time} placeholder="Processing time" />
                            </label>
                            <label className="input w-full lg:w-3/5  font-semibold text-red-800 border-b-2  flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>In stock</span>
                                <select defaultValue={data.in_stock} className=' w-15 border-2 px-2 py-2 rounded-md border-green-800 text-center' name="in_stock" id="">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2   flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Customization</span>
                                <select defaultValue={data.customization} className='w-15 border-2 px-2 py-2 rounded-md border-green-800 text-center'  name="customization" id="">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>User EMAIL</span>
                                <input type="text" name='user_email' className="" defaultValue={data.user_email} placeholder="User Email" />
                            </label>
                            <label className="input w-full lg:w-3/5 font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                                <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>User NAME</span>
                                <input type="text" name='user_name' className="" defaultValue={data.user_name} placeholder="User Name" />
                            </label>
                            <button type='submit' className='btn btn-primary'>Update Craft</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default UpdateCraft
