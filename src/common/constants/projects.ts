import coolscriptDesc from '../../assets/text/projects/coolscript.txt'
import cosmicCalamityDesc from '../../assets/text/projects/cosmic-calamity.txt'
import mandelbulbDesc from '../../assets/text/projects/mandelbulb.txt'
import mnistDesc from '../../assets/text/projects/mnist.txt'
import coolscriptBanner from '../../assets/images/project-banners/coolscript.png'
import cosmicCalamityBanner from '../../assets/images/project-banners/cosmic-calamity.png'
import mandelbulbBanner from '../../assets/images/project-banners/mandelbulb.png'
import mnistBanner from '../../assets/images/project-banners/mnist.png'

export type Project = {
  name: string,
  bannerImage: string
  url: string,
  desc: string,
}

function project(name: string, bannerImage: string, url: string, desc: string): Project {
  return { name, bannerImage, url, desc }
}

export const PROJECT_LIST: Project[] = [
  project(
    'CoolScript',
    coolscriptBanner,
    'https://andgate.github.io/coolscript',
    coolscriptDesc
  ),
  project(
    'Cosmic Calamity',
    cosmicCalamityBanner,
    'https://andgate.github.io/cosmic-calamity',
    cosmicCalamityDesc
  ),
  project(
    'Mandelbulb Explorer',
    mandelbulbBanner,
    'https://www.github.com/andgate/mandelbulb',
    mandelbulbDesc
  ),
  project(
    'MNIST Demo',
    mnistBanner,
    'https://andgate.github.io/mnist',
    mnistDesc
  ),
] 