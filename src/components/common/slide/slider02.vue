<template>
  <div class="w-full h-full">
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
            dynamicBullets: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper rounded-md"
    >
        <swiper-slide v-for="(item, idx) in items" :key="idx">
            <img :src="imageSrc(item)" class="" />
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
</style>