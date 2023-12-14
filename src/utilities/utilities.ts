import sharp from 'sharp';

/**
 * Resize function to resize the image
 * Throwing an error if failing
 **/
async function resizeImage(
  imagePath: string,
  imgWidth: number,
  imgHeight: number,
  outputPath: string
): Promise<void> {
  try {
    await sharp(imagePath)
      .resize(imgWidth, imgHeight, { fit: 'cover' })
      .toFile(outputPath);
  } catch (error) {
    throw new Error('error during resizing');
  }
}

export default resizeImage;