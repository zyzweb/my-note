// https://api.github.com/repos/octokit/octokit.rb


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
// ).then(res => res.json()).then(data => console.log(data)

//豆瓣250
fetch('https://douban.uieee.com/v2/movie/top250').then(res=>res.json()).then(data=>console.log(data))

//axios拦截响应(先写拦截器,再发请求)
axios.interceptors.request.use(config => {console.log(config)})
axios.interceptors.response.use(
    response => {
      if(response.data) {
        return {name:'zs',data:{age:12}}
      }
    }
  )
axios.get("https://douban.uieee.com/v2/movie/top250").then(res => console.log(res.data))  //{age: 12}


//axios get post请求
axios.post('http://127.0.0.1:8080/test/delUse',{key:value}).then(res => {})

axios.get('http://127.0.0.1:8080/test/delUser?userId='+id).then(res => {})

axios.get('http://127.0.0.1:8080/test/delUser',{ params:{ id:1 } }).then(res => {})

axios({url:'http://127.0.0.1:8080/test/delUser', method:'post', data:{}})
axios({url:'http://127.0.0.1:8080/test/delUser', method:'get', params:{key:value}})