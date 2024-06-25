import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'
import {Link} from 'react-router-dom'
import Lottie from "lottie-react";
import sandclock from "../../../animation.json";
function Banner({crafts, isLoading}) {
    SwiperCore.use([Autoplay, EffectFade]);
    
    console.log(isLoading)
    return (
        <Swiper className=''
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
                <Lottie className='h-56' animationData={sandclock} loop={true} />
                :crafts.map(craft=>{
                    return <SwiperSlide className='min-h-96 ' key={craft._id}>
                            <div className="card mx-auto bg-slate-50  md-w-1/2 shadow-xl">
                                <figure className=' py-2 ' ><img style={{'width':'50%','max-height':'180px', 'object-fit':'contain'}} className='rounded-md'  src={craft.image_url} alt="Shoes" /></figure>
                                <div className="card-body flex justify-center items-center">
                                    <h2 className="card-title ">
                                        {craft.item_name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p className='w-96'>{craft.short_description}</p>
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
