function showModal(){
  $('#modalGon').modal('show');
}

function keputusan(){
  var status = $('#selectStatus').val();
  var musim = $('#selectMusim').val();
  var kendaraan = $('#selectKendaraan').val();
  var ekonomi = $('#selectEkonomi').val();
  var kesehatan = $('#selectKesehatan').val();

  if(status == "" || musim == "" || kendaraan == "" || ekonomi == "" || kesehatan == ""){
    alert("Kuisioner tidak boleh ada yang kosong!");
  }else{
    if(status == "Kuning" && ekonomi == "Sangat Cukup"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat karena kondisi ekonomi Anda sangat mencukupi, walaupun jika kondisi Anda kurang sehat (tidak parah) menurut data yang telah terkumpulkan, orang - orang tetap akan berangkat dengan alasan tertentu.<br>Dan tetap jangan lupa untuk selalu menjaga protokol kesehatan karena status lokasi yang Anda tuju berwarna kuning atau Resiko Rendah.');
      $('#modalHasil').modal('show');
    }

    if(status == "Kuning" && ekonomi == "Cukup"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT ATAU TIDAK BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat atau tidak karena kondisi ekonomi Anda cukup, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang ada yang memilih berangkat dan ada juga yang memilih tidak berangkat dengan alasan tertentu.<br>Dan jika Anda memilih untuk berangkat, jangan lupa untuk selalu menjaga protokol kesehatan karena status lokasi yang Anda tuju berwarna kuning atau Resiko Rendah.');
      $('#modalHasil').modal('show');
    }

    if(status == "Kuning" && ekonomi == "Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : TIDAK DIKETAHUI');
      $('#p-kesimpulan').html('Maaf, menurut dari data yang terkumpulkan, tidak ada orang yang serupa dengan situasi kondisi Anda.<br>Mungkin Anda bisa mencoba mengganti tujuan destinasi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Kuning" && ekonomi == "Sangat Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : TIDAK DIKETAHUI');
      $('#p-kesimpulan').html('Maaf, menurut dari data yang terkumpulkan, tidak ada orang yang serupa dengan situasi kondisi Anda.<br>Mungkin Anda bisa mencoba mengganti tujuan destinasi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Oranye" && ekonomi == "Cukup"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT ATAU TIDAK BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat atau tidak karena kondisi ekonomi Anda cukup, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang ada yang memilih berangkat dan ada juga yang memilih tidak berangkat dengan alasan tertentu.<br>Dan jika Anda memilih untuk berangkat, jangan lupa untuk selalu menjaga protokol kesehatan karena status lokasi yang Anda tuju berwarna oranye atau Resiko Sedang.');
      $('#modalHasil').modal('show');
    }

    if(status == "Oranye" && ekonomi == "Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA TIDAK BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda tidak bisa berangkat karena kondisi ekonomi Kurang, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang lebih memilih untuk tidak berangkat dengan alasan tertentu.<br>Disarankan Anda lebih baik menunda keinginan berwisata melihat juga status destinasi Anda oranye atau Resiko Sedang, dan juga tetap jaga protokol kesehatan.');
      $('#modalHasil').modal('show');
    }

    if(status == "Oranye" && ekonomi == "Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA TIDAK BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda tidak bisa berangkat karena kondisi ekonomi Kurang, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang lebih memilih untuk tidak berangkat dengan alasan tertentu.<br>Disarankan Anda lebih baik menunda keinginan berwisata melihat juga status destinasi Anda oranye atau Resiko Sedang, dan juga tetap jaga protokol kesehatan.');
      $('#modalHasil').modal('show');
    }

    if(status == "Oranye" && ekonomi == "Sangat Cukup"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : TIDAK DIKETAHUI');
      $('#p-kesimpulan').html('Maaf, menurut dari data yang terkumpulkan, tidak ada orang yang serupa dengan situasi kondisi Anda.<br>Mungkin Anda bisa mencoba mengganti tujuan destinasi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Oranye" && ekonomi == "Sangat Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : TIDAK DIKETAHUI');
      $('#p-kesimpulan').html('Maaf, menurut dari data yang terkumpulkan, tidak ada orang yang serupa dengan situasi kondisi Anda.<br>Mungkin Anda bisa mencoba mengganti tujuan destinasi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Hijau" && musim == "Hujan"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA TIDAK BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda tidak bisa berangkat karena saat ini sedang musim penghujan, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang lebih memilih untuk tidak berangkat dengan alasan tertentu.<br>Disarankan Anda lebih baik menunda keinginan berwisata melihat juga musim sedang hujan, dikhawatirkan di musim hujan mengganggu wisata dan kondisi kesehatan Anda.');
      $('#modalHasil').modal('show');
    }

    if(status == "Hijau" && musim == "Panas" && ekonomi == "Cukup"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat karena saat ini sedang musim panas dan kondisi ekonomi Anda cukup, walaupun jika kondisi Anda kurang sehat, menurut data yang telah terkumpulkan, orang - orang lebih memilih untuk berangkat dengan alasan tertentu.<br>Dan jangan lupa untuk tetap menjaga protokol kesehatan dimanapun walau status destinasi Anda hijau atau Tidak Ada Kasus.');
      $('#modalHasil').modal('show');
    }

    if(status == "Hijau" && musim == "Panas" && ekonomi == "Sangat Cukup"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT ATAU TIDAK BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat atau tidak karena musim sedang panas dan kondisi ekonomi Anda sangat cukup, menurut data yang telah terkumpulkan, orang - orang ada yang memilih berangkat dan ada juga yang memilih tidak berangkat dengan alasan tertentu.<br>Dan jika Anda memilih untuk berangkat, jangan lupa untuk tetap menjaga protokol kesehatan dimanapun walau status destinasi Anda hijau atau Tidak Ada Kasus.');
      $('#modalHasil').modal('show');
    }

    if(status == "Hijau" && musim == "Panas" && ekonomi == "Sangat Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : TIDAK DIKETAHUI');
      $('#p-kesimpulan').html('Maaf, menurut dari data yang terkumpulkan, tidak ada orang yang serupa dengan situasi kondisi Anda.<br>Mungkin Anda bisa mencoba mengganti tujuan destinasi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Hijau" && musim == "Panas" && ekonomi == "Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : TIDAK DIKETAHUI');
      $('#p-kesimpulan').html('Maaf, menurut dari data yang terkumpulkan, tidak ada orang yang serupa dengan situasi kondisi Anda.<br>Mungkin Anda bisa mencoba mengganti tujuan destinasi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Merah" && musim == "Hujan"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA TIDAK BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda tidak bisa berangkat karena saat ini sedang musim penghujan dan tujuan destinasi Anda merah, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang lebih memilih untuk tidak berangkat dengan alasan tertentu.<br>Disarankan Anda lebih baik menunda keinginan berwisata melihat juga musim sedang hujan dan status destinasi Anda Merah atau Resiko Tinggi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Merah" && musim == "Panas" && ekonomi == "Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA TIDAK BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda tidak bisa berangkat karena status tujuan destinasi merah dan kondisi ekonomi Anda kurang, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang lebih memilih untuk tidak berangkat dengan alasan tertentu.<br>Disarankan Anda lebih baik menunda keinginan berwisata melihat juga status destinasi Anda Merah atau Resiko Tinggi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Merah" && musim == "Panas" && ekonomi == "Sangat Kurang"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA TIDAK BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda tidak bisa berangkat karena status tujuan destinasi merah dan kondisi ekonomi Anda sangat kurang, walaupun jika kondisi Anda sehat, menurut data yang telah terkumpulkan, orang - orang lebih memilih untuk tidak berangkat dengan alasan tertentu.<br>Disarankan Anda lebih baik menunda keinginan berwisata melihat juga status destinasi Anda Merah atau Resiko Tinggi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Merah" && musim == "Panas" && ekonomi == "Sangat Cukup"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat karena kondisi ekonomi Anda sangat cukup dan musim sedang panas. Menurut data yang telah terkumpulkan, orang - orang dengan situasi kondisi serupa lebih memilih untuk berangkat dengan alasan tertentu.<br> Akan tetapi perlu diwaspadai melihat status destinasi Anda berwarna merah atau Beresiko Tinggi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Merah" && musim == "Panas" && ekonomi == "Cukup" && kesehatan == "Kurang Sehat"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat karena kondisi ekonomi cukup dan musim sedang panas. Menurut data yang telah terkumpulkan, orang - orang dengan situasi kondisi serupa lebih memilih untuk berangkat dengan alasan tertentu walaupun kondisi kesehatannya kurang sehat.<br> Akan tetapi perlu diwaspadai melihat status destinasi Anda berwarna merah atau Beresiko Tinggi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Merah" && musim == "Panas" && ekonomi == "Cukup" && kesehatan == "Sehat" && kendaraan == "Umum"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA TIDAK BISA BERANGKAT');
      $('#p-kesimpulan').html('Anda tidak bisa berangkat dikarenakan status destinasi Anda berwarna merah dan Anda memilih memakai kendaraan Umum. Menurut data yang telah terkumpulkan, orang - orang dengan situasi kondisi serupa lebih memilih untuk tidak berangkat dengan alasan tertentu walaupun kondisi kesehatannya Sehat.<br>Disarankan Anda lebih baik menunda keinginan berwisata melihat juga status destinasi Anda Merah atau Resiko Tinggi.');
      $('#modalHasil').modal('show');
    }

    if(status == "Merah" && musim == "Panas" && ekonomi == "Cukup" && kesehatan == "Sehat" && kendaraan == "Pribadi"){
      $('#modalGon').modal('hide');
      $('#selectStatus').prop('selectedIndex',0);
      $('#selectMusim').prop('selectedIndex',0);
      $('#selectKendaraan').prop('selectedIndex',0);
      $('#selectEkonomi').prop('selectedIndex',0);
      $('#selectKesehatan').prop('selectedIndex',0);
      $('#h5-hasil').text('HASIL KEPUTUSAN : ANDA BISA BERANGKAT ATAU TIDAK BERANGKAT');
      $('#p-kesimpulan').html('Anda bisa berangkat atau tidak bisa berangkat dikarenakan situasi kondisi yang Anda pilih. Menurut data yang telah terkumpulkan, orang - orang dengan situasi kondisi serupa ada yang memilih untuk tidak berangkat dan juga ada yang memilih untuk tidak berwisata dengan alasan tertentu dengan kondisi kesehatannya yang Sehat.<br>Dan jika Anda memilih untuk berangkat, jangan lupa untuk selalu menjaga protokol kesehatan karena status lokasi yang Anda tuju berwarna merah atau Resiko Tinggi.');
      $('#modalHasil').modal('show');
    }

  }
}

function ulang(){
  var status = $('#selectStatus').val();
  var musim = $('#selectMusim').val();
  var kendaraan = $('#selectKendaraan').val();
  var ekonomi = $('#selectEkonomi').val();
  var kesehatan = $('#selectKesehatan').val();

  $('#selectStatus').prop('selectedIndex',0);
  $('#selectMusim').prop('selectedIndex',0);
  $('#selectKendaraan').prop('selectedIndex',0);
  $('#selectEkonomi').prop('selectedIndex',0);
  $('#selectKesehatan').prop('selectedIndex',0);

  $('#modalHasil').modal('hide');
  $('#modalGon').modal('show');
}
