export default {
    data() {
      return {

      }
    },
    mounted () {
		this.initKeyDown()
    },
    methods: {
        initKeyDown(){
			var that = this
			document.addEventListener("keydown", function (event) {
				if (event.ctrlKey && event.key === 'ArrowUp') {
					that.toggleFullScreen()
				}
			})
		},

		toggleFullScreen() {
			if (!document.fullscreenElement) {
				this.enterFullScreen();
			} else {
				this.exitFullScreen();
			}
		},
		enterFullScreen() {
			let element = document.documentElement;
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) { /* Firefox */
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) { /* IE/Edge */
				element.msRequestFullscreen();
			}
		},
		exitFullScreen() {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) { /* Firefox */
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) { /* IE/Edge */
				document.msExitFullscreen();
			}
		}
    },
  }