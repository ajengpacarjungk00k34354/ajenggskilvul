// default parameter
function warnaKesukaan(warna = "putih") {
    return "Warna kesukaan saya adalah " + warna;
}

let hasil = warnaKesukaan();

console.log(hasil);

hasil = warnaKesukaan("biru");

console.log(hasil);