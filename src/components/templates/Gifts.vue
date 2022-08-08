<template>
	<section class="gifts" id="app-gifts-section">
		<SectionTitle title="Lista de presentes" />
		<main>
			<div class="cart-button">
				<GiftsCartButton />
			</div>
			<GiftsList />
		</main>
	</section>
</template>

<script setup lang="ts">
import SectionTitle from "../atoms/SectionTitle.vue";
import GiftsList from "../organisms/GiftsList.vue";
import GiftsCartButton from "../atoms/GiftsCartButton.vue";
</script>