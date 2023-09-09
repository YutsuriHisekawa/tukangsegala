<script setup>
import kaki from '../components/footer.vue';
import atas from '../components/atas.vue';
import lingkaran from '../components/icons/lingkaran.vue';
import Card from '../components/card.vue';
import testi from '../components/gal-carousel.vue';
import { callback } from '../helper/scroll';
import { ref, onMounted } from 'vue';
const showHeroImage = ref(false);

const handleScroll = (event) => {
  callback();
};
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
    <!--Kenapa Toko Tukang ?-->

    <section
      class="bg-white"
      @scroll="handleScroll">
      <div
        class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="lg:col-span-5 lg:flex lg:items-center md:ml-0 ml-10">
          <img
            src="/Hero/Tukang_di_atas_genteng.png"
            alt="hero image"
            class="mx-auto w-full md:block hidden" />
        </div>

        <div class="lg:col-span-7 lg:pl-8">
          <h1
            class="text-center md:text-start max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Kenapa pesan di <span class="text-green-500">tukangsegala.com </span>?
          </h1>

          <div class="flex flex-col items-start">
            <div class="flex items-center mb-4 mt-10">
              <!-- Palu -->
              <img
                src="/Tukang_Segala_Icon/Tukang.png"
                alt="Palu Icon" />
              <p class="ml-4 mr-0 fonthero">Tukang Bersertifikasi</p>
            </div>
            <div class="flex items-center mb-4">
              <!-- Group -->
              <img
                src="/Tukang_Segala_Icon/Pelayanan.png"
                alt="Palu Icon" />
              <p class="ml-4 mr-0 fonthero">Pembayaran Sekali Bayar untuk semua pekerjaan</p>
            </div>
            <div class="flex items-center mb-4">
              <!-- Jam -->
              <img
                src="/Tukang_Segala_Icon/Waktu.png"
                alt="Palu Icon" />
              <p class="ml-4 mr-0 fonthero">
                Same-day Service ( Pesan hari ini , datang hari ini juga)
              </p>
            </div>
            <!--             <div class="flex items-center mb-4">

                <img
                  src="/Tukang_Segala_Icon/sertifikasi.png"
                  alt="Palu Icon" />
                <p class="ml-4 mr-0 fonthero">
                  Seluruh tukang yang ada di tukangsegala.com telah memiliki sertifikasi keahlian.
                </p>
              </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- KATEGORI -->
    <section class="w-full">
      <h1 class="fontabout text-black text-center">Kategori layanan terbaik Kami</h1>
      <div class="flex items-center justify-center pt-10 pb-10">
        <div class="grid gap-x-8 gap-y-9 grid-cols-2 md:grid-cols-4 p-4">
          <div>
            <img
              src="/Produk/Ac.png"
              alt="AC"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Pijat.png"
              alt="Pijat "
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Kelistrikan.png"
              alt="Kelistrikan"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Kebocoran.png"
              alt="Kebocoran"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Keramik.png"
              alt="Keramik"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Cor.png"
              alt="Cor"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Kebun.png"
              alt="Kebun"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Cat.png"
              alt="Cat"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Kunci.png"
              alt="Kunci"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Mesincuci.png"
              alt="Kebocoran"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Kayu.png"
              alt="Kebocoran"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
          <div>
            <img
              src="/Produk/Lainya.png"
              alt="Kebocoran"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </div>
        </div>
      </div>
    </section>

    <!--Layanan-->
    <section class="w-full mt-5 md:mt-10">
      <h1 class="fontabout text-black text-center pt-52 mb-5">
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

    <section class="w-full bg-white">
      <h1 class="fontabout text-black text-center pt-20 ml-10">
        Ini kata <span class="text-green-600"> Mereka</span>
      </h1>

      <testi />
    </section>
    <!--Footer-->
    <div class="pt-96 mt-0">
      <kaki></kaki>
    </div>
  </main>
</template>
