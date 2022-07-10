<template>
  <NavBar />
  <SidebarMenu />
  <Hero />
  <About />
  <Fiances />
</template>

<script setup lang="ts">
import NavBar from "./components/organisms/NavBar.vue";
import SidebarMenu from "./components/organisms/SidebarMenu.vue";
import Hero from "./components/templates/Hero.vue";
import About from "./components/templates/About.vue";
import Fiances from "./components/templates/Fiances.vue";
</script>