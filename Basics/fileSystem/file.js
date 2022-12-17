const fs = require("fs");

//read
fs.readFile("./docs/text", (err, data) => {
  if (err)
    console.log(err)
  console.log(data.toString());
})

console.log("this line is written after reading the file but the file reading process takes some time cause its async so yeah here's your poem")


//write
fs.writeFile("./docs/text2", "Killer BOB", () => {
  console.log("file was written");
});

//directories
if(!fs.existsSync("./docs2")){
  fs.mkdir("./docs2", (err) => {
    if(err)
      console.log(err);
    console.log("folder created");
  });
} else {
  fs.rmdir("./docs2", (err) => {
    if(err)
      console.log(err);
    console.log("fodler deleted");
  });
}

//delete
if(fs.existsSync("./docs/deleteme")){
  fs.unlink("./docs/deleteme", (err) => {
    if(err)
      console.log(err);
    else
      console.log("file deleted");
  });
}
