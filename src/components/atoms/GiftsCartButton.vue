<template>
	<button v-if="totalItensOnCart" class="gifts-card-button" @click="onCartClick">
		<img src="src/assets/imgs/shopping-cart.svg" alt="cart" />
		<div class="gift-count-badge">
			{{ totalItensOnCart }}
		</div>
	</button>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useGiftsStore } from '../../store/gifts';
import { useGuestStore } from '../../store/guest';
import { useModalStore } from '../../store/modal';

const modalStore = useModalStore();
const isLogged = toRef(useGuestStore(), 'isLogged');
const totalItensOnCart = toRef(useGiftsStore(), 'totalItensOnCart');

const onCartClick = () => {
	if (!isLogged.value) {
		modalStore.openLoginModal();
	} else {
		modalStore.openCartModal();
	}
};
</script>
