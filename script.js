document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "SmartHostel.apk"; // Replace with actual file path or URL
  link.download = "SmartHostel.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
  
