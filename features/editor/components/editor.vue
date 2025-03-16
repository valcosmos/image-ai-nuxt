<script lang="ts" setup>
import * as fabric from 'fabric'
import { useEditor } from '~/features/editor/hooks/use-editor'

defineOptions({ name: 'EditorIndex' })

const { init } = useEditor()

const canvasRef = ref<HTMLCanvasElement>()
const containerRef = ref<HTMLDivElement>()

onMounted(() => {
  const canvas = new fabric.Canvas(canvasRef.value, {
    controlsAboveOverlay: true,
    preserveObjectStacking: true,
  })

  init({
    initialCanvas: canvas,
    initialContainer: containerRef.value!,
  })
})
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="flex-1 flex">
      <aside>aside</aside>

      <main class="flex-1 overflow-auto bg-muted relative flex flex-col">
        <div
          ref="containerRef"
          class="flex-1 h-[calc(100%-12px)] bg-muted"
        >
          <canvas ref="canvasRef" />
        </div>
      </main>
    </div>
  </div>
</template>
