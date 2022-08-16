<template>
	<button :class="`btn btn-${color}`" :disabled="disabled || isBusy">
		<slot v-if="!isBusy" />
		<img class="loading-img" v-if="isBusy" :src="`/assets/imgs/loading-${color}.gif`" />
	</button>
</template>

<script setup lang="ts">
interface ButtonProps {
	color: 'default' | 'pink';
	disabled?: boolean;
	isBusy?: boolean;
}
interface ButtonEmits {
	onButtonClick: () => void;
}
defineProps<ButtonProps>();
defineEmits<ButtonEmits>();
</script>
