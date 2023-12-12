<!-- Boton Certificado vue -->
<template>
	<div class="contenedor-boton">
		<button
			:style="style"
			class="boton-certi"
			@click="checkCertificado()"
		>
			{{ label }}
		</button>
	</div>
</template>

<script>
	export default {
		"props": {
			"label": {
				"type": String,
				"default": "Certificado",
			},
		},
		data() {
			return {
				"style": { "backgroundColor": "red" },
			};
		},
		"methods": {
			checkCertificado() {
				fetch("/session").
					then(data => data.json()).
					then(data => {
						this.style.backgroundColor = data ? "green" : "red";
						this.$root.$emit("checkCertificate", data);
					}).
					catch(() => {
						this.style.backgroundColor = "red";
					});
			},
		},
	};
</script>

<style scoped>
	.contenedor-boton {
		display: flex;
		align-items: center; /* Alineación vertical al centro */
		justify-content: center; /* Alineación horizontal al centro */
		text-align: center;
	}

	.boton-certi {
		padding: 10px; /* Ajusta el relleno según tus preferencias */
		border: 1px; /* Quita el borde si no lo necesitas */
		border-radius: 5px; /* Ajusta la esquina redondeada según tus preferencias */
		background-color: #a80808; /* Fondo rojo */
		color: #000000; /* Letras negras */
		font-size: 16px; /* Ajusta el tamaño de la fuente según tus preferencias */
		cursor: pointer;
	}

	/* Si deseas agregar estilos adicionales al botón al pasar el ratón por encima, puedes hacer lo siguiente: */
	.boton-certi:hover {
		color: #ffffff; /* Cambia el color de las letras al pasar el ratón por encima */
	}
</style>
