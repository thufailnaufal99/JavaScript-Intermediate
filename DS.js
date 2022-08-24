const divideAndSort = (seriesOfNumbers) => {
  if (
    typeof seriesOfNumbers == "number" &&
    seriesOfNumbers.toString().length > 0
  ) {
    let splitNumber = seriesOfNumbers.toString().split(0);
    let result = "";
    splitNumber.forEach((element) => {
      let loopNumber = [...`${element}`].map(Number).sort();
      result += loopNumber;
    });
    let final = result.replace(/,/g, "") * 1;
    console.log(final);
  } else {
    console.log("Masukkan data hanya berupa angka saja");
  }
};

module.exports = divideAndSort

