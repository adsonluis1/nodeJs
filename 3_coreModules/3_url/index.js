const url = require('url')
const adress = 'https://www.adsinbikes.com.br/serch?produtos=aro29'
const a = new url.URL(adress)
console.log(1+a.hostname)
console.log(2+a.pathname)
console.log(3+a.search)
console.log(4+a.searchParams)
console.log(5+a.searchParams.get('produtos'))
console.log(6+a.origin)
console.log(7+a.hash)
console.log(8+a.href)
console.log(9+a.protocol)


