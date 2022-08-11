<template>
	<LoginModal v-if="currentOpen === 'login'" />
	<CartModal v-if="currentOpen === 'cart'" />
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useModalStore } from '../../store/modal';
import LoginModal from '../organisms/LoginModal.vue';
import CartModal from '../organisms/CartModal.vue';

const modalStore = useModalStore();
const currentOpen = toRef(modalStore.$state, 'currentOpen');
</script>