// Fungsi Kuis Edukasi Anti-Bullying Menggunakan Pop-up (prompt & alert)

function mulaiKuis() {
    // Menyapa Pengguna
    alert("Selamat datang di Kuis Edukasi Anti-Perundungan!\nKuis ini terdiri dari 5 pertanyaan pilihan ganda sederhana.");

    let skor = 0;
    const totalSoal = 5;

    // Soal 1
    let jaw1 = prompt(
        "Soal 1:\nManakah yang TERMASUK bentuk perundungan relasional/sosial?\n\n" +
        "A. Memukul dan menendang teman\n" +
        "B. Mengajak teman sekelas untuk mengucilkan seseorang\n" +
        "C. Mengirim pesan cacian di media sosial\n" +
        "D. Memanggil nama orang lain dengan julukan baik\n\n" +
        "Ketik jawaban Anda (A/B/C/D):"
    );

    if (jaw1 && jaw1.toUpperCase() === 'B') {
        skor++;
        alert("Jawaban Anda BENAR! Pengucilan adalah bentuk perundungan relasional.");
    } else {
        alert("Jawaban Anda SALAH. Jawaban yang benar adalah B.");
    }

    // Soal 2
    let jaw2 = prompt(
        "Soal 2:\nApa istilah untuk saksi perundungan yang AKTIF membantu korban keluar dari situasi berbahaya?\n\n" +
        "A. Bystander\n" +
        "B. Perpetrator\n" +
        "C. Upstander\n" +
        "D. Target\n\n" +
        "Ketik jawaban Anda (A/B/C/D):"
    );

    if (jaw2 && jaw2.toUpperCase() === 'C') {
        skor++;
        alert("Jawaban Anda BENAR! Upstander adalah orang yang peduli dan membela korban.");
    } else {
        alert("Jawaban Anda SALAH. Jawaban yang benar adalah C (Upstander).");
    }

    // Soal 3
    let jaw3 = prompt(
        "Soal 3:\nApakah pernyataan 'Bercanda yang menyakiti perasaan salah satu pihak adalah hal biasa' itu Benar atau Salah?\n\n" +
        "A. Benar (Mitos)\n" +
        "B. Salah (Fakta: Bercanda harus membuat kedua pihak senang)\n\n" +
        "Ketik jawaban Anda (A/B):"
    );

    if (jaw3 && jaw3.toUpperCase() === 'B') {
        skor++;
        alert("Jawaban Anda BENAR! Jika ada satu pihak yang tersakiti, itu bukan becandaan lagi.");
    } else {
        alert("Jawaban Anda SALAH. Jawaban yang benar adalah B.");
    }

    // Soal 4
    let jaw4 = prompt(
        "Soal 4:\nApa langkah utama yang harus dilakukan jika Anda menjadi korban Cyberbullying?\n\n" +
        "A. Membalas dengan kata-kata yang lebih kasar\n" +
        "B. Menyimpan bukti tangkapan layar (screenshot) dan melapor\n" +
        "C. Menghapus semua akun media sosial tanpa memberitahu siapapun\n" +
        "D. Diam saja sampai pelaku bosan sendiri\n\n" +
        "Ketik jawaban Anda (A/B/C/D):"
    );

    if (jaw4 && jaw4.toUpperCase() === 'B') {
        skor++;
        alert("Jawaban Anda BENAR! Menyimpan bukti fisik/digital sangat penting untuk proses pelaporan.");
    } else {
        alert("Jawaban Anda SALAH. Jawaban yang benar adalah B.");
    }

    // Soal 5
    let jaw5 = prompt(
        "Soal 5:\nHubungi nomor layanan darurat SAPA KPPPA jika membutuhkan bantuan pelaporan kekerasan anak & perempuan di nomor?\n\n" +
        "A. 110\n" +
        "B. 113\n" +
        "C. 129\n" +
        "D. 118\n\n" +
        "Ketik jawaban Anda (A/B/C/D):"
    );

    if (jaw5 && jaw5.toUpperCase() === 'C') {
        skor++;
        alert("Jawaban Anda BENAR! Layanan SAPA KPPPA ada pada Call Center 129.");
    } else {
        alert("Jawaban Anda SALAH. Jawaban yang benar adalah C (129).");
    }

    // Evaluasi Hasil Akhir
    let nilai = (skor / totalSoal) * 100;
    let pesan = "";

    if (nilai === 100) {
        pesan = "Sangat Luar Biasa! Anda memiliki pemahaman yang sangat tinggi tentang anti-perundungan!";
    } else if (nilai >= 60) {
        pesan = "Bagus! Anda sudah memahami sebagian besar materi dengan baik.";
    } else {
        pesan = "Yuk baca kembali materi di website ini agar Anda lebih paham cara mencegah perundungan!";
    }

    alert(`--- HASIL KUIS ANDA ---\n\nSkor Benar: ${skor} dari ${totalSoal} Soal\nNilai Akhir: ${nilai}\n\n${pesan}`);
}