//10 Method Bawaan JavaScript//

//1. toUpperCase: berfungsi untuk mengubah data yang berjenis string menjadi format huruf kapital seluruhnya//
let namaBiasa = "tHuFaIL nAuFal";
let namaKapital = namaBiasa.toUpperCase();
console.log(namaKapital);

//2. toLowerCase: berfungsi untuk mengubah data yang berjenis string menjadi format huruf kecil seluruhnya//
let namaOrang = "tHuFaIL nAuFal";
let namaLower = namaOrang.toLowerCase();
console.log(namaLower);

//3. includes: berfungsi untuk memastikan bahwa suatu nilai yang ada pada suatu variabel terdapat di dalam nilai pada variabel yang lain//
const kalimat = "Programming sangat seru";
const kata = "seru";
let cekInclude = kalimat.includes(kata);
console.log(cekInclude);

//4. replace: berfungsi untuk mengganti suatu huruf atau kata pada suatu string
let namaSaya = "THUFAIL";
let gantiKata = namaSaya.replace("A", "O");
console.log(gantiKata);

//5. toString: berfungsi mengubah tipe data number menjadi string//
let angkaBiasa = 100;
let angkaString = angkaBiasa.toString();
console.log(angkaString);

//6.toFixed: berfungsi mengubah suatu data number menjadi desimal//
let angkaPasti = 125;
let angkaDesimal = angkaPasti.toFixed(2);
console.log(angkaDesimal);

//7. push: berfungsi menambahkan index baru pada suatu array tertentu//
let arrBiasa = ["Halo", "Aku"];
arrBiasa.push("Thufail");
console.log(arrBiasa);

//8. forEach: berfungsi untuk melakukan looping pada suatu array tertentu//
arrBiasa.forEach((string, index) => {
  console.log(string, index);
});

//9. splice: berfungsi untuk mengilangkan index pada array tertentu dengan spesifik yang jelas pada index ke berapa dan jumlah pengurangan pada indexnya//
arrBiasa.splice(0, 2);
console.log(arrBiasa);

//10. split: berfungsi untuk memecah suatu string menjadi array"
let namaDia = "tHuFaIL nAuFal";
let stringToArray = namaDia.split();
console.log(stringToArray);
