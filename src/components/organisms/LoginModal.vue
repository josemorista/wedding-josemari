<template>
	<Modal title="Confirme sua presença">
		<template v-slot:content>
			<label class="custom-input-label"> Nome na lista de presença: </label>
			<form style="display: flex" @submit.prevent="attemptToLogin">
				<Input type="text" v-model="data.guestName" />
				<Button type="submit" color="default" :is-busy="loading">Buscar</Button>
			</form>
			<br />
			<Checkbox
				:options="[
					{ label: 'Sim', value: 'yes' },
					{ label: 'Não', value: 'no' }
				]"
				label="Você irá ao evento?"
				v-model="data.confirmed"
			/>
			<br />
			<Input
				type="number"
				max-width="100px"
				:model-value="data.numberOfEscorts"
				@update:model-value="onEscortsChange"
				label="Quantidade de adultos incluindo você:"
			/>
			<br />
			<Input
				type="number"
				max-width="100px"
				:model-value="data.numberOfChildren"
				@update:model-value="onChildrenChange"
				label="Quantidade de crianças:"
			/>
		</template>
		<template v-slot:footer>
			<Button color="pink" @click="updateGuest">Confirmar presença</Button>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '../molecules/Modal.vue';
import Checkbox from '../atoms/Checkbox.vue';
import Input from '../atoms/Input.vue';
import Button from '../atoms/Button.vue';
import { reactive, ref, toRef, watchEffect } from 'vue';
import { useGuestStore } from '../../store/guest';
import { useModalStore } from '../../store/modal';
interface LoginModalData {
	guestName: string;
	confirmed: string;
	numberOfEscorts: string;
	numberOfChildren: string;
}
const data: LoginModalData = reactive({
	confirmed: 'yes',
	guestName: '',
	numberOfChildren: '0',
	numberOfEscorts: '1'
});

const modalStore = useModalStore();
const guestStore = useGuestStore();
const guest = toRef(guestStore, 'guest');
const loading = ref(false);

watchEffect(() => {
	if (guest.value) {
		data.confirmed = guest.value.confirmed ? 'yes' : 'no';
		data.guestName = guest.value.name;
		data.numberOfChildren = String(guest.value.numberOfChildren);
		data.numberOfEscorts = String(guest.value.numberOfEscorts);
	}
});

const attemptToLogin = async () => {
	loading.value = true;
	try {
		if (data.guestName && data.guestName.length >= 3) {
			await guestStore.login(data.guestName);
		}
	} catch (error) {
		console.error(error);
	}
	loading.value = false;
};

const updateGuest = async () => {
	loading.value = true;
	try {
		await guestStore.updateGuest({
			confirmed: data.confirmed === 'yes',
			numberOfChildren: parseInt(data.numberOfChildren),
			numberOfEscorts: parseInt(data.numberOfEscorts)
		});
		modalStore.closeModal();
	} catch (error) {
		console.error(error);
	}
	loading.value = false;
};
const onEscortsChange = (value: string) => {
	if (Number(value) <= 2) {
		data.numberOfEscorts = value;
	}
};
const onChildrenChange = (value: string) => {
	if (Number(value) <= 2) {
		data.numberOfChildren = value;
	}
};
</script>
