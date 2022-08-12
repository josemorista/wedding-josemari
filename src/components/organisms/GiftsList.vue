<template>
	<ul class="gifts-list">
		<li v-for="option of optionsWithQuantities" :key="option.itemId">
			<GiftItem :gift="option" @add-gift="onAddGift" @drop-gift="onDropGift" />
		</li>
	</ul>
</template>

<script setup lang="ts">
import { computed, toRef, toRefs } from 'vue';
import { GiftOption } from '../../domain/entities/GiftOption';
import { useGiftsStore } from '../../store/gifts';
import { useGuestStore } from '../../store/guest';
import { useModalStore } from '../../store/modal';
import GiftItem from '../molecules/GiftItem.vue';

const giftsStore = useGiftsStore();
const modalStore = useModalStore();

const { options, isBusy } = toRefs(giftsStore);
const guest = toRef(useGuestStore(), 'guest');

const optionsWithQuantities = computed(() => {
	let giftsList: Array<GiftOption & { givenQuantity: number }> = [];
	for (const option of options.value) {
		const guestEntry = option.history.find(el => el.guestId === guest.value?.id);
		giftsList.push({
			...option,
			givenQuantity: guestEntry?.quantity || 0
		});
	}
	return giftsList;
});

const onAddGift = async (itemId: number) => {
	if (isBusy.value) return;
	if (!guest.value) {
		modalStore.openLoginModal();
	} else {
		await giftsStore.addGift({
			itemId,
			quantity: 1
		});
	}
};

const onDropGift = async (itemId: number) => {
	if (isBusy.value) return;
	if (!guest.value) {
		modalStore.openLoginModal();
	} else {
		await giftsStore.dropGift({
			itemId,
			quantity: 1
		});
	}
};
</script>