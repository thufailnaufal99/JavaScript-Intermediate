const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

//Pada proses asynchronus yang memakan waktu selama 3 detik ini, then berfungsi untuk menangkap data yang
//diberikan dari promise cekHariKerja sedangkan catch berfungsi untuk menangkap error yang tejadi apabila
//parameter yang diinput pada fungsi tidak memenuhi kondisi yang ada pada kondisi logikanya.
cekHariKerja("kamis")
  .then((harikerja) => {
    console.log(`ini hari kerja yaitu hari ${harikerja}`);
  })
  .catch((error) => {
    console.log(error);
  });

//Pada proses asynchronus yang memakan waktu selama 3 detik ini, penggunaan asyn await berfungsi untuk menghindari
//promise hell dengan menggunakan asyn/await. Pada kasus ini try berfungsi untuk menangkap data yang
//diberikan dari promise cekHariKerja dengan sedangkan catch berfungsi untuk menangkap error yang tejadi apabila
//parameter yang diinput pada fungsi tidak memenuhi kondisi yang ada pada kondisi logikanya.
async function cekHariKerjaNew(day) {
  try {
    let newDay = await cekHariKerja(day);
    console.log(`ini hari kerja yaitu hari ${newDay}`);
  } catch (error) {
    console.log(error);
  }
}
cekHariKerjaNew("jumat");
cekHariKerjaNew("minggu");
