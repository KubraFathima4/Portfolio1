<template>
  <div
    id="slider"
    class="column-gap relative mt-[10%] grid w-full grid-cols-12 gap-2 max-md:min-h-svh lg:h-[85svh]"
  >
    <!-- ========== For Larger Screens ========== -->
    <template v-if="!isSmallScreen">
      <div
        class="columns-gap relative col-span-full flex flex-col max-lg:h-fit lg:col-span-6 lg:h-full"
      >
        <!-- LEFT SECTION CONTENT -->
        <h2 class="heading-3 font-bold">{{ quotes[index] }}</h2>

        <div
          id="quote-overlay"
          class="absolute inset-0 bg-white opacity-50 pointer-events-none"
        ></div>
      </div>

      <div class="relative flex h-full items-end justify-between">
        <div class="heading-5 flex w-2/12 items-center gap-3 overflow-clip">
          <p
            id="current-index"
            class="-translate-y-full will-change-transform"
          >
            {{ index + 1 }}
          </p>
          <p class="h-0.5 w-full bg-black"></p>
        </div>

        <div
          class="lg:absolute lg:inset-0 lg:-bottom-10 lg:w-full lg:will-change-scroll"
        >
          <div
            class="sticky top-[90%] flex place-content-end gap-3 lg:will-change-scroll"
          >
            <Button label="Prev" @click="clickPrev" />
            <Button label="Next" @click="clickNext" />
          </div>
        </div>
      </div>
    </template>

    <!-- ========== For Smaller Screens ========== -->
    <template v-else>
      <div
        class="col-span-full flex flex-col gap-4 p-4"
      >
        <div
          v-for="(q, i) in quotes"
          :key="i"
          class="p-3 border rounded"
        >
          {{ q }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import gsap from "gsap";

// Screen size reactive
const { width } = useWindowSize();
const isSmallScreen = computed(() => width.value < 640);

// Slider Data
const quotes = ref([
  "First quote goes here.",
  "Second quote goes here.",
  "Third quote goes here.",
  "Fourth quote goes here.",
]);

const index = ref(0);

// Prev / Next handlers
const clickNext = () => {
  index.value = (index.value + 1) % quotes.value.length;
};

const clickPrev = () => {
  index.value =
    (index.value - 1 + quotes.value.length) % quotes.value.length;
};

// GSAP Setup
onMounted(() => {
  if (!isSmallScreen.value) {
    gsap.set(["#quote-text .letters", "#current-index"], {
      translateY: 0,
    });
    gsap.set("#quote-overlay", {
      translateY: "100%",
    });
  }
});
</script>

<style scoped>
/* Optional styling if needed */
</style>
