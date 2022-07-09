<template>
	<nav class="nav-bar">
		<div class="names-and-date">
			<div class="menu-icon-container">
				<MenuIcon />
			</div>
			<h1>
				Casamento José Morista e Mariane Ferreira
			</h1>
			<h4>
				12/03/2023
			</h4>
		</div>
		<div class="nav-links">
			<ul>
				<li v-for="link of navLinks" :key="link.key" v-once>
					<a class="nav-link" :href="link.elementId">{{ link.name }}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup lang="ts">
import MenuIcon from "./MenuIcon.vue";
import { SectionLink } from "../entities/SectionLink";
const navLinks = [
	new SectionLink("Home", "#app-hero-section"),
	new SectionLink("Os noivos", "#app-about-section"),
	new SectionLink("Os padrinhos", "#app-about-section"),
	new SectionLink("Cerimônia", "#app-about-section"),
	new SectionLink("Recepção", "#app-about-section"),
	new SectionLink("Lista de presentes", "#app-about-section"),
	new SectionLink("Confirme sua presença", "#app-about-section"),
	new SectionLink("Recados", "#app-about-section")
];
</script>