const reverseWords = (sentence) => {
  if (typeof sentence == "string" && sentence.length > 0) {
    let split = sentence.split(" ").reverse().join(" ");
    if (sentence.split(" ").length > 1) {
      console.log(split);
    } else {
      console.log(sentence);
    }
  } else if (typeof sentence != "string") {
    console.log("Masukkan data berupa kalimat");
  } else {
    console.log("Data tidak boleh kosong");
  }
};
module.exports = reverseWords
