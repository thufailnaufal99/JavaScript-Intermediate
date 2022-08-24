const nama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
function searchName(huruf, jumlah, callbackFN) {
  if (typeof huruf == "string" && typeof jumlah == "number" && jumlah > 0) {
    nama.forEach((s, i, arr) => arr[i]);
    let data = nama.filter(function (n) {
      return n.toLocaleLowerCase().includes(huruf);
    });
    data.splice(jumlah);
    if (data.length > 0) {
      callbackFN(data);
    } else {
      console.log("data tidak ditemukan");
    }
  } else {
    console.log("Masukkan nilai yang sesuai dengan parameter");
  }
}

function callback(data) {
  console.log(data);
}

searchName("okawodka", 3, callback);
searchName("an", 3, callback);
searchName("an", 5, callback);
searchName("an", 2, callback);
searchName(3, 0, callback);
