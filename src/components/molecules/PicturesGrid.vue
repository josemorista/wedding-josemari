<template>
	<div class="pictures-grid">
		<img class="grid-picture" v-for="picture of pictures" :key="picture" :src="`src/assets/imgs/${picture}`"
			alt="picture">
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface PicturesGridProps {
	pictures: Array<string>;
}

defineProps<PicturesGridProps>();

</script>