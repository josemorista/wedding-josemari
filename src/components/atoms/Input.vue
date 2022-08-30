<template>
	<label v-if="!!label" :class="{ 'custom-input-label': true, error: !!error }">{{ label }}</label>
	<input
		class="custom-input"
		:type="type"
		v-model="value"
		:style="`max-width:${maxWidth || '100%'};`"
		:max="max"
		:disabled="disabled"
		@change="$e => ($e.target as any).value = modelValue"
	/>
</template>

<script setup lang="ts">
import { computed, InputHTMLAttributes } from 'vue';
interface InputProps {
	type: InputHTMLAttributes['type'];
	modelValue: string | number;
	label?: string;
	maxWidth?: string;
	max?: InputHTMLAttributes['max'];
	error?: boolean;
	disabled?: boolean;
}
interface InputEmits {
	(event: 'update:modelValue', value: string | number): void;
}
const props = defineProps<InputProps>();
const emitter = defineEmits<InputEmits>();
const value = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emitter('update:modelValue', value);
	},
});
</script>
