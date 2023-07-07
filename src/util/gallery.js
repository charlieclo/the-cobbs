export function initiateGalleryImages (images) {
  const galleryImages = []

  for (let i = 1; i <= 15; i++) {
    if (images[`image${i}`] !== null) {
      galleryImages.push(images[`image${i}`])
    }
  }

  return galleryImages
}