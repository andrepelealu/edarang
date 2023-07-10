import React, { useMemo } from "react";

const KebijakanPrivasi = () => {
  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id=""
    >

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">Kebijakan Privasi</h1>

              <p className="text-black-500 mt-4 mb-6">Kami di Edarang menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.</p>

              <h2 className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">Informasi yang Kami Kumpulkan</h2>
              <p>Kami dapat mengumpulkan informasi pribadi Anda saat Anda menggunakan layanan kami. Informasi ini dapat mencakup, namun tidak terbatas pada:</p>
              <ol>
                <li>Informasi Identifikasi Pribadi: Nama lengkap, alamat email, nomor telepon, atau informasi lain yang Anda berikan saat mendaftar atau menggunakan layanan kami.</li>
                <li>Informasi Kontak: Konten percakapan, pesan, atau riwayat komunikasi yang Anda lakukan melalui layanan kami.</li>
                <li>Informasi Penggunaan: Informasi tentang bagaimana Anda menggunakan layanan kami, termasuk aktivitas, log, dan data lainnya yang dikumpulkan melalui teknologi pelacakan seperti cookie.</li>
              </ol>

              <h2 className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">Penggunaan Informasi</h2>
              <p className="text-black-500 mt-4 mb-6">Kami menggunakan informasi pribadi yang kami kumpulkan untuk:</p>
              <ol>
                <li>Menyediakan Layanan: Kami menggunakan informasi Anda untuk memberikan layanan customer relation yang Anda minta, termasuk pengaturan tim customer service yang lebih efektif melalui integrasi dengan WhatsApp API.</li>
                <li>Komunikasi dengan Anda: Kami dapat menghubungi Anda melalui email, pesan teks, atau komunikasi lainnya untuk memberikan informasi terkait layanan kami, pembaruan, penawaran promosi, atau tanggapan terhadap pertanyaan Anda.</li>
                <li>Analisis dan Peningkatan: Kami menggunakan informasi Anda untuk menganalisis penggunaan layanan kami, memahami kebutuhan dan preferensi Anda, serta meningkatkan pengalaman pengguna.</li>
              </ol>

              <h2 className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">Pengungkapan Informasi</h2>
              <p className="text-black-500 mt-4 mb-6">Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga kecuali dalam keadaan berikut:</p>
              <ol>
                <li>Konsentimen: Jika Anda memberikan persetujuan tertulis untuk membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan tertentu.</li>
                <li>Kewajiban Hukum: Jika kami diwajibkan oleh hukum untuk mengungkapkan informasi pribadi Anda dalam tanggapan terhadap proses hukum, perintah pengadilan, atau permintaan resmi lainnya.</li>
              </ol>

              <h2 className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">Pihak Ketiga</h2>
              <p className="text-black-500 mt-4 mb-6">Untuk menyediakan layanan kami, kami bekerja sama dengan pihak ketiga, termasuk Twilio, yang merupakan penyedia layanan WhatsApp API. Dalam konteks ini, kami ingin menjelaskan bagaimana Twilio memperlakukan informasi pribadi Anda:</p>
              <ol>
                <li>Twilio bertindak sebagai penyedia infrastruktur teknis yang memungkinkan kami mengintegrasikan layanan WhatsApp API ke dalam layanan kami.</li>
                <li>Twilio hanya memproses data pribadi Anda atas instruksi kami sebagai pemilik data, dan tidak menggunakan data tersebut untuk tujuan mereka sendiri.</li>
                <li>Twilio mengimplementasikan tindakan keamanan yang tepat untuk melindungi informasi pribadi Anda dan mematuhi standar keamanan industri.</li>
              </ol>

              <h2 className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">Keamanan Data</h2>
              <p className="text-black-500 mt-4 mb-6">Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, penggunaan, atau pengungkapan yang tidak sah. Namun, perlu diingat bahwa tidak ada metode pengiriman data melalui internet atau metode penyimpanan elektronik yang sepenuhnya aman.</p>

              <h2 className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">Pembaruan Kebijakan Privasi</h2>
              <p className="text-black-500 mt-4 mb-6">Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam praktik atau kebutuhan bisnis kami. Ketika kami memperbarui kebijakan ini, kami akan mengubah tanggal di bagian atas dokumen ini. Kami mendorong Anda untuk secara berkala meninjau kebijakan privasi ini untuk tetap memahami bagaimana kami melindungi informasi pribadi Anda.</p>

              <h2 className="text-3xl lg:text-4xl xl:text-2xl font-medium text-black-600 leading-normal">Kontak Kami</h2>
              <p className="text-black-500 mt-4 mb-6">Jika Anda memiliki pertanyaan, komentar, atau kekhawatiran tentang kebijakan privasi ini, atau jika Anda ingin mengakses, memperbarui, atau menghapus informasi pribadi Anda, silakan hubungi kami melalui alamat email atau informasi kontak lain yang tersedia di situs web kami.</p>

              <p className="text-black-500 mt-4 mb-6">Terima kasih telah memilih Edarang sebagai penyedia layanan customer relation Anda.</p>

              <p className="text-black-500 mt-4 mb-6">Kebijakan Privasi ini terakhir diperbarui pada 10 Juli 2023.</p>


    </div>
  );
};

export default KebijakanPrivasi;
