let qrText = document.getElementById("qrText");
let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");
let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//         // if(isValidURL(qrText.value)) {
//         //     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
//         // imgBox.classList.add("show-img");
//         // }

//         // else {
//         //     alert("Invalid URL. Please enter a valid URL");
//         // }
//     // generateQR()
// });
btn.addEventListener('click', () => {
    generateQR();
})

qrText.addEventListener("input", () => {
    if (qrText.value.trim() === "") {
        // Clear the QR code and hide the image box
        qrImage.src = "";
        imgBox.classList.remove("show-img");
    }
});

// qrText.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         event.preventDefault(); // Prevent the default form submission behavior
//         generateQR();
//     }
// });

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        generateQR();
    }
});

function isValidURL(url) {
    // Regular expression for URL validation
    const urlPattern = new RegExp(
      /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/
    );
    return urlPattern.test(url);
  }

  const generateQR = () => {
            if(isValidURL(qrText.value)) {
                qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
            imgBox.classList.add("show-img");
            }
    
            else {
                alert("Invalid URL. Please enter a valid URL");
            }
            
        // generateQR()
    };





