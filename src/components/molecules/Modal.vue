<template>
	<div class="modal-container">
		<div class="modal">
			<header class="modal-header">
				<h1>{{ title }}</h1>
			</header>
			<main class="modal-content">
				<slot name="content" />
			</main>
			<footer class="modal-footer">
				<slot name="footer" />
			</footer>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

interface ModalProps {
	title: string;
}

defineProps<ModalProps>();

onMounted(() => {
	const body = document.querySelector("body");
	if (body) {
		body.style.overflow = "hidden";
	}
});

onUnmounted(() => {
	const body = document.querySelector("body");
	if (body) {
		body.style.overflow = "auto";
	}
})
</script>