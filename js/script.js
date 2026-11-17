
document.addEventListener('DOMContentLoaded',function(){
var $=function(s){return document.querySelectorAll(s)};
var tb=document.getElementById('rafi_fauzan_ramadhan_tombol_menu'),nav=document.getElementById('rafi_fauzan_ramadhan_menu_nav');
tb.addEventListener('click',function(){nav.classList.toggle('rafi_fauzan_ramadhan_buka')});
$('#rafi_fauzan_ramadhan_menu_nav a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('rafi_fauzan_ramadhan_buka')})});

// Tab jadwal
var tabs=$('.rafi_fauzan_ramadhan_tab_bar button');
tabs.forEach(function(t){t.addEventListener('click',function(){
 tabs.forEach(function(x){x.classList.remove('rafi_fauzan_ramadhan_aktif')});
 $('.rafi_fauzan_ramadhan_panel').forEach(function(p){p.classList.remove('rafi_fauzan_ramadhan_aktif')});
 t.classList.add('rafi_fauzan_ramadhan_aktif');document.getElementById(t.dataset.target).classList.add('rafi_fauzan_ramadhan_aktif')})});

// Rulebook: filter + accordion
var fb=$('.rafi_fauzan_ramadhan_filter button'),ar=$('.rafi_fauzan_ramadhan_aturan');
fb.forEach(function(b){b.addEventListener('click',function(){
 fb.forEach(function(x){x.classList.remove('rafi_fauzan_ramadhan_aktif')});b.classList.add('rafi_fauzan_ramadhan_aktif');
 ar.forEach(function(a){a.classList.toggle('rafi_fauzan_ramadhan_sembunyi',b.dataset.game!=='semua'&&a.dataset.game!==b.dataset.game&&a.dataset.game!=='umum')})})});
$('.rafi_fauzan_ramadhan_aturan_judul').forEach(function(j){j.addEventListener('click',function(){j.parentNode.classList.toggle('rafi_fauzan_ramadhan_buka')})});

// Form pendaftaran
var f=document.getElementById('rafi_fauzan_ramadhan_form_kontak');
if(f){
 var minPemain={'Mobile Legends':5,'Valorant':5,'PUBG Mobile':4,'eFootball':1};
 var modal=document.getElementById('rafi_fauzan_ramadhan_modal');
 var tutup=function(){modal.classList.remove('rafi_fauzan_ramadhan_buka')};
 document.getElementById('rafi_fauzan_ramadhan_tutup_modal').addEventListener('click',tutup);
 modal.addEventListener('click',function(e){if(e.target===modal)tutup()});
 f.addEventListener('submit',function(e){
  e.preventDefault();var ok=true;
  var v=function(id){return document.getElementById(id).value.trim()};
  var cek=function(id,salah,pesan){document.getElementById(id+'_galat').textContent=salah(v(id))?pesan:'';if(salah(v(id)))ok=false};
  cek('rafi_fauzan_ramadhan_tim',function(s){return s.length<3},'Nama tim minimal 3 karakter.');
  cek('rafi_fauzan_ramadhan_asal',function(s){return s.length<3},'Isi asal fakultas/kampus.');
  cek('rafi_fauzan_ramadhan_game',function(s){return s===''},'Pilih cabang game.');
  cek('rafi_fauzan_ramadhan_kapten',function(s){return s.length<3},'Isi nama kapten.');
  cek('rafi_fauzan_ramadhan_pemain',function(s){
   var n=minPemain[v('rafi_fauzan_ramadhan_game')]||1;
   var baris=s.split('\n').filter(function(x){return x.trim().length>=3});
   return baris.length<n},'Isi minimal '+(minPemain[v('rafi_fauzan_ramadhan_game')]||1)+' pemain, satu baris per pemain (Nickname - ID).');
  cek('rafi_fauzan_ramadhan_email',function(s){return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)},'Format email tidak valid.');
  cek('rafi_fauzan_ramadhan_wa',function(s){return !/^(08|\+62)[0-9]{8,12}$/.test(s)},'Nomor WhatsApp tidak valid (contoh 08123456789).');
  if(!document.getElementById('rafi_fauzan_ramadhan_setuju').checked){document.getElementById('rafi_fauzan_ramadhan_setuju_galat').textContent='Anda harus menyetujui rulebook.';ok=false}
  else document.getElementById('rafi_fauzan_ramadhan_setuju_galat').textContent='';
  if(!ok)return;
  var ds=[['Nama Tim','rafi_fauzan_ramadhan_tim'],['Asal Fakultas/Kampus','rafi_fauzan_ramadhan_asal'],['Cabang Game','rafi_fauzan_ramadhan_game'],['Kapten','rafi_fauzan_ramadhan_kapten'],['Pemain (Nickname - ID)','rafi_fauzan_ramadhan_pemain'],['Email','rafi_fauzan_ramadhan_email'],['WhatsApp','rafi_fauzan_ramadhan_wa'],['Catatan','rafi_fauzan_ramadhan_catatan']];
  var html='';
  ds.forEach(function(d){var t=v(d[1])||'-';var dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=d[0];dd.textContent=t;html+=dt.outerHTML+dd.outerHTML});
  document.getElementById('rafi_fauzan_ramadhan_ringkasan').innerHTML=html;
  modal.classList.add('rafi_fauzan_ramadhan_buka');f.reset();});
}
});
