import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "nav-bar",
  setup () {
    const linkToShop = () => {
      console.log("linkToShop");
    };
    return () => (
      <div class="nav-bar">
        <div class="nav-bar__list br1px brt1px">
          <RouterLink to="/ccenter">
            <em class="icon c-icon"></em>
            <span>亲子中心</span>
          </RouterLink>
          <div onClick={linkToShop}>
            <em class="icon w-icon"></em>
            <span>微商城</span>
          </div>
          <RouterLink to="/">
            <span class="i-nav">
              <i></i>
            </span>
            <em class="icon"></em>
            <span>首页</span>
          </RouterLink>
          <RouterLink to="/icenter">
            <em class="icon i-icon"></em>
            <span>消息中心</span>
          </RouterLink>
          <RouterLink to="/me">
            <em class="icon m-icon"></em>
            <span>个人中心</span>
          </RouterLink>
        </div>
      </div>
    )
  }
});
