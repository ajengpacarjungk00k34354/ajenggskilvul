


//   menghapus
let tubuh = {
    bugar: true,
    sehat: true,
    roda: 2
};

delete tubuh.roda;

// object method
let kucing = {
    lucu: true,
    kaki: 4,
    suara: function () {
        return 'Meong';
    }
};

console.log(kucing.suara());

// mendeklarasi array
let hewan = ['kucing', 'anjing', 'singa', 'harimau'];

// mengubah data
let warna = ['hitam', 'merah', 'ungu', 'kuning'];
warna[3] = 'biru'

// method object 
let bilangan = 0;

let pow = Math.pow(bilangan, 2, 3);
let sqrt = Math.sqrt(16);
let max = Math.max(5, 9, 3, 7);

// if else
function ganjilGenap(platNomor) {
    // Tulis kode kalian di dalam fungsi ini
    if (platNomor % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// for loop
let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0) {
        genap.push(angka[i]);
    }
}

// for/of loop

