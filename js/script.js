$(document).ready(function() {
    $('#sidebarToggle').click(function() {
        $('#sidebar').toggleClass('sidebar-active'); // Menampilkan atau menyembunyikan sidebar
        $('#overlay').fadeToggle(); // Tampilkan atau sembunyikan overlay
    });

    // Klik overlay untuk menutup sidebar
    $('#overlay').click(function() {
        $('#sidebar').removeClass('sidebar-active'); // Sembunyikan sidebar
        $(this).fadeOut(); // Sembunyikan overlay
    });
});


const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');