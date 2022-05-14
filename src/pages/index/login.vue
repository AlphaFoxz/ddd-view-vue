<template>
  <view>
    <Particles
        id="tsparticles"
        :options="particlesOption"
    />
    <a-layout>
      <a-layout-header>
        <a href='https://gitee.com/EricFox/ddd-view-vue' target="_blank">
          <img
              :style="{position: 'fixed', zIndex: 1}"
              src='https://gitee.com/EricFox/ddd-view-vue/widgets/widget_2.svg'
              alt='Fork me on Gitee'
          />
        </a>
      </a-layout-header>
      <a-layout-content>
        <form
            class="form"
        >
          <label class="form-label">
            <input
                placeholder="请输入账号"
                v-model:value="username"
            />
          </label>
          <label class="form-label">
            <input
                type="text"
                placeholder="请输入密码"
                v-model:value="password"
                password
            />
          </label>
          <label class="form-label">
            <button @click="loginHandler">登录</button>
          </label>
        </form>
      </a-layout-content>
      <a-layout-footer>
        <label :style="{cursor: 'auto'}">CopyRight© <a href="https://gitee.com/EricFox" style="color: white" target="_blank">EricFox@Gitee.com</a></label>
      </a-layout-footer>
    </a-layout>
  </view>
</template>
<script>
  import {Layout,LayoutHeader, LayoutSider,LayoutFooter,LayoutContent} from 'ant-design-vue'
  export default {
    components:{
      ALayout: Layout,
      ALayoutHeader: LayoutHeader,
      ALayoutSider: LayoutSider,
      ALayoutFooter: LayoutFooter,
      ALayoutContent: LayoutContent
    },
    data() {
      return {
        username: '',
        password: '',
        particlesOption: {
          background: {
            color: {
              value: '#171E36'
            }
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: '#ffffff'
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }
      }
    },
    methods: {
      loginHandler() {
        this.$http('/sys/user/')
      }
    }
  }
</script>
<style scoped>
  .code-box-demo {
    text-align: center;
  }
  .ant-layout-header,
  .ant-layout-footer {
    height: 24rpx;
    font-size: 24rpx;
    color: #fff;
    background-color: rgb(13, 71, 161);
  }
  [data-theme='dark'] .ant-layout-header {
    background: #6aa0c7;
  }
  [data-theme='dark'] .ant-layout-footer {
    background: #6aa0c7;
  }
  .ant-layout-footer {
    background: #0c1020;
    position: fixed;
    display: inline-block;
    line-height: 24rpx;
    width: 100%;
    text-align: center;
  }
  .ant-layout-sider {
    color: #fff;
    line-height: 120rpx;
    background: #3ba0e9;
  }
  .ant-layout-sider {
    background: #3499ec;
  }
  .ant-layout-content {
    height: calc(100vh - 48rpx);
    min-height: 120rpx;
    color: #fff;
    line-height: 120rpx;
  }
  [data-theme='dark'] .ant-layout-content {
    background: #107bcb;
  }
  .ant-layout + .ant-layout {
    margin-top: 48rpx;
  }

  .form-label {
    display: flex;
    margin: 15rpx auto;
    width: 30vw;
  }
  @media(max-width: 960px)  {
    .form-label {
      width: 50vw;
    }
  }
  .form-label input{
    color: darkblue;
    width: 100%;
    background-color: rgba(255,255,255,0.9)
  }
  .form-label button{
    width: 100%;
    color: #ffffff;
    background: url(/static/images/puder.png) no-repeat 0 0 / 100% 100%;
  }
  .form{
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .form span{
    width: 40%;
  }
</style>
