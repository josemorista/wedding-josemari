<template>
  <NavBar />
  <SidebarMenu />
  <Hero />
  <About />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import Hero from "./components/templates/Hero.vue";
import About from "./components/templates/About.vue";
</script>