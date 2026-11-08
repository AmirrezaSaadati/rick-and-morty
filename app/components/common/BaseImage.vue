<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  src: string
  alt: string
  width?: number | string
  height?: number | string
  loading?: 'eager' | 'lazy'
  fetchpriority?: 'high' | 'low' | 'auto'
  imageClass?: string
  maxRetries?: number
  timeout?: number
}>(), {
  width: undefined,
  height: undefined,
  loading: 'lazy',
  fetchpriority: 'auto',
  imageClass: '',
  maxRetries: 2,
  timeout: 7000
})

const emit = defineEmits<{
  load: [event: Event]
  failed: []
}>()

const loaded = ref(false)
const failed = ref(false)
const attempt = ref(0)
let timeoutHandle: ReturnType<typeof setTimeout> | undefined

const imageSrc = computed(() => {
  if (attempt.value === 0) return props.src
  return `${props.src}${props.src.includes('?') ? '&' : '?'}retry=${attempt.value}`
})

function clearImageTimeout() {
  if (timeoutHandle) clearTimeout(timeoutHandle)
}

function startImageTimeout() {
  clearImageTimeout()
  if (props.timeout <= 0) return
  timeoutHandle = setTimeout(() => {
    if (!loaded.value) retry()
  }, props.timeout)
}

function retry() {
  clearImageTimeout()
  loaded.value = false
  if (attempt.value < props.maxRetries) {
    attempt.value += 1
    failed.value = false
    nextTick(startImageTimeout)
    return
  }
  failed.value = true
  emit('failed')
}

function restart() {
  clearImageTimeout()
  attempt.value = 0
  loaded.value = false
  failed.value = false
  nextTick(startImageTimeout)
}

function handleLoad(event: Event) {
  clearImageTimeout()
  loaded.value = true
  failed.value = false
  emit('load', event)
}

watch(() => props.src, restart)
onMounted(startImageTimeout)
onBeforeUnmount(clearImageTimeout)
</script>

<template>
  <div v-bind="$attrs" class="relative overflow-hidden">
    <slot v-if="!loaded && !failed" name="placeholder" />
    <img
      v-if="!failed"
      :key="imageSrc"
      :src="imageSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :fetchpriority="fetchpriority"
      class="relative block transition-opacity duration-500"
      :class="[imageClass, loaded ? 'opacity-100' : 'opacity-0']"
      @load="handleLoad"
      @error="retry"
    >
    <slot v-if="failed" name="error" :retry="restart" />
  </div>
</template>
