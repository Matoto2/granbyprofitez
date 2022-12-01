<template>
	<div class="box-hamb">
		<div class="hamburger hamburger--squeeze js-hamburger">
			<div class="hamburger-box">
				<div class="hamburger-inner"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.box-hamb{
	display: none;
}
.hamburger {
	font: inherit;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: visible;
	margin: 0;
	padding: 0;
	cursor: pointer;
	transition-timing-function: linear;
	transition-duration: .15s;
	transition-property: opacity,filter;
	text-transform: none;
	color: inherit;
	border: 0;
	background-color: transparent;
}
.hamburger-box {
	position: relative;
	display: inline-block;
	width: 33px;
	height: 24px;
}
.hamburger--squeeze .hamburger-inner {
	transition-timing-function: cubic-bezier(.55,.055,.675,.19);
	transition-duration: 75ms;
}
.hamburger-inner {
	top: 50%;
	display: block;
	margin-top: -2px;
}
.hamburger--squeeze .hamburger-inner:before {
	transition: top 75ms ease .12s,opacity 75ms ease;
}
.hamburger-inner:before {
	top: -10px;
}
.hamburger--squeeze .hamburger-inner:after {
	transition: bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19);
}
.hamburger-inner:after {
	bottom: -10px;
}
.hamburger-inner:after, .hamburger-inner:before {
	display: block;
	content: "";
}
.hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
	position: absolute;
	width: 33px;
	height: 4px;
	transition-timing-function: ease;
	transition-duration: .15s;
	transition-property: transform;
	border-radius: 0;
	background-color: #fff;
}
.hamburger--squeeze.is-active .hamburger-inner {
	transition-delay: .12s;
	transition-timing-function: cubic-bezier(.215,.61,.355,1);
	transform: rotate(45deg);
}
.hamburger--squeeze.is-active .hamburger-inner:before {
	top: 0;
	transition: top 75ms ease,opacity 75ms ease .12s;
	opacity: 0;
}
.hamburger--squeeze.is-active .hamburger-inner:after {
	bottom: 0;
	transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
	transform: rotate(-90deg);
}
.hamburger + span{
	font-weight: bold;
	padding-left: 10px;
}
</style>
