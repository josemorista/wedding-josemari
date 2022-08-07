<template>
	<Modal title="Confirme sua presença">
		<template v-slot:content>
			<label class="custom-input-label">
				Nome na lista de presença:
			</label>
			<div style="display:flex">
				<Input type="text" v-model="data.guestName" />
				<Button color="default">Buscar</Button>
			</div>
			<br />
			<Checkbox :options="[{ label: 'Sim', value: 'yes' }, { label: 'Não', value: 'no' }]" label="Você irá ao evento?"
				v-model="data.confirmed" />
			<br />
			<Input type="number" max-width="100px" :model-value="data.numberOfEscorts" @update:model-value="onEscortsChange"
				label="Quantidade de adultos incluindo você:" />
			<br />
			<Input type="number" max-width="100px" :model-value="data.numberOfChildren" @update:model-value="onChildrenChange"
				label="Quantidade de crianças:" />
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
interface LoginModalData {
	guestName: string;
	confirmed: string;
	numberOfEscorts: string;
	numberOfChildren: string;
}
const data: LoginModalData = reactive({
	confirmed: "yes",
	guestName: "",
	numberOfChildren: "0",
	numberOfEscorts: "1"
});
const onEscortsChange = (value: string) => {
	if (Number(value) <= 2) {
		data.numberOfEscorts = value;
	}
};
const onChildrenChange = (value: string) => {
	if (Number(value) <= 2) {
		data.numberOfChildren = value;
	}
}
</script>