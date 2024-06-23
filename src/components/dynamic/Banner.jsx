import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'
function Banner() {
    SwiperCore.use([Autoplay, EffectFade]);

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
            <SwiperSlide>
                <div className="card mx-auto  md-w-1/2 lg:w-96 bg-base-100 shadow-xl">
                    <figure className='min-h-56'><img src="images/earth-product-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card mx-auto md-w-1/2 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src="images/earth-product-2.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Boots!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card mx-auto md-w-1/2 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src="images/earth-product-3.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Boots!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper>
    )
}

export default Banner
