<template>
	<div class="gift-item">
		<div class="item-preview">
			<img :src="gift.picture" :alt="gift.name">
			<span v-if="quantityGiven" class="chosen-quantity">
				x{{quantityGiven}}
			</span>
		</div>
		<p class="gift-name">
			{{gift.name}}
		</p>
		<p class="gift-price">
			{{gift.averagePrice}}
		</p>
		<p>
			Precisamos: {{gift.quantityNeeded}}
		</p>
		<p>
			Temos: {{gift.quantityNeeded - gift.quantityAvailableToGive}}
		</p>
		<Button color="pink" @click="addGift" :disabled="gift.quantityAvailableToGive === 0">
			Presentear
		</Button>
		<Button color="default">
			Onde comprar?
		</Button>
		<Button v-if="!!quantityGiven" color="default" @click="dropGift">
			Remover
		</Button>
	</div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { toRef } from "vue";
import { GiftOption } from "../../domain/entities/GiftOption";
import { useGiftsStore } from "../../store/gifts";
import Button from "../atoms/Button.vue";
interface GiftItemProps {
	gift: GiftOption;
}
const props = defineProps<GiftItemProps>();
const giftsStore = useGiftsStore();
const cartRef = toRef(giftsStore, 'cart');

const quantityGiven = computed(() => {
	return cartRef.value.find(el => el.itemId === props.gift.itemId)?.quantity;
});

const addGift = () => {
	giftsStore.addGift({
		itemId: props.gift.itemId,
		quantity: 1
	});
};
const dropGift = () => {
	giftsStore.dropGift({
		itemId: props.gift.itemId,
		quantity: 1
	});
};
</script>