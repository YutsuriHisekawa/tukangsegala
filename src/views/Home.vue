<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/footer.vue';
import tukang from '../components/card.vue';

import lingkaran from '../components/icons/lingkaran.vue';

import { ref, onMounted } from 'vue';
import Card from '../components/card.vue';
const showHeroImage = ref(false);
onMounted(() => {
  setTimeout(() => {
    showHeroImage.value = true;
  }, 100);
});
</script>

<template>
  <Navbar />
  <main class="pt-0 md:pt-0">
    <section
      class="flex items-center justify-center md:flex-row bg-Toko-hijau md:h-screen h-fit w-auto">
      <div class="container mx-auto flex mt-16 items-center flex-col md:flex-row">
        <div class="md:w-1/2 w-full mb-4 md:mb-0 p-4">
          <div class="relative">
            <div class="hidden md:block">
              <lingkaran />
            </div>

            <h1 class="text-4xl mb-4 hero z-10 relative text-white">
              Karena Setiap Masalah, Selalu Ada Tukangnya.
            </h1>
          </div>
          <p class="mb-6 fonthero text-white">
            Sekarang cari tukang lebih mudah dan praktis dengan pesan di tukangsegala.com
          </p>
          <hr class="md:w-[530px] w-full border-t-2 border-white mb-4" />
          <div class="flex items-center mt-10">
            <span class="fonthero text-white">Download Aplikasi</span>
          </div>
          <div class="flex space-x-4 md:space-x-8 mt-5">
            <a href="">
              <img
                src="../assets/Component/GooglePlay.png"
                alt="Google Play"
                class="w-auto h-16 md:h-20" />
            </a>
            <a href="">
              <img
                src="../assets/Component/AppStore.png"
                alt="App Store"
                class="w-auto h-16 md:h-20" />
            </a>
          </div>
        </div>
        <transition name="fade-left">
          <div
            v-if="showHeroImage"
            class="md:w-1/2 w-full md:flex justify-end relative mb-8 md:mb-0">
            <img
              src="../assets/Hero/Mockup phone.png"
              alt="Hero Image" />
          </div>
        </transition>
      </div>
    </section>
  </main>

  <!--Kenapa Toko Tukang ?-->

  <section class="bg-white">
    <div
      class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div class="lg:col-span-5 lg:flex lg:items-center md:ml-0 ml-10">
        <img
          src="../assets/Hero/Tukang di atas genteng.png"
          alt="hero image"
          class="mx-auto w-full" />
      </div>

      <div class="lg:col-span-7 lg:pl-8">
        <h1
          class="text-center md:text-start max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
          Kenapa pesan di <span class="text-green-500">tukangsegala.com ?</span>
        </h1>

        <div class="flex flex-col items-start">
          <div class="flex items-center mb-4 mt-10">
            <!-- Palu -->
            <img
              src="../assets/Tukang Segala Icon/Tukang.png"
              alt="Palu Icon" />
            <p class="ml-4 mr-0 fonthero">
              Memiliki lebih dari 100+ tukang yang tersebar diseluruh Indonesia.
            </p>
          </div>
          <div class="flex items-center mb-4">
            <!-- Group -->
            <img
              src="../assets/Tukang Segala Icon/Pelayanan.png"
              alt="Palu Icon" />
            <p class="ml-4 mr-0 fonthero">Mengutamakan pelayanan dan kepuasan pelanggan.</p>
          </div>
          <div class="flex items-center mb-4">
            <!-- Jam -->
            <img
              src="../assets/Tukang Segala Icon/Waktu.png"
              alt="Palu Icon" />
            <p class="ml-4 mr-0 fonthero">
              Menghemat waktu pelanggan dalam mencari tukang yang dibutuhkan.
            </p>
          </div>
          <div class="flex items-center mb-4">
            <!-- Report -->
            <img
              src="../assets/Tukang Segala Icon/sertifikasi.png"
              alt="Palu Icon" />
            <p class="ml-4 mr-0 fonthero">
              Seluruh tukang yang ada di tukangsegala.com telah memiliki sertifikasi keahlian.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- KATEGORI -->
  <section class="w-full">
    <h1 class="fontabout text-black text-center">Kategori layanan terbaik Kami</h1>
    <div class="flex items-center justify-center pt-10 pb-10">
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-4">
        <div>
          <img
            src="../assets/Produk/Ac.png"
            alt="AC" />
        </div>
        <div>
          <img
            src="../assets/Produk/Perpipaan.png"
            alt="Perpipaan" />
        </div>
        <div>
          <img
            src="../assets/Produk/Kelistrikan.png"
            alt="Kelistrikan" />
        </div>
        <div>
          <img
            src="../assets/Produk/Kebocoran.png"
            alt="Kebocoran" />
        </div>
      </div>
    </div>
    <div class="flex justify-center md:mt-5 mt-0 p-10 md:p-16">
      <button
        class="bg-Toko-hijau text-white py-2 px-5 rounded-full hover:bg-green-600 transition duration-300 fonthero">
        Tampilkan semua kategori
      </button>
    </div>
  </section>

  <!--Layanan-->
  <section class="w-full bg-Toko-hijau rounded-t-[250px] md:rounded-t-[50%] mt-10">
    <h1 class="fontabout text-white text-center pt-52 mb-5">Apa aja nih layanan paling populer?</h1>
    <p class="fonthero text-white text-center">
      Yuk, dicek koleksi tukang populer, favoritnya klien, dan penawaran terbaik kami di lokasimu!
    </p>
    <div class="flex items-center justify-center pt-10 pb-10">
      <div class="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3">
        <!--Card-->
        <Card />
        <!--End Card-->
      </div>
    </div>
  </section>

  <Footer />
</template>
