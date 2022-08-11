<template>
	<Modal title="Carrinho de presentes">
		<template v-slot:content>
			<ul>
				<li v-for="item of cart" :key="item.itemId">
					<div class="cart-item-details">
						<img :src="`src/assets/gifts/${item.details.picture}`" alt="">
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
						<button>Remover x1</button>
					</div>
				</li>
			</ul>
		</template>
	</Modal>
</template>

<script lang="ts" setup>
import { toRef } from 'vue';
import { useGiftsStore } from '../../store/gifts';
import Modal from '../molecules/Modal.vue';
const giftsStore = useGiftsStore();
const cart = toRef(giftsStore, 'cart');
</script>