<template>
	<footer id="footer">
		<div class="footer-content">
			<div class="btt-wrapper">
				<BackToTop />
			</div>
			<div class="container">
				<div class="logo-wrapper">
					<NuxtLink :to="{name: 'index'}">
						<svg xmlns="http://www.w3.org/2000/svg" width="219.523" height="98.263" viewBox="0 0 219.523 98.263"><g transform="translate(-36 -35.741)"><path d="M526.617,61.218s-4.874-10.576-4.874-19.244c0-3.442,2.183-6.233,4.874-6.233s4.867,2.79,4.867,6.233c0,8.668-4.867,19.244-4.867,19.244" transform="translate(-291.149 0)" fill="#fff"/><path d="M501.7,85.6s-4.994-12.984-15.112-19.775c-4.458-2.985-2.914-8.313.538-9.369,4.385-1.338,7.3,1.24,9.186,4.384C501.06,68.747,501.7,85.6,501.7,85.6" transform="translate(-268.433 -12.2)" fill="#fff"/><path d="M539.395,85.6s4.99-12.984,15.109-19.775c4.456-2.985,2.915-8.313-.538-9.369-4.385-1.338-7.3,1.24-9.186,4.384-4.742,7.906-5.385,24.76-5.385,24.76" transform="translate(-301.729 -12.2)" fill="#fff"/><path d="M165.771,144.093V127.514c.033-3.4,5.687-6.609,9.635-6.619a13.783,13.783,0,0,1,3.759.574v-6.751a10.308,10.308,0,0,0-1.707-.146c-5.156,0-8.964,2.031-11.479,6.092l-.209.332v-5.758H156.2v28.855Z" transform="translate(-72.048 -47.25)" fill="#fff"/><path d="M165.771,144.093V127.514c.033-3.4,5.687-6.609,9.635-6.619a13.783,13.783,0,0,1,3.759.574v-6.751a10.308,10.308,0,0,0-1.707-.146c-5.156,0-8.964,2.031-11.479,6.092l-.209.332v-5.758H156.2v28.855Z" transform="translate(-72.048 -47.25)" fill="#fff"/><path d="M328.326,125.581v18.511H337.9V123.656a8.389,8.389,0,0,0-2.771-6.647,11.179,11.179,0,0,0-7.607-2.439,14.885,14.885,0,0,0-12.281,6.1l-.2.25v-5.687h-9.567v28.856h9.567V128.006c.031-3.658,5.9-7.466,9.082-7.485,2.781.005,4.2,1.741,4.2,5.06" transform="translate(-161.518 -47.249)" fill="#fff"/><path d="M416.933,121.836a11.418,11.418,0,0,1-7.68-3.209l-.036-.028v-9.781c.031-3.35,5.5-6.369,8.444-6.381a6.6,6.6,0,0,1,5.467,2.273c1.223,1.517,1.821,3.777,1.821,6.767A11.976,11.976,0,0,1,422.773,119a6.973,6.973,0,0,1-5.831,2.841Zm-7.537,1.28a15.5,15.5,0,0,0,10.314,3.578q7.042,0,11.236-4.325c2.8-2.881,4.2-6.723,4.2-11.557q0-6.7-3.728-10.491c-2.481-2.533-5.876-3.808-10.222-3.808-5.375,0-9.286,2.031-11.784,6.092l-.2.332V84.445h-9.573v41.59h4.018c3.218.009,5.575-2.9,5.575-2.9l.069-.089Z" transform="translate(-217.964 -29.193)" fill="#fff"/><path d="M416.933,121.836a11.418,11.418,0,0,1-7.68-3.209l-.036-.028v-9.781c.031-3.35,5.5-6.369,8.444-6.381a6.6,6.6,0,0,1,5.467,2.273c1.223,1.517,1.821,3.777,1.821,6.767A11.976,11.976,0,0,1,422.773,119a6.973,6.973,0,0,1-5.831,2.841Zm-7.537,1.28a15.5,15.5,0,0,0,10.314,3.578q7.042,0,11.236-4.325c2.8-2.881,4.2-6.723,4.2-11.557q0-6.7-3.728-10.491c-2.481-2.533-5.876-3.808-10.222-3.808-5.375,0-9.286,2.031-11.784,6.092l-.2.332V84.445h-9.573v41.59h4.018c3.218.009,5.575-2.9,5.575-2.9l.069-.089Z" transform="translate(-217.964 -29.193)" fill="#fff"/><path d="M500.376,155.325l22.317-39.341a17.9,17.9,0,0,0-2.108-.123c-2.495,0-6.33.532-7.931,3.515-.809,1.5-8.825,16.012-8.825,16.012l-.1.188-9.9-19.566H483.555L498.4,144.2l-6.229,11.121Z" transform="translate(-268.259 -48.022)" fill="#fff"/><path d="M500.376,155.325l22.317-39.341a17.9,17.9,0,0,0-2.108-.123c-2.495,0-6.33.532-7.931,3.515-.809,1.5-8.825,16.012-8.825,16.012l-.1.188-9.9-19.566H483.555L498.4,144.2l-6.229,11.121Z" transform="translate(-268.259 -48.022)" fill="#fff"/><path d="M42.763,93.839C38.254,97.369,36,102.393,36,108.951q.005,9.913,6.763,15.205t19.4,5.306a79.608,79.608,0,0,0,15.765-1.879V104.825H58.476v6.64h9.479V123.79l-.089.018a24.944,24.944,0,0,1-4.121.4q-8,0-12.572-4.032Q46.6,116.118,46.6,109.027c0-4.879,1.419-8.668,4.267-11.335s6.889-4,12.084-4a59.355,59.355,0,0,1,14.943,2.474V90.026a84.494,84.494,0,0,0-15.83-1.487q-12.559,0-19.3,5.3" transform="translate(0 -31.646)" fill="#fff"/><path d="M221.647,138.027a3.459,3.459,0,0,1-1.419-2.8c.009-3.277,3.277-4.873,9.609-4.878h2.418v4.639c-.045,2.543-4.827,4.138-7.148,4.163a5.348,5.348,0,0,1-3.46-1.126m10.623,2.465h0l.033-.007c1.121,2.477,4.022,3.761,8.018,3.766a23.667,23.667,0,0,0,5.375-.714l-.223-4.187a9.674,9.674,0,0,1-1.181.092c-1.893-.009-2.858-1.221-2.86-3.529V123.236c0-5.986-4.667-9.491-14.148-9.5a37.518,37.518,0,0,0-11.5,1.479v5.661a29.072,29.072,0,0,1,9.908-2.015c4.314,0,6.558,1.548,6.558,4.639v2.571h-2.723q-8.942,0-13.719,2.588c-3.184,1.729-4.749,4.166-4.754,7.337a7.2,7.2,0,0,0,2.935,5.951,12.049,12.049,0,0,0,7.673,2.3,17.188,17.188,0,0,0,10.6-3.759" transform="translate(-104.928 -46.749)" fill="#fff"/><path d="M221.647,138.027a3.459,3.459,0,0,1-1.419-2.8c.009-3.277,3.277-4.873,9.609-4.878h2.418v4.639c-.045,2.543-4.827,4.138-7.148,4.163a5.348,5.348,0,0,1-3.46-1.126m10.623,2.465h0l.033-.007c1.121,2.477,4.022,3.761,8.018,3.766a23.667,23.667,0,0,0,5.375-.714l-.223-4.187a9.674,9.674,0,0,1-1.181.092c-1.893-.009-2.858-1.221-2.86-3.529V123.236c0-5.986-4.667-9.491-14.148-9.5a37.518,37.518,0,0,0-11.5,1.479v5.661a29.072,29.072,0,0,1,9.908-2.015c4.314,0,6.558,1.548,6.558,4.639v2.571h-2.723q-8.942,0-13.719,2.588c-3.184,1.729-4.749,4.166-4.754,7.337a7.2,7.2,0,0,0,2.935,5.951,12.049,12.049,0,0,0,7.673,2.3,17.188,17.188,0,0,0,10.6-3.759" transform="translate(-104.928 -46.749)" fill="#fff"/><path d="M117.549,237.674a4.075,4.075,0,0,0,.85-2.794,2.964,2.964,0,0,0-1.108-2.611,6.093,6.093,0,0,0-3.448-.776h-2.7v7.137h3.189q2.372,0,3.22-.957m3.477-8.352q2.234,1.9,2.233,5.831t-2.294,5.756q-2.294,1.824-7,1.823H111.14v5.921H106.4V227.425h7.5q4.89,0,7.122,1.9" transform="translate(-42.198 -114.893)" fill="#fff"/><path d="M117.549,237.674a4.075,4.075,0,0,0,.85-2.794,2.964,2.964,0,0,0-1.108-2.611,6.093,6.093,0,0,0-3.448-.776h-2.7v7.137h3.189q2.372,0,3.22-.957m3.477-8.352q2.234,1.9,2.233,5.831t-2.294,5.756q-2.294,1.824-7,1.823H111.14v5.921H106.4V227.425h7.5q4.89,0,7.122,1.9" transform="translate(-42.198 -114.893)" fill="#fff"/><path d="M169.238,236.989a3.208,3.208,0,0,0,.88-2.5,2.684,2.684,0,0,0-.911-2.354,5.82,5.82,0,0,0-3.188-.639h-3.554v6.287h3.463a5.094,5.094,0,0,0,3.31-.79m5.709-2.521q0,5.1-4.039,6.591l5.375,7.593h-5.831l-4.707-6.774h-3.281v6.774h-4.739V227.422h8.049q4.95,0,7.062,1.672t2.11,5.375" transform="translate(-72.961 -114.891)" fill="#fff"/><path d="M169.238,236.989a3.208,3.208,0,0,0,.88-2.5,2.684,2.684,0,0,0-.911-2.354,5.82,5.82,0,0,0-3.188-.639h-3.554v6.287h3.463a5.094,5.094,0,0,0,3.31-.79m5.709-2.521q0,5.1-4.039,6.591l5.375,7.593h-5.831l-4.707-6.774h-3.281v6.774h-4.739V227.422h8.049q4.95,0,7.062,1.672t2.11,5.375" transform="translate(-72.961 -114.891)" fill="#fff"/><path d="M226.745,237.19a6.947,6.947,0,0,0-1.822-4.845,6.01,6.01,0,0,0-8.96,0,7.328,7.328,0,0,0,0,9.674,6.037,6.037,0,0,0,8.96,0,6.893,6.893,0,0,0,1.822-4.829m1.61,7.805a11.567,11.567,0,0,1-15.854,0,11.108,11.108,0,0,1,0-15.642,11.566,11.566,0,0,1,15.854,0,11.113,11.113,0,0,1,0,15.642" transform="translate(-103.863 -114.165)" fill="#fff"/><path d="M226.745,237.19a6.947,6.947,0,0,0-1.822-4.845,6.01,6.01,0,0,0-8.96,0,7.328,7.328,0,0,0,0,9.674,6.037,6.037,0,0,0,8.96,0,6.893,6.893,0,0,0,1.822-4.829m1.61,7.805a11.567,11.567,0,0,1-15.854,0,11.108,11.108,0,0,1,0-15.642,11.566,11.566,0,0,1,15.854,0,11.113,11.113,0,0,1,0,15.642" transform="translate(-103.863 -114.165)" fill="#fff"/><path d="M289.516,227.425v4.161h-9.84v4.585h9.353v4.161h-9.353v8.322h-4.738V227.425Z" transform="translate(-143.216 -114.893)" fill="#fff"/><path d="M289.516,227.425v4.161h-9.84v4.585h9.353v4.161h-9.353v8.322h-4.738V227.425Z" transform="translate(-143.216 -114.893)" fill="#fff"/><rect width="4.738" height="21.229" transform="translate(150.307 112.532)" fill="#fff"/><rect width="4.738" height="21.229" transform="translate(150.307 112.532)" fill="#fff"/><path d="M352.555,231.523v17.131h-4.738V231.523H341.8v-4.1h16.766v4.1Z" transform="translate(-183.295 -114.892)" fill="#fff"/><path d="M352.555,231.523v17.131h-4.738V231.523H341.8v-4.1h16.766v4.1Z" transform="translate(-183.295 -114.892)" fill="#fff"/><path d="M407.6,227.425v4.222H397.031v4.373h9.507v4.039h-9.507v4.4h10.905v4.19H392.293V227.425Z" transform="translate(-213.558 -114.893)" fill="#fff"/><path d="M407.6,227.425v4.222H397.031v4.373h9.507v4.039h-9.507v4.4h10.905v4.19H392.293V227.425Z" transform="translate(-213.558 -114.893)" fill="#fff"/><path d="M438.844,248.655v-3.249l11.116-13.881H439.208v-4.1h17.221V230.7l-11.086,13.819h11.269v4.131Z" transform="translate(-241.46 -114.894)" fill="#fff"/><path d="M438.844,248.655v-3.249l11.116-13.881H439.208v-4.1h17.221V230.7l-11.086,13.819h11.269v4.131Z" transform="translate(-241.46 -114.894)" fill="#fff"/><path d="M496.781,248.123a2.714,2.714,0,1,1,1.9.774,2.583,2.583,0,0,1-1.9-.774m-.774-20.7h5.375v3.766l-.91,10.935h-3.585l-.88-10.935Z" transform="translate(-275.723 -114.893)" fill="#fff"/><path d="M496.781,248.123a2.714,2.714,0,1,1,1.9.774,2.583,2.583,0,0,1-1.9-.774m-.774-20.7h5.375v3.766l-.91,10.935h-3.585l-.88-10.935Z" transform="translate(-275.723 -114.893)" fill="#fff"/></g></svg>
					</NuxtLink>
				</div>
				<div class="grid-footer">
					<div class="first-col">
						<p class="footer-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
						<span class="copyright">© 2022 Granby Profitez</span>
					</div>
					<div class="footer-sec sec-industriel">
						<div class="infos">
							<span class="title">Joindre le secteur industriel</span>
							<address>1300 Boul. Industriel, <br>Granby (Québec), J2J&nbsp;0E5</address>
							<div>Tél : <a href="tel:4507772707">450&nbsp;777-2707</a></div>
							<div>Sans frais : <a href="tel:18777773779">1&nbsp;1877&nbsp;777-3779</a></div>
						</div>
						<div class="bas">
							<strong>Équipe de Granby Industriel</strong>
							<ul>
								<li><a target="_blank" href="https://www.facebook.com/granby.profitez"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></li>
								<li><a target="_blank" href="https://www.instagram.com/granby_profitez/?hl=fr-ca"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></li>
								<li><a target="_blank" href="https://www.youtube.com/user/GranbyProfitez/videos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a></li>
								<li><a target="_blank" href="https://www.linkedin.com/grp/home?gid=3814250"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a></li>
							</ul>
						</div>
					</div>
					<div class="footer-sec sec-commercial">
						<div class="infos">
							<span class="title">Joindre le secteur commercial</span>
							<address>50, rue Dufferin, <br>Granby (Québec), J2G&nbsp;4W7</address>
							<div>Tél : <a href="tel:4503616065">450&nbsp;361-6065</a></div>
						</div>
						<div class="bas">
							<strong>Équipe de Commerce Tourisme Granby région</strong>
							<ul>
								<li><a target="_blank" href="https://www.facebook.com/CommercETourisme-Granby_R%C3%A9gion-256355404527/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></li>
								<li><a target="_blank" href="https://www.youtube.com/channel/UCuZS6UTm6eMxM8iuLSDAXnw"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a></li>
							</ul>
						</div>
					</div>
					<div class="menu-footer">
						<NuxtLink to="" class="btn-footer btn">Emplois disponibles</NuxtLink>
						<nav>
							<ul>
								<li><NuxtLink to="">Travailler</NuxtLink></li>
								<li><NuxtLink to="">Étudier</NuxtLink></li>
								<li><NuxtLink to="">Vivre</NuxtLink></li>
								<li><NuxtLink to="">Immigrer</NuxtLink></li>
								<li><NuxtLink to="">S'installer</NuxtLink></li>
							</ul>
							<ul>
								<li><NuxtLink to="">Employeurs</NuxtLink></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

		</div>
	</footer>
</template>
<style scoped>
#footer{
	background-color: #363636;
	color: #E6E6E6;
	font-weight: 500;
	clip-path: polygon(0 50px, 100% 0, 100% 100%, 0% 100%);
	line-height: 1.5;
	font-size: .9rem;
	padding-bottom: 8rem;
}
.btt-wrapper{
	display: flex;
	justify-content: flex-end;
	background-color: #363636;
	padding-top: 1rem;
	padding-bottom: 1rem
}
.logo-wrapper{
	display: flex;
	justify-content: center;
	padding-bottom: 4rem;
}
.grid-footer{
	display: grid;
	grid-template-columns: 1.8fr 1.4fr 1.6fr 1fr;
	gap: 4rem;
}
.title{
	text-transform: uppercase;
}
.footer-sec,
.first-col{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.footer-sec ul{
	display: flex;
	list-style: none;
	padding-left: 0;
	margin-bottom: 0;
}
.footer-sec ul li{
	margin-right: .7rem
}
.footer-sec ul svg{
	height: 22px;
	fill: #E6E6E6;
}
.footer-text{
	margin-top: 0;
}
.footer-sec a{
	font-weight: 700;
	color: #E6E6E6;
	text-decoration: none;
}
.footer-sec .bas{
	margin-top: 2rem;
}
.footer-sec strong{
	color: #EDA008;
}
.menu-footer{
	position: relative;
}
.menu-footer ul{
	margin: 0;
	list-style: none;
}
.menu-footer a{
	text-decoration: none;
	color: #BEBEBE;
	font-weight: 500;
	font-size: 1.2rem;
}
.menu-footer ul:last-child{
	text-transform: uppercase;
	margin-top: 2rem;
}
.menu-footer ul:last-child a{
	font-size: .8rem;
}
.menu-footer .btn.btn-footer{
	position: absolute;
	top: -7rem;
	right: 0;
	width: 290px;
	font-size: 1rem;
	background-color: transparent;
	border: 1px solid #EDA008;
}
</style>
