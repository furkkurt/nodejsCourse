const xyz = require("./people");
const { people, yearsSpentLiving } = require('./people');
console.log(people, yearsSpentLiving);
console.log(xyz.people);
console.log(xyz.yearsSpentLiving);

const os = require("os");
console.log(os.platform(), os.homedir());
