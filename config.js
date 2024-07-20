//#ENJOY
/**

▄▀▄ █░█ ▄▀▄ █░█ █▀▄
█▀█ ▀▄▀ █░█ █░█ █▀█
▀░▀ ░▀░ ░▀░ ▀▀▀ ▀▀░
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "
 aayoubayoub2741@gmail.com";
global.location = "Casablanca,Morroco.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Casablanca";
global.github = process.env.GITHUB || "sir";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Kj0QvCzZQ6mBflhckX64ak";
global.website = process.env.GURL || "https://chat.whatsapp.com/Kj0QvCzZQ6mBflhckX64ak";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/607304d2b6aff9a98c3d5.png";
global.devs = "212671648947";
global.sudo = process.env.SUDO || "212671648947";
global.owner = process.env.OWNER_NUMBER || "212671648947";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxqd2E0OXhZZWo2YnFKZHFadzFJdFZieXNITEcyWU40NTZteS9CTTQxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWE1oaGlQWmRiR0Q4Zk13amo3SWo4MGhaNHVTc3FoRUpncitwZnd6ZUJ6UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRCtRK2hVdDZEZDZ3VlNhVlBHV1AzdmNkV1krVkgzMGkvOUNzSHphSzE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyenhKVkdSYit6c2MzWGRkbysxellVQThRaVE5VDJEcVp1b0diMlpxbmprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNY3RZSERQWUFpbGFpaUVMODIwY2tONU5OY0VURHVFWFRLeUhzS29OMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVSL0p4ekg3SmlQYnFPWmlFZE8rUmw5eUJRQUJmei9COHVKYjM2WWZIems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUwzd3ZGUFRObkI5eGNEQm1ha3lzc1JhbE9iYnNmT2VMbTZDNkpicGgxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVN3cDRVZCtxY3p4TExhM3NKemM1dE5TR2RCTThsS0NVcW8yUWZaSTdHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEwbTZGc2VObUV5czJjWlp5by95cG9BVTRuWFgvVUdHaGo4dHhpYUczWjg4Tkxvdzg4NW5ldW40SGUrRzYreFdGY3lFRm0yMndwaVNEZFFWRERPVmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6Imh6NVhaZCtacVFaYWtlcnhrWGIxS1Y4anMzWnRZYi9RQ1R0bHdqQmlNMTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzE5MDcwODAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkExNjc4RkUwOTIxMEMxRUY3NjUxRjMyOEUzRTZFQkVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE1MDg5ODZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNqMFVQYnZDU2lxdlA1Z0RPV0duY3ciLCJwaG9uZUlkIjoiOTc1OGZkMWMtNDZhNS00ZDQ1LTg1MzUtZThmYTFlMDRiZDRlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhNMS9WdHh5cFNQT0c4MGFuVmRWUUtQeVF2ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4STIzVUNkcWc5WThrNFZVTCtnNkV0TGVhQkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFc0RktLRlYiLCJtZSI6eyJpZCI6IjIxMjcxOTA3MDgwMDo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkF5b3ViIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNN3oxSmtCRU9qSThMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTcGZUVmhZUlg3amszRUVFUG1qSm9ZVmlLVm9NNWYwOG9YcU56NWs4TmhjPSIsImFjY291bnRTaWduYXR1cmUiOiJJczZpMis0YTAwcUdzZCttRmpuMDVyWFhrbTlNbHpTclRyNDJ0NU55T1RML0dSY0YwNTVldUhWYmJjTXdEaFU3b1ZkSXIyZFVyMjlYMUF0dkRBczBCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRW0rdkx4dm5Zd1pxVS95TnRXSHYyRWY1cWswWTlXQytMRC9vVEpyTW8wN20wUjVnNVhyZ05vYjhuTDVNTEp1Z0lyNk5VaEZOaEtmY3I1bTJlWlBnZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTI3MTkwNzA4MDA6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcVgwMVlXRVYrNDVOeEJCRDVveWFHRllpbGFET1g5UEtGNmpjK1pQRFlYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNTA4OTgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVINCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐀𝐲𝐨𝐮𝐛-𝐌𝐃-𝐕𝐛𝐞𝐭𝐚😍",
  author: process.env.PACK_AUTHER || "ayoub x5",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐀𝐲𝐨𝐮𝐛-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Ayoub",
  errorChat: process.env.ERROR_CHAT || "212671648947",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
