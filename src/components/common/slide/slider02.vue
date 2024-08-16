<template>
  <div class="w-full h-full">
    <swiper
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :speed="600"
        :parallax="true"
        :pagination="{
            dynamicBullets: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper rounded-md"
    >
        <swiper-slide v-for="(item, idx) in items" :key="idx">
            <!-- <div class="title" data-swiper-parallax="-300">Slide 1</div>
            <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div class="text" data-swiper-parallax="-100">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
                velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                libero. Aenean feugiat non eros quis feugiat.
                </p>
            </div> -->
            <div class="relative font-sans before:absolute before:h-full before:inset-0 before:bg-gradient-to-r from-black before:opacity-50 before:z-10 w-full">
                <img :src="imageSrc(item)" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="min-h-[350px] relative z-50 mx-auto flex justify-between items-center text-white py-6 px-12">
                        <div>
                            <h2 class="sm:text-4xl text-3xl font-bold mb-6">간단한 프로세스 & 쾌적한 보금자리, 이노다인이 함께합니다.</h2>
                            <p class="sm:text-lg text-lg text-left font-light text-gray-200 mb-4">거주중인 보금자리 어떻게 꾸미지? <br/>먼지 여기저기 날리는건 아닌가? 출,퇴근은 가능할까?</p>
                            <p class="sm:text-lg text-lg text-left font-light text-gray-200">모든 걱정 & 근심 이노다인이 단번에 해결 해 드립니다!</p>
                        </div>

                        <!-- <button
                        type="button"
                        class="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
                        자세히 보기
                        </button> -->
                    </div>
            </div>            
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//import './style.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useUtilities } from '@/utils/useUtilities';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        items : {
            Type: Array,
            default: []
        }
    },
    setup(props) {
        const { getImageSrc } = useUtilities();   
        const imageSrc = (img) => getImageSrc('banner', img.thumbnail)

        return {
            getImageSrc,
            imageSrc,
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 400px;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    aspect-ratio: 1.5;
}

.swiper-pagination-bullet-active {
    width: 18px;
    border-radius: 15px;
    background: #0055cf;
}

/* .swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
} */

</style>