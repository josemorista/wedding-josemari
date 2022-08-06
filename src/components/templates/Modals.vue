<template>
	<LoginModal v-if="currentOpen === 'login'" />
</template>

<script setup lang="ts">
import { toRef } from "vue";
import { useModalStore } from "../../store/modal";
import LoginModal from "../organisms/LoginModal.vue";

const modalStore = useModalStore()
const currentOpen = toRef(modalStore.$state, 'currentOpen');
</script>