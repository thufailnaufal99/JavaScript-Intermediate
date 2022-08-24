const FazzFood = (price, voucher, distance, tax) => {
  if (
    typeof price == "number" &&
    price > 0 &&
    typeof voucher == "string" &&
    typeof distance == "number" &&
    distance > 0 &&
    typeof tax == "boolean"
  ) {
    const voucherValidation =
      (voucher.toLocaleUpperCase() === "FAZZFOOD50" && price >= 50000) ||
      (voucher.toLocaleUpperCase() === "DITRAKTIR60" && price >= 25000);
    let promoFAZZFOOD50 = price * 0.5;
    let promoDITRAKTIR60 = price * 0.6;
    let discount;
    if (voucherValidation == true) {
      if (voucher === "FAZZFOOD50" && promoFAZZFOOD50 >= 50000) {
        discount = 50000;
      } else if (voucher === "FAZZFOOD50" && promoFAZZFOOD50 < 50000) {
        discount = promoFAZZFOOD50;
      } else if (voucher === "DITRAKTIR60" && promoDITRAKTIR60 >= 30000) {
        discount = 30000;
      } else if (voucher === "DITRAKTIR60" && promoDITRAKTIR60 < 30000) {
        discount = promoDITRAKTIR60;
      }
    } else {
      discount =
        "Voucher yang anda gunakan tidak valid atau jumlah pembelian kurang untuk meggunakan voucher tersebut";
    }
    let taxFee = price * 0.05;
    let taxCost;
    if (tax == true) {
      taxCost = taxFee;
    } else {
      taxCost = "Pembelian anda tidak dikenakan pajak";
    }
    let deliveryFee = 5000;
    let deliveryCost;
    if (distance <= 2) {
      deliveryCost = deliveryFee;
    } else {
      deliveryCost = deliveryFee + (distance - 2) * 3000;
    }
    let final;
    if (typeof discount == "number" && typeof taxCost == "number") {
      final = price - discount + deliveryCost + taxCost;
    } else if (typeof discount != "number" && typeof taxCost != "number") {
      final = price + deliveryCost;
    } else if (typeof taxCost != "number") {
      final = price + deliveryCost - discount;
    } else if (typeof discount != "number") {
      final = price + deliveryCost + taxCost;
    }
    console.log(`Harga: ${price} 
Potongan: ${discount} 
Biaya Antar: ${deliveryCost} 
Pajak: ${taxCost} 
SubTotal: ${final}`);
  } else if (
    typeof price != "number" &&
    typeof distance != "number" &&
    typeof tax != "boolean" &&
    typeof voucher != "string"
  ) {
    console.log(
      "Masukkan harga berupa angka, jarak berupa angka, voucher berupa string, serta validasi pertanggungan pajak restoran dengan tepat"
    );
  } else if (typeof price != "number") {
    console.log("Masukkan harga yang tepat berupa angka");
  } else if (price <= 0) {
    console.log("Harga tidak boleh nol");
  } else if (typeof distance != "number") {
    console.log("Masukkan jarak yang tepat berupa angka");
  } else if (distance <= 0) {
    console.log("Jarak tidak boleh nol");
  } else if (typeof tax != "boolean") {
    console.log("Masukkan valdiasi pertanggungan pajak restoran dengan tepat ");
  } else if (typeof voucher != "string") {
    console.log("Masukkan data voucher dengan benar");
  } else {
    console.log("Masukkan data yang sesuai dengan ketentuan");
  }
};

module.exports = FazzFood

