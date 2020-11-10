const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))


/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
    Ini adalah lokub self bot
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/lokubplace

Best regards, Lokub
Big Thanks to ArugaZ for making this`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Creator ]_
.[>] *${prefix}sticker*
.[>] *${prefix}stickergif*
.[>] *${prefix}stickergiphy*
.[>] *${prefix}meme*
.[>] *${prefix}quotemaker*
.[>] *${prefix}nulis*
.[>] *${prefix}nulis2*
*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Islamic ]_
.[>] *${prefix}infosurah*
.[>] *${prefix}surah*
.[>] *${prefix}tafsir*
.[>] *${prefix}ALaudio*
.[>] *${prefix}jsolat*
*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Download ]_
.[>] *${prefix}joox*
.[>] *${prefix}ytmp3*
.[>] *${prefix}play*
*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Find Any ]_
.[>] *${prefix}search*
.[>] *${prefix}sreddit*
.[>] *${prefix}resep*
.[>] *${prefix}nekopoi*
.[>] *${prefix}stalkig*
.[>] *${prefix}wiki*
.[>] *${prefix}cuaca*
.[>] *${prefix}chord*
*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Random Text ]_
.[>] *${prefix}fakta*
.[>] *${prefix}pantun*
.[>] *${prefix}katabijak*
.[>] *${prefix}quote*
*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Random Images ]
.[>] *${prefix}anime*
.[>] *${prefix}kpop*
.[>] *${prefix}memes*
.[>] *${prefix}wallhp*
.[>] *${prefix}walldekstop*
*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Others ]_
.[>] *${prefix}tts*
.[>] *${prefix}qrcode*
.[>] *${prefix}translate*
.[>] *${prefix}resi*
.[>] *${prefix}ceklokasi*
.[>] *${prefix}shortlink*
*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
_[ Bot Info ]_
.[>] *${prefix}tnc*
.[>] *${prefix}donasi*
.[>] *${prefix}ownerbot*

*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*
https://instagram.com/lokubplace
Hope you have a great day!✨`
}
exports.textMusic = (pushname) => {
	return`
Hi, ${pushname} 👋️

[ _Lokub_ Menu ]

[>] _*/play*_
> _Playing music from youtube_
ex : /play hymn for the weekend

[>]	_*/joox*_
> _Playing and Download song from Joox_
ex : /joox high hopes

[>] _*/chord*_
> _Find song shord_
ex : /chord love story

[>] _*/ytmp3*_
> _Download song from youtube_
ex : /ytmp3 https://youtu.be/knTlbp4kK4uPcH

[>] _*/ytlink*_
> _Quickly find youtube link_
ex : /ytlink ceelo green

[>] _*/mylink*_
> _Making your own link_
ex : /mylink https://instagram.com/lokubplace

_// Others Menu //_

[>] _*/write*_
_Change text into a handwriting_
ex : /write I love you

[>] _*/write2*_
_Same, but in a different font & book_
ex : /write2 They love you

[>] _*/wikipedia*_
_Searching info from wikipedia site_
ex : /wikipedia jason statham 

[>] _*/search*_
_Searching pictures that you looking for_
ex : /search doraemon

_Actually, this is a simple menu. Go find the other menu's in */menu*_

_Owner whatsapp number wa.me/6281282810290_
_Follow my instagram https://instagram.com/lokubplace_
`
}

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*
`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
