<template>
	<div class="app">
		<PageTitle :title="getPageTitle" />
		<Dashboard />
		<UIMessage>
			<p>This application uses the browser's Local Storage to store data.</p>
		</UIMessage>
		<ButtonCertificado :label="botonLabel" />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import PageTitle from "@/components/Page/PageTitle.vue";
	import Dashboard from "@/components/Dashboard/Dashboard.vue";
	import UIMessage from "@/components/UI/UIMessage.vue";
	import ButtonCertificado from "@/components/Page/ButtonCertificado.vue";

	export default {
		"components": {
			PageTitle,
			Dashboard,
			UIMessage,
			ButtonCertificado,
		},
		data() {
			return {
				"botonLabel": "Certificado",
			};
		},
		"computed": {
			...mapGetters([
				"getPageTitle",
			]),
		},
		"methods": {},
	};
</script>

<style lang="scss">
	.app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}
</style>
