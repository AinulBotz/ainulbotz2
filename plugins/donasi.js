let handler = async m => m.reply(`
            .✵.════𝔻𝕆ℕ𝔸𝕊𝕀════.✵.

╔╦══• 𝐃𝐎𝐍𝐀𝐒𝐈 •══╦╗
• 𝐃𝐚𝐧𝐚 : 𝟎𝟖𝟓𝟕𝟓𝟒𝟐𝟎𝟐𝟕𝟖𝟓
• 𝐆𝐨𝐩𝐚𝐲 : 𝟎𝟖𝟗𝟕𝟏𝟕𝟐𝟒𝟒𝟖𝟏
• 𝐏𝐮𝐥𝐬𝐚 : 𝟎𝟖𝟗𝟕𝟏𝟕𝟐𝟒𝟒𝟖𝟏
• 𝐏𝐮𝐥𝐬𝐚𝟐 : 𝟎𝟖𝟓𝟕𝟓𝟒𝟐𝟎𝟐𝟕𝟖𝟓
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler