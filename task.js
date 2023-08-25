function bookPurchase(judul="Buku Motivasi Hidup",harga=0,diskon=0,pajak=0,stok,beli) {
    if(harga>0){
            //stok
            let containStok = stok;  
            let total=null;
            let totalBuku=null;
            // amount of discount
            const jumlahDiskon=(diskon*harga)/100;
            
            //price after diskon
            const fixPrice = harga - jumlahDiskon;
            
            //Amount of Tax
            const jumlahtax=(pajak*harga)/100;
            
            //price after tax
            const fixTax =  jumlahtax + fixPrice;
           
            if(stok>0 && beli>0){
                for (let i = 1; i <= beli; i++) { 
                    if(i>containStok){
                        console.log(`no stock bro`)
                        break;
                    }
                    total = i * fixTax ;
                    let updated=containStok - i;
                    console.log(`Buying ${i} copies of ${judul}. Total amount: ${total} sisa buku ${updated}`);
                    totalBuku = i;
                }
            }    
            else{
                console.log(`no book in stock`);
            }
            console.log(`\ntotal pembelian ${totalBuku} Buku ${judul} = ${total}`)
            console.log(`\nDetail pembelian buku ${judul} dengan harga awal ${harga}`);
            console.log(`ada diskon sebesar ${diskon}% dan pajak sebesar ${pajak}%`);
            console.log( `ada diskon sebesar = ${jumlahDiskon}` );
            console.log( `harga setelah diskon = ${fixPrice}` );
            console.log( `pajak = ${jumlahtax}` );
    }
    else
        return console.log(false);
  }

bookPurchase(judul="Naruto",harga=5000,diskon=50,pajak=2.5,5,5);

