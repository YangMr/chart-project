<script setup>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'
import { computed, ref } from 'vue'

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

const monitorTab = ref(0)
const contentList = computed(() => {
  return monitorList.value[monitorTab.value].content
})
const monitorList = ref([
  {
    title: '实时交易详情',
    content: {
      head: [
        {
          title: '交易时间'
        },
        {
          title: '交易地区'
        },
        {
          title: '交易金额'
        }
      ],
      list: [
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          money: 100
        }
      ]
    }
  },
  {
    title: '实时注册详情',
    content: {
      head: [
        {
          title: '注册时间'
        },
        {
          title: '注册地区'
        },
        {
          title: '注册性别'
        }
      ],
      list: [
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        },
        {
          time: '10:00:09',
          area: '湖北省武汉市江岸区',
          sex: 0
        }
      ]
    }
  }
])
const handleTab = (index) => {
  monitorTab.value = index
}
const formatSex = (value) => {
  return value === 0 ? '女' : '男'
}
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
        <div class="inner">
          <div class="tabs">
            <span
              v-for="(item, index) in monitorList"
              :key="index"
              :class="{ active: index === monitorTab }"
              @click="handleTab(index)"
              >{{ item.title }}</span
            >
          </div>
          <div class="content">
            <div class="head">
              <span v-for="(item, index) in contentList.head" :key="index" class="col">
                {{ item.title }}
              </span>
            </div>
            <div class="marquee-view">
              <Vue3SeamlessScroll :list="contentList.list" :step="0.2" hover>
                <div v-for="(item, index) in contentList.list" :key="index" class="row">
                  <span class="col">{{ item.time }}</span>
                  <span class="col">{{ item.area }}</span>
                  <span class="col">{{ monitorTab === 0 ? item.money : formatSex(item.sex) }}</span>
                  <span class="iconfont icon-dot"></span>
                </div>
              </Vue3SeamlessScroll>
            </div>
          </div>
        </div>
      </div>
      <!--  销售地分布统计-->
      <div class="point panel">
        <div class="inner">
          <h3>销售地分布统计</h3>
          <div class="chart">
            <div class="pie">1</div>
            <div class="data">
              <div class="item">
                <h4>320,11</h4>
                <span>
                  <span class="iconfont icon-dot"></span>
                  销售总量
                </span>
              </div>
              <div class="item">
                <h4>12%</h4>
                <span>
                  <span class="iconfont icon-dot" style="color: #f60"></span>
                  同比增长
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二列-->
    <div class="column">
      <!--  设备数据统计-->
      <div class="map">
        <h3>设备数据统计</h3>
      </div>
      <!--  用户总量统计-->
      <div class="user panel">
        <div class="inner">
          <h3>用户总量统计</h3>
        </div>
      </div>
    </div>
    <!-- 第三列-->
    <div class="column">
      <!-- 订单-->
      <div class="order panel">
        <div class="inner">
          <h3>订单</h3>
        </div>
      </div>
      <!-- 销售-->
      <div class="sales panel">
        <div class="inner">
          <h3>销售</h3>
        </div>
      </div>
      <!-- 渠道与销售进度-->
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">
            <h3>1</h3>
          </div>
        </div>
        <div class="quarter panel">
          <div class="inner">
            <h3>2</h3>
          </div>
        </div>
      </div>
      <!-- 排行-->
      <div class="top panel">
        <div class="inner">
          <h3>排行</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
