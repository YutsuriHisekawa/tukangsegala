<template>
  <Carousel
    :items-to-show="itemsToShow"
    :wrap-around="true">
    <Slide
      v-for="(img, index) in images"
      :key="index"
      class="mr-4 last:mr-0">
      <div class="carousel__item relative mb-10">
        <img
          :src="img"
          alt="Slide Image"
          class="w-full object-cover"
          :style="{ height: '440px' }" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
      </div>
    </Slide>

    <!-- Hide navigation on medium screens and above -->
  </Carousel>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const itemsToShow = ref(4); // default for large screens

    onMounted(() => {
      // Adjust number of items based on window width
      if (window.innerWidth < 640) itemsToShow.value = 1; // sm
      else if (window.innerWidth < 768) itemsToShow.value = 2; // md
      else if (window.innerWidth < 1024) itemsToShow.value = 3; // lg
      else if (window.innerWidth < 1080) itemsToShow.value = 3; // lg
    });

    return {
      itemsToShow,
      images: ['/testi/1.png', '/testi/2.png', '/testi/3.png', '/testi/4.png'],
    };
  },
});
</script>
