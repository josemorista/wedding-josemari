<template>
	<ul :class="['section-links', direction]">
		<li v-for="link of navLinks" :key="link.key" v-once @click="closeMenu">
			<a :href="link.elementId">{{ link.name }}</a>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { SectionLink } from "../../entities/SectionLink";
import { computed, defineProps } from "vue";
import { useMenuStore } from "../../store/menu";

interface SectionLinksProps {
	isVertical?: boolean;
}

const props = defineProps<SectionLinksProps>();
const direction = computed(() => props.isVertical ? "vertical" : "");

const menuStore = useMenuStore();

const closeMenu = () => {
	menuStore.closeMenu();
}

const navLinks = [
	new SectionLink("Home", "#app-hero-section"),
	new SectionLink("Os noivos", "#app-fiances-section"),
	new SectionLink("Padrinhos", "#app-god-parents-section"),
	new SectionLink("Cerimônia", "#app-about-section"),
	new SectionLink("Recepção", "#app-about-section"),
	new SectionLink("Lista de presentes", "#app-about-section"),
	new SectionLink("Confirme sua presença", "#app-about-section"),
	new SectionLink("Recados", "#app-about-section")
];
</script>