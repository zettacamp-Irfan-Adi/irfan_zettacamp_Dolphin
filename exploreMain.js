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

            //kredit
            // let bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','Oktober','November','Desember'];
            const zzz = new Date();
            let ambilHari = zzz.getDay();
            let ambilBulan = zzz.getMonth();
            let ambilTahun = zzz.getFullYear();
            
            let temp = new Array(kredit).fill(0);
            // temp.forEach((bulan1,index) => {
            //     const dates = new Date(zzz.getFullYear(),zzz.getMonth()+index,zzz.getDate()+30);
            //     console.log(dates);
            // });
            const temp1 = temp.map((a,index) => {
                let bulan = ambilBulan + index + 1;
                let tahun = ambilTahun;
                
                // console.log(`${bulan} ${tahun}`);
                if (bulan>11) {
                    bulan%=12;
                    tahun+=1;
                }
                console.log(`credit due ${ambilHari}-${bulan+1}-${tahun}`);
                
            })

    }
    else
        return console.log(false);
  }

  

bookPurchase(judul="Naruto",harga=5000,diskon=50,pajak=2.5,5,8,18);


function containDuplicate(nums) {
const duplicates = nums.filter((element, index) => nums.indexOf(element) !== index);
    if (duplicates.length==0) {
        return false;
    }
    else{
        return true;
    }
}
console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([1, 2, 3, 4])); // Output: false
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

