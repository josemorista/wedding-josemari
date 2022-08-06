<template>
	<label v-if="!!label" class="custom-input-label">{{ label }}</label>
	<input class="custom-input" :type="type" :value="modelValue" @input="onValueChange"
		:style="`max-width:${maxWidth || '100%'};`" :max="max">
</template>

<script setup lang="ts">
import { InputHTMLAttributes, defineEmits, defineProps } from "vue";
interface InputProps {
	type: InputHTMLAttributes["type"];
	modelValue: string;
	label?: string;
	maxWidth?: string;
	max?: InputHTMLAttributes["max"]
}
interface InputEmits {
	(event: "update:modelValue", value: string): void;
}
defineProps<InputProps>();
const emitter = defineEmits<InputEmits>();
const onValueChange = ($event: any) => {
	emitter("update:modelValue", $event.target.value);
};
</script>