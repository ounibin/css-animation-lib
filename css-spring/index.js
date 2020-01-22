// 使用css-spring生成弹簧动画
const spring = require('css-spring')

const keyframes = spring.spring(
    { top: '0vh' },  // from
    { top: '-100vh' },   // to
    { damping: 10, stiffness: 170, precision: 2}  // precision表示精度有2位
)
const keyframeString = spring.toString(keyframes)

console.log(keyframeString)