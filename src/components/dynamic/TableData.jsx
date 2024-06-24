import {Link} from 'react-router-dom'

function TableData({ craft }) {
    return (
            <tr>
                    <td>
                        <div className='flex gap-3 items-center'>
                            <img src={craft.image_url} className='border-2 rounded-md' width='100' height='100' alt="" />
                            <p className='font-semibold text-md'>{craft.item_name}</p>   

                        </div>
                        </td>
                    <td><p className='font-semibold'>${craft.price}</p></td>
                    <td className="min-w-[12rem] max-w-[20rem] whitespace-normal">
                            <p>{craft.subcategory}</p>
                        </td>

                    <td>{craft.in_stock.toUpperCase()}</td>
                    <td>
                        <div>
                            <Link to={'/view-details/'+craft._id} className='btn btn-warning text-white'>View</Link>
                        </div>
                    </td>
            </tr>
    )
}

export default TableData
