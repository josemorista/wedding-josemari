<template>
	<Modal title="Carrinho de presentes">
		<template v-slot:content>
			<div class="cart-modal-content">
					<ul class="cart-items">
						<li v-for="item of cart" :key="item.itemId">
						<div class="cart-item-details">
							<img :src="`src/assets/imgs/gifts/${item.details.picture}`" alt="">
							<div class="cart-item-info">
								<p>
									{{ item.details.name }}
								</p>
								<p class="cart-item-price">
									{{ item.details.formattedPrice }}
									<span class="cart-item-quantity">x{{ item.quantity }}</span>
								</p>
							</div>
						</div>
						<div class="cart-item-actions">
							<button @click="onRemoveItemClick(item.itemId)">Remover x1</button>
						</div>
					</li>
				</ul>
				<section class="payment-info">
					<p class="cart-total">
						{{formattedTotal}}
					</p>
					<ul class="payment-types">
						<li @click="setSelectedPayment('pix')">
							<img src="" alt="">
							<p>Pix</p>
						</li>
						<li @click="setSelectedPayment('store')">
							<img src="" alt="">
							<p>Loja</p>
						</li>
					</ul>
					<div class="pix-display" v-if="selectedPayment === 'pix'">
						<img src="" alt="">
					</div>
				</section>
			</div>
		</template>
	</Modal>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import { useGiftsStore } from '../../store/gifts';
import Modal from '../molecules/Modal.vue';

type SelectedPaymentState = 'pix' | 'store' | null;

const giftsStore = useGiftsStore();
const {cart, cartTotal} = toRefs(giftsStore);

const selectedPayment = ref<SelectedPaymentState>(null);

const priceFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
	minimumFractionDigits: 2
});

const formattedTotal = computed(() => {
	return priceFormatter.format(cartTotal.value);
});

const onRemoveItemClick = async (itemId: number) => {
	try {
		await giftsStore.dropGift({
			itemId,
			quantity: 1
		});	
	} catch (error) {
		console.error(error);
	}
};

const setSelectedPayment = (payment: SelectedPaymentState) => {
	selectedPayment.value = payment;
};
</script>