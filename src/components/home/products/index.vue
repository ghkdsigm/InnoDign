<template>
    <div class="w-1/4 sm:w-1/1 md:w-1/3 xl:w-1/4 p-6 flex rounded-lg" v-for="(item, idx) in items" :key="idx">
        <a href="#" class="w-full object-cover">
            <img class="object-cover w-full aspect-square hover:grow hover:shadow-lg rounded-lg" :src="imageSrc(item)">
            <div class="pt-3 flex items-center justify-between">
                <p class="text-sm text-gray-400 ">{{ item.addr }}</p>
                <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
            </div>
            <p class="text-gray-900 text-base font-bold">{{ item.title }}</p>
            <div class="flex items-center justify-between">               
                <div class="flex">
                    <span class="flex items-center space-x-2 text-sm">{{ item.size }}</span>
                    <span class="flex items-center space-x-2 text-sm pl-1">· {{ item.color[0] }}</span>
                </div>
                <div>
                    <span class="flex items-center space-x-2 text-sm">{{ item.price + ' 만원' }}</span>
                </div>
            </div>
            <ul class="flex">
                <li v-for="(el, i) in item.concept" :key="i" class="pr-1" >
                    <span class="text-gray-400 text-sm font-light">
                        {{ '#' + el }}
                    </span>
                </li>
            </ul>
        </a>
    </div>

    <!-- <div class="mt-3 flex justify-center space-x-3 text-gray-500 ">
        <div className="flex gap-3"
        ></div>
        <div class="flex items-center gap-3" v-for="(item, idx) in items" :key="idx">
            <div class="relative h-10 w-10 flex-shrink-0">
                <img
                :src="getImageSrc(item?.thumbnail)"
                    class="rounded-full object-cover"
                />
                </div>
            <div>
            <p class="text-gray-800 dark:text-gray-400">
                {{ item.title }}
            </p>
            <div class="flex items-center space-x-2 text-sm">
                {{ item.date }}
                <span>· item.date</span>
            </div>
            </div>
        </div>
        </div> -->
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
        
        const imageSrc = (img) => img.category === 'house' ? getImageSrc('houses', img.thumbnail) : getImageSrc('company', img.thumbnail) 

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