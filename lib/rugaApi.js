const axios = require('axios')
const link = 'https://arugaz.herokuapp.com'


const insta = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/ig?url=${url}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const ytmp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/yta?url=${url}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ytmp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/ytv?url=${url}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalkig = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/stalk?username=${url}`)
    .then((res) => {
        const text = `user: ${res.data.Username}\nname: ${res.data.Name}\nbio: ${res.data.Biodata}\nfollower: ${res.data.Jumlah_Followers}\nfollowing: ${res.data.Jumlah_Following}\npost: ${res.data.Jumlah_Post}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalkigpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/stalk?username=${url}`)
    .then((res) => {
        resolve(`${res.data.Profile_pic}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const quote = async () => new Promise((resolve, reject) => {
    axios.get(`${link}/api/randomquotes`)
    .then((res) => {
        const text = `Author: ${res.data.author}\n\nQuote: ${res.data.quotes}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const wiki = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/wiki?q=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const daerah = async () => new Promise((resolve, reject) => {
    axios.get(`${link}/daerah`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const jadwaldaerah = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/jadwalshalat?daerah=${url}`)
    .then((res) => {
        const text = `Jadwal Sholat ${url}\n\nsubuh: ${res.data.Subuh}\ndzuhur: ${res.data.Dzuhur}\nashar: ${res.data.Ashar}\nmaghrib: ${res.data.Maghrib}\nisya: ${res.data.Isya}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const jadwalTv = async (query) => {
    const res = await got.get(`https://api.haipbis.xyz/jadwaltv/${query}`).json()
    if (res.error) return res.error
    switch(query) {
        case 'antv':
            return `\t\t[ ANTV ]\n${res.join('\n')}`
            break
        case 'gtv':
            return `\t\t[ GTV ]\n${res.join('\n')}`
            break
        case 'indosiar':
            return `\t\t[ INDOSIAR ]\n${res.join('\n')}`
            break
        case 'inewstv':
            return `\t\t[ iNewsTV ]\n${res.join('\n')}`
            break
        case 'kompastv':
            return `\t\t[ KompasTV ]\n${res.join('\n')}`
            break
        case 'mnctv':
            return `\t\t[ MNCTV ]\n${res.join('\n')}`
            break
        case 'metrotv':
            return `\t\t[ MetroTV ]\n${res.join('\n')}`
            break
        case 'nettv':
            return `\t\t[ NetTV ]\n${res.join('\n')}`
            break
        case 'rcti':
            return `\t\t[ RCTI ]\n${res.join('\n')}`
            break
        case 'sctv':
            return `\t\t[ SCTV ]\n${res.join('\n')}`
            break
        case 'rtv':
            return `\t\t[ RTV ]\n${res.join('\n')}`
            break
        case 'trans7':
            return `\t\t[ Trans7 ]\n${res.join('\n')}`
            break
        case 'transtv':
            return `\t\t[ TransTV ]\n${res.join('\n')}`
            break
        default:
            return '[ ERROR ] Channel TV salah! silahkan cek list channel dengan mengetik perintah *!listChannel*'
            break
    }
}

const cuaca = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/cuaca?q=${url}`)
    .then((res) => {
        const text = `Cuaca di: ${res.data.result.tempat}\n\ncuaca: ${res.data.result.cuaca}\nangin: ${res.data.result.anign}\ndesk: ${res.data.result.desk}\nlembab: ${res.data.result.kelembapan}\nsuhu: ${res.data.result.suhu}\nudara: ${res.data.result.udara}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const chord = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/chord?q=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const tulis = async (teks) => new Promise((resolve, reject) => {
    axios.get(`${link}/nulis?text=${teks}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

module.exports = {
    insta,
    ytmp3,
    ytmp4,
    stalkig,
    stalkigpict,
    quote,
    wiki,
    daerah,
    jadwaldaerah,
    cuaca,
    chord,
    tulis,

}
exports.jadwalTv = jadwalTv

