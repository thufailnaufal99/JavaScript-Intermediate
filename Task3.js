//1. Program pengecekan nama karyawan//
const cekNamaKaryawan = (nama) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const NamaKaryawan = ["Anton", "Budi", "Cantika", "Dodit", "Emon"];
      let cariNama = NamaKaryawan.find((data) => {
        return data === nama;
      });
      if (cariNama) {
        resolve(cariNama);
      } else {
        reject(
          new Error(
            "Nama yang anda masukkan bukan karyawan yang bekerja di PT. Adi Sejahtera"
          )
        );
      }
    }, 2000);
  });
};

async function cekNamaKaryawanNew(nama) {
  if (typeof nama == "string" && nama.length > 0) {
    try {
      let newNama = await cekNamaKaryawan(nama);
      console.log(
        `Nama yang anda masukkan adalah betul karyawan yang bekerja di sini yaitu ${newNama}`
      );
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("masukkan data yang sesuai yaitu berupa nama");
  }
}
cekNamaKaryawanNew("Anton")
cekNamaKaryawanNew(123)

// 2. Program untuk mengecek kedatangan karyawan//
const cekJamDatang = (jam) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tepatWaktu = [5, 6, 7];
      let validasiWaktu = tepatWaktu.find((waktu) => {
        return waktu === jam;
      });
      if (validasiWaktu) {
        resolve(validasiWaktu);
      } else {
        reject(new Error("Anda datang terlambat"));
      }
    }, 4000);
  });
};

async function cekJamKedatanganNew(jam) {
  if (typeof jam == "number" && jam <= 24 && jam > 0) {
    try {
      let newJam = await cekJamDatang(jam);
      console.log(
        `Anda datang sebelum batas waktu kedatangan, semangat dan pertahankan`
      );
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(
      "masukkan jam kedatangan yang benar yaitu dari pukul 1-24 dan hanya masukkan jamnya saja"
    );
  }
}
cekJamKedatanganNew(7);
