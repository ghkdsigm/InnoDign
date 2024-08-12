<template>
  <nav id="header" class="w-full z-30 top-0 py-1 fixed t-0 border-b z-50 bg-white" :class="currentScroll > 99 ? 'shadow-md' : '' ">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

            <label for="menu-toggle" class="cursor-pointer md:hidden block">
                <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Shop</a></li>
                        <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a></li>
                    </ul>
                </nav>
            </div>

            <div class="order-1 md:order-2" @click="moveTo('/home', '홈으로')">
                <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="34px" height="34px"><path d="M 32 9.0019531 C 31.225957 9.0019531 30.451863 9.2247995 29.78125 9.671875 L 5.78125 25.671875 C 3.9538194 26.890604 3.4532611 29.390166 4.671875 31.21875 C 5.845859 32.97845 8.1947613 33.469534 10 32.417969 L 10 53 A 1.0001 1.0001 0 0 0 11 54 L 21 54 A 1.0001 1.0001 0 1 0 21 52 L 12 52 L 12 30.605469 A 1.0001 1.0001 0 0 0 10.445312 29.773438 L 9.109375 30.664062 C 8.1811589 31.283772 6.9564342 31.039446 6.3359375 30.109375 C 5.7165514 29.179959 5.9620556 27.955208 6.890625 27.335938 L 30.890625 11.335938 C 31.565399 10.886088 32.434601 10.886088 33.109375 11.335938 L 57.109375 27.335938 C 58.037944 27.955208 58.283449 29.179959 57.664062 30.109375 C 57.274555 30.693636 56.643757 31 55.996094 31 C 55.61407 31 55.234406 30.893474 54.890625 30.664062 L 53.554688 29.773438 A 1.0001 1.0001 0 0 0 52 30.605469 L 52 52 L 27 52 L 27 31 L 37 31 L 37 38.732422 C 36.576988 38.452531 36.125457 38.252859 35.654297 38.179688 C 34.786371 38.044899 33.91515 38.22673 33.214844 38.708984 C 32.514538 39.191238 32 40.035337 32 41 C 32 41.957056 32.519219 42.791667 33.216797 43.267578 C 33.914375 43.743489 34.779929 43.925905 35.646484 43.796875 C 36.119122 43.726499 36.574791 43.529252 37 43.25 L 37 49 A 1.0001 1.0001 0 1 0 39 49 L 39 43 C 39 42.247112 38.873416 41.587139 38.673828 40.998047 C 38.87393 40.410772 39 39.752159 39 39 L 39 30 A 1.0001 1.0001 0 0 0 38 29 L 26 29 A 1.0001 1.0001 0 0 0 25 30 L 25 53 A 1.0001 1.0001 0 0 0 26 54 L 53 54 A 1.0001 1.0001 0 0 0 54 53 L 54 32.394531 C 54.627636 32.761057 55.309379 33 55.996094 33 C 57.288431 33 58.561632 32.368489 59.328125 31.21875 C 60.546739 29.390166 60.046181 26.890604 58.21875 25.671875 L 34.21875 9.671875 C 33.548137 9.2247995 32.774043 9.0019531 32 9.0019531 z M 35.0625 40.138672 C 35.155446 40.135537 35.250185 40.141416 35.345703 40.15625 C 35.761884 40.22088 36.181269 40.491448 36.507812 41.005859 C 36.184018 41.504294 35.767551 41.756709 35.353516 41.818359 C 34.970071 41.875449 34.585625 41.778919 34.345703 41.615234 C 34.105781 41.451552 34 41.287444 34 41 C 34 40.688163 34.110462 40.518809 34.347656 40.355469 C 34.525552 40.232964 34.783662 40.148075 35.0625 40.138672 z"/></svg>
                    <span class="pl-2">INNO DIGN</span>
                </a>
            </div>

            <div class="order-2 md:order-3 flex items-center" id="nav-content">

                <a class="inline-block no-underline hover:text-black" href="#">
                    <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3" />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                </a>

                <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                    <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                        <circle cx="10.5" cy="18.5" r="1.5" />
                        <circle cx="17.5" cy="18.5" r="1.5" />
                    </svg>
                </a>

            </div>
        </div>
    </nav>
</template>

<script>
import { ref, defineComponent, computed, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useCommonStore } from '@/store/common'

export default {
    name: 'HomeNav',
    setup(){
        const router = useRouter();
        const selectedIndex = ref(null);
        const moveTo = (url, index) => {
            console.log('idx', index)
            if (index !== undefined && index !== null) {
                selectedIndex.value = index;
            }           
            router.push({ path: url });    
        }
        
        const commonStore = useCommonStore()
        const currentScroll = computed(() => commonStore.scrollY)
        
        return {
            selectedIndex,
            moveTo,
            currentScroll
        }
    }
}
</script>

<style>

</style>