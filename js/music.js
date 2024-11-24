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

// Toggle sidebar visibility
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');


$(document).ready(function() {
    // Array untuk menyimpan semua elemen audio
    const tracks = document.querySelectorAll('.audio-card audio');
    let currentTrackIndex = 0; // Indeks track yang sedang dimainkan

    // Fungsi untuk memutar track berdasarkan indeks
    function playTrack(index) {
        tracks[currentTrackIndex].pause();
        tracks[currentTrackIndex].currentTime = 0;
        currentTrackIndex = index;
        tracks[currentTrackIndex].play();
        updatePlayButtonIcon(index, 'pause');
    }

    // Fungsi untuk update ikon play/pause
    function updatePlayButtonIcon(index, state) {
        const playButtons = document.querySelectorAll('.controls img[alt="Play"]');
        playButtons.forEach((btn, i) => {
            btn.src = (state === 'pause' && i === index) ? 'images/noun-stop-1939970.png' : 'images/noun-play-1940008.png';
        });
    }

    // Event listener untuk tombol play di setiap card
    $(document).on('click', '.playTrack', function() {
        const index = $(this).data('index');
        if (!tracks[index].paused) {
            tracks[index].pause();
            updatePlayButtonIcon(index, 'play');
        } else {
            playTrack(index);
        }
    });

    // Event listener untuk tombol previous track
    $(document).on('click', '.prevTrack', function() {
        const index = $(this).data('index');
        const prevIndex = index === 0 ? tracks.length - 1 : index - 1;
        playTrack(prevIndex);
    });

    // Event listener untuk tombol next track
    $(document).on('click', '.nextTrack', function() {
        const index = $(this).data('index');
        const nextIndex = (index + 1) % tracks.length;
        playTrack(nextIndex);
    });

    // Event listener untuk mengembalikan ikon play setelah track selesai
    tracks.forEach((track, index) => {
        track.addEventListener('ended', () => {
            updatePlayButtonIcon(index, 'play');
        });
    });
});