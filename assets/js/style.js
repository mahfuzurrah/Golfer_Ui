// Index Page 
function activateSection(section) {
  var caddy = document.querySelector('.caddy');
  var golfer = document.querySelector('.golfer');

  if (section === 'caddy') {
    caddy.classList.add('active');
    golfer.classList.remove('active');
  } else if (section === 'golfer') {
    caddy.classList.remove('active');
    golfer.classList.add('active');
  }
}

// Index Page 
const prices = document.querySelectorAll(".price");

prices.forEach((price) => {
  price.addEventListener("click", () => {
    // Remove active class from all prices
    prices.forEach((item) => item.classList.remove("active"));

    // Add active class to the clicked price
    price.classList.add("active");
  });
});


// PIN & OTP

function handleInput(currentInput, nextInput) {
  if (currentInput.value.length === currentInput.maxLength) {
    nextInput.focus();
  }
}

function handleInputTwo(currentInput, nextInput) {
  if (currentInput.value.length === currentInput.maxLength) {
    nextInput.focus();
  }
}

function handleInputThree(currentInput, nextInput) {
  if (currentInput.value.length === currentInput.maxLength) {
    if (nextInput) {
      nextInput.focus();
    }
  }
}

function handleBackspace(currentInput, previousInput) {
  if (currentInput.value.length === 0 && event.keyCode === 8) {
    previousInput.focus();
  }
}


// Add Bank Details

document.querySelector('input').addEventListener('focus', function () {
  this.setAttribute('placeholder', '');
});

document.querySelector('input').addEventListener('blur', function () {
  this.setAttribute('placeholder');
});


// Image Upload

document.getElementById('imageUpload').addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
  const files = event.target.files;
  const thumbnailsContainer = document.querySelector('.thumbnails');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function() {
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');

      const image = new Image();
      image.src = reader.result;

      thumbnail.appendChild(image);
      thumbnailsContainer.appendChild(thumbnail);
    }

    reader.readAsDataURL(file);
  }
}
