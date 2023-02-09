<template>
	<div class="toast" v-if="!!toast">
		<p class="toast-message">{{ toast.message }}</p>
	</div>
</template>

<script setup lang="ts">
import { defineExpose, ref, watchEffect } from 'vue';
export interface Toast {
	message: string;
}
export interface ToastExposes {
	setToast: (_toast: Toast) => void;
}

const toast = ref<Toast | null>(null);

watchEffect(() => {
	if (toast.value) {
		setTimeout(() => {
			toast.value = null;
		}, 5000);
	}
});

const setToast = (_toast: Toast) => {
	toast.value = _toast;
};

defineExpose({
	setToast,
});
</script>
