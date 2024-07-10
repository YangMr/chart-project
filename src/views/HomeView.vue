<script setup>
import * as echarts from 'echarts'

import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'
import { computed, onMounted, ref } from 'vue'

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

const orderTab = ref(0)
const orderList = ref([
  {
    title: '365',
    orderCount: '20,301,987',
    saleCount: 99834
  },
  {
    title: '90',
    orderCount: '301,987',
    saleCount: 9834
  },
  {
    title: '30',
    orderCount: '1,987',
    saleCount: 3834
  },
  {
    title: '24',
    orderCount: '987',
    saleCount: 834
  }
])
const handleOrderTab = (index) => {
  orderTab.value = index
}
const activeData = computed(() => {
  return orderList.value[orderTab.value]
})
setInterval(() => {
  if (orderTab.value >= 3) {
    return (orderTab.value = 0)
  }
  orderTab.value++
}, 1000)

const salesTab = ref(0)
const salesList = ref([
  {
    title: '年'
  },
  {
    title: '季'
  },
  {
    title: '月'
  },
  {
    title: '周'
  }
])
const handleSalesTab = (index) => {
  salesTab.value = index
}

// 初始化饼图
const initChartPie = () => {
  const myCharts = echarts.init(document.getElementById('pie'))

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/> {b} : {c} {d}%',
      borderWidth: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      textStyle: {
        color: '#fff'
      }
    },
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: '销售统计',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 1
        },
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 4,
          length2: 6
        },
        data: [
          {
            value: 20,
            name: '云南',

            label: {
              color: '#006cff'
            }
          },
          {
            value: 26,
            name: '北京',
            label: {
              color: '#60cda0'
            }
          },
          {
            value: 24,
            name: '山东',
            label: {
              color: '#ed8884'
            }
          },
          {
            value: 25,
            name: '河北',
            label: {
              color: '#ff9f7f'
            }
          },
          {
            value: 20,
            name: '江苏',
            label: {
              color: '#0096ff'
            }
          },
          {
            value: 25,
            name: '浙江',
            label: {
              color: '#9fe6b8'
            }
          },
          {
            value: 30,
            name: '四川',
            label: {
              color: '#32c5e9'
            }
          },
          {
            value: 42,
            name: '湖北',
            label: {
              color: '#1d9dff'
            }
          }
        ]
      }
    ]
  }

  myCharts.setOption(option)

  // 设置图表自适应
  window.addEventListener('resize', () => {
    myCharts.resize()
  })
}

// 初始化用户用电的总量柱状图
const initChartBar = () => {
  /**
   * 1. 下载echarts
   * 2. 导入echarts
   * 3. 创建渲染的画布
   * 4. 实例化echarts, 并指定渲染的画布
   * 5. 指定配置项
   * 6. 渲染配置项
   * 7. 图表自适应
   */

  const myCharts = echarts.init(document.getElementById('bar'))

  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.5)',
      textStyle: {
        color: '#fff'
      },
      borderWidth: 0
    },
    grid: {
      top: '3%',
      left: 0,
      right: '3%',
      bottom: '3%',
      containLabel: true,
      borderColor: 'rgba(0,240,255, 0.3)',
      show: true
    },
    color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#00fffb' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#0061ce' // 100% 处的颜色
        }
      ],
      global: false // 缺省为 false
    },
    xAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#4c9bfe'
        }
      },
      axisLabel: {
        fontSize: 8
      },
      type: 'category',
      data: [
        '上海',
        '⼴州',
        '北京',
        '深圳',
        '合肥',
        '',
        '......',
        '',
        '杭州',
        '厦⻔',
        '济南',
        '成都',
        '重庆'
      ]
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#4c9bfe'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0,240,255, 0.3)'
        }
      }
    },
    series: [
      {
        barWidth: '50%',
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          {
            value: 1200,
            itemStyle: {
              color: '#254065'
            },
            emphasis: {
              itemStyle: {
                color: '#00fffb'
              }
            },
            tooltip: {
              extraCssText: 'opacity : 0'
            }
          },
          {
            value: 1200,
            itemStyle: {
              color: '#254065'
            },
            emphasis: {
              itemStyle: {
                color: '#00fffb'
              }
            },
            tooltip: {
              extraCssText: 'opacity : 0'
            }
          },
          {
            value: 1200,
            itemStyle: {
              color: '#254065'
            },
            emphasis: {
              itemStyle: {
                color: '#00fffb'
              }
            },
            tooltip: {
              extraCssText: 'opacity : 0'
            }
          },
          900,
          750,
          600,
          480,
          240
        ],
        type: 'bar'
      }
    ]
  }

  myCharts.setOption(option)

  window.addEventListener('resize', () => {
    myCharts.resize()
  })
}

onMounted(() => {
  initChartPie()
  initChartBar()
})
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
            <div id="pie" class="pie"></div>
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
        <div class="geo">123</div>
      </div>
      <!--  用户总量统计-->
      <div class="user panel">
        <div class="inner">
          <h3>用户总量统计</h3>
          <div class="chart">
            <div id="bar" class="bar"></div>
            <div class="data">
              <div class="item">
                <h4>161,888</h4>
                <span>
                  <span class="iconfont icon-dot"></span>
                  用户总量
                </span>
              </div>
              <div class="item">
                <h4>248</h4>
                <span>
                  <span class="iconfont icon-dot"></span>
                  本月新增
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三列-->
    <div class="column">
      <!-- 订单-->
      <div class="order panel">
        <div class="inner">
          <div class="filter">
            <span
              v-for="(item, index) in orderList"
              :key="index"
              :class="{
                active: index === orderTab
              }"
              @click="handleOrderTab(index)"
              >{{ item.title }}{{ item.title === '24' ? '小时' : '天' }}</span
            >
          </div>
          <div class="data">
            <div class="item">
              <h4>{{ activeData.orderCount }}</h4>
              <span>
                <span class="iconfont icon-dot"></span>
                订单量
              </span>
            </div>
            <div class="item">
              <h4>{{ activeData.saleCount }}</h4>
              <span>
                <span class="iconfont icon-dot"></span>
                销售额(万元)
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 销售-->
      <div class="sales panel">
        <div class="inner">
          <div class="caption">
            <h3>销售额统计</h3>
            <span
              v-for="(item, index) in salesList"
              :key="index"
              :class="{ active: index === salesTab }"
              @click="handleSalesTab(index)"
              >{{ item.title }}</span
            >
          </div>
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
