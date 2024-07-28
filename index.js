const qrCode = require("qrcode");

qrCode.toString("I am who i am", {type: "terminal"}, function (err, data) {
    console.log(data);
});
