<template>
	<div class="cart-item">
		<div class="cart-item-details">
			<img :src="`src/assets/imgs/gifts/${item.picture}`" alt="" />
			<div class="cart-item-info">
				<p class="cart-item-name">
					{{ item.name }}
				</p>
				<p class="cart-item-price">
					{{ item.formattedPrice }}
					<span class="cart-item-quantity">x{{ item.quantity }}</span>
				</p>
			</div>
		</div>
		<div class="cart-item-actions">
			<button @click="$emit('onRemoveClick')">Remover x1</button>
		</div>
	</div>
</template>

<script setup lang="ts">
interface CartItemProps {
	item: {
		name: string;
		picture: string;
		quantity: number;
		formattedPrice: string;
	};
}
interface CartItemEmits {
	(event: 'onRemoveClick'): void;
}
defineEmits<CartItemEmits>();
defineProps<CartItemProps>();
</script>
