const fs = require("fs");
const readStream = fs.createReadStream("./docs.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./docs2.txt");

// readStream.on('data', (data) => {
//     console.log("-------new chuck of data-------");
//     console.log(data);
//     writeStream.write("\n new chunk\n");
//     writeStream.write(data);
// });

//piping

readStream.pipe(writeStream);
