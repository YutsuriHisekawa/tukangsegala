<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const isTop = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isTop.value = window.scrollY > 10; // Anda bisa mengubah angka ini sesuai kebutuhan
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <div
    class="bg-white fixed top-0 w-full p-4 z-50 shadow-2xl md:shadow-lg transition-colors duration-300">
    <div class="container mx-auto flex items-center justify-between font-Poppins">
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none">
          <circle
            cx="25"
            cy="25"
            r="25"
            fill="#888888" />
        </svg>
        <div class="fontlogo ml-2 text-black">tukangsegala.com</div>
      </div>
      <div
        class="hidden md:flex space-x-4 items-center"
        :class="['duration-300', isTop ? 'text-black' : 'text-white']">
        <router-link
          to="/"
          class="fontbar duration-300"
          active-class="active-link"
          :class="[
            $route.path === '/' ? (isTop ? 'text-green-500' : 'text-green-500') : 'text-black',
          ]">
          Beranda
        </router-link>

        <router-link
          to="/about"
          class="fontbar"
          active-class="active-link"
          :class="[
            $route.path === '/about' ? (isTop ? 'text-green-500' : 'text-green-500') : 'text-black',
          ]">
          Layanan Kami
        </router-link>
        <router-link
          to="/about"
          class="fontbar"
          active-class="active-link"
          :class="[
            $route.path === '#' ? (isTop ? 'text-green-500' : 'text-green-500') : 'text-black',
          ]">
          Tentang Kami
        </router-link>
        <router-link
          to="/about"
          class="fontbar"
          active-class="active-link"
          :class="[
            $route.path === '#' ? (isTop ? 'text-green-500' : 'text-green-500') : 'text-black',
          ]">
          Blog
        </router-link>

        <button
          class="fontbar text-white bg-green-500 rounded-xl px-4 py-2 hover:text-white hover:bg-green-600 duration-300">
          Kontak Kami
        </button>
      </div>
      <button
        @click="isOpen = !isOpen"
        class="md:hidden transition-transform duration-300">
        <i
          v-if="!isOpen"
          class="fas fa-bars text-black transform"
          :class="['duration-300', isTop ? 'text-black' : 'text-black']"></i>
        <i
          v-if="isOpen"
          class="fas fa-times text-black transform rotate-180"
          :class="['duration-300', isTop ? 'text-black' : 'text-black']"></i>
      </button>
    </div>
    <div
      v-if="isOpen"
      class="md:hidden mt-8 space-y-2 z-999">
      <router-link
        to="/"
        class="block fontbar duration-300"
        active-class="text-green-500"
        :class="[isTop ? 'text-black' : 'text-black']">
        Beranda
      </router-link>

      <router-link
        to="/about"
        class="block fontbar duration-300"
        active-class="text-green-500"
        :class="[isTop ? 'text-black' : 'text-black']">
        Layanan Kami
      </router-link>

      <a
        href="#"
        class="block text-black fontbar"
        :class="['duration-300', isTop ? 'text-black' : 'text-black']"
        >Tentang Kami</a
      >
      <a
        href="#"
        class="block text-black fontbar"
        :class="['duration-300', isTop ? 'text-black' : 'text-black']"
        >Blog</a
      >
      <button
        class="text-white bg-green-500 rounded-xl px-4 py-2 w-full hover:text-white hover:bg-green-600 duration-300 fontbar">
        Hubungi Kami
      </button>
    </div>
  </div>
</template>
