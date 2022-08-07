<template>
	<section class="location" id="app-location-section">
		<SectionTitle title="Cerimônia" />
		<p>
			<strong> 12 de março de 2023, às 17h.</strong>
			Primeira Igreja Batista de Niterói, Avenida Marques de Paraná - Centro, Niterói - RJ, CEP: 23.890-000.
		</p>
		<img class="tropical-picture" src="src/assets/imgs/tropical.webp" alt="Tropical Casa de Festas">
		<div ref="mapDivRef" id="mapContainer" style="height:300px;width:100%;"></div>
	</section>
</template>

<script setup lang="ts">
import SectionTitle from "../atoms/SectionTitle.vue";
import { onMounted, ref } from "vue";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const mapDivRef = ref<HTMLDivElement | null>(null);
const map = ref<L.Map | undefined>()

onMounted(() => {
	if (mapDivRef.value) {
		map.value = L.map(mapDivRef.value).setView([50, 14], 5);
		L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map.value);
		L.marker([50, 14]).addTo(map.value);
	}
});
</script>