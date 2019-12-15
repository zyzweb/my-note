// fetch(
//     'http://localhost:99',
//     {
//         method: 'POST',
//         headers: {'content-type': 'application/x-www-form-urlencoded'},//支持表单
//         body: 'a=1&b=2'
//     }
// ).then(res => res.json()).then(data => console.log(data))

// fetch(
//     'http://localhost:99?a=110',
//     {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify({a:1})
//     }
// ).then(res => res.json()).then(data => console.log(data))

//豆瓣250
fetch('https://douban.uieee.com/v2/movie/top250').then(res=>res.json()).then(data=>console.log(data))

//axios拦截响应(先写拦截器,再发请求)
axios.interceptors.response.use(
    response => {
      if(response.data) {
        return {name:'zs',data:{age:12}}
      }
    }
  )
  axios.get("https://douban.uieee.com/v2/movie/top250").then(res => console.log(res.data))  //{age: 12}
