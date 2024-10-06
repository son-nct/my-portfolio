import { useGsap } from '#gsap'
import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {
  const scrollLenis = new Lenis({
    duration: 1.2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    infinite: false
  })

  useGsap.ticker.add((time) => {
    scrollLenis.raf(time * 1000)
  })

  useGsap.ticker.lagSmoothing(0)
}
