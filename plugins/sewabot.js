let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/20b24c609e796b243d7b7.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6285828357727@s.whatsapp.net'
      let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/20b24c609e796b243d7b7.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/20b24c609e796b243d7b7.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `*•LIST HARGA AINUL - BOTZ•*

*SEWA BOT*
 1minggu= 5.000
 2Minggu= 10.000
 3Minggu= 15.000
 4Minnggu= 20.000
Permanent? Buat Sendiri Aja Botnya

*BUAT BOT*
1minggu= 5.000
2minggu= 10.000
3minggu= 15.000
4Minggu= 20.000

*UPGRADE TO PREMIUM*
1Minggu= 2.000
2Minggu= 4.000
3Minggu= 6.000
4Minggu= 8.000
Permanent= 10.000

*PEMBAYARAN*
Dana : 085754202785
Gopay : 08971724481
Ovo : 085754202785
*MAAF GA NERIMA VIA PULSA!*

jika sudah bayar langsung konfirmasi ke owner dibawah (sertakan screenshot)
☞𝑜𝑤𝑛𝑒𝑟 wa.me/${owner[0]}

*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6285754202785@s.whatsapp.net`
  },
  footerText: 'https://instagram.com/ainul_181',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
