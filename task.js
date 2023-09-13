function bookPurchase(judul="Buku Motivasi Hidup",harga=0,diskon=0,pajak=0,stok,beli,kredit) {
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
            let displayCredit =[];
            //kredit
            if (kredit>0) {
                
                let displayCredit =[];
                console.log(`\nAll Due dates for credit`)
                const creditMonth = total/kredit;
    
                const currentDate = new Date();
                let ambilHari = currentDate.getDay();
                let ambilBulan = currentDate.getMonth();
                let ambilTahun = currentDate.getFullYear();
                
                let temp = new Array(kredit).fill(0);
                const temp1 = temp.map((a,index) => {
                    let bulan = ambilBulan + index + 1;
                    let tahun = ambilTahun;
                    if (bulan>11) {
                        bulan%=12;
                        tahun+=1;
                    }
                    let creditDetails = {'periode':`${index+1}`,'due-date':`${ambilHari}-${bulan+1}-${tahun}`,
                                        'amount to pay':`Rp.${creditMonth}`,'sisa cicilan':`${total-(creditMonth*index)}`}
                 
                    displayCredit.push(creditDetails);
                    
                })
                console.log(displayCredit);
            }
            else{console.log("Tidak ada cicilan")}
            

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


bookPurchase(judul="Naruto",harga=12000,diskon=50,pajak=2.5,5,5,5);
