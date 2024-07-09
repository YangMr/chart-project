<script setup>
import { ref } from 'vue'

const overviewList = ref([
  {
    name: '当日销量',
    count: '30万',
    color: '#006cff'
  },
  {
    name: '当日销量',
    count: '120万',
    color: '#6acca3'
  },
  {
    name: '当日销量',
    count: '359万',
    color: '#6acca3'
  },
  {
    name: '当日销量',
    count: '1,390万',
    color: '#ff5660'
  }
])
</script>

<template>
  <!-- 大盒子-->
  <div class="viewport">
    <!-- 第一列-->
    <div class="column">
      <!--  概览-->
      <div class="overview panel">
        <div class="inner">
          <ul>
            <li v-for="(item, index) in overviewList" :key="index">
              <h4>{{ item.count }}</h4>
              <span>
                <i :style="{ color: item.color }" class="iconfont icon-dot"></i>
                {{ item.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 交易详情/注册详情-->
      <div class="monitor panel">
        <div class="inner">交易详情</div>
      </div>
      <!--  销售地分布统计-->
      <div class="point panel">
        <div class="inner">销售地分布统计</div>
      </div>
    </div>
    <!-- 第二列-->
    <div class="column">
      <!--  设备数据统计-->
      <div class="map">设备数据统计</div>
      <!--  用户总量统计-->
      <div class="user panel">
        <div class="inner">用户总量统计</div>
      </div>
    </div>
    <!-- 第三列-->
    <div class="column">
      <!-- 订单-->
      <div class="order panel">
        <div class="inner">订单</div>
      </div>
      <!-- 销售-->
      <div class="sales panel">
        <div class="inner">销售</div>
      </div>
      <!-- 渠道与销售进度-->
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">1</div>
        </div>
        <div class="quarter panel">
          <div class="inner">2</div>
        </div>
      </div>
      <!-- 排行-->
      <div class="top panel">
        <div class="inner">排行</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
