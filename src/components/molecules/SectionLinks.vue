<template>
	<ul :class="['section-links', direction]">
		<li v-for="link of navLinks" :key="link.key" v-once @click="closeMenu">
			<a :href="link.elementId">{{ link.name }}</a>
		</li>
		<li>
			<a @click="openLogin">Confirme sua presença</a>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { SectionLink } from "../../entities/SectionLink";
import { computed } from "vue";
import { useMenuStore } from "../../store/menu";
import { useModalStore } from "../../store/modal";

interface SectionLinksProps {
	isVertical?: boolean;
}

const props = defineProps<SectionLinksProps>();
const direction = computed(() => props.isVertical ? "vertical" : "");

const menuStore = useMenuStore();

const closeMenu = () => {
	menuStore.closeMenu();
}

const modalStore = useModalStore();

const openLogin = () => {
	modalStore.openLoginModal();
}

const navLinks = [
	new SectionLink("Home", "#app-hero-section"),
	new SectionLink("Os noivos", "#app-fiances-section"),
	new SectionLink("Padrinhos", "#app-god-parents-section"),
	new SectionLink("Cerimônia", "#app-location-section"),
	new SectionLink("Lista de presentes", "#app-gifts-section")
];
</script>