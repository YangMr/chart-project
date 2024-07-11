<script setup>
import * as echarts from 'echarts'
import china from '@/utils/china.js'

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
    title: '年',
    series: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    xAxis: [
      '2099年',
      '2199年',
      '2299年',
      '2399年',
      '2499年',
      '2599年',
      '2699年',
      '2799年',
      '2899年',
      '2999年',
      '3099年',
      '3199年'
    ]
  },
  {
    title: '季',
    series: [
      [23, 75, 12, 97],
      [43, 31, 65, 23]
    ],
    xAxis: ['1季度', '2季度', '3季度', '4季度']
  },
  {
    title: '月',
    series: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  {
    title: '周',
    series: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ],
    xAxis: ['近1周', '近2周', '近3周', '近4周', '近5周', '近6周']
  }
])
const handleSalesTab = (index) => {
  salesTab.value = index
  initChartLine()
}
const salesLineData = computed(() => {
  return salesList.value[salesTab.value]
})
let timer = null
const start = () => {
  clearInterval(timer)
  timer = setInterval(() => {
    salesTab.value++
    if (salesTab.value >= 4) {
      salesTab.value = 0
    }
    initChartLine()
  }, 2000)
}
start()

const mouseenter = () => {
  clearInterval(timer)
}

const mouseleave = () => {
  start()
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

// 初始化销售额折线图
const initChartLine = () => {
  /**
   * 1. 下载echarts
   * 2. 导入echarts
   * 3. 创建渲染的画布
   * 4. 实例化echarts, 并指定渲染的画布
   * 5. 指定配置项
   * 6. 渲染配置项
   * 7. 图表自适应
   */

  if (echarts.getInstanceByDom(document.getElementById('line'))) {
    //  已存在则调用 dispose() 方法销毁
    echarts.dispose(document.getElementById('line'))
  }

  const myCharts = echarts.init(document.getElementById('line'))

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['预期销售额', '实际销售额'],
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true,
      borderColor: '#012f4a'
    },
    color: ['#00f2f1', '#ed3f35'],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        show: false
      },
      data: salesLineData.value.xAxis
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '预期销售额',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: salesLineData.value.series[0]
      },
      {
        name: '实际销售额',
        type: 'line',
        smooth: true,
        stack: 'Total',
        data: salesLineData.value.series[1]
      }
    ]
  }

  console.log('option', option)

  myCharts.setOption(option)

  window.addEventListener('resize', () => {
    myCharts.resize()
  })
}

// 初始化雷达图
const initChartRadar = () => {
  /**
   * 1. 下载echarts
   * 2. 导入echarts
   * 3. 创建渲染的画布
   * 4. 实例化echarts, 并指定渲染的画布
   * 5. 指定配置项
   * 6. 渲染配置项
   * 7. 图表自适应
   */

  const myCharts = echarts.init(document.getElementById('radar'))
  const dataBJ = [[90, 19, 56, 11, 34]]
  const lineStyle = {
    width: 1,
    opacity: 0.5,
    normal: {
      color: '#fff'
    }
  }
  const option = {
    tooltip: {
      trigger: 'item',
      borderWidth: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      textStyle: {
        color: '#fff'
      },
      position: ['40%', '5%']
    },
    backgroundColor: 'transparent',
    radar: {
      center: ['50%', '50%'],
      radius: '50%',
      indicator: [
        { name: '淘宝', max: 90 },
        { name: '京东', max: 22 },
        { name: '苏宁', max: 75 },
        { name: '微商', max: 22 },
        { name: '其他', max: 132 }
      ],

      shape: 'circle',
      splitNumber: 4,
      axisName: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: ['rgb(255, 255, 255)'].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    series: [
      {
        name: 'Beijing',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataBJ,
        itemStyle: {
          color: '#fff'
        },
        symbol: 'circle',
        areaStyle: {
          color: 'rgba(238, 197, 102, 0.6)'
        }
      }
    ]
  }

  myCharts.setOption(option)

  window.addEventListener('resize', () => {
    myCharts.resize()
  })
}

// 初始化销售进度饼图
const initQuarterChartPie = () => {
  /**
   * 1. 下载echarts
   * 2. 导入echarts
   * 3. 创建渲染的画布
   * 4. 实例化echarts, 并指定渲染的画布
   * 5. 指定配置项
   * 6. 渲染配置项
   * 7. 图表自适应
   */
  const myCharts = echarts.init(document.getElementById('gauge'))

  const option = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['130%', '150%'],
        center: ['48%', '80%'],
        // avoidLabelOverlap: false,
        startAngle: 180,
        hoverOffset: 0,
        label: {
          show: false
        },
        data: [
          {
            value: 100,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#00c9e0' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#005fc1' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          {
            value: 100,
            itemStyle: {
              color: '#12274d'
            }
          },
          {
            value: 200,
            itemStyle: {
              color: 'transparent'
            }
          }
        ]
      }
    ]
  }

  myCharts.setOption(option)

  window.addEventListener('resize', () => {
    myCharts.resize()
  })
}

// 初始化地图
const initMap = () => {
  const myCharts = echarts.init(document.getElementById('geo'))

  let geoCoordMap = {
    北京: [116.4551, 40.2539],
    天津: [117.4219, 39.4189],
    河北: [114.4995, 38.1006],
    山西: [112.3352, 37.9413],
    内蒙古: [111.4124, 40.4901],
    辽宁: [123.1238, 42.1216],
    吉林: [125.8154, 44.2584],
    黑龙江: [127.9688, 45.368],
    上海: [121.4648, 31.2891],
    江苏: [118.8062, 31.9208],
    浙江: [119.5313, 29.8773],
    安徽: [117.29, 32.0581],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    湖北: [114.3896, 30.6628],
    湖南: [113.0823, 28.2568],
    广东: [113.5107, 23.2196],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    重庆: [107.7539, 30.1904],
    四川: [103.9526, 30.7617],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    西藏: [91.1865, 30.1465],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    青海: [101.4038, 36.8207],
    宁夏: [106.3586, 38.1775],
    新疆: [87.9236, 43.5883],
    新疆兵团: [85.42, 41.82]
  }

  let list = [
    { name: '北京', cons: 100, apct: 100 },
    { name: '天津', cons: 30, apct: 30 },
    { name: '河北', cons: 30, apct: 30 },
    { name: '山西', cons: 30, apct: 30 },
    { name: '内蒙古', cons: 30, apct: 30 },
    { name: '辽宁', cons: 30, apct: 30 },
    { name: '吉林', cons: 30, apct: 30 },
    { name: '黑龙江', cons: 30, apct: 30 },
    { name: '上海', cons: 30, apct: 30 },
    { name: '江苏', cons: 30, apct: 30 },
    { name: '浙江', cons: 30, apct: 30 },
    { name: '安徽', cons: 30, apct: 30 },
    { name: '福建', cons: 30, apct: 30 },
    { name: '江西', cons: 30, apct: 30 },
    { name: '山东', cons: 30, apct: 30 },
    { name: '河南', cons: 30, apct: 30 },
    { name: '湖北', cons: 30, apct: 30 },
    { name: '湖南', cons: 30, apct: 30 },
    { name: '广东', cons: 30, apct: 30 },
    { name: '广西', cons: 30, apct: 30 },
    { name: '海南', cons: 30, apct: 30 },
    { name: '重庆', cons: 30, apct: 30 },
    { name: '四川', cons: 30, apct: 30 },
    { name: '贵州', cons: 30, apct: 30 },
    { name: '云南', cons: 30, apct: 30 },
    { name: '西藏', cons: 30, apct: 30 },
    { name: '陕西', cons: 30, apct: 30 },
    { name: '甘肃', cons: 30, apct: 30 },
    { name: '青海', cons: 30, apct: 30 },
    { name: '宁夏', cons: 30, apct: 30 },
    { name: '新疆', cons: 30, apct: 30 },
    { name: '新疆兵团', cons: 30, apct: 30 }
  ]

  let convertData = function (data) {
    let res = []
    res = data.map(function (dataItem) {
      let res = {}
      let fromCoord = geoCoordMap[dataItem.name]
      let toCoord = geoCoordMap['北京']
      let b = fromCoord && toCoord
      if (fromCoord && toCoord) {
        return {
          fromName: dataItem.name,
          toName: '北京',
          coords: [fromCoord, toCoord]
        }
      }
      return res
    })
    return res
  }

  let color = ['#5E7AA9', '#1e90ff', '#46bee9']
  let series = []
  let key = ['cons', 'acpt']
  let keyname = ['建设项目', '验收项目']
  for (let i = 0; i < key.length; i++) {
    series.push(
      {
        name: keyname[i],
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 6,
          constantSpeed: 100,
          trailLength: 0.4,
          color: '#F9FAFD',
          symbolSize: 5
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(list)
      },
      {
        name: keyname[i],
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: 'image://',
          symbolSize: 15
        },
        label: {
          emphasis: {
            show: true
          }
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 2,
            opacity: 0.8,
            curveness: 0.2
          },
          emphasis: {
            color: color[i],
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10,
            width: 6
          }
        },
        data: convertData(list)
      },
      {
        name: keyname[i],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          period: 5,
          scale: 8,
          brushType: 'stroke'
        },
        symbolSize: function (val) {
          if ([val[0], val[1]].toString() == geoCoordMap['北京'].toString()) {
            return 13
          }
          return 5
        },
        itemStyle: {
          normal: {
            color: color[i]
          }
        },
        data: list.map(function (dataItem) {
          return {
            name: dataItem.name,
            value: geoCoordMap[dataItem.name].concat([dataItem[key[i]]])
          }
        })
      },
      {
        name: keyname[i],
        type: 'map',
        mapType: 'china',
        zlevel: 0,
        roam: false,
        zoom: 1.2,
        selectedMode: 'single',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#F0F2F5',
            borderColor: 'red'
          },
          emphasis: {
            areaColor: '#F79092'
          }
        },
        data: list.map(function (dataItem) {
          return {
            name: dataItem.name,
            value: dataItem[key[i]]
          }
        })
      }
    )
  }

  console.log(series)
  let option = {
    title: {
      text: '模拟迁徙',
      subtext: '数据纯属虚构',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        let res = params.seriesName + '<br/>'
        if (params.seriesType == 'lines') {
          res += params.data.fromName + ' > ' + params.data.toName
          let myseries = option.series
          for (let i = 0; i < myseries.length; i++) {
            if (myseries[i].name == params.seriesName && myseries[i].type == 'effectScatter') {
              for (let j = 0; j < myseries[i].data.length; j++) {
                if (myseries[i].data[j].name == params.data.fromName) {
                  res += '：' + myseries[i].data[j].value[2] + '个'
                }
              }
            }
          }
        } else if (params.seriesType == 'effectScatter') {
          res += params.data.name + '：' + params.data.value[2] + '个'
        } else if (params.seriesType == 'map') {
          res += params.data.name + '：' + params.data.value + '个'
        }
        //console.log(params);
        return res
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['建设项目', '验收项目'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'single'
    },
    geo: {
      map: china,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: false,
      zoom: 1.2,
      itemStyle: {
        normal: {
          areaColor: '#F0F2F5',
          borderColor: 'red'
        },
        emphasis: {
          areaColor: '#F79092'
        }
      }
    },
    series: series
  }

  myCharts.on('mapselectchanged', function (params) {
    let provinceName = ''
    let selectedMap = params.selected
    for (let key in selectedMap) {
      if (selectedMap[key]) {
        provinceName = key
      }
    }
    console.log('选择的省份是：' + provinceName)
    console.log(params)
  })

  let a = 0
  setInterval(function () {
    let i = a % 2
    let aa = ['建设项目', '验收项目']
    myCharts.dispatchAction({ type: 'legendSelect', name: aa[i] })
    a++
  }, 2100)
}
onMounted(() => {
  initChartPie()
  initChartBar()
  initChartLine()
  initChartRadar()
  initQuarterChartPie()
  initMap()
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
        <div id="geo" class="geo"></div>
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
      <div class="sales panel" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div class="inner">
          <div class="caption">
            <h3>销售额统计</h3>
            <span
              v-for="(item, index) in salesList"
              :key="index"
              :class="{ active: index === salesTab }"
              @click.stop="handleSalesTab(index)"
              >{{ item.title }}</span
            >
          </div>
          <div class="chart">
            <div class="label">单位:万</div>
            <div id="line" class="line">123</div>
          </div>
        </div>
      </div>
      <!-- 渠道与销售进度-->
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">
            <h3>渠道分布</h3>
            <div class="data">
              <div id="radar" class="radar"></div>
            </div>
          </div>
        </div>
        <div class="quarter panel">
          <div class="inner">
            <h3>一季度销售进度</h3>
            <div class="chart">
              <div id="gauge" class="gauge"></div>
              <div class="label">50 <small>%</small></div>
            </div>
            <div class="data">
              <div class="item">
                <h4>1,321</h4>
                <span>
                  <i class="iconfont icon-dot"></i>
                  销售额(万元)
                </span>
              </div>
              <div class="item">
                <h4>1,321</h4>
                <span>
                  <i class="iconfont icon-dot"></i>
                  销售额(万元)
                </span>
              </div>
            </div>
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
