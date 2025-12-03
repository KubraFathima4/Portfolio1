<template>
  <section
    id="about-me-section"
    class="common-padding text-flax-smoke-200 relative z-10 overflow-y-clip rounded-b-3xl bg-[#0B0B0A] shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h3
        id="little-bit-about-me"
        v-html="aboutMe"
        class="heading-1-alt lg:heading-1 section-heading col-span-full leading-none font-bold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <div class="padding-y md:column-gap mt-6 grid grid-cols-12">
      <div
        class="pointer-events-none col-span-full content-end rounded-lg select-none md:col-span-4"
      >
        <img
          :src="profile2"
          class="aspect-[1/1.5] rounded-lg object-cover object-top mix-blend-screen brightness-90"
          alt="Headshot of Pradeep facing a camera"
        />
      </div>
      <div class="col-span-11 mt-10 md:col-span-8 md:col-start-6">
       <p
          class="heading-4 relative w-full max-w-[40ch] leading-snug font-medium text-balance"
        >
          I’m a UI/UX Designer focused on creating clean, intuitive, and user-centered
          digital experiences. I enjoy transforming complex ideas into simple,
          meaningful interfaces that feel natural and effortless to use.
        </p>


        <div
          class="text-flax-smoke-300 mt-[5%] flex justify-start gap-10 sm:gap-20"
        >
          <p class="heading-6 text-flax-smoke-300/85 text-center text-nowrap">
            ( ABOUT ME )
          </p>
              <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
        With hands-on experience in designing websites, dashboards, and CRM platforms,
        I work across the full UI/UX process — from user research and wireframing to
        visual design and prototyping. My approach is driven by usability, clarity,
        and strong visual hierarchy to ensure every interface serves both user needs
        and business goals. <br /><br />
        I value collaboration and enjoy working closely with developers and product
        teams to deliver pixel-perfect designs and smooth handoffs. Outside of design,
        I’m constantly learning, exploring new UI trends, and refining my craft to
        build better digital products.
      </p>
        </div>
         <a
            href="/Pradeep_Kishor_CV.pdf"
            download
            class="mt-8 inline-flex items-center gap-3 rounded-full border border-flax-smoke-400/40 px-6 py-3 text-sm font-semibold text-flax-smoke-200 transition-all duration-300 hover:border-flax-smoke-200 hover:bg-flax-smoke-200/5"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateAboutMeSectionLeave,
  } from '@/animations';
  import  profile2 from '@/assets/images/profile2.jpg';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const aboutMe = ref('ٍSelected Projects /');
  


  // const initialPath = ref(`M0 0H${width.value}  V${height.value} H0 Z`);
  // const targetPath = ref(
  //   `M0 0H${width.value}L${width.value * 0.9} ${height.value}H${width.value * 0.1}L0 0Z`,
  // );

 onBeforeMount(() => {
  aboutMe.value = textSplitterIntoChar(
    'UI/UX-Designer',
    true,
    true,
  );
});


  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateAboutMeSectionLeave('#about-me-section');
  });
</script>
