<template>
	<nav class="nav-bar">
		<div class="names-and-date">
			<h1>
				Casamento José Morista e Mariane Ferreira
			</h1>
			<h4>
				12/03/2023
			</h4>
		</div>
		<div class="nav-links">
			<ul>
				<li v-for="link of navLinks" :key="link">
					<a class="nav-link" href="">{{ link }}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup lang="ts">
const navLinks = [
	"HOME", "OS NOIVOS", "PADRINHOS", "CERIMÔNIA", "RECEPÇÃO", "LISTA DE PRESENTES", "CONFIRME SUA PRESENÇA", "RECADOS"
];
</script>

<style src="./NavBar.scss">
</style>