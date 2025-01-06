import { StaticImageData } from "next/image"

export type Images = {
    im1: StaticImageData | string 
    im2: StaticImageData | string
    im3: StaticImageData | string
    im4: StaticImageData | string
    im5: StaticImageData | string
    im6?: StaticImageData | string
    im7?: StaticImageData | string
    im8?: StaticImageData | string
    im9?: StaticImageData | string
    im10?: StaticImageData | string
    im11?: StaticImageData | string
}


// export type ImagesMarmore = Pick<Images,'im1'|'im2'|'im3' | 'im4' | 'im5' |'im6'|'im7'|'im8' | 'im9' | 'im10' | 'im11'>

// export type ImagesBrasilcard = Pick<Images,'im1'|'im2'|'im3' | 'im4' | 'im5' |'im6'|'im7'>

// export type ImagesMartinez = Pick<Images,'im1'|'im2'|'im3' | 'im4' | 'im5' |'im6'>

// export type ImagesEmidio = Pick<Images,'im1'|'im2'|'im3' | 'im4' | 'im5'>

