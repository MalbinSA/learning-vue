<template>

  <TheHeader @go-to-timeline="goTo(PAGE_TIMELINE)"
             @go-to-progress="goTo(PAGE_PROGRESS)"/>

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES"/>
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)"/>

</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { ref } from 'vue'
import { normalizePageHash } from '/function'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '/constants'

const currentPage = ref(normalizePageHash())

function goTo(page){
  currentPage.value = page
}

</script>

<style>
</style>
