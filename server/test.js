fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Test", email: "test@test.com", message: "This is a test message" })
}).then(res => res.text()).then(console.log).catch(console.error);
