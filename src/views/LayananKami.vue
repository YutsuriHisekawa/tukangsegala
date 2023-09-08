<script setup>
import kaki from '../components/footer1.vue';
import atas from '../components/atas.vue';
import lingkaran from '../components/icons/lingkaran.vue';
import Card from '../components/card1.vue';
import Keuntungan from '../components/card2.vue';
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
  <atas class="z-50" />

  <main class="pt-0 md:pt-10 bg-Toko-hijau relative z-40">
    <!--HERO-->
    <div class="bg-hero_layanan bg-cover">
      <section class="flex items-center md:h-screen h-fit w-auto">
        <div
          class="container mx-auto flex mt-16 items-center flex-col md:flex-row relative md:z-[99] z-99 p-5 md:p-0">
          <!-- Bagian Teks di Sisi Kiri -->
          <div class="md:w-1/2 w-full mb-4 md:mb-0 p-4">
            <h1 class="text-lg md:text-6xl mb-4 text-white hue-rotate-0 hero md:z-10 z-10">
              Kami menyediakan berbagai tukang untuk masalahmu.
            </h1>
          </div>
        </div>
      </section>
      <!-- Bagian Gambar di Sisi Kanan Pojok Kanan Atas -->
      <div class="absolute top-11 pt-5 left-0 md:w-full hidden md:flex justify-end z-[1]">
        <img
          src="/Hero/Sip.png"
          alt="Hero Image"
          class="w-[1200px]" />
      </div>
      <!--END HERO-->
    </div>

    <!-- APA AJA NIH -->

    <section class="w-full bg-white rounded-t-[80px] md:rounded-t-[15%]">
      <h1 class="fontabout text-black text-center md:pt-20 pt-10 mb-5">
        Apa aja nih layanan paling populer?
      </h1>
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
    <!--END APA AJA NIH-->
    <!-- KEUNTUNGAN -->
    <section class="w-full bg-layanan bg-cover bg-white">
      <div class="container mx-auto w-full h-full flex flex-col md:flex-row items-start px-4 py-8">
        <!-- Sisi Kiri: Teks -->
        <div class="flex flex-col items-center w-full mt-5 md:mt-10 mb-5 md:mb-10">
          <h1 class="text-4xl md:text-7xl mb-4 font-semibold text-black text-center sans3">
            Keuntungan apa yang kamu dapatkan?
          </h1>
        </div>
      </div>

      <!-- CARD TEXT KEUNTUNGAN -->
      <div class="px-4 py-8 md:p-28">
        <Keuntungan />
      </div>
    </section>

    <!--END KEUNTUNGAN -->
    <kaki />
  </main>
</template>
