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
			<SectionLinks />
		</div>
	</nav>
</template>

<script setup lang="ts">
import MenuIcon from "../atoms/MenuIcon.vue";
import SectionLinks from "../molecules/SectionLinks.vue";
</script>