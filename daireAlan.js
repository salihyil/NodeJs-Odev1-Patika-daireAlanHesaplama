const arguments = process.argv.slice(2);

function circleArea(r) {
    const pi = Math.PI;
    console.log(`Yarıçapı ${r} olan dairenin alanı:`, pi * r * r);
}

circleArea(arguments[0] * 1);