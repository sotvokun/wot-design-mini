export default {
  // 加载中
  loading: Boolean,
  loadingColor: {
    type: String,
    value: '#4D80F0'
  },
  // 选项总高度
  columnsHeight: {
    type: Number,
    value: 217
  },
  // 选项对象中，value对应的 key
  valueKey: {
    type: String,
    value: 'value'
  },
  // 选项对象中，展示的文本对应的 key
  labelKey: {
    type: String,
    value: 'label'
  },
  // 松开手指立即触发 change 事件 (2.21.1 新增)
  // 若为 false 则需要等待动画播放完毕
  immediateChange: {
    type: Boolean,
    value: true
  }
}