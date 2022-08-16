<template>
	<div class="gift-item">
		<div class="item-preview">
			<img :src="`/assets/imgs/gifts/${gift.picture}`" :alt="gift.name" />
			<span v-if="gift.givenQuantity" class="chosen-quantity"> x{{ gift.givenQuantity }} </span>
		</div>
		<p class="gift-name">
			{{ gift.name }}
		</p>
		<p class="gift-price">
			{{ gift.formattedPrice }}
		</p>
		<p>Precisamos: {{ gift.quantityNeeded }}</p>
		<p>Temos: {{ gift.quantityNeeded - gift.quantityAvailableToGive }}</p>
		<div class="gift-item-buttons">
			<Button
				color="pink"
				@click="
					() => {
						$emit('add-gift', gift.itemId);
					}
				"
				:is-busy="isAddBusy"
				:disabled="gift.quantityAvailableToGive === 0"
			>
				Presentear
			</Button>
			<Button color="default" @click="navigateToSuggestion" v-if="gift.suggestedSeller"> Onde comprar? </Button>
			<Button
				v-if="!!gift.givenQuantity"
				color="default"
				:is-busy="isDropBusy"
				@click="
					() => {
						$emit('drop-gift', gift.itemId);
					}
				"
			>
				Remover
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { GiftOption } from '../../domain/entities/GiftOption';
import Button from '../atoms/Button.vue';
interface GiftItemProps {
	isAddBusy: boolean;
	isDropBusy: boolean;
	gift: GiftOption & {
		givenQuantity: number;
	};
}
interface GiftItemEmits {
	(event: 'add-gift', itemId: number): void;
	(event: 'drop-gift', itemId: number): void;
}
const props = defineProps<GiftItemProps>();
defineEmits<GiftItemEmits>();

const navigateToSuggestion = () => {
	if (props.gift.suggestedSeller) {
		window.open(props.gift.suggestedSeller, '__blank');
	}
};
</script>
