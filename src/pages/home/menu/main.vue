<template>
  <div>
    <section class="bg-white my-8">
        <div class="container mx-auto flex items-center flex-wrap" style="max-width:1260px;">
            <nav id="store" class="w-full z-30 top-0 px-6 pt-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                    <HomeSlider :items="mainSlider"/>
                </div>
            </nav>
        </div>
    </section>
    <section class="bg-white my-8">
        <div class="container mx-auto flex items-center flex-wrap" style="max-width:1260px;">
            <nav id="store" class="w-full z-30 top-0 px-6 pt-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0  py-3">
                    <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl pb-2" href="#">
                        이노다인과 함께한 <span class="text-blue-600 font-bold">이웃들의 소중한 공간</span>이에요
                    </a>
                    <div class="flex items-center" id="store-nav-content">
                        <a class="sm:hidden block pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                            </svg>
                        </a>
                        <a class="sm:hidden block pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                            </svg>
                        </a>
                        <a href="#" class="hidden sm:block">더보기</a>
                    </div>
                </div>
            </nav>
            <div class="px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 grid-cols-4 w-full">
                <Products :target="'house'" :items="houseItems" />             
            </div>
        </div>
    </section>
    <section class="bg-white my-8">
        <div class="container mx-auto flex items-center flex-wrap" style="max-width:1260px;">
            <nav id="store" class="w-full z-30 top-0 px-6 pt-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                    <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl pb-2" href="#">
                        이노다인과 함께한 <span class="text-blue-600 font-bold">대표님들의 일터</span>에요
                    </a>
                    <div class="flex items-center" id="store-nav-content">
                        <a class="sm:hidden block pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                            </svg>
                        </a>
                        <a class="sm:hidden block pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                            </svg>
                        </a>
                        <a href="#" class="hidden sm:block">
                            더보기
                        </a>
                    </div>
                </div>
            </nav> 
            <div class="px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 grid-cols-4 w-full">
                <Products :target="'company'" :items="companyItems" />
            </div>      
                  
        </div>
    </section>
    <section class="bg-white my-8">
        <div class="container mx-auto flex items-center flex-wrap" style="max-width:1260px;">
            <nav id="store" class="w-full z-30 top-0 px-6 pt-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                    <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl pb-2" href="#">
                        요즘 힙한 <span class="text-blue-600 font-bold">트렌드</span>
                    </a>     
                    <div class="flex items-center" id="store-nav-content">
                        <!-- <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                            </svg>
                        </a>
                        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                            </svg>
                        </a> -->
                        <a class="pl-2">더보기</a>
                    </div>                                   
                </div>
            </nav>   
            <div class="px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 grid-cols-3 w-full">     
                <Trends :items="trendsItems" />           
            </div>
        </div>
    </section>
    <!-- <section class="bg-white my-8">
        <div class="container mx-auto" style="max-width:1600px;">
            <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
                About
            </a>
            <p class="mt-8 mb-8">
                <a class="text-gray-800 underline hover:text-gray-900" href="" target="_blank">Savoy Theme</a> created by <a class="text-gray-800 underline hover:text-gray-900" href="https://nordicmade.com/">https://nordicmade.com/</a> and <a class="text-gray-800 underline hover:text-gray-900" href="https://www.metricdesign.no/" target="_blank">https://www.metricdesign.no/</a>
            </p>
            <p class="mb-8">Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae congue eu consequat ac.</p>
        </div>
    </section> -->
  </div>
</template>

<script>
import HomeSlider from '@/components/common/slide/slider02.vue'
import Products from '@/components/home/products/index.vue'
import Trends from '@/components/home/trends/index.vue'
export default {
    components:{
        HomeSlider,
        Products,
        Trends
    },
    setup(){
        const mainSlider = [
            {
                thumbnail: '1',
                link: 'https://www.naver.com',
                id: 1,
                date: '20240911'
            },
            {
                thumbnail: '2',
                link: 'https://www.naver.com',
                id: 2,
                date: '20240911'
            },
            {
                thumbnail: '3',
                link: 'https://www.naver.com',
                id: 3,
                date: '20240911'
            },
        ]
        const houseItems = [
            {
                id: 1,
                title: '화이트 모던한 집 - 검단신도시',
                addr:'서울특별시 성동구 옥수래미안',
                tel:'',
                date: '2024년 11월',
                price: '3,200',
                thumbnail: '1',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
            {
                id: 2,
                title: '깔끔한 인테리어',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '2',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
            {
                id: 2,
                title: '깔끔한 인테리어',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '3',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
            {
                id: 2,
                title: '깔끔한 인테리어',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '2',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
            {
                id: 3,
                title: '신혼부부 걸맞춤',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '2',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
            {
                id: 4,
                title: '아이와 함께하는 집',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '4',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
            {
                id: 5,
                title: '반려견 맞춤 시공',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '6',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
            {
                id: 4,
                title: '아이와 함께하는 집',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '5',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'house'
            },
        ]

        const companyItems = [
            {
                id: 1,
                title: '피자알볼로 목동점',
                addr:'서울특별시 양천구 목1동',
                tel:'',
                date: '2024년 11월',
                price: '3,200',
                thumbnail: '4',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
            {
                id: 2,
                title: '깔끔한 망원동의 품격 - 카페이플',
                addr:'서울특별시 마포구 망원1동',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '6',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
            {
                id: 3,
                title: '시카고 피자',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '4',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
            {
                id: 4,
                title: '아이와 함께하는 집',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '2',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
            {
                id: 5,
                title: '반려견 맞춤 시공',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '2',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
            {
                id: 5,
                title: '반려견 맞춤 시공',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '4',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
            {
                id: 5,
                title: '반려견 맞춤 시공',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '6',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
            {
                id: 5,
                title: '반려견 맞춤 시공',
                addr:'서울특별시 동작구 보라매파크빌아파트',
                tel:'',
                date: '2024년 01월',
                price: '3,000',
                thumbnail: '5',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'company'
            },
        ]

        const trendsItems = [
            {
                id: 1,
                title: '새로운 중문 패러다임!',
                addr:'서울특별시 양천구 목1동',
                tel:'',
                date: '2024년 11월',
                price: '3,200',
                thumbnail: '2',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'trends'
            },
            {
                id: 1,
                title: '새로운 중문 패러다임!',
                addr:'서울특별시 양천구 목1동',
                tel:'',
                date: '2024년 11월',
                price: '3,200',
                thumbnail: '3',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'trends'
            },
            {
                id: 1,
                title: '새로운 중문 패러다임!',
                addr:'서울특별시 양천구 목1동',
                tel:'',
                date: '2024년 11월',
                price: '3,200',
                thumbnail: '4',
                size: '공급 24평',
                extra: '비확장',
                construction: [
                    {
                        elec: ['다운라이트', '배선작업', '화장실조명']    
                    },
                    {
                        extra: ['거실','방2', '베란다']
                    },
                    {
                        film: ['거실']
                    },
                    {
                        wall: ['거실','안방']
                    },
                    {
                        floor:['전체']
                    }
                ],
                liveYN: 'Y',
                concept:[
                    '편안한', '안락한', '모던한'
                ],
                color:[
                    '화이트', '갈색 우드'
                ],
                category: 'trends'
            }
        ]

        return {
            mainSlider,
            houseItems,
            companyItems,
            trendsItems
        }
    }
}
</script>

<style>

</style>