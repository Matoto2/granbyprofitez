<template>
	<div class="relative">
		<button @click="is_openned = !is_openned" type="button">PARTAGER <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><g transform="translate(-1218 -667)"><circle cx="21" cy="21" r="21" transform="translate(1218 667)" fill="#363636"/><path d="M23.152,36.134a4.133,4.133,0,0,1-4.134,4.134,3.984,3.984,0,0,1-3-1.338l-7.8,3.948a4.31,4.31,0,0,1,0,1.4l7.8,3.9a4.135,4.135,0,1,1-1.132,2.842,3.944,3.944,0,0,1,.253-1.432l-7.53-3.762a4.134,4.134,0,1,1,0-4.5l7.53-3.762a4.135,4.135,0,1,1,8.015-1.432ZM4.088,46.057a2.481,2.481,0,1,0,0-4.961,2.481,2.481,0,1,0,0,4.961Zm14.93-12.4A2.481,2.481,0,1,0,21.5,36.134,2.481,2.481,0,0,0,19.018,33.654Zm0,19.845a2.481,2.481,0,1,0-2.481-2.481A2.481,2.481,0,0,0,19.018,53.5Z" transform="translate(1225.649 644.699)" fill="#fff"/></g></svg></button>
		<div v-if="is_openned" class="share-wrapper">
			<ShareNetwork
				network="facebook"
				:title="title"
				:url="url"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
			</ShareNetwork>
			<ShareNetwork
				network="messenger"
				:title="title"
				:url="url"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>						</ShareNetwork>
			<ShareNetwork
				network="linkedin"
				:title="title"
				:url="url"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
			</ShareNetwork>
			<ShareNetwork
				network="email"
				:title="title"
				:url="url"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
			</ShareNetwork>
		</div>

	</div>
</template>
<script>
export default {
	props: ["url", "title"],
	data(){
		return {
			is_openned: false
		}
	},
	created() {
		window.addEventListener('click', (e) => {
			if (!this.$el.contains(e.target)){
				this.is_openned = false
			}
		})
	},
}
</script>
<style scoped>
button{
	outline: none;
	border: none;
	display: inline-flex;
	align-items: center;
	background-color: transparent;
	margin-left: 1.2rem;
}
button svg{
	margin-left: 1rem;
}
.share-wrapper{
	position: absolute;
	top: 100%;
	right: 0;
	width: calc(100% - 1.2rem - 12px);
	margin-right: 6px;
	display: flex;
	justify-content: space-between;
	padding-top: 1rem;
}
.share-wrapper a{
	display: block;
	padding: .2rem;
}
.share-wrapper svg{
	height: 20px;
	fill: #363636;
}
</style>
