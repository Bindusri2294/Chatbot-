fetch("https://api.openai.com/v1/models", {
  headers: {
    "Authorization": "Bearer YOUR_API_KEY"
  }
})
.then(res => res.json())
.then(console.log);
