const fs = require("fs");

const readStream = fs.createReadStream("./pilot", { encoding: "utf-8" }); //encode so you don't nedd .toString()
const writeStream = fs.createWriteStream("./pilotCopy");

/*
var chunkNumber = 0;
readStream.on("data", (chunk) => { //This is an event listener, listening for a data event
  console.log("CHUNK " + chunkNumber);
  chunkNumber++;
  console.log(chunk); 
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
*/

//This code above works as a pipei using a pipe will be shorter;
readStream.pipe(writeStream);
