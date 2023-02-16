/**
 * 配置页面水印
 */

let watermark = {}

// 设置水印的方法
let setWatermark = (str, option = {}) => {
  let id = 'watermark'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  // 创建画布
  let can = document.createElement('canvas')
  // 设置画布的长度和宽度
  can.width = option.w || 180
  can.height = option.h || 140
  let cans = can.getContext('2d')
  // 旋转相应角度
  cans.rotate(-10 * Math.PI / 180)
  cans.font = '16px Vedana'
  // 设置填充绘画的颜色
  cans.fillStyle = 'rgba(230, 230, 230, 1)'
  // 设置文本内容的当前对齐方式
  cans.textAlign = 'left'
  // 设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle'
  // 在画布上绘制填色的文字
  cans.fillText(str, can.width / 6, can.height / 2)
  // 设置画布参数
  let div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = option.top || '130px'
  div.style.left = option.left || '120px'
  div.style.position = 'fixed'
  div.style.zIndex = '1'
  div.style.width = option.width || document.documentElement.clientWidth + 'px'
  div.style.height = option.height || document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}
// 添加水印的方法只允许调用一次
// watermark.set = (str) => {
//   let id = setWatermark(str)
//   setInterval(() => {
//     if (document.getElementById(id) === null) {
//       id = setWatermark(str)
//     }
//   }, 500)
//   window.onresize = () => {
//     setWatermark(str)
//   }
// }

function watermark(str){
    setWatermark(str)
}

