import {Link} from 'react-router-dom'

function CategoryCard({craft}) {
    return (
        <div>
            <div className='border-2  shadow-lg border-green-600 rounded-md py-2 flex flex-col gap-5 mb-3 mt-3 px-3 '>
                <div className='h-56  overflow-hidden'><img className='mx-auto py-2 px-2 rounded-lg' src={craft.image_url} alt="" /></div>
                <div className='text-center font-bold text-blue-700'>{craft.item_name}</div>
                <div className='flex justify-between px-4'>
                    <div>
                        <h1 className='text-green-600 px-2 py-2 border-green-600 border-2 rounded-md font-semibold'>Price: ${craft.price}</h1>
                    </div>
                    <div>
                        <h1 className='text-red-600 px-2 py-2 border-red-600 border-2 rounded-md font-semibold'>Category: {craft.subcategory.toUpperCase()}</h1>
                    </div>
                </div>
                <div className='mb-2'>
                    <p className='text-sm font-semibold text-justify'>{craft.short_description.slice(0, 80)}...</p>
                </div>
                <div className='flex justify-center'>
                    <Link to={'/view-details/' + craft._id} className='btn  px-16 bg-red-600 text-white btn-secondary'>View</Link>
                </div>
            </div>

        </div>
    )
}

export default CategoryCard
