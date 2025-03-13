// Função para gerar código de barras
function generateBarcode() {
    var barcodeInput = document.getElementById('barcodeInput').value;
    var barcodeContainer = document.getElementById('barcode');

    if (barcodeInput) {
        barcodeContainer.innerHTML = ''; // Limpar código de barras anterior

        var canvas = document.createElement('canvas');
        barcodeContainer.appendChild(canvas);

        JsBarcode(canvas, barcodeInput, {
            format: "CODE128",
            displayValue: true,
            width: 2,
            height: 80,
        });

        document.getElementById('downloadBarcode').style.display = 'inline-block';
    } else {
        alert("Por favor, insira um valor para gerar o código de barras.");
    }
}

// Função para baixar o código de barras
function downloadBarcode() {
    var canvas = document.querySelector('#barcode canvas');
    if (!canvas) {
        alert("Erro ao gerar o código de barras. Tente novamente.");
        return;
    }

    var imgData = canvas.toDataURL("image/jpeg");

    var a = document.createElement('a');
    a.href = imgData;
    a.download = 'barcode.jpg';
    a.click();
}

// Função para gerar QR Code
function generateQRCode() {
    var qrcodeInput = document.getElementById('qrcodeInput').value;
    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';

    if (qrcodeInput) {
        var canvas = document.createElement('canvas');
        qrcodeContainer.appendChild(canvas);

        QRCode.toCanvas(canvas, qrcodeInput, { width: 200, margin: 2 }, function(error) {
            if (error) {
                console.error(error);
                alert("Erro ao gerar o QR Code. Tente novamente.");
            } else {
                document.getElementById('downloadQRCode').style.display = 'inline-block';
            }
        });
    } else {
        alert("Por favor, insira um valor para gerar o QR Code.");
    }
}

// Função para baixar o QR Code
function downloadQRCode() {
    var canvas = document.querySelector('#qrcode canvas');
    if (!canvas) {
        alert("Erro ao gerar o QR Code. Tente novamente.");
        return;
    }

    var imgData = canvas.toDataURL("image/jpeg");

    var a = document.createElement('a');
    a.href = imgData;
    a.download = 'qrcode.jpg';
    a.click();
}
