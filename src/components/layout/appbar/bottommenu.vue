<template>  
  <div class="fixed bottom-0 left-0 z-50 w-full h-[12vh] border-t border-gray-200 bg-primary">
      <div class="grid h-full w-full mx-auto" :class="bottomItems.length ? `grid-cols-${bottomItems.length}` : 'grid-cols-5'">
          <button type="button" class="inline-flex flex-row items-center justify-center px-5 hover:bg-primaryHover group" :class="{ 'bg-primaryHover text-white': selectedIndex === idx && currentPath !== '/customerkiosk'}" v-for="(item, idx) in bottomItems" :key="idx" @click="moveToPage(item.to, idx)">
              <img :src="item.ico ? imageSrc(item.ico) : '@/assets/img/bottom/person.svg'" :alt="item.title" class="w-12 h-12 text-gray-500 group-hover:text-white" :class="{ 'animate-bounce': selectedIndex === idx && currentPath !== '/customerkiosk'}"/>
              <span class="pl-4 text-2xl font-medium text-white  group-hover:text-white">{{ item.title }}</span>
          </button>
      </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useUtilities } from '@/utils/useUtilities';

export default defineComponent({
    name: 'CommonLayoutAppbarBottommenu',
    props: {
        bottomItems: {
            type: Array, 
            default: () => []
        }
    },
    setup(props) {       
        const router = useRouter();
        const selectedIndex = ref(null);
        const currentRoutes = useRoute()
        const currentPath = computed(() => currentRoutes.path);

        const { getImageSrc } = useUtilities();
        const imageSrc = (icon) => getImageSrc('bottom', icon);
        

        const moveToPage = (url, index) => {
            console.log('idx', index)
            if (index !== undefined && index !== null) {
                selectedIndex.value = index;
            }           
            router.push({ path: url });    
        }


        return {       
            moveToPage,
            selectedIndex,
            currentRoutes,
            currentPath,
            imageSrc
        }
    }
})
</script>

<style scoped>

</style>