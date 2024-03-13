import { onBeforeUnmount, onMounted } from 'vue'

export function useScrollBottom(callBack: () => void) {
  function handleScroll() {
    if (document.documentElement.clientHeight + window.scrollY >= document.body.scrollHeight) {
      callBack()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
