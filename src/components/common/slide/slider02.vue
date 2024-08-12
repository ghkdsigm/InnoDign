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