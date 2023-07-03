<template>
<div>
  <el-container>
  <el-aside width="auto">
    <common-aside />
  </el-aside>
  <el-container>
    <el-header>
      <common-header />
    </el-header>
    <common-tag />
    <el-main>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
     <router-view/>
    
    </el-main>
    </el-container>
  </el-container>
  
</div>
</template>
<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue';
import CommonTag from '../components/CommonTag.vue';

export default {
  data() {
    return {
      
    }
  
  },
    components: {
      CommonAside,
      CommonHeader,
      CommonTag
    }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  text-align: left;

}
.el-header{
  padding: 0;
}
</style>