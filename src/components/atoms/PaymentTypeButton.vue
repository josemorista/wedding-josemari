<template>
	<button :class="{ 'payment-type-button': true, selected }">
		<img :src="`src/assets/imgs/payment/${picture}`" alt="" />
		<p>{{ title }}</p>
	</button>
</template>

<script setup lang="ts">
interface PaymentTypeButtonProps {
	title: string;
	picture: string;
	selected: boolean;
}

defineProps<PaymentTypeButtonProps>();
</script>
