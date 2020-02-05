<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      // vnodes.push(<svg-icon icon-class={icon}/>)
      // 修改导航图标为 element-ui 图标
      vnodes.push(<i class={icon}></i>)
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>)
    }
    return vnodes
  }
}
</script>
