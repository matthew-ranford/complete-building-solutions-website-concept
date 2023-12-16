const featureImage = document.querySelector('.feature img')
const smallImages = document.querySelectorAll('.small img')
const smallImagesArray = Array.from(smallImages)
const imgSRC = smallImagesArray.map((image) => image.src)
const buttons = document.querySelectorAll('.arrow')

smallImages.forEach((image) =>
  image.addEventListener('click', changeFeatureImage)
)
buttons.forEach((button) => button.addEventListener('click', nextImage))

function changeFeatureImage() {
  featureImage.src = this.src
  featureImage.dataset.key = this.dataset.key
}

function nextImage() {
  // find out data-key of current image
  const currentImage = document.querySelector('.feature img')
  const currentKey = parseInt(currentImage.dataset.key)

  // find out the key for the next image

  let newKey = 0
  if (this.className.includes('right')) {
    newKey = currentKey + 1
    if (newKey > 10) {
      newKey = 1
    }
  } else {
    newKey = currentKey - 1
    if (newKey < 1) {
      newKey = 10
    }
  }

  // update data-key and src of feature image
  featureImage.dataset.key = newKey
  featureImage.src = imgSRC[newKey - 1]
}

var modalImage = document.getElementById('modal-image')

// Get the modal image tag
var modal = document.getElementById('myModal')

// When the user clicks the big picture, set the image and open the modal
featureImage.onclick = function (e) {
  var src = e.srcElement.src
  modal.style.display = 'block'
  modalImage.src = src
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
