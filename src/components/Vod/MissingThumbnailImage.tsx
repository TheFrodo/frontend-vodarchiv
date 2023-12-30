import {Image} from '@mantine/core'

export const MissingThumbnailImage = () => {
  return (
    <>
    <Image 
      src="/images/ganymede-thumbnail.png"
      alt="vodarchiv Thumbnail"
      fit="contain"
    />
    </>
  )
}