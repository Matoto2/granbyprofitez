<template>
	<div class="multiple-upload-file-wrapper">
		<div v-for="(v, k) in value" style="position: relative;display: inline-block" class="img-wrapper">
			<Button v-if="!listFiles"
					icon="pi pi-trash"
					class="p-button-rounded p-button-danger"
					style="position: absolute;right:0;opacity: .8"
					@click="$emit('removeFile', {index: k, name: name})"
			/>
			<nuxt-img v-if="v?.id && accept.includes('image') && !listFiles" :src="v?.media_details?.sizes?.thumbnail?.source_url" style="margin-top: 10px;height: 80px;width:80px;object-fit:cover;margin-right: 1rem;" />
			<nuxt-img v-else-if="v?.base64 && accept.includes('image') && !listFiles" :src="v?.base64" style="margin-top: 10px;height: 80px;width:80px;object-fit:cover;margin-right: 1rem;" />
		</div>

		<ul v-if="listFiles && value.length" style="margin-top: 0">
			<li v-for="(file, k) in value">
				<span>{{file.info.name}}</span> -
				<span>{{filesizeconvert(file.info.size)}}</span>
				<Button icon="pi pi-times"
						class="p-button-danger"
						style="opacity: .8;width: 1.4rem;height: 1.2rem"
						@click="$emit('removeFile', {index: k, name: name})"
				/>
			</li>
		</ul>
		<div>
			<ProgressBar v-if="uploading" mode="indeterminate" style="height: 1rem; width: 200px;margin: 3rem 0" />
			<label v-if="canUpload" class="btn-label">
				<span class="btn">Ajouter un fichier +</span>
				<input id="file" ref="fileuploader" type="file" @change="onSelectedFiles" multiple="multiple" :accept="accept">
			</label>
			<div class="small-text" v-if="maxSize">
				Taille max: {{filesizeconvert(maxSize)}}
			</div>
			<div class="small-text" v-if="message" v-html="message"></div>
		</div>
	</div>
</template>
<script>
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar'
import {humanFileSize} from "@/helpers/humanFileSize";
import {fileListToBase64} from "@/helpers/fileListToBase64";

export default {
	props: {
		value: Array,
		maxItems: Number,
		maxSize: Number,
		message: String,
		accept: {
			type: String,
			default: 'image/*'
		},
		listFiles: {
			type: Boolean,
			default: false
		},
		name: String
	},
	emits: ['input', 'saving', 'newFiles'],
	components: {
		Button,
		ProgressBar
	},
	data(){
		return {
			uploading: false
		}
	},
	computed: {
		canUpload(){
			return this.maxItems === undefined || this.maxItems > this.value.length
		}
	},
	methods: {
		filesizeconvert(value){
			return humanFileSize(value, true, 2)
		},
		async onSelectedFiles(event){
			if(event.target.files.length > 0 && (this.maxItems === undefined || event.target.files.length <= this.maxItems)){
				let newFiles = event.target.files
				if(this.maxSize !== undefined){
					newFiles = Object.values(event.target.files).filter(file => {
						return file.size <= this.maxSize
					})
					if(event.target.files.length !== newFiles.length)
						this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Un ou plusieurs fichier ne respecte pas la limite de poid.", life: 5000});
				}
				if(newFiles.length){
					const files = await fileListToBase64(newFiles)
					//console.log('filelisttobase64', files)
					this.$emit('newFiles', {files: files, name: this.name})
				}
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Maximum de fichier atteint pour ce champ.", life: 5000});
			}
		}
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
.dragndrop{
	border-radius: 10px;
	border: 1px solid #fff;
	background-color: rgba(255, 255, 255, 0.2);
	text-align: center;
	padding: 1.5rem;
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
}
.dragndrop button{
	background: #EDA008;
	border-radius: 10px;
	padding: .3rem 1rem;
	display: inline-block;
	margin-top: .5rem;
	outline: none;
	border: none;
	color: #fff;
}
.small-text{
	font-weight: 600;
	font-size: .8rem;
	margin-top: .2rem;
}
</style>
