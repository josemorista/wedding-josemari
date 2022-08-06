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
				:selected="confirmedLabel" @input="onConfirmChange" />
			<br />
			<Input type="number" max-width="100px" v-model="data.numberOfEscorts"
				label="Quantidade de adultos incluindo você:" />
			<br />
			<Input type="number" max-width="100px" v-model="data.numberOfChildren" label="Quantidade de crianças:" />
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
</script>