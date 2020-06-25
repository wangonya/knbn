<template>
  <a-layout id="app" style="min-height: 100vh;">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu :default-selected-keys="['1']" mode="inline" theme="dark">
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="project" />
            <span>Projects</span>
          </span>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="stock" />
          <span>Analytics</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; margin-bottom: 25px;">
        <a-button icon="plus">New Project</a-button>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px;">
        <Boards />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Boards from './components/Boards'

export default {
  name: "App",
  components: {
    Boards
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
#app .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
