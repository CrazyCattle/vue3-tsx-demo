import { defineComponent, reactive, Transition, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Bar from '@/components/navbar'
import './app.less'

export default defineComponent({
  name: 'App',
  setup () {
    const data = reactive({
      transitionName: ''
    })

    const router = useRoute()
    watch(() => router.meta, (to: any, from: any) => {
      if (to.index && from.index) {
        if (to.index < from.index) {
          data.transitionName = 'slide-forward'
        } else if (to.index > from.index) {
          data.transitionName = 'slide-back'
        } else {
          data.transitionName = ''
        }
      } else {
        data.transitionName = ''
      }
    })

    return () => (
      <div>
        <Transition name={data.transitionName}>
          <RouterView />
        </Transition>
        <Bar />
      </div>
    )
  }
})
