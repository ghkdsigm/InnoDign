<template>
  <div>
    <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :centeredSlides="true"
        :pagination="{
        clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="(item, idx) in items" :key="idx">
            <img :src="imageSrc(item)" />
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
import { Pagination } from 'swiper/modules';
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
            modules: [Pagination],
        };
    },
};
</script>
