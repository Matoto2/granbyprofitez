<template>
	<div class="upload-file-wrapper">
		<div style="position: relative;display: inline-block" class="img-wrapper">
			<Button v-if="value?.wp_id"
					icon="pi pi-trash"
					class="p-button-rounded p-button-danger"
					style="position: absolute;right:-10px;opacity: .8"
					@click="deleteImage"
			/>
			<img v-if="value?.wp_id" :src="value?.sizes?.thumbnail?.source_url" style="margin-top: 10px" alt="">
			<ProgressBar v-if="uploading" mode="indeterminate" style="height: 1rem; width: 200px;margin: 3rem 0" />
		</div>
		<FileUpload mode="basic" name="logo[]" @select="onSelectedFiles" accept="image/*"/>
	</div>
</template>
<script>
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar'

export default {
	props: ['value'],
	emits: ['input', 'saving'],
	components: {
		FileUpload,
		Button,
		ProgressBar
	},
	data(){
		return {
			uploading: false,
		}
	},
	methods: {
		onSelectedFiles(event){
			if(event.files.length > 0){
				this.$emit('saving', true)
				this.uploading = true
				let bodyFormData = new FormData();
				bodyFormData.append('file', event.files[0])
				this.$axios.post(
					'https://imgapi.lithiummarketing.net/wp-json/wp/v2/media',
					bodyFormData,
					{
						headers: {
							"Content-Disposition": "attachment; filename=pexels-pixabay-60597.jpg",
							"Content-Type": "image/jpg"
						},
						auth: {
							username: "lithiummarketing",
							password: "LVrE BrkO PPh0 q8XJ csxq laqa"
						}
					}
				).then((response)=>{
					let result = {
						wp_id: response.data.id,
						sizes: response.data.media_details.sizes
					}
					console.log(result)
					this.$emit('input', result)
					this.uploading = false
					this.$emit('saving', false)
				})
			}
		},
		async deleteImage(){

		},
	}
}
</script>
