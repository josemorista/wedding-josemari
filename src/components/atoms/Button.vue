<template>
	<button :class="`btn btn-${color}`">
		<slot />
	</button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
interface ButtonProps {
	color: "default" | "pink";
}
interface ButtonEmits {
	onButtonClick: () => void;
}
defineProps<ButtonProps>();
defineEmits<ButtonEmits>();
</script>