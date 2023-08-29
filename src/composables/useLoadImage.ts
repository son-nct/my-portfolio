export const loadImage = (src: string): Promise<void> => {
    return new Promise<void>((resolve,reject): void => {
        const image = new Image()
        image.src = src
        image.onload = () => {
            resolve()
        }
        image.onerror = reject
    })
}
