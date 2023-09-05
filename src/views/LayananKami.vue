<script setup>
import kaki from '../components/footer1.vue';
import atas from '../components/atas.vue';
import lingkaran from '../components/icons/lingkaran.vue';
import Card from '../components/card1.vue';
import testi from '../components/gal-carousel.vue';

import { ref, onMounted } from 'vue';
const showHeroImage = ref(false);
onMounted(() => {
  setTimeout(() => {
    showHeroImage.value = true;
  }, 100);
});
</script>
<template class="">
  <atas />
  <main class="pt-0 md:pt-10 bg-Toko-hijau">
    <section class="flex items-center md:h-screen h-fit w-auto">
      <div
        class="container mx-auto flex mt-16 items-center flex-col md:flex-row relative md:z-[99] p-5 md:p-0">
        <!-- Bagian Teks di Sisi Kiri -->
        <div class="md:w-1/2 w-full mb-4 md:mb-0 p-4">
          <h1 class="text-lg md:text-6xl mb-4 text-white hue-rotate-0 hero">
            Kami menyediakan berbagai tukang untuk masalahmu.
          </h1>
        </div>
      </div>
    </section>
    <!-- Bagian Gambar di Sisi Kanan dengan Posisi di Pojok Kanan Atas -->
    <div class="absolute top-11 pt-5 left-0 md:w-full hidden md:flex justify-end z-[1]">
      <img
        src="/Hero/Sip.png"
        alt="Hero Image"
        class="w-[1200px]" />
    </div>

    <section class="w-full bg-white rounded-t-[80px] md:rounded-t-[15%] mt-5">
      <h1 class="fontabout text-black text-center md:pt-52 pt-10 mb-5">
        Apa aja nih layanan paling populer?
      </h1>
      <p class="fonthero text-white text-center">
        Yuk, dicek koleksi tukang populer, favoritnya klien, dan penawaran terbaik kami di lokasimu!
      </p>
      <div class="flex items-center justify-center pt-10 pb-10">
        <div class="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3">
          <!--Card-->
          <div class="pt-10 mt-0">
            <Card />
          </div>

          <!--End Card-->
        </div>
      </div>
    </section>
    <kaki />
  </main>
</template>
