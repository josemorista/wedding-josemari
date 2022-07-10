<template>
	<aside :class="['sidebar-menu', menuClass]">
		<SectionLinks :is-vertical="true" />
	</aside>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useMenuStore } from "../store/menu";
import SectionLinks from "./SectionLinks.vue";

const menuStore = useMenuStore();
const menuClass = computed(() => menuStore.isOpen ? "" : "closed");
</script>