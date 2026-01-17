document.getElementById("connectBtn").addEventListener("click", async () => {
  await connectWallet();
  updateStatus("Connected");
});
