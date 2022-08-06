<template>
  <NavBar />
  <SidebarMenu />
  <Hero />
  <About />
  <Fiances />
  <GodParents />
  <Location />
  <Modal title="Confirme sua presença">
    <template v-slot:content>
      <label class="custom-input-label">
        Nome na lista de presença:
      </label>
      <div style="display:flex">
        <Input type="text" value="" @on-value-change="onValueChange" />
        <Button color="default">Buscar</Button>
      </div>
      <br />
      <Checkbox :options="[{ label: 'Sim', value: 'yes' }, { label: 'Não', value: 'no' }]" label="Você irá ao evento?"
        selected="yes" @on-value-change="onValueChange" />
      <br />
      <Input type="number" max-width="100px" value="" label="Quantidade de adultos incluindo você:"
        @on-value-change="onValueChange" />
      <br />
      <Input type="number" max-width="100px" value="" label="Quantidade de crianças:"
        @on-value-change="onValueChange" />
    </template>
    <template v-slot:footer>
      <Button color="pink">Confirmar presença</Button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import NavBar from "./components/organisms/NavBar.vue";
import SidebarMenu from "./components/organisms/SidebarMenu.vue";
import Hero from "./components/templates/Hero.vue";
import About from "./components/templates/About.vue";
import Fiances from "./components/templates/Fiances.vue";
import GodParents from "./components/templates/GodParents.vue";
import Location from "./components/templates/Location.vue";
import Gifts from "./components/templates/Gifts.vue";
import Modal from "./components/molecules/Modal.vue";
import Input from "./components/atoms/Input.vue";
import Checkbox from "./components/atoms/Checkbox.vue";
import Button from "./components/atoms/Button.vue";

const onValueChange = (e: string) => {
  console.log(e);
}
</script>