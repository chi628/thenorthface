document.getElementById('photo-3-left').addEventListener('change', function (event) {
  const image = document.getElementById('photo-3-left-img')
  const cropperBtn = document.getElementById('photo-3-left-cropper-btn')
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = function (e) {
    image.src = e.target.result

    const cropper = new Cropper(image)

    if (cropperBtn) {
      cropperBtn.style.display = 'flex'
      cropperBtn.addEventListener('click', () => {
        var croppedCanvas
        var roundedCanvas

        // if (!croppable) {
        //   return;
        // }

        croppedCanvas = cropper.getCroppedCanvas()

        roundedCanvas = getRoundedCanvas(croppedCanvas)

        image.src = roundedCanvas.toDataURL()
        cropperBtn.style.display = 'none'
        cropper.destroy()
      })
    }
  }
  if (file) {
    reader.readAsDataURL(file)
  }
})

function getRoundedCanvas(sourceCanvas) {
  var canvas = document.createElement('canvas')
  var context = canvas.getContext('2d')
  var width = sourceCanvas.width
  var height = sourceCanvas.height

  canvas.width = width
  canvas.height = height
  context.imageSmoothingEnabled = true
  context.drawImage(sourceCanvas, 0, 0, width, height)
  // context.globalCompositeOperation = 'destination-in';
  // context.beginPath();
  // context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
  // context.fill();
  return canvas
}

function covertImgToBase64() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = img.width
  canvas.height = img.height

  // ctx.drawImage(img, 0, 0, img.width, img.height);

  const base64String = canvas.toDataURL()
}
