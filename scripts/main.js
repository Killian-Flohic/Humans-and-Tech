/*
const video = document.querySelector('video')

const play = () => {
	const promise = video.play()
	
	promise
		.then( ()=> {
			console.log('could play')
		})
		.catch( () => {
			console.log('could not play')
		})
}

play()

window.addEventListener('click', play())
*/

class Player{
	constructor(_element){													//constructor = méthode particulière
		this.element = _element												//propriété , réutilisable partout dans le code
		this.videoElement = this.element.querySelector('.js-video')
		console.log(this.videoElement)
		this.setPlayPause()													//this = le contexte propre, à l'instance en cours
		this.setVolume()
		this.setSeekBar()
	}
	setPlayPause(){															//méthode
		//play
		const playElement = this.element.querySelector('.js-play')
		playElement.addEventListener('click', () => {
			this.videoElement.play()
		})
		//pause
		const pauseElement = this.element.querySelector('.js-pause')
		pauseElement.addEventListener('click', () => {
			this.videoElement.pause()
		})
	}
	setVolume(){
		const volumeUpButton = this.element.querySelector('.js-volume-up')
		const volumeDownButton = this.element.querySelector('.js-volume-down')
		volumeUpButton.addEventListener('click', () => {
			this.videoElement.volume = Math.min(this.videoElement.volume + 0.1, 1)
		})
		volumeDownButton.addEventListener('click', () => {
			this.videoElement.volume = Math.max(this.videoElement.volume - 0.1, 0)
		})
	}
	setSeekBar(){
		const seekBarElement = this.element.querySelector('.js-seek-bar')
		const fillElement = seekBarElement.querySelector('.js-seek-bar-fill')
		this.videoElement.addEventListener('timeupdate', () => {
			const ratio = this.videoElement.currentTime / this.videoElement.duration
			fillElement.style.transform = `scaleX(${ratio})`
		})
		seekBarElement.addEventListener('click', (_event) => {
			const bounding = seekBarElement.getBoundingClientRect()
			const ratio = (_event.clientX - bounding.left) / bounding.width
			const time = ratio * this.videoElement.duration
			this.videoElement.currentTime = time
		})
	}
}

const toto = new Player(document.querySelector('.js-player'))
