Page({
  data: {
    show: false,
    selectData: ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁西回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
    index: 0//选择的下拉列表下标
    ,CITY: "上海市",
    TIME: "",
    TITLE: '',
    VALUE: '',
    queryResult: '',
  },


  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },

  onLoad: function (options) {
  },

  onQuery: function () {
    const db = wx.cloud.database({
      env: 'project001-n7je1'
    })
    db.collection('laws').where({
      CITY: this.data.CITY
    }).get({
      success: res => {
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2)
        })
        console.log('数据查询成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('数据查询失败：', err)
      }
    })
  },
})
