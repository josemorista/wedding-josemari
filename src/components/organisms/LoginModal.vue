<template>
	<Modal title="Confirme sua presença">
		<template v-slot:content>
			<label class="custom-input-label">
				Nome na lista de presença:
			</label>
			<div style="display:flex">
				<Input type="text" :value="data.guestName" @on-value-change="onNameChange" />
				<Button color="default">Buscar</Button>
			</div>
			<br />
			<Checkbox :options="[{ label: 'Sim', value: 'yes' }, { label: 'Não', value: 'no' }]" label="Você irá ao evento?"
				:selected="confirmedLabel" @on-value-change="onConfirmChange" />
			<br />
			<Input type="number" max-width="100px" :value="data.numberOfEscorts" label="Quantidade de adultos incluindo você:"
				@on-value-change="onEscortNumberChange" />
			<br />
			<Input type="number" max-width="100px" :value="data.numberOfChildren" label="Quantidade de crianças:"
				@on-value-change="onChildrenNumberChange" />
		</template>
		<template v-slot:footer>
			<Button color="pink">Confirmar presença</Button>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import Modal from "../molecules/Modal.vue";
import Checkbox from "../atoms/Checkbox.vue";
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
import { reactive } from "vue";
import { computed } from "@vue/reactivity";
interface LoginModalData {
	guestName: string;
	confirmed: boolean;
	numberOfEscorts: string;
	numberOfChildren: string;
}
const data: LoginModalData = reactive({
	confirmed: true,
	guestName: "",
	numberOfChildren: "0",
	numberOfEscorts: "1"
});

const confirmedLabel = computed(() => data.confirmed ? "yes" : "no");
const onConfirmChange = (value: string) => {
	if (value === "yes") data.confirmed = true;
	else data.confirmed = false;
}

const onNameChange = (value: string) => {
	data.guestName = value;
};

const onEscortNumberChange = (value: string) => {
	data.numberOfEscorts = value;
};

const onChildrenNumberChange = (value: string) => {
	data.numberOfChildren = value;
};
</script>