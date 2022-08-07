<template>
	<ul class="gifts-list">
		<li v-for="option of options" :key="option.itemId">
			<GiftItem :gift="option" />
		</li>
	</ul>
</template>

<script setup lang="ts">
import {toRef} from "vue";
import { useGiftsStore } from "../../store/gifts";
import GiftItem from "../molecules/GiftItem.vue";
const options = toRef(useGiftsStore(), "options");
</script>