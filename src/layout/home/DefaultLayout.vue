<template>
  <div>
    <!--Main Section-->    
    <HomeNav  />
    <div class="pt-12">      
        <div class="mx-auto h-full" style="max-width:1260px;" @scroll="handleScroll">
            <router-view v-slot="{ Component }">
              <component :is="Component"></component>
            </router-view>
        </div>       
    </div>                
    <HomeFooter />
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, computed } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router';
import HomeNav from '@/components/layout/home/HomeNav.vue'
import HomeFooter from '@/components/layout/home/HomeFooter.vue'
import { useCommonStore } from '@/store/common.js';

export default {
  components:{
    HomeFooter,
    HomeNav
  },    
  setup(){
    const currentRoutes = useRoute()
    const currentPath = computed(() => currentRoutes.path);
    const routes = ref([])  

    const scrollStore = useCommonStore();    

    const handleScroll = () => {
      scrollStore.setScrollY(window.scrollY);
    };
    
    onBeforeMount(()=>{
      //routes.value = router.options.routes
      window.removeEventListener('scroll', handleScroll);
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    })

    // onBeforeUpdate(() => {
    // })
    // onUpdated(() => {
    // })
    // onBeforeUnmount(() => {
    // })
    // onUnmounted(() => {
    // })

    return {
      routes,
      router,   
      currentPath    
    }
  },    
}
</script>

<style scoped>
</style>