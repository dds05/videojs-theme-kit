<a href="https://nodei.co/npm/videojs-theme-kit/"><img src="https://nodei.co/npm/videojs-theme-kit.svg?data=d"></a>

## 🎨 Videojs Theme Kit
Video.js plugin to easily customize and apply beautiful skins to player with minimal setup. <br/> <br/>
Includes 4 modern themes : Slate, Spaced, Sleek, and Zen to instantly enhance the look and feel of your player. It is lightweight and supports infinite color customization, allowing you to perfectly match your brand or aesthetic without writing custom CSS.
## 👉🏻 Installation  
```
npm install videojs-theme-kit
```

## 👨🏻‍💻 Usage 
```
import 'videojs-theme-kit';

player.on('ready',()=>{
  player.theme({
          skin: SKIN_NAME,
          color: 'HEXCODE_OF_THE_COLOR'  //optional
  })
})
```

## 👉🏻 Options

| Option  | Type     | Required | Description                                                                                                                                                                              |
| ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `skin`  | `string` | ✅ Yes    | Name of the skin to apply. Must be one of:<br>• `'slate'`<br>• `'spaced'`<br>• `'sleek'`<br>• `'zen'` |
| `color` | `string` | ❌ No     | HEX color code to customize the player's theme highlight color  (e.g., `'#ff5722'`, `'#00bcd4'`)                                                                                             |


<br>

## ✨ Try it 
https://videojs-theme-kit-site.vercel.app/

<h3>Sleek</h3>
<img width="600" height="480" alt="Screenshot 2025-07-13 at 7 15 12 PM" src="https://github.com/user-attachments/assets/63dceae4-3fb7-48c3-afcc-9e4d9d552044" />

<h3>Zen</h3>
<img width="600" height="480" alt="Screenshot 2025-07-13 at 7 16 49 PM" src="https://github.com/user-attachments/assets/87d305d5-2b4c-4228-bed0-04318c726384" />


<h3>Slate</h3>
<img width="600" height="480" alt="Screenshot 2025-07-13 at 7 15 36 PM" src="https://github.com/user-attachments/assets/759958c1-2239-4ab0-bf3e-2c6761850db7" />

<h3>Spaced</h3>
<img width="600" height="480" alt="Screenshot 2025-07-13 at 7 15 53 PM" src="https://github.com/user-attachments/assets/f90de7e8-47d8-42b6-a37f-7e36f4e731cc" />


## ❤️ Support
https://buymeacoffee.com/dds05

