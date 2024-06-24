import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'
import {Link} from 'react-router-dom'
function Banner({crafts, isLoading}) {
    SwiperCore.use([Autoplay, EffectFade]);
    
    console.log(isLoading)
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={0}
            autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: true
            }}
            speed={1200}
            effect={'fade'}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                isLoading ?
                <span className="loading loading-infinity loading-lg"></span>
                :crafts.map(craft=>{
                    return <SwiperSlide key={craft._id}>
                            <div className="card mx-auto  md-w-1/2 lg:w-96 bg-base-100 shadow-xl">
                                <figure className='max-h-56 cover'><img src={craft.image_url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {craft.item_name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{craft.short_description}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={'/view-details/'+craft._id} className="btn btn-primary">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                })
            }
           


        </Swiper>
    )
}

export default Banner
