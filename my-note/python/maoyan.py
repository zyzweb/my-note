import requests

# 函数
def getOnePage(page): 
    url = f'http://maoyan.com/board/4?offset={page*10}'
    header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36'}
    r = requests.get(url,headers=header)
    print(r.text)

getOnePage(2)