import {Image} from '@mantine/core'

export const MissingThumbnailImage = () => {
  return (
    <>
    <Image 
      src="/images/ganymede-thumbnail.png"
      alt="VodArchiv Thumbnail"
      fit="contain"
    />
    </>
  )
}