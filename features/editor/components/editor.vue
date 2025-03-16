<script lang="ts" setup>
import * as fabric from 'fabric'
import Footer from './footer.vue'
import Navbar from './navbar.vue'
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
    <Navbar />

    <div class="flex-1 flex">
      <aside>aside</aside>

      <main class="flex-1 overflow-auto bg-muted relative flex flex-col">
        <div
          ref="containerRef"
          class="flex-1 bg-muted"
        >
          <canvas ref="canvasRef" />
        </div>

        <Footer />
      </main>
    </div>
  </div>
</template>
