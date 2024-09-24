function downloadImage(imageUrl) {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = imageUrl.split('/').pop(); // Set the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
