<template>
	<button :class="`btn btn-${color}`" :disabled="disabled">
		<slot />
	</button>
</template>

<script setup lang="ts">
interface ButtonProps {
	color: "default" | "pink";
	disabled?: boolean;
}
interface ButtonEmits {
	onButtonClick: () => void;
}
defineProps<ButtonProps>();
defineEmits<ButtonEmits>();
</script>