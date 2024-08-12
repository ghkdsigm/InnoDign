<template>
  <div>
    <!--Main Section-->    
    <HomeNav />
    <div class="pt-12">      
        <div class="mx-auto h-full">
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

export default {
  components:{
    HomeFooter,
    HomeNav
  },    
  setup(){
    const currentRoutes = useRoute()
    const currentPath = computed(() => currentRoutes.path);
    const routes = ref([])  
    

    onBeforeMount(()=>{
      //routes.value = router.options.routes
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    });

    onMounted(() => {
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