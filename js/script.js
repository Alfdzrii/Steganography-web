const { Alert } = require("bootstrap");
document.addEventListener("DOMContentLoaded", function () {
  const decodeFile = document.getElementById("decodeFile");
  const decodeBtn = document.getElementById("decodeBtn");
  const decodeRslt = document.getElementById("decode-rslt");
  const encodeFile = document.getElementById("encodeFile");
  const encodeMsg = document.getElementById("encodeMSG");
  const encodeBtn = document.getElementById("encodeBtn");

  const encodeRsltContainer = document.getElementById("encodeRsltContainer");

  const delimeter = "$$END$$";

  //   decode
  decodeBtn.addEventListener("click", () => {
    const file = decodeFile.files[0];
    if (!file) {
      alert("select the picture");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixelData = imageData.data;

        let binaryMsg = "";
        let extractedMsg = "";

        for (let i = 0; i < pixelData; i++) {
          for (let j = 0; j < 3; j++) {
            const lsb = pixelData[i + j] % 2;
            binaryMsg = "";

            if (binaryMsg.length === 8) {
              const charCode = parseInt(binaryMsg, 2);
              extractedMsg += String.fromCharCode(charCode);
              binaryMsg = "";

              if (extractedMsg.endsWith(delimeter)) {
                decodeResultSpan.textContent = extractedMessage.substring(
                  0,
                  extractedMessage.length - delimiter.length
                );
                return;
              }
            }
          }
        }
        decodeResultSpan.textContent = "there's nothing";
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  encodeBtn.addEventListener("click", () => {
    const file = encodeFile.files[0];
    const message = encodeMsg.value;

    if (!file || !message) {
      Alert("select the picture");
      return;
    }
  });
});

// encode
encodeBtn.addEventListener("click", () => {
  const file = encodeFileInput.files[0];
  const message = secretMessageInput.value;

  if (!file) {
    alert("there is no file to put the messages!");
    return;
  }

  const messageWithDelimiter = message + delimiter;
  let messageInBinary = "";
  for (let i = 0; i < messageWithDelimiter.length; i++) {}
});
