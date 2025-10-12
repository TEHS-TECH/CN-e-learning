<template>
  <button 
    class="flutter-share-button"
    @click="copyToClipboard"
    :class="{ 'copied': isCopied }"
  >
    <i class="fa-solid fa-share"></i>&nbsp;&nbsp;
    <span class="text">{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  name: 'FlutterShareButton',
  data() {
    return {
      isCopied: false
    }
  },
  computed: {
    buttonText() {
      return this.isCopied ? '已复制！' : '点击分享'
    }
  },
  methods: {
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(window.location.href)
        this.isCopied = true
        setTimeout(() => {
          this.isCopied = false
        }, 2000)
      } catch (err) {
        console.error('复制失败:', err)
        // 降级方案
        const textArea = document.createElement('textarea')
        textArea.value = window.location.href
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')
          this.isCopied = true
          setTimeout(() => {
            this.isCopied = false
          }, 2000)
        } catch (err) {
          console.error('降级复制也失败:', err)
        }
        document.body.removeChild(textArea)
      }
    }
  }
}
</script>

<style scoped>
.flutter-share-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 20px;
  background: var(--vp-c-brand-2);
  color: var(--vp-button-brand-text);
  font-weight: 500;
  font-size: 15px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
}

.flutter-share-button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.flutter-share-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flutter-share-button .icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.flutter-share-button.copied {
  background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
}

.flutter-share-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.flutter-share-button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>