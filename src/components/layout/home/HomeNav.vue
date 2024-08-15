<template>
  <nav id="header" class="w-full z-30 top-0 py-3 fixed t-0 border-b z-50 bg-white sm:hidden" :class="currentScroll > 99 ? 'shadow-md' : '' ">
        <div class='flex flex-wrap items-center gap-5 mx-auto px-6 justify-between py-2' style="max-width:1260px;">
            <div id="collapseMenu"
                class='flex justify-center items-center max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl pr-10" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="34px" height="34px"><path d="M 32 9.0019531 C 31.225957 9.0019531 30.451863 9.2247995 29.78125 9.671875 L 5.78125 25.671875 C 3.9538194 26.890604 3.4532611 29.390166 4.671875 31.21875 C 5.845859 32.97845 8.1947613 33.469534 10 32.417969 L 10 53 A 1.0001 1.0001 0 0 0 11 54 L 21 54 A 1.0001 1.0001 0 1 0 21 52 L 12 52 L 12 30.605469 A 1.0001 1.0001 0 0 0 10.445312 29.773438 L 9.109375 30.664062 C 8.1811589 31.283772 6.9564342 31.039446 6.3359375 30.109375 C 5.7165514 29.179959 5.9620556 27.955208 6.890625 27.335938 L 30.890625 11.335938 C 31.565399 10.886088 32.434601 10.886088 33.109375 11.335938 L 57.109375 27.335938 C 58.037944 27.955208 58.283449 29.179959 57.664062 30.109375 C 57.274555 30.693636 56.643757 31 55.996094 31 C 55.61407 31 55.234406 30.893474 54.890625 30.664062 L 53.554688 29.773438 A 1.0001 1.0001 0 0 0 52 30.605469 L 52 52 L 27 52 L 27 31 L 37 31 L 37 38.732422 C 36.576988 38.452531 36.125457 38.252859 35.654297 38.179688 C 34.786371 38.044899 33.91515 38.22673 33.214844 38.708984 C 32.514538 39.191238 32 40.035337 32 41 C 32 41.957056 32.519219 42.791667 33.216797 43.267578 C 33.914375 43.743489 34.779929 43.925905 35.646484 43.796875 C 36.119122 43.726499 36.574791 43.529252 37 43.25 L 37 49 A 1.0001 1.0001 0 1 0 39 49 L 39 43 C 39 42.247112 38.873416 41.587139 38.673828 40.998047 C 38.87393 40.410772 39 39.752159 39 39 L 39 30 A 1.0001 1.0001 0 0 0 38 29 L 26 29 A 1.0001 1.0001 0 0 0 25 30 L 25 53 A 1.0001 1.0001 0 0 0 26 54 L 53 54 A 1.0001 1.0001 0 0 0 54 53 L 54 32.394531 C 54.627636 32.761057 55.309379 33 55.996094 33 C 57.288431 33 58.561632 32.368489 59.328125 31.21875 C 60.546739 29.390166 60.046181 26.890604 58.21875 25.671875 L 34.21875 9.671875 C 33.548137 9.2247995 32.774043 9.0019531 32 9.0019531 z M 35.0625 40.138672 C 35.155446 40.135537 35.250185 40.141416 35.345703 40.15625 C 35.761884 40.22088 36.181269 40.491448 36.507812 41.005859 C 36.184018 41.504294 35.767551 41.756709 35.353516 41.818359 C 34.970071 41.875449 34.585625 41.778919 34.345703 41.615234 C 34.105781 41.451552 34 41.287444 34 41 C 34 40.688163 34.110462 40.518809 34.347656 40.355469 C 34.525552 40.232964 34.783662 40.148075 35.0625 40.138672 z"/></svg>
                    <span class="pl-1" :class="currentScroll < 99 ? 'text-blue-600' : '' ">INNO</span>
                    <span class="pl-1" :class="currentScroll > 99 ? 'text-blue-600' : '' ">DIGN</span>
                </a>
                <ul
                class='flex lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                    <li class='mb-6 hidden max-lg:block'>
                        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
                        </a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-3 px-4'>
                        <a href='javascript:void(0)'
                        class='hover:text-blue-600 text-black block font-semibold text-lg'>시공서비스</a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-3 px-4'><a href='javascript:void(0)'
                        class='hover:text-blue-600 text-black block font-semibold text-lg'>간편견적</a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-3 px-4'><a href='javascript:void(0)'
                        class='hover:text-blue-600 text-black block font-semibold text-lg'>시공사례</a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-3 px-4'><a href='javascript:void(0)'
                        class='hover:text-blue-600 text-black block font-semibold text-lg'>시공자재</a>
                    </li>
                    <li class='max-lg:border-b max-lg:py-3 px-4'><a href='javascript:void(0)'
                        class='hover:text-blue-600 text-black block font-semibold text-lg'>이웃후기</a>
                    </li>
                </ul>
            </div>
        
            <div class="">
                <button class='px-4 py-1 text-sm rounded-full font-medium hover:text-white border border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent text-[#007bff]'>자주하는질문</button>
                <button class='px-4 ml-4 py-1 text-sm rounded-full font-medium text-white border border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>상세견적내기</button>
            </div>
        </div>
 </nav> 
 <nav class="flex items-center justify-between flex-wra px-6 pt-4 hidden sm:block">
    <div class="flex justify-between items-center mb-3">
        <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl pr-1" href="#">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="34px" height="34px"><path d="M 32 9.0019531 C 31.225957 9.0019531 30.451863 9.2247995 29.78125 9.671875 L 5.78125 25.671875 C 3.9538194 26.890604 3.4532611 29.390166 4.671875 31.21875 C 5.845859 32.97845 8.1947613 33.469534 10 32.417969 L 10 53 A 1.0001 1.0001 0 0 0 11 54 L 21 54 A 1.0001 1.0001 0 1 0 21 52 L 12 52 L 12 30.605469 A 1.0001 1.0001 0 0 0 10.445312 29.773438 L 9.109375 30.664062 C 8.1811589 31.283772 6.9564342 31.039446 6.3359375 30.109375 C 5.7165514 29.179959 5.9620556 27.955208 6.890625 27.335938 L 30.890625 11.335938 C 31.565399 10.886088 32.434601 10.886088 33.109375 11.335938 L 57.109375 27.335938 C 58.037944 27.955208 58.283449 29.179959 57.664062 30.109375 C 57.274555 30.693636 56.643757 31 55.996094 31 C 55.61407 31 55.234406 30.893474 54.890625 30.664062 L 53.554688 29.773438 A 1.0001 1.0001 0 0 0 52 30.605469 L 52 52 L 27 52 L 27 31 L 37 31 L 37 38.732422 C 36.576988 38.452531 36.125457 38.252859 35.654297 38.179688 C 34.786371 38.044899 33.91515 38.22673 33.214844 38.708984 C 32.514538 39.191238 32 40.035337 32 41 C 32 41.957056 32.519219 42.791667 33.216797 43.267578 C 33.914375 43.743489 34.779929 43.925905 35.646484 43.796875 C 36.119122 43.726499 36.574791 43.529252 37 43.25 L 37 49 A 1.0001 1.0001 0 1 0 39 49 L 39 43 C 39 42.247112 38.873416 41.587139 38.673828 40.998047 C 38.87393 40.410772 39 39.752159 39 39 L 39 30 A 1.0001 1.0001 0 0 0 38 29 L 26 29 A 1.0001 1.0001 0 0 0 25 30 L 25 53 A 1.0001 1.0001 0 0 0 26 54 L 53 54 A 1.0001 1.0001 0 0 0 54 53 L 54 32.394531 C 54.627636 32.761057 55.309379 33 55.996094 33 C 57.288431 33 58.561632 32.368489 59.328125 31.21875 C 60.546739 29.390166 60.046181 26.890604 58.21875 25.671875 L 34.21875 9.671875 C 33.548137 9.2247995 32.774043 9.0019531 32 9.0019531 z M 35.0625 40.138672 C 35.155446 40.135537 35.250185 40.141416 35.345703 40.15625 C 35.761884 40.22088 36.181269 40.491448 36.507812 41.005859 C 36.184018 41.504294 35.767551 41.756709 35.353516 41.818359 C 34.970071 41.875449 34.585625 41.778919 34.345703 41.615234 C 34.105781 41.451552 34 41.287444 34 41 C 34 40.688163 34.110462 40.518809 34.347656 40.355469 C 34.525552 40.232964 34.783662 40.148075 35.0625 40.138672 z"/></svg>
            <span class="pl-1 text-sm">INNO</span>
            <span class="text-sm">DIGN</span>
        </a>
        
        <div class="">
            <button class='px-2 py-1 text-xs rounded-full font-medium hover:text-white border border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent text-[#007bff]'>자주하는질문</button>
            <button class='px-2 ml-2 py-1 text-xs rounded-full font-medium text-white border border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>상세견적내기</button>
        </div>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <!-- <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
        </a>
        </div> -->
            <ul
            class='w-full justify-around flex lg:fle lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                <li class='mb-6 hidden max-lg:block'>
                    <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
                    </a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-0'>
                    <a href='javascript:void(0)'
                    class='hover:text-blue-600 text-black block font-semibold text-sm'>시공서비스</a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-0'><a href='javascript:void(0)'
                    class='hover:text-blue-600 text-black block font-semibold text-sm'>간편견적</a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-0'><a href='javascript:void(0)'
                    class='hover:text-blue-600 text-black block font-semibold text-sm'>시공사례</a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-0'><a href='javascript:void(0)'
                    class='hover:text-blue-600 text-black block font-semibold text-sm'>시공자재</a>
                </li>
                <li class='max-lg:border-b max-lg:py-3 px-0'><a href='javascript:void(0)'
                    class='hover:text-blue-600 text-black block font-semibold text-sm'>이웃후기</a>
                </li>
            </ul>
        <div>
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