import videojs from "video.js";
import { parseSvgString } from '../utils/helper'
import Player from "video.js/dist/types/player";
import { VideoJSPlayer } from "../types";
const addForwardButton = (player:Player) => {
    var Button = videojs.getComponent('Button');
    class MyForwardButton extends Button {
        constructor(player:VideoJSPlayer, options:any) {
            super(player, options)
            let buttonElement = this.el_
            let iconPlaceHolder = buttonElement.querySelector('.vjs-icon-placeholder')
            let controlText = buttonElement.querySelector('.vjs-control-text')
            controlText.textContent = `Forward`
            buttonElement.classList.add("vjs-skip-button");
            const svg = `<svg width="18px" height="18px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.790619 2.09314C0.638212 1.98427 0.437745 1.96972 0.271209 2.05542C0.104674 2.14112 0 2.31271 0 2.5V12.5C0 12.6873 0.104674 12.8589 0.271209 12.9446C0.437745 13.0303 0.638212 13.0157 0.790619 12.9069L7 8.4716V12.5C7 12.6873 7.10467 12.8589 7.27121 12.9446C7.43774 13.0303 7.63821 13.0157 7.79062 12.9069L14.7906 7.90687C14.922 7.81301 15 7.66148 15 7.5C15 7.33853 14.922 7.18699 14.7906 7.09314L7.79062 2.09314C7.63821 1.98427 7.43774 1.96972 7.27121 2.05542C7.10467 2.14112 7 2.31271 7 2.5V6.52841L0.790619 2.09314Z" fill="currentColor"/>
            </svg>`
            iconPlaceHolder.append(parseSvgString(svg))
        }
        handleClick() {
            let currentTime = player?.currentTime();
            if(currentTime){
                let newTime = currentTime + 10;
                player.currentTime(newTime);
            }
        }
    };
    videojs.registerComponent('MyForwardButton', MyForwardButton);
    const instance = new MyForwardButton(player, {});
    return instance;
}

export { addForwardButton }