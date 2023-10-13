// Function to check if all images are loaded
const areImagesLoaded = () => {
  const backgroundImages = Array.from(
    document.querySelectorAll(".tile--header-img")
  );
  return backgroundImages.every((img) => img.complete);
};
export default areImagesLoaded;
