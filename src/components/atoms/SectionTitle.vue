<template>
	<div class="section-title">
		<h1>
			{{ title }}
		</h1>
		<img src="../../assets/imgs/title-icon.png" alt="...">
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface SectionTitleProps {
	title: string;
}

defineProps<SectionTitleProps>();
</script>