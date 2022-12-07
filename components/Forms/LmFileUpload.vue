<template>
	<div class="multiple-upload-file-wrapper">
		<div v-for="v in value" style="position: relative;display: inline-block" class="img-wrapper">
			<Button v-if="v?.wp_id"
					icon="pi pi-trash"
					class="p-button-rounded p-button-danger"
					style="position: absolute;right:0;opacity: .8"
					@click="deleteImage(v.wp_id)"
			/>
			<nuxt-img v-if="v?.wp_id" :src="v?.sizes?.thumbnail?.source_url" style="margin-top: 10px;height: 80px;width:80px;object-fit:cover;margin-right: 1rem;" />
		</div>
		<div>
			<ProgressBar v-if="uploading" mode="indeterminate" style="height: 1rem; width: 200px;margin: 3rem 0" />
			<label v-if="canUpload" class="btn-label">
				<span class="btn">Ajouter +</span>
				<input ref="fileuploader" type="file" @change="onSelectedFiles" multiple="multiple" :accept="accept">
			</label>
		</div>
	</div>
</template>
<script>
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar'

export default {
	props: {
		value: Array,
		maxItems: Number,
		accept: {
			type: String,
			default: 'image/*'
		},
	},
	emits: ['input', 'saving'],
	components: {
		Button,
		ProgressBar
	},
	data(){
		return {
			uploading: false,
			result: this.value ?? []
		}
	},
	computed: {
		canUpload(){
			return this.maxItems === undefined || this.maxItems > this.value.length
		}
	},
	methods: {
		onSelectedFiles(event){
			if(event.target.files.length > 0){
				this.$emit('saving', true)
				this.uploading = true

				const uploadFile = file => {
					return new Promise(async (resolve, reject) => {
						let bodyFormData = new FormData();
						bodyFormData.append('file', file)
						const response = await this.$axios.post(
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
						)
						this.result.push({
							wp_id: response.data.id,
							sizes: response.data.media_details.sizes
						})
						resolve()
					})
				}

				const uploadFiles = async () => {
					const files = Object.values(event.target.files)
					await Promise.all(files.map(file => uploadFile(file)))
					console.log(this.result)
					this.$emit('input', this.result)
					this.uploading = false
					this.$emit('saving', false)
					if(this.$refs.fileuploader)
						this.$refs.fileuploader.value = ''
				}
				uploadFiles()

			}
		},
		async deleteImage(id){
			this.$confirm.require({
				message: 'Êtes-vous sûr? Cette opération est irréversible.',
				header: 'Confirmation',
				icon: 'pi pi-exclamation-triangle',
				accept: async () => {
					this.$emit('saving', true)
					try{
						const result = await this.$axios.$delete('https://imgapi.lithiummarketing.net/wp-json/wp/v2/media/'+id+'?force=1', {
							headers: {
								"Content-Disposition": "attachment; filename=pexels-pixabay-60597.jpg",
								"Content-Type": "image/jpg"
							},
							auth: {
								username: "lithiummarketing",
								password: "LVrE BrkO PPh0 q8XJ csxq laqa"
							}
						})
						if(result.deleted){
							this.$toast.add({severity:'success', summary: 'Succès!', detail:'Supprimé avec succès', life: 10000});
						} else{
							this.$toast.add({severity:'error', summary: 'Erreur!', detail:'Oups!', life: 3000});
						}
					}catch(e){
						console.log(e)
					}

					console.log(this.result)
					this.result = this.result.filter(file => file.wp_id !== id)
					this.$emit('input', this.result)
					console.log(this.result)

					this.$emit('saving', false)
				},
			});
		},
	}
}
</script>
<style scoped>
.btn-label input{
	display: none;
}
.btn-label .btn{
	font-size: .8rem;
	padding: .5rem 1rem
}
</style>
