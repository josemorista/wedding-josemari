<template>
	<div class="gift-item">
		<div class="item-preview">
			<img :src="gift.picture" :alt="gift.name">
			<span v-if="gift.givenQuantity" class="chosen-quantity">
				x{{gift.givenQuantity}}
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
		<Button color="pink" @click="() => {$emit('add-gift', gift.itemId);}" :disabled="gift.quantityAvailableToGive === 0">
			Presentear
		</Button>
		<Button color="default">
			Onde comprar?
		</Button>
		<Button v-if="!!gift.givenQuantity" color="default" @click="() => {$emit('drop-gift', gift.itemId);}">
			Remover
		</Button>
	</div>
</template>

<script setup lang="ts">
import { GiftOption } from "../../domain/entities/GiftOption";
import Button from "../atoms/Button.vue";
interface GiftItemProps {
	gift: GiftOption & {
		givenQuantity: number
	};
}
interface GiftItemEmits {
	(event: "add-gift", itemId: number): void;
	(event: "drop-gift", itemId: number): void;
}
defineProps<GiftItemProps>();
defineEmits<GiftItemEmits>();
</script>