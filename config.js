const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "VBxVGRxb#p-qcrKKysRef4piG7Tz4aRCepOjJ5f1_ItpKGQQjpbA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/357b75726739a8b9c68de.jpg",
SUDO_NB: process.env.SUDO_NB || "+94716304018",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
AUTO_VOICE: "true"
};
