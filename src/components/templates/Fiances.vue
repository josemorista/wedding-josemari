<template>
	<section class="fiances" id="app-fiances-section">
		<SectionTitle title="Os Noivos" />
		<PicturesGrid
			:pictures="[{ picture: 'f-0.jpg' }, { picture: 'f-1.jpg' }, { picture: 'f-2.jpg' }, { picture: 'f-3.jpg' }]"
		/>
		<p>Nos vimos pela primeira vez no dia 12 de março de 2018.</p>
		<p>
			Nesse dia, José deveria ter ido para Rio das Ostras para o retorno das aulas de sua faculdade mas decidiu adiar em
			um dia sua ida para que pudessem se encontrar; como era também o retorno das aulas para Mariane, ela estava
			fazendo sua mudança para Niterói e este era o seu primeiro dia morando sozinha. Ansiosos para se conhecer
			pessoalmente após duas semanas conversando pelo whatsapp, ultrapassaram um dia bem agitado, de mudanças até que
			finalmente se encontraram em frente a faculdade de Mariane. O encontro estava marcado para às 20:00 horas, mas
			mesmo assim o plano era sair pra tomar café. Depois do café foram ao cinema e assistiram a um filme de terror
			incrivelmente ruim, mas mesmo assim se divertiram muito conversando e rindo durante o filme todo (o que talvez não
			tenha deixado os outros espectadores muito contentes hehe).
		</p>
		<p>
			Depois desse dia, nos víamos a cada 15 dias ou mais, afinal morávamos em cidades diferentes. Mas 6 meses depois a
			vontade de estar junto foi maior que qualquer distância e o pedido de namoro aconteceu, e foi da forma mais
			romântica possível. O tempo foi passando, nos vimos crescer e caminhar para cada objetivo de estudos e carreira,
			atravessamos a pandemia morando a 2 horas de distância, ficamos noivos e agora estamos caminhando para iniciar a
			nossa família. Graças a Deus nos encontramos, a vida não poderia ser melhor. ❤️
		</p>
	</section>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue';
import PicturesGrid from '../molecules/PicturesGrid.vue';
</script>
