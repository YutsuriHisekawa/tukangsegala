<template>
  <!--Element Circle 1-->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="500"
    viewBox="0 0 172 172"
    fill="none"
    class="absolute -top-[23%] -right-[2%] w-[100px] h-[100px] animate-bounce z-1">
    <circle
      cx="100"
      cy="100"
      r="70"
      fill="#80D489" />
  </svg>

  <!--Element Circle 2-->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="500"
    viewBox="0 0 172 172"
    fill="none"
    class="absolute -top-[340%] -left-[70%] w-[700px] h-[700px] animate-bounce z-1">
    <circle
      cx="100"
      cy="100"
      r="70"
      fill="#80D489" />
  </svg>

  <!--Element Circle 3-->

  <!--Element Circle 4-->

  <!--Element Circle 5-->
  <svg
    width="271"
    height="271"
    viewBox="0 0 271 271"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute bottom-[-340%] -right-[-20%] w-[250px] h-[250px] z-1">
    <!-- Definisi mask -->
    <defs>
      <mask id="half-mask">
        <rect
          x="0"
          y="0"
          width="271"
          height="135.5"
          fill="white" />
        <rect
          x="0"
          y="135.5"
          width="271"
          height="135.5"
          fill="black" />
      </mask>
    </defs>

    <!-- Menggunakan mask pada path -->
    <path
      d="M271 135.5C271 210.335 210.335 271 135.5 271C60.6654 271 0 210.335 0 135.5C0 60.6654 60.6654 0 135.5 0C210.335 0 271 60.6654 271 135.5ZM55.9013 135.5C55.9013 179.461 91.5388 215.099 135.5 215.099C179.461 215.099 215.099 179.461 215.099 135.5C215.099 91.5388 179.461 55.9013 135.5 55.9013C91.5388 55.9013 55.9013 91.5388 55.9013 135.5Z"
      fill="white"
      fill-opacity="0.2"
      mask="url(#half-mask)" />
  </svg>
</template>
