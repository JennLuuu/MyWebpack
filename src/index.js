/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-27 09:46:15
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-27 16:00:23
 * @FilePath: \MyWebpack\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import add from "./js/add"
import {PI,show} from "./js/utils"
import "./css/index.css"
import "./css/reset.less"
import dog from "./images/dog.webp";
import home from "./images/index.png"

add(2,6)
console.log(PI);
show()
console.log(dog);
console.log(home);


const img1 = new Image()
img1.src = home
document.body.appendChild(img1)