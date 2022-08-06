<template>
  <Modals />
  <NavBar />
  <SidebarMenu />
  <Hero />
  <About />
  <Fiances />
  <GodParents />
  <Location />
</template>

<script setup lang="ts">
import NavBar from "./components/organisms/NavBar.vue";
import SidebarMenu from "./components/organisms/SidebarMenu.vue";
import Hero from "./components/templates/Hero.vue";
import About from "./components/templates/About.vue";
import Fiances from "./components/templates/Fiances.vue";
import GodParents from "./components/templates/GodParents.vue";
import Location from "./components/templates/Location.vue";
import Gifts from "./components/templates/Gifts.vue";
import Modals from "./components/templates/Modals.vue";
</script>