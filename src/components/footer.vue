<template>
  <footer class="bg-Toko-hijau relative">
    <!-- BAGIAN UTAMA -->
    <div class="flex items-center justify-center h-[500px] md:h-[300px] z-10">
      <div class="container mx-auto md:p-0 p-4 mb-10 mt-[-250px]">
        <div
          class="bg-gray-50 mx-auto flex flex-col md:flex-row items-center w-full h-[750px] md:h-[650px] rounded-3xl shadow-2xl !px-4">
          <div class="w-full md:w-1/2 p-4">
            <h1 class="text-xl font-bold mb-2 footertext">
              Gak perlu repot lagi untuk <span class="text-green-600">cari tukang</span>, sekarang
              kamu tinggal buka hp saja
            </h1>
            <p class="footertext-p1">
              Nikmati banyak pilihan tukang, promo, dan fitur eksklusif di
              <span class="text-green-600">tukangsegala.com</span>
            </p>
            <p class="footertext-p1 mt-10">Download aplikasi tukangsegala.com sekarang juga</p>
            <div class="flex mt-4 space-x-4">
              <img
                src="/Component/GooglePlay.png"
                alt="Gambar Google Play"
                class="w-auto h-12 md:h-16 lg:h-20" />
              <img
                src="/Component/AppStore.png"
                alt="Gambar App Store"
                class="w-auto h-12 md:h-16 lg:h-20" />
            </div>
          </div>

          <!-- Ini adalah bagian gambar (ditambahkan kelas hidden pada mode kecil) -->
          <div class="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/Hero/HP.png"
              alt="Deskripsi Gambar"
              class="rounded-3xl object-cover max-h-full max-w-full mb-10 md:block hidden" />
          </div>
        </div>
      </div>
    </div>
    <!-- END BAGIAN UTAMA -->

    <!--BAGIAN KAKI -->
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-28">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a
            href=""
            class="flex items-center">
            <img
              src="../assets/logo_toko_serba_guna.svg"
              class="h-8 mr-3"
              alt="FlowBite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white fonthero"
              >tukangsegala.com</span
            >
          </a>
          <div class="text-start mt-10">
            <a
              href=""
              class="text-white text-2xl footertext-p1 hover:underline"
              >Tentang kami</a
            >
          </div>
          <div class="text-start">
            <a
              href=""
              class="text-white text-2xl footertext-p1 hover:underline"
              >Blog</a
            >
          </div>
        </div>
        <hr class="md:w-[530px] w-full border-t-2 border-white mb-4 block md:hidden" />
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white">Kategori</h2>
            <ul class="text-white">
              <li class="mb-4">
                <a
                  href="https://flowbite.com/"
                  class="hover:underline"
                  >Tukang Ac</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="https://flowbite.com/"
                  class="hover:underline"
                  >Tukang pijat</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Kelistrikan</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Lainya</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white">Menjadi Penyedia Jasa</h2>
            <ul class="text-white">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Cara Rerja</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline"
                  >Buat Profile Kerja</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white">Hubungi kami</h2>
            <ul class="text-white">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline"
                  >Bantuan</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline"
                  >Kebijakan Privasi</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bagian footer bawah dengan full width -->
    <div class="bg-white shadow m-0">
      <div
        class="px-4 py-6 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <span class="text-sm md:text-2xl text-gray-400 mb-4 sm:text-center md:mb-0">
          <a
            href="#"
            class="hover:underline text-gray-500 font-bold"
            >© 2023 Quantum Leap.</a
          >
          All Rights Reserved.
        </span>
        <ul
          class="flex space-x-6 md:flex-row flex-wrap items-center mt-4 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:space-x-6">
          <li>
            <a
              href="#"
              class="mb-2 md:mb-0"
              ><img
                src="/icon/WhatsApp.png"
                alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              class="mb-2 md:mb-0"
              ><img
                src="/icon/Instagram.png"
                alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              class="mb-2 md:mb-0"
              ><img
                src="/icon/TikTok.png"
                alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              class=""
              ><img
                src="/icon/LinkeDin.png"
                alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
