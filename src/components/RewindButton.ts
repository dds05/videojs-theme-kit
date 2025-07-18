import videojs from "video.js";
import { parseSvgString } from '../utils/helper'
import Player from "video.js/dist/types/player";
import { VideoJSPlayer } from "../types";


const addRewindButton = (player:Player) => {
    var Button = videojs.getComponent('Button');
    class MyRewindButton extends Button {
        constructor(player:VideoJSPlayer, options:any) {
            super(player, options)
            let buttonElement = this.el_
            let iconPlaceHolder = buttonElement.querySelector('.vjs-icon-placeholder')
            let controlText = buttonElement.querySelector('.vjs-control-text')
            controlText.textContent = `Skip`
            buttonElement.classList.add("vjs-skip-button");
            const svg = `<svg width="16px" height="16px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2.5C8 2.31271 7.89533 2.14112 7.72879 2.05542C7.56226 1.96972 7.36179 1.98427 7.20938 2.09314L0.209381 7.09314C0.0779829 7.18699 0 7.33853 0 7.5C0 7.66148 0.0779829 7.81301 0.209381 7.90687L7.20938 12.9069C7.36179 13.0157 7.56226 13.0303 7.72879 12.9446C7.89533 12.8589 8 12.6873 8 12.5V8.4716L14.2094 12.9069C14.3618 13.0157 14.5623 13.0303 14.7288 12.9446C14.8953 12.8589 15 12.6873 15 12.5V2.5C15 2.31271 14.8953 2.14112 14.7288 2.05542C14.5623 1.96972 14.3618 1.98427 14.2094 2.09314L8 6.52841V2.5Z" fill="currentColor"/>
                        </svg>`
            iconPlaceHolder.append(parseSvgString(svg))
        }
        handleClick() {
            let currentTime = player?.currentTime();
            if(currentTime){
                let newTime = currentTime - 10;
                player.currentTime(newTime);
            }
        }
    };
    videojs.registerComponent('MyRewindButton', MyRewindButton);

        const instance = new MyRewindButton(player, {});
        return instance;

}

export { addRewindButton }