<template>
	<Modal title="Confirme sua presença">
		<template v-slot:content>
			<div class="login-modal-content">
				<label class="custom-input-label"> Nome na lista de presença: </label>
				<form style="display: flex" @submit.prevent="attemptToLogin">
					<Input type="text" v-model="data.guestName" />
					<Button type="submit" color="default" :is-busy="loadings.login">Buscar</Button>
				</form>
				<p class="login-error" v-if="!!loginError">{{ loginError }}</p>
				<br />
				<Checkbox
					:options="[
						{ label: 'Sim', value: 'yes' },
						{ label: 'Não', value: 'no' },
					]"
					label="Você irá ao evento?"
					v-model="data.confirmed"
					:disabled="!guestStore.isLogged"
				/>
				<br />
				<Input
					type="number"
					max-width="100px"
					:model-value="data.numberOfEscorts"
					@update:model-value="onEscortsChange"
					label="Quantidade de acompanhantes adultos:"
					:disabled="!guestStore.isLogged"
				/>
				<div class="escorts" v-if="data.numberOfEscorts">
					<br />
					<Input type="text" :model-value="data.escortName" label="Nome do acompanhante:" />
				</div>
				<br />
				<Input
					type="number"
					max-width="100px"
					:model-value="data.numberOfChildren"
					@update:model-value="onChildrenChange"
					label="Quantidade de crianças:"
					:disabled="!guestStore.isLogged"
				/>
			</div>
		</template>
		<template v-slot:footer>
			<Button color="pink" :disabled="!guestStore.isLogged" @click="updateGuest" :is-busy="loadings.confirm"
				>Confirmar presença</Button
			>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '../molecules/Modal.vue';
import Checkbox from '../atoms/Checkbox.vue';
import Input from '../atoms/Input.vue';
import Button from '../atoms/Button.vue';
import { reactive, ref, toRef, watch, watchEffect } from 'vue';
import { useGuestStore } from '../../store/guest';
import { useModalStore } from '../../store/modal';
interface LoginModalData {
	guestName: string;
	confirmed: string;
	numberOfEscorts: number;
	numberOfChildren: number;
	escortName: string;
}
const data: LoginModalData = reactive({
	confirmed: 'yes',
	guestName: '',
	numberOfChildren: 0,
	numberOfEscorts: 0,
	escortName: '',
});

const modalStore = useModalStore();
const guestStore = useGuestStore();
const guest = toRef(guestStore, 'guest');
const loadings = reactive({
	login: false,
	confirm: false,
});
const loginError = ref<string | null>(null);

watch(toRef(data, 'guestName'), () => {
	if (loginError.value) {
		loginError.value = null;
	}
});

watchEffect(() => {
	if (guest.value) {
		data.confirmed = guest.value.confirmed ? 'yes' : 'no';
		data.guestName = guest.value.name;
		data.numberOfChildren = guest.value.numberOfChildren;
		data.numberOfEscorts = guest.value.escorts.length;
	}
});

const attemptToLogin = async () => {
	loadings.login = true;

	try {
		if (data.guestName && data.guestName.length >= 3) {
			await guestStore.login(data.guestName);
		} else {
			loginError.value = 'Digite ao menos 3 letras de seu nome ;)';
		}
	} catch (error) {
		console.error(error);
		loginError.value = 'Ops, nome não encontrado na lista :(';
	}

	loadings.login = false;
};

const updateGuest = async () => {
	loadings.confirm = true;
	try {
		let escorts = data.numberOfEscorts !== 0 ? [{ name: data.escortName }] : [];
		await guestStore.updateGuest({
			confirmed: data.confirmed === 'yes',
			numberOfChildren: data.numberOfChildren,
			escorts,
		});
		modalStore.closeModal();
	} catch (error) {
		console.error(error);
	}
	loadings.confirm = false;
};

const onEscortsChange = (value: string | number) => {
	const parsed = Number(value);
	if (parsed <= 1 && parsed >= 0) {
		data.numberOfEscorts = parsed;
	}
};
const onChildrenChange = (value: string | number) => {
	const parsed = Number(value);
	if (parsed <= 1 && parsed >= 0) {
		data.numberOfChildren = parsed;
	}
};
</script>
