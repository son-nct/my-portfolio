export function convertToWebp(imageSrc: string): Promise<string> {
    return new Promise((resolve, reject) => {

        const image = new Image();
        image.src = imageSrc;
        
        image.onload = async () => {
            try {
                await image.decode();  // Ensure the image is loaded
                
                const canvas = document.createElement('canvas');
                canvas.width = image.width * 0.8;
                canvas.height = image.height * 0.8;
                
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                
                canvas.toBlob((blob) => {
                    if(blob) {
                        resolve(URL.createObjectURL(blob));
                    } else {
                        reject(new Error('Failed to convert image to WebP'));
                    }
                }, 'image/webp', 1);
            } catch (error) {
                reject(error);
            }
        };

        image.onerror = () => {
            reject(new Error('Failed to load the image'));
        };
    });
}
