export default {
  props: {
    to: {
      type: String
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  render (h) {
    const tag = this.tag;

    return (<tag onclick={this.handleClick}>{this.$slots.default}</tag>)
  },
  methods: {
    handleClick() {
      const router = this.$router;
      router.push(this.to);
    }
  }
}
