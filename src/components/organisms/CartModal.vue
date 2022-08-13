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
					<div class="payment-display" v-if="selectedPayment === 'pix'">
						<p>Pode nos enviar o valor desejado diretamente em nosso pix 😉:</p>
						<img src="/assets/imgs/qrcode.png" alt="" />
					</div>

					<div class="payment-display" v-if="selectedPayment === 'store'">
						<p>
							Caso deseje nos enviar, o endereço para entrega é
							<strong>Rua Zoraida Brasil Alcantâra, n° 86, apto 303, Fonseca Niterói. CEP 24130-135. 🙂</strong>
						</p>
					</div>
				</div>
			</div>
		</template>
		<template v-slot:footer>
			<Button color="pink" @click="onConfirmClick">Confirmar</Button>
		</template>
	</Modal>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import { useGiftsStore } from '../../store/gifts';
import Modal from '../molecules/Modal.vue';
import CartItem from '../molecules/CartItem.vue';
import PaymentTypeButton from '../atoms/PaymentTypeButton.vue';
import Button from '../atoms/Button.vue';
import { useModalStore } from '../../store/modal';

type SelectedPaymentState = 'pix' | 'store' | null;

const giftsStore = useGiftsStore();
const { cart, cartTotal } = toRefs(giftsStore);
const modalStore = useModalStore();

const selectedPayment = ref<SelectedPaymentState>(null);

const paymentOptions = [
	{
		title: 'Pix',
		picture: 'pix.svg',
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

const onConfirmClick = () => {
	modalStore.closeModal();
};
</script>
