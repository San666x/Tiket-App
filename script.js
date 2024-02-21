function beliTiket(){
    alert(`Aplikasi Tiket Studio`)

    const nama = prompt('Masukkan Nama Anda!')
    const umur = parseInt(prompt('Masukkan Umur Anda!'))

    if (umur >= 13){
        const studio = prompt('Pilih Tiket Studio yang Ingin Dibeli (A/B/C)')
        if (studio == "A"){
            alert(`Detail Tiket : \nNama Pembeli : ${nama} \nStudio : A \nUmur : ${umur} \nTerimakasih Telah Membeli Tiket Pada Aplikasi Ini!`)
        }
        else if (studio == "B"){
            alert(`Detail Tiket : \nNama Pembeli : ${nama} \nStudio : B \nUmur : ${umur} \nTerimakasih Telah Membeli Tiket Pada Aplikasi Ini!`)
        }
        else if (studio == "C"){
            alert(`Detail Tiket : \nNama Pembeli : ${nama} \nStudio : C \nUmur : ${umur} \nTerimakasih Telah Membeli Tiket Pada Aplikasi Ini!`)
        }
        else {
            alert(`Pilihan Studio ${studio} Tidak Tersedia!`)
        }
    }
    else{
        alert(`Maaf Umur Anda Belum Cukup Untuk Membeli Tiket \nKetentuan Umur >= 13 \nUmur Anda : ${umur}`)
    }
}

