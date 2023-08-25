function bookPurchase(judul="Buku Motivasi Hidup",harga=0,diskon=0,pajak=0) {
    if(harga>0){
            // amount of discount
            const jumlahDiskon=(diskon*harga)/100;
            
            //price after diskon
            const fixPrice = harga - jumlahDiskon;
        
            //Amount of Tax
            const jumlahtax=(pajak*harga)/100;
        
            //price after tax
            const fixTax =  jumlahtax + fixPrice;

            console.log(`Detail pembelian buku ${judul} dengan harga awal ${harga}`);
            console.log(`ada diskon sebesar ${diskon}% dan pajak sebesar ${pajak}%`);
            console.log( `ada diskon sebesar = ${jumlahDiskon}` );
            console.log( `harga setelah diskon = ${fixPrice}` );
            console.log( `pajak = ${jumlahtax}` );
            console.log( `=====================================================` );
            console.log( `Harga nett setelah diskon dan pajak = ${fixTax}` ); 
            console.log( `=====================================================` );   
    }
    else
        return console.log(false);
  }

// const bookPurchase2=({judul="Buku Motivasi Hidup",harga=0,diskon=0,pajak=0})=>{
//     if(harga>0){
//         // amount of discount
//         const jumlahDiskon=(diskon*harga)/100;
        
//         //price after diskon
//         const fixPrice = harga - jumlahDiskon;
    
//         //Amount of Tax
//         const jumlahtax=(pajak*harga)/100;
    
//         //price after tax
//         const fixTax =  jumlahtax + fixPrice;

//         console.log(`Detail pembelian buku ${judul} dengan harga awal ${harga}`);
//         console.log(`ada diskon sebesar ${diskon}% dan pajak sebesar ${pajak}%`);
//         console.log( `ada diskon sebesar = ${jumlahDiskon}` );
//         console.log( `harga setelah diskon = ${fixPrice}` );
//         console.log( `pajak = ${jumlahtax}` );
//         console.log( `=====================================================` );
//         console.log( `Harga nett setelah diskon dan pajak = ${fixTax}` );    
//         console.log( `=====================================================` );
//     }   
//     else
//         return console.log(false);
// }
bookPurchase(judul="Naruto",harga=0,diskon=50,pajak=2.5);
// bookPurchase2(judul="sasuke",harga=120000,diskon=50,pajak=2.5);
// console.log(bookPurchase2());