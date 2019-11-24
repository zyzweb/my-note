fetch(
    'http://localhost:99',
    {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},//支持表单
        body: 'a=1&b=2'
    }
).then(res => res.json()).then(data => console.log(data))

fetch(
    'http://localhost:99?a=110',
    {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({a:1})
    }
).then(res => res.json()).then(data => console.log(data))