<template>
	<label v-if="!!label" class="custom-input-label">{{ label }}</label>
	<input class="custom-input" :type="type" :value="value" @input="onValueChange"
		:style="`max-width:${maxWidth || '100%'};`">
</template>

<script setup lang="ts">
import { InputHTMLAttributes, defineEmits, defineProps } from "vue";

interface InputProps {
	type: InputHTMLAttributes["type"];
	value: string;
	label?: string;
	maxWidth?: string;
}

interface InputEmits {
	(event: "on-value-change", value: string): void;
}

const emitter = defineEmits<InputEmits>();
const onValueChange = ($event: any) => {
	emitter("on-value-change", $event.target.value);
};
defineProps<InputProps>();
</script>