<script setup></script>

<template>
  <!-- 大盒子-->
  <div class="viewport">
    <!-- 第一列-->
    <div class="column">
      <!--  概览-->
      <div class="overview">概览</div>
      <!-- 交易详情/注册详情-->
      <div class="monitor">交易详情</div>
      <!--  销售地分布统计-->
      <div class="point">交易详情</div>
    </div>
    <!-- 第二列-->
    <div class="column">
      <!--  设备数据统计-->
      <div class="map">设备数据统计</div>
      <!--  用户总量统计-->
      <div class="user">用户总量统计</div>
    </div>
    <!-- 第三列-->
    <div class="column">
      <!-- 订单-->
      <div class="order">订单</div>
      <!-- 销售-->
      <div class="sales">销售</div>
      <!-- 渠道与销售进度-->
      <div class="wrap">渠道与销售进度</div>
      <!-- 排行-->
      <div class="top">排行</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.viewport {
  max-width: 1920px;
  min-width: 1024px;
  //min-height: 780px;
  height: 100%;
  margin: auto;
  background: url('@/assets/images/logo.png') no-repeat;
  background-size: contain;
  color: #fff;
  display: flex;
  padding: 0.4583rem 0.1042rem 0;
  box-sizing: border-box;
}

.column {
  flex: 3;
}

.column:nth-child(2) {
  flex: 4;
}
</style>
