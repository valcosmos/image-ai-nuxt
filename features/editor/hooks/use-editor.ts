import type { Canvas } from 'fabric'
import * as fabric from 'fabric'

export function useEditor() {
  const canvasRef = ref<Canvas>()
  const containerRef = ref<HTMLDivElement>()

  function init({ initialCanvas, initialContainer }: { initialCanvas: Canvas, initialContainer: HTMLDivElement }) {
    const initialWorkspace = new fabric.Rect({
      width: 600,
      height: 900,
      name: 'clip',
      fill: 'white',
      selectable: false,
      hasBorders: false,
      shadow: new fabric.Shadow({
        color: 'rgba(0, 0, 0, 0.5)',
        blur: 10,
      }),
    })

    initialCanvas.setDimensions({
      width: initialContainer.offsetWidth,
      height: initialContainer.offsetHeight,
    })

    initialCanvas.add(initialWorkspace)
    initialCanvas.centerObject(initialWorkspace)
    initialCanvas.clipPath = initialWorkspace

    canvasRef.value = initialCanvas
    containerRef.value = initialContainer

    const test = new fabric.Rect({
      width: 100,
      height: 100,
      name: 'test',
      fill: 'gray',
    })

    initialCanvas.add(test)
    initialCanvas.centerObject(test)
  }

  return { init }
}
