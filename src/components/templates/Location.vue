<template>
	<section class="location" id="app-location-section">
		<SectionTitle title="Cerimônia" />
		<p>
			<strong> 12 de março de 2023, às 17:30h.</strong>
			Rua Clotilde Maria Linhares Pinsky, 91 - Charitas, Niterói - Rio de Janeiro, 24370-015
		</p>
		<img class="tropical-picture" src="/assets/imgs/tropical.webp" alt="Tropical Casa de Festas" />
		<iframe
			class="tropical-map"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14698.71890963845!2d-43.0938351!3d-22.925181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2067c55460c66c90!2sTropical%20Casa%20de%20Festas!5e0!3m2!1spt-BR!2sbr!4v1659877046227!5m2!1spt-BR!2sbr"
			allowfullscreen="false"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</section>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue';
</script>
