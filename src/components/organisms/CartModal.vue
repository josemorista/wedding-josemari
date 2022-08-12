<template>
	<Modal title="Carrinho de presentes">
		<template v-slot:content>
			<div class="cart-modal-content">
				<ul class="cart-items">
					<li v-for="item of cart" :key="item.itemId">
						<CartItem
							:item="{
								name: item.details.name,
								quantity: item.quantity,
								formattedPrice: item.details.formattedPrice,
								picture: item.details.picture
							}"
							@on-remove-click="onRemoveItemClick(item.itemId)"
						/>
					</li>
				</ul>
				<div class="payment-info">
					<p class="cart-total">
						Total da compra: <span>{{ formattedTotal }}</span>
					</p>
					<ul class="payment-types">
						<li v-for="payment of paymentOptions" :key="payment.value">
							<PaymentTypeButton
								@click="setSelectedPayment(payment.value)"
								:picture="payment.picture"
								:title="payment.title"
								:selected="selectedPayment === payment.value"
							/>
						</li>
					</ul>
					<div class="pix-display" v-if="selectedPayment === 'pix'">
						<img src="src/assets/imgs/qrcode.png" alt="" />
					</div>
				</div>
			</div>
		</template>
	</Modal>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import { useGiftsStore } from '../../store/gifts';
import Modal from '../molecules/Modal.vue';
import CartItem from '../molecules/CartItem.vue';
import PaymentTypeButton from '../atoms/PaymentTypeButton.vue';

type SelectedPaymentState = 'pix' | 'store' | null;

const giftsStore = useGiftsStore();
const { cart, cartTotal } = toRefs(giftsStore);

const selectedPayment = ref<SelectedPaymentState>(null);

const paymentOptions = [
	{
		title: 'Pix',
		picture: 'pix.png',
		value: 'pix'
	},
	{
		title: 'Loja',
		picture: 'store.png',
		value: 'store'
	}
] as const;

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
