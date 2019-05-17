//routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});