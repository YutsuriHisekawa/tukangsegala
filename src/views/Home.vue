<script setup>
import kaki from '../components/footer.vue';
import atas from '../components/atas.vue';
import lingkaran from '../components/icons/lingkaran.vue';
import Card from '../components/card.vue';
import testi from '../components/gal-carousel.vue';

import { ref, onMounted } from 'vue';
const showHeroImage = ref(false);
onMounted(() => {
  setTimeout(() => {
    showHeroImage.value = true;
  }, 100);
});
</script>

<template>
  <atas />
  <main class="pt-0 md:pt-0 xl:pt-0">
    <section
      class="flex items-center justify-center bg-Toko-hijau md:h-screen h-fit xl:h-screen w-auto">
      <div
        class="container mx-auto flex mt-16 xl:mt-20 items-center flex-col md:flex-row xl:flex-row">
        <!-- Left Section -->
        <div class="w-full xl:w-1/2 mb-4 md:mb-0 xl:mb-0 p-4 xl:p-6">
          <!-- ... (similarly update other content in left section) -->
        </div>

        <!-- Right Section with Image -->
        <transition name="fade-left">
          <div
            v-if="showHeroImage"
            class="w-full md:w-1/2 xl:w-1/2 justify-end relative mb-8 md:mb-0 xl:mb-0">
            <!-- Image content here -->
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
          src="/Hero/Tukang_di_atas_genteng.png"
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
              src="/Tukang_Segala_Icon/Tukang.png"
              alt="Palu Icon" />
            <p class="ml-4 mr-0 fonthero">
              Memiliki lebih dari 100+ tukang yang tersebar diseluruh Indonesia.
            </p>
          </div>
          <div class="flex items-center mb-4">
            <!-- Group -->
            <img
              src="/Tukang_Segala_Icon/Pelayanan.png"
              alt="Palu Icon" />
            <p class="ml-4 mr-0 fonthero">Mengutamakan pelayanan dan kepuasan pelanggan.</p>
          </div>
          <div class="flex items-center mb-4">
            <!-- Jam -->
            <img
              src="/Tukang_Segala_Icon/Waktu.png"
              alt="Palu Icon" />
            <p class="ml-4 mr-0 fonthero">
              Menghemat waktu pelanggan dalam mencari tukang yang dibutuhkan.
            </p>
          </div>
          <div class="flex items-center mb-4">
            <!-- Report -->
            <img
              src="/Tukang_Segala_Icon/sertifikasi.png"
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
            src="/Produk/Ac.png"
            alt="AC" />
        </div>
        <div>
          <img
            src="/Produk/Perpipaan.png"
            alt="Perpipaan" />
        </div>
        <div>
          <img
            src="/Produk/Kelistrikan.png"
            alt="Kelistrikan" />
        </div>
        <div>
          <img
            src="/Produk/Kebocoran.png"
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
  <section class="w-full bg-Toko-hijau rounded-t-[250px] md:rounded-t-[20%] mt-10">
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

  <section class="w-full bg-white md:rounded-t-[50%]">
    <h1 class="fontabout text-black text-start pt-52 ml-10">
      Ini kata Klien <span class="text-green-600">Klien Kami</span>
    </h1>

    <testi />
  </section>

  <kaki></kaki>
</template>
