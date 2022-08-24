const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

function showMonth(err, months) {
  if (err) {
    return console.log(kosong);
  }
  months.map((data) => {
    console.log(data);
  });
}

getMonth(showMonth);
