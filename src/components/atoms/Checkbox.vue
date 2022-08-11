<template>
	<label class="custom-input-label">{{ label }}</label>
	<div class="checkbox-options">
		<div v-for="option of options" class="checkbox-option">
			<span :class="{ 'select-circle': true, 'checked': option.value === modelValue }"
				@click="selectOption(option.value)">
			</span>
			<p>
				{{ option.label }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
interface CheckboxProps {
	label: string;
	modelValue: string;
	options: Array<{
		label: string;
		value: string;
	}>
}
interface CheckboxEmits {
	(event: 'update:modelValue', value: string): void;
}
const emitter = defineEmits<CheckboxEmits>();
defineProps<CheckboxProps>();
const selectOption = (option: string) => {
	emitter('update:modelValue', option);
};
</script>