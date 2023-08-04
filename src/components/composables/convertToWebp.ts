import sharp from 'sharp';
import { optimize } from 'svgo'
import { Buffer } from 'buffer';

export function useImageConverter() {
    const convertImageUrl = ref<string>('')

     const convertAndMountImage = async (imgPath: string): Promise<void> => {
        try {
            const response = await fetch(imgPath)
            const isSvg = imgPath.toLowerCase().endsWith('.svg')
            let buffer: ArrayBuffer | Buffer
            if(isSvg) {
                const svgContent  = await response.text()
                const optimizeSvg = optimize(svgContent, {path: imgPath}).data
                buffer = Buffer.from(optimizeSvg)
                console.log(buffer)
            }else {
                buffer = await response.arrayBuffer()
            }

            const newUrl = sharp(imgPath).webp({quality: 75})
            console.log(newUrl)

            // to convert an image to webp format, we first need to convert the image to buffer
            // const convertedBuffer = await imagemin.buffer(buffer, {
            //     plugins: [imageminWebp({ quality: 75 })]
            // })

            // const convertedBuffer = await sharp(buffer).toFormat('webp').toBuffer()

            // console.log(convertedBuffer)


        }catch(error){
            console.error('Error converting or mounting image:', error);
        }
    }

    return {
        convertImageUrl,
        convertAndMountImage
    }
}