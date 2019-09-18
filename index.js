const fs = require("fs");
const path = require("path");

class ReadCsv {
  constructor(filePath) {
    this.filePath = filePath;
  }
  getDiagonal() {
    try {
      const result = [];
      const data = fs.readFileSync(this.filePath, 'utf8');
      const dataArray = data
        .replace(/^\s$/g, "")
        .split("\n")
        .map(row => row.split(","));
      dataArray.forEach((item, index) => {
        result.push(item[index]);
      });
      return result.join(' ');
    } catch (error) {
      return error.message;
    }
  }
}

const read = new ReadCsv('768hhT.csv');
console.log(read.getDiagonal());
