class Audio {
    constructor (src){
        this.audio = document.createElement("audio");
        this.audio.src = src;
        this.audio.setAttribute("preload", "auto");
        this.audio.setAttribute("controls", "none");
        this.audio.style.display = "none";
        document.body.appendChild(this.audio);

        

        this.play = function () {
            this.audio.play();
        }
        this.stop = function () {
            this.audio.pause();
        }


    }

    
}