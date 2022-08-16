<template>
	<section class="god-parents" id="app-god-parents-section">
		<SectionTitle title="Padrinhos" />
		<PicturesGrid
			:large="true"
			:pictures="[
				{ picture: '/godParents/raul.jpg', legend: 'Raul C.' },
				{ picture: '/godParents/jaque.jpg', legend: 'Jaqueline C.' },
				{ picture: '/godParents/tomaz.jpg', legend: 'Tomaz P.' },
				{ picture: '/godParents/lydia.jpg', legend: 'Lydia S.' },
				{ picture: '/godParents/marcello.jpg', legend: 'Marcello C.' },
				{ picture: '/godParents/rayane.jpg', legend: 'Rayane F.' },
				{ picture: '/godParents/alan.jpg', legend: 'Alan W.' },
				{ picture: '/godParents/amanda.jpg', legend: 'Amanda C.' },
				{ picture: '/godParents/mara.jpg', legend: 'Bernardo C.' },
				{ picture: '/godParents/vithoria.jpg', legend: 'Vithória C.' }
			]"
		/>
	</section>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue';
import PicturesGrid from '../molecules/PicturesGrid.vue';
</script>
