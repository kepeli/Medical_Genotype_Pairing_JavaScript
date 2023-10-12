// import * as readline from "node:readline";
const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function doctorRemark(partnerX, partnerY) {
  if (
    (partnerX == "AA" && partnerY == "AA") ||
    (partnerX == "AA" && partnerY == "AS") ||
    (partnerX == "AA" && partnerY == "AC") ||
    (partnerX == "AA" && partnerY == "SS") ||
    (partnerX == "AA" && partnerY == "SC") ||
    (partnerX == "AA" && partnerY == "CC") ||
    (partnerX == "AS" && partnerY == "AA") ||
    (partnerX == "SS" && partnerY == "AA") ||
    (partnerX == "SC" && partnerY == "AA") ||
    (partnerX == "CC" && partnerY == "AA") ||
    (partnerX == "AC" && partnerY == "AA")
  ) {
    console.log("Can Marry");
  } else if (
    (partnerX == "AS" && partnerY == "AS") ||
    (partnerX == "AS" && partnerY == "SC") ||
    (partnerX == "AS" && partnerY == "CC") ||
    (partnerX == "AS" && partnerY == "AC") ||
    (partnerX == "AS" && partnerY == "SS") ||

    (partnerX == "SS" && partnerY == "AS") ||
    (partnerX == "SS" && partnerY == "SS") ||
    (partnerX == "SS" && partnerY == "SC") ||
    (partnerX == "SS" && partnerY == "CC") ||
    (partnerX == "SS" && partnerY == "AC") ||

    (partnerX == "SC" && partnerY == "AS") ||
    (partnerX == "SC" && partnerY == "SS") ||
    (partnerX == "SC" && partnerY == "SC") ||
    (partnerX == "SC" && partnerY == "CC") ||
    (partnerX == "SC" && partnerY == "AC") ||

    (partnerX == "CC" && partnerY == "AS") ||
    (partnerX == "CC" && partnerY == "SS") ||
    (partnerX == "CC" && partnerY == "SC") ||
    (partnerX == "CC" && partnerY == "CC") ||
    (partnerX == "CC" && partnerY == "AC") ||

    (partnerX == "AC" && partnerY == "AS") ||
    (partnerX == "AC" && partnerY == "SS") ||
    (partnerX == "AC" && partnerY == "SC") ||
    (partnerX == "AC" && partnerY == "CC") ||
    (partnerX == "AC" && partnerY == "AC")
  ) {
    console.log("Not to Marry");
  } else console.log("Invalid details");
}
console.log("USE CAPLOCKS");
rl.question("Input the genotype of partner X: ", function (partnerX) {
  rl.question("Input the genotype of partner Y: ", function (partnerY) {
    const remark = doctorRemark(partnerX, partnerY);
    console.log(remark);
    rl.close();
  });
});
