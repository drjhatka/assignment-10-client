import {Link} from 'react-router-dom'

function SubcategoryCard({category}) {
    const {category_name, image} = category
    return (
        
            <div className="card glass shadow-lg">
                <figure className='max-h-40'>
                    <img className=''
                        src={image}
                        alt="car!" />
                </figure>
                <div className="card-body py-8">
                    <h2 className="card-title">{category_name.toUpperCase()}</h2>
                    <p>Explore this category of art & craft and see for yourself what we have to offer</p>
                    <div className="card-actions justify-center py-4 border-t-2">
                        <Link to={'/category-detail/'+category_name} className="btn btn-info text-lg text-white">Browse Collection</Link>
                    </div>
                </div>
            </div>
        
    )
}

export default SubcategoryCard
