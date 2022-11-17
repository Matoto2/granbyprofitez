<template>
	<div>
		<Header/>
		<main id="main-contenu">
			<Nuxt />
		</main>
		<Footer/>
		<ClientOnly>
			<ConfirmDialog></ConfirmDialog>
			<Toast />
		</ClientOnly>
	</div>
</template>
