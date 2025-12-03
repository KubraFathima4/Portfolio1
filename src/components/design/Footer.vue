<template>
  <footer
    class="relative flex flex-col items-center justify-center gap-20 p-[2%]"
  >
    <!-- Top Sections -->
    <div class="grid w-full grid-cols-2 text-base sm:gap-x-6 md:grid-cols-12">
      <div
        v-for="section in footerSections"
        :key="section.title"
        class="flex flex-col md:col-span-3"
        :class="{ 'md:col-span-6': section.title === 'Menu' }"
      >
        <p
          class="heading-5 border-flax-smoke-400 w-full border-b pb-2 font-bold"
        >
          {{ section.title }}
        </p>

        <div class="mt-2 space-y-1">
          <template v-if="section.title === 'Contact'">
              <p class="heading-6">
                  <a href="mailto:pradeepkishor.0227@gmail.com">pradeepkishor.0227@gmail.com</a>
              </p>
              <p class="heading-6">
                  <a href="tel:+916380101407">+91 6380101407</a>
              </p>
              <p class="heading-6">India · Remote</p>
          </template>


          <template v-else>
            <p
              v-for="link in section.links"
              :key="link.label"
              class="heading-6"
            >
              <Link
                class="h-[3ch]! font-medium tracking-wider lowercase"
                :label="link.label"
                :url="link.url"
              />
            </p>
          </template>
        </div>
      </div>
    </div>

    <!-- Bottom Center -->
    <div class="w-full flex justify-center items-center">
      <p class="heading-6 font-semibold text-center">
        All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { navbarLinks,socialLinks } from '@/data'
import { Link } from '..'


const footerSections = [
  { title: 'Menu', links: navbarLinks },
  { title: 'Socials', links: socialLinks },
  { title: 'Contact' }
]

</script>
