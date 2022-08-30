<template>
	<label class="custom-input-label">{{ label }}</label>
	<div :class="{ 'checkbox-options': true, disabled: !!disabled }">
		<div v-for="option of options" class="checkbox-option" :key="option.value">
			<span
				:class="{ 'select-circle': true, checked: option.value === modelValue }"
				@click="selectOption(option.value)"
			>
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
	}>;
	disabled?: boolean;
}
interface CheckboxEmits {
	(event: 'update:modelValue', value: string): void;
}
const emitter = defineEmits<CheckboxEmits>();
const props = defineProps<CheckboxProps>();
const selectOption = (option: string) => {
	if (!props.disabled) {
		emitter('update:modelValue', option);
	}
};
</script>
