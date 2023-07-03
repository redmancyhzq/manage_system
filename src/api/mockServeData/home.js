// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          食品: Mock.Random.float(100, 8000, 0, 0),
          女装: Mock.Random.float(100, 4000, 0, 0),
          饰品: Mock.Random.float(100, 6000, 0, 0),
          水果: Mock.Random.float(100, 7000, 0, 0),
          鞋包: Mock.Random.float(100, 2000, 0, 0),
          百货: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '食品',
            value: 2999
          },
          {
            name: '女装',
            value: 5999
          },
          {
            name: '饰品',
            value: 1500
          },
          {
            name: '水果',
            value: 1999
          },
          {
            name: '鞋包',
            value: 2200
          },
          {
            name: '百货',
            value: 4500
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List
        },
        tableData: [
          {
            name: '食品',
            todayBuy: 678,
            monthBuy: 3523,
            totalBuy: 23650
          },
          {
            name: '女装',
            todayBuy: 877,
            monthBuy: 2456,
            totalBuy: 65400
          },
          {
            name: '饰品',
            todayBuy: 213,
            monthBuy: 2417,
            totalBuy: 31200
          },
          {
            name: '水果',
            todayBuy: 1200,
            monthBuy: 4560,
            totalBuy: 52400
          },
          {
            name: '鞋包',
            todayBuy: 348,
            monthBuy: 2147,
            totalBuy: 3456
          },
          {
            name: '百货',
            todayBuy: 351,
            monthBuy: 3420,
            totalBuy: 2457
          }
        ]
      }
    }
  }
}