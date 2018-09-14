const axios = require('axios')

module.exports = async () => {
    const results = await axios({
        method: 'get',
        url: 'http://pv.sohu.com/cityjson?ie=utf-8',
    })

    const reg = /[\u4e00-\u9fa5]/g;
    const cname = results.data.match(reg).join("")
    console.log("\n" + cname)
    return `${cname}`
}