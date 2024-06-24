import { Formik } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2'
function AddCraft() {
    const handleAddCraft =(event)=>{
        event.preventDefault()
        //console.log(event.target.image_url.value)
        const inputValues= [
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
       // console.log(inputValues)
       axios.post('http://localhost:5000/add-craft', {
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
        if(response.data.acknowledged){
            Swal.fire({
                title: 'Product Added!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: 'Product Could not be added',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
      });
                    
    }
    return (
        <div className=' border-2 pt-5'>
            <form onSubmit={event=>handleAddCraft(event)} className='flex flex-col gap-4 md:justify-center md:items-center'>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Image URL:</span> 
                    <input type="text" name='image_url' className="" placeholder="Enter Image URL" />
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Item Name:</span> 
                    <input type="text" name='item_name' className="" placeholder="Enter Item Name" />
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Subcategory:</span> 
                    <input type="text" name='subcategory' className="" placeholder="Enter subcategory" />
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Short Description:</span> 
                    <input type="text" name='short_description' className="" placeholder="Enter short description" />
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Price</span> 
                    <input type="text" name='price' className="" placeholder="Enter price" />
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Rating</span> 
                    <select className='w-30' name="rating" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/GtsmJCy/earth-product-1.png" alt="earth-product-1" border="0" /></a> */}
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Enter Processing Time</span> 
                    <input type="text" name='processing_time' className="" placeholder="Processing time" />
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>In stock</span> 
                    <select className='w-30' name="in_stock" id="">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>Customization</span> 
                    <select className='w-30' name="customization" id="">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>User EMAIL</span> 
                    <input type="text" name='user_email' className="" placeholder="User Email" />
                </label>
                <label className="input  font-semibold text-red-800 border-b-2  input-bordered flex  items-center gap-2">
                    <span className='border-r-2 border-black rounded px-4 py-2 text-white bg-red-400 w-56'>User NAME</span> 
                    <input type="text" name='user_name' className="" placeholder="User Name" />
                </label>
                <button type='submit' className='btn btn-primary'>Add Craft</button>
            </form>
        </div>
    )
}

export default AddCraft
