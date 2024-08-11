<template>
    <div class="group cursor-pointer" v-for="(item, idx) in items" :key="idx">
        <div class=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
            <a href="" class="relative block">
                <img :src="imageSrc(item)" class="object-cover h-72 w-full" alt="object-cover transition-all">
            </a>
        </div>
        <div>
            <div>
                <div class="flex gap-3">
                    <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                        라이프스타일
                    </span>
                    <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                        개인취향
                    </span>
                </div>
                <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                    <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                        {{item.title}}
                    </span>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import { useUtilities } from '@/utils/useUtilities';

export default {
    props: {
        items: {
            type: Array, 
            default: () => []
        },
        target:{
            type:String,
            default: ''
        }
    },
    setup(props){
        const { getImageSrc } = useUtilities();   
        
        const imageSrc = (img) => getImageSrc('trends', img.thumbnail)

        // const images = import.meta.glob('@/assets/img/houses/*.jpg', { eager: true });
        // const getImageSrc = (img) => {
        //     const fileName = `/src/assets/img/houses/${img}.jpg`;
        //     return images[fileName]?.default || images[fileName];
        // }

        return {
            getImageSrc,
            imageSrc
        }
    }
}
</script>

<style>

</style>