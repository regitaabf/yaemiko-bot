//ubah nomor owner dan wm di sini 

const fs = require('fs')
const chalk = require('chalk')
global.owner = ['6285697285563']
global.ownernomer = "62856972855632"
global.premium = ['6285697285563']
global.packname = 'Ƴąҽ Ɱíƙօ Ɓօƭ'
global.author = 'Instagram: @rwcode.js'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['!','.','#','/']
global.sp = ''
global.mess = {
    success: 'Success...',
    admin: 'Fitur ini khusus admin group!',
    botAdmin: 'Jadikan bot sebagai admin terlebih dahulu!',
    premime: 'Fitur ini khusus member premium!',
    owner: 'Fitur ini khusus owner!',
    group: 'Fitur ini hanya bisa digunakan di group!',
    private: 'Fitur ini hanya bisa digunakan di private message!',
    bot: 'Fitur ini khusus pengguna bot!',
    wait: 'Wait a minute, data is being processed.',
    error: 'Maaf Terjadi Kesalahan',
    errapi: 'Maaf Terjadi Kesalahan',
    errmor: 'Maaf Terjadi Kesalahan',
    endLimit: 'Limit harian anda telah habis, limit akan direset setiap 12 jam!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/image/tio.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/gwxyz'
global.webmy = 'https://gwxyz.github.io'
global.ghme = 'https://github.com/gwxyz'
global.botname = 'Ƴąҽ Ɱíƙօ Ɓօƭ'
global.omlen = 'Ƴąҽ Ɱíƙօ Ɓօƭ'
global.weem = 'Ƴąҽ Ɱíƙօ Ɓօƭ'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
