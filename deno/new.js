import { qrcode } from "https://raw.githubusercontent.com/denorg/qrcode/master/mod.ts";
const imageEno = await qrcode(Deno.args[0]);
Deno.writeTextFile("index.html", `<img src="${imageEno}"/>`);
