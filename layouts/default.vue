<template>
	<div>
		<Header/>
		<main id="main-contenu">
			<Nuxt />
		</main>
		<Footer/>
		<client-only>
			<ConfirmDialog></ConfirmDialog>
			<Toast />
		</client-only>
	</div>
</template>
