<template>
	<section class="god-parents" id="app-god-parents-section">
		<SectionTitle title="Padrinhos" />
		<p>
			Nos conhecemos no dia 12 de março de 2018, no dia dos namorados. O mundo vivia um dos momentos mais críticos da
			pandemia e nosso primeiro contato foi através de um grupo de jovens da igreja batista pelo zoom.
		</p>
		<p>
			Nos aproximamos por um fato inédito ocorrido naquela mesma noite - Breno decidido a arrumar uma namorada e Júlia
			não disposta a encontrar o amor. Porém, como bom advogado que é, Breno conquista Júlia dia após dia com muitas
			horas de conversa (7 horas no telefone) e uma live no instagram.
		</p>
		<p>
			Alguns dias depois, Breno manda um lanche pra Júlia. Inicialmente, dá tudo errado, mas, incrivelmente certo!
		</p>
		<p>
			O primeiro encontro ocorreu no dia 18 de julho de 2020 e começamos a namorar no dia 02 de agosto, com a certeza
			que Deus uniu os nossos propósitos, noivamos com 4 meses e estamos sonhando para o nosso grande dia.
		</p>
		<PicturesGrid :large="true" :pictures="[
			{ picture: '/godParents/raul.jpg', legend: 'Raul C.' },
			{ picture: '/godParents/jaque.jpg', legend: 'Jaqueline C.' },
			{ picture: '/godParents/tomaz.jpg', legend: 'Tomaz P.' },
			{ picture: '/godParents/lydia.jpg', legend: 'Lydia S.' },
			{ picture: '/godParents/marcello.jpg', legend: 'Marcello C.' },
			{ picture: '/godParents/rayane.jpg', legend: 'Rayane F.' },
			{ picture: '/godParents/alan.jpg', legend: 'Alan W.' },
			{ picture: '/godParents/amanda.jpg', legend: 'Amanda C.' },
			{ picture: '/godParents/mara.jpg', legend: 'Bernardo C.' },
			{ picture: '/godParents/vithoria.jpg', legend: 'Vithória C.' }
		]" />
	</section>
</template>

<script setup lang="ts">
import SectionTitle from "../atoms/SectionTitle.vue";
import PicturesGrid from "../molecules/PicturesGrid.vue";
</script>