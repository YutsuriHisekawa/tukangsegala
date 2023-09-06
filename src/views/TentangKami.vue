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
    <section class="bg-hero_tentangkami bg-cover">
      <div class="flex items-center md:h-screen h-fit w-auto">
        <div
          class="container mx-auto flex mt-16 items-center flex-col md:flex-row relative md:z-[99] z-99 p-5 md:p-0">
          <!-- Bagian Teks di Sisi Kiri -->
          <div class="md:w-1/2 w-full mb-4 md:mb-0 p-4 pt-10">
            <h1 class="text-lg md:text-7xl mb-4 text-white hero md:z-10 z-10">
              Ketahui lebih dalam tentang kami.
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT TUKANG SEGALA !-->
    <section class="w-full bg-white">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <!-- Sisi Kiri: Teks -->
          <div class="md:w-1/2">
            <h2 class="mb-4 sans3 text-3xl font-semibold">tukangsegala.com</h2>
            <p class="sans3 text-lg text-black font-normal text-start">
              tukangsegala.com merupakan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              convallis sed sapien vel lobortis. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed placerat augue ut dapibus feugiat.
              Phasellus nec pellentesque sapien. Nunc in mattis quam, mattis tincidunt sem. Etiam
              porttitor metus ac interdum semper. Ut justo neque, lacinia non lacus quis, consequat
              pulvinar orci. Nam elementum leo quis suscipit vestibulum. Donec dapibus magna
              pharetra lorem accumsan laoreet. Phasellus nec odio justo. In bibendum et libero eu
              finibus.
            </p>
          </div>

          <!-- Sisi Kanan: Gambar -->
          <div class="md:w-1/2 flex justify-center">
            <img
              src="/icon/Logo.png"
              alt="Logo"
              class="w-[350px] h-[350px] rounded-md shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- TEMUI FOUNDER KAMI SEKARANG !-->
    <section class="w-full bg-white">
      <h1
        class="sans3 text-5xl md:text-7xl font-semibold text-black text-center md:pt-20 pt-10 mb-5">
        Temui Founder <span class="text-green-500">tukangsegala.com</span>
      </h1>

      <div class="flex items-center justify-center pt-10 pb-10">
        <div class="grid gap-x-52 gap-y-4 grid-cols-1 md:grid-cols-3">
          <!--Gambar Founder 1-->
          <div class="text-center">
            <img
              src="/icon/Founder.png"
              alt="Founder 1"
              class="w-full h-auto rounded-md mb-4 mt-10 md:mt-0" />
            <h2 class="text-xl font-semibold sans3">Nama Lengkap 1</h2>
            <p class="sans3">Jabatan 1</p>
          </div>

          <!--Gambar Founder 2-->
          <div class="text-center">
            <img
              src="/icon/Founder.png"
              alt="Founder 2"
              class="w-full h-auto rounded-md mb-4 mt-10 md:mt-0" />
            <h2 class="text-xl font-semibold sans3">Nama Lengkap 2</h2>
            <p class="sans3">Jabatan 2</p>
          </div>

          <!--Gambar Founder 3-->
          <div class="text-center">
            <img
              src="/icon/Founder.png"
              alt="Founder 3"
              class="w-full h-auto rounded-md mb-4 mt-10 md:mt-0" />
            <h2 class="text-xl font-semibold sans3">Nama Lengkap 3</h2>
            <p class="sans3">Jabatan 3</p>
          </div>
          <!--End Gambar Founder-->
        </div>
      </div>
    </section>

    <!-- VISI MISI -->
    <section
      class="flex flex-col bg-white md:flex-row p-20 space-y-10 md:space-y-0 md:space-x-10 items-center">
      <!-- Gambar -->
      <div class="w-full md:w-1/2">
        <img
          src="/other/Youtube.png"
          alt="Ilustrasi Visi & Misi"
          class="w-full h-auto" />
      </div>

      <!-- Teks -->
      <div class="w-full md:w-1/2 text-center sans3">
        <!-- Visi -->
        <h2 class="text-4xl font-bold mb-3 text-green-500">VISI KAMI</h2>
        <p class="mb-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit quis risus auctor
          tempus. Vestibulum ante ipsum primis.
        </p>

        <!-- Misi -->
        <h2 class="text-4xl font-bold mb-3 text-green-500">MISI KAMI</h2>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit quis risus auctor
          tempus. Vestibulum ante ipsum primis.
        </p>
      </div>
    </section>

    <kaki />
  </main>
</template>
