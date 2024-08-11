<template>   
    <transition name="route" mode="out-in">
      <component :is="layout"></component>
    </transition> 
</template>

<script>
import DefaultLayout from '@/layout/home/DefaultLayout.vue'
import EmptyLayout from '@/layout/home/EmptyLayout.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: { DefaultLayout, EmptyLayout },
  setup() {
    const route = useRoute()
    const currentPath = computed(() => route.path);
    const layout = computed(() => route.meta.layout || 'DefaultLayout')

    //CustomerKioskBottom 전용
    
    return {
      layout,
      currentPath
    }
  },
}
</script>

<style>
/*컴포넌트 이동 트랜지션*/
/* .route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.1s ease-in;
} */
</style>