<template>
	<div class="gift-item">
		<div class="item-preview">
			<img src="" alt="">
			<span class="chosen-quantity">
				x2
			</span>
		</div>
		<p class="gift-name">
			Avião do Faustão
		</p>
		<p class="gift-price">
			R$ 1499,20
		</p>
		<p>
			Precisamos: 4
		</p>
		<p>
			Temos: 3
		</p>
		<Button color="pink">
			Presentear
		</Button>
		<Button color="default">
			Onde comprar?
		</Button>
		<Button color="default">
			Remover
		</Button>
	</div>
</template>

<script setup lang="ts">
import Button from "../atoms/Button.vue";
</script>