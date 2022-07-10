<template>
	<div :class="['menu-icon', menuClass]" @click="onMenuClick">
		<span class="menu-icon-bar"></span>
		<span class="menu-icon-bar"></span>
		<span class="menu-icon-bar"></span>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMenuStore } from "../../store/menu";

const menuStore = useMenuStore();
const menuClass = computed(() => menuStore.isOpen ? "open" : "");
const onMenuClick = () => {
	menuStore.toggleMenu();
}
</script>