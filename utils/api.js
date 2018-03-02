var apis = {
  baseUrl: "http://huanqiuxiaozhen.com/wemall",
  sliderList: "/slider/list",
  venuesList: "/venues/venuesList",
  choiceList: "/goods/choiceList",
  inqgoods: "/goods/inqgoods",
  typebrandList: "/goodstype/typebrandList"
}

var url = api => apis.baseUrl + api

module.exports = {

  GET(data, api) {

    return new Promise((resolve, reject) => {
      console.log("url----->")
      console.log(url(api))
      wx.request({
        url: url(api),
        data: data,
        header: {
          'Accept': 'application/json'
        },
        success: res => resolve(res),
        fail: error => reject(error)
      })
    }).then(res => {
      console.log("sucess")
      console.log(res)
      return res.data
    }).catch(error => {
      console.log(error)
      return error
    })
  },
  apis
  // GET:data=>{

  // }
}