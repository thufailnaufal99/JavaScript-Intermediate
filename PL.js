const cekPalindrom = (word) => {
  if (
    typeof word == "string" &&
    word.length > 3 &&
    word.split(" ").length == 1
  ) {
    let reverseWord = [...word].reverse().join("");
    let wordValidation =
      reverseWord.toLocaleLowerCase() === word.toLocaleLowerCase();
    if (wordValidation == true) {
      console.log("Kata tersebut palindrom");
    } else {
      console.log("Kata tersebut bukan palindrom");
    }
  } else if (typeof word != "string") {
    console.log("Masukkan data berupa kata");
  } else if (word.length < 3) {
    console.log("Masukkan kata dengan jumlah huruf minimal 3");
  } else if (word.split(" ").length > 1) {
    console.log("Masukkan hanya 1 kata saja jangan lebih");
  } else {
    console.log(
      "Data yang anda masukkan harus berupa 1 kata saja dengan minimal 3 huruf"
    );
  }
};

module.exports = cekPalindrom


