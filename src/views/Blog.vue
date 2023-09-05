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
  <main class="pt-0 md:pt-16">
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
                src="/Component/GooglePlay.png"
                alt="Google Play"
                class="w-auto h-16 md:h-20" />
            </a>
            <a href="">
              <img
                src="/Component/AppStore.png"
                alt="App Store"
                class="w-auto h-16 md:h-20" />
            </a>
          </div>
        </div>
        <transition name="fade-left">
          <div
            v-if="showHeroImage"
            class="md:w-1/2 w-full md:flex justify-end relative mb-8 md:mb-0 hidden">
            <img
              src="/Hero/Mockup_phone.png"
              alt="Hero Image" />
          </div>
        </transition>
      </div>
    </section>
  </main>
</template>
