import { defineComponent, ref, Ref } from "vue"
import { MediaList } from '@/utils/common'
import { Swipe, SwipeItem, SwipeToOptions } from "vant"
import { SwiperItem } from '@/interfaces/home-interfaces'
import './index.less'
export default defineComponent({
  name: 'home',
  setup () {
    const list:Ref<SwiperItem[]> = ref([])
    // const r = reactive({
    //   list: []
    // })
    const handleClick = async () => {
      const { data } = await MediaList({})
      list.value = data.result
    }
    handleClick()
    // const linkToUrl = (v:string):void => {
    //   console.log(v);
    // }
    return () => {
      return (
        <div class="home-page">
          <Swipe autoplay='3000' ref="homeSwiper" class="home-page__swiper">
            {
              list.value.map(v => {
                return (
                  <SwipeItem>
                    <img src={v.list_img} />
                  </SwipeItem>
                )
              })
            }
          </Swipe>
        </div>
      )
    }
  }
})
