<template>
	<div :class="{ 'pictures-grid': true, large: large }">
		<div class="picture-grid-item" v-for="picture of pictures" :key="picture.picture">
			<img class="grid-picture" :src="`/assets/imgs/${picture.picture}`" :alt="picture.legend" />
			<legend v-if="picture.legend">
				{{ picture.legend }}
			</legend>
		</div>
	</div>
</template>

<script setup lang="ts">
interface PicturesGridProps {
	pictures: Array<{ picture: string; legend?: string }>;
	large?: boolean;
}
defineProps<PicturesGridProps>();
</script>
