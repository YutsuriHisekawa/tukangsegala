<template>
  <div class="relative">
    <Carousel
      :items-to-show="itemsToShow"
      :autoplay="2000"
      :wrap-around="true">
      <Slide
        v-for="(img, index) in images"
        :key="index">
        <div class="carousel__item relative">
          <img
            :src="img"
            alt="Slide Image"
            class="w-full object-cover"
            :style="{ height: '440px' }" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const itemsToShow = ref(4); // default for large screens

    onMounted(() => {
      // Adjust number of items based on window width
      if (window.innerWidth < 640) itemsToShow.value = 1; // sm
      else if (window.innerWidth < 768) itemsToShow.value = 2; // md
      else if (window.innerWidth < 1024) itemsToShow.value = 3; // lg
    });

    return {
      itemsToShow,
      images: ['/testi/1.png', '/testi/2.png', '/testi/3.png', '/testi/4.png'],
    };
  },
});
</script>
