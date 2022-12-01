<template>
	<span style="min-height: 45px">{{ typeValue }}</span>
</template>
<script>
export default {
	props: ["displayTextArray"],
	data: () => {
		return {
			typeValue: "",
			typeStatus: false,
			typingSpeed: 50,
			erasingSpeed: 30,
			newTextDelay: 1500,
			displayTextArrayIndex: 0,
			charIndex: 0,
			waitingErased: 300,
		};
	},
	created() {
		setTimeout(this.typeText, this.newTextDelay + 200);
	},
	methods: {
		typeText() {
			if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
				if (!this.typeStatus) this.typeStatus = true;
				this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
					this.charIndex
				);
				this.charIndex += 1;
				setTimeout(this.typeText, this.typingSpeed);
			} else {
				this.typeStatus = false;
				setTimeout(this.eraseText, this.newTextDelay);
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) this.typeStatus = true;
				this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
					0,
					this.charIndex - 1
				);
				this.charIndex -= 1;
				setTimeout(this.eraseText, this.erasingSpeed);
			} else {
				this.typeStatus = false;
				this.displayTextArrayIndex += 1;
				if (this.displayTextArrayIndex >= this.displayTextArray.length)
					this.displayTextArrayIndex = 0;
				setTimeout(this.typeText, this.typingSpeed + this.waitingErased);
			}
		},
	},
}
</script>
