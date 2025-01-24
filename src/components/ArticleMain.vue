<script >
export default {
  name: 'ArticleMain',
};
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout Example</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
  <div class="container">
    <!-- Main Section -->
    <div class="main-content">
      <div class="main-img">Img</div>
      <div class="main-details">
        <h2>Header</h2>
        <p>Information</p>
        <p class="meta">Date / Category</p>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-item">
        <div class="img-box">Img</div>
        <h3>Header</h3>
        <p>Information</p>
        <p class="meta">Date / Category</p>
      </div>
      <div class="sidebar-item">
        <div class="img-box">Img</div>
        <h3>Header</h3>
        <p>Information</p>
        <p class="meta">Date / Category</p>
      </div>
    </div>

    <!-- Grid Section -->
    <div class="grid-section">
      <div class="grid-item">
        <div class="img-box">Img</div>
        <h3>Header</h3>
        <p>Information</p>
        <p class="meta">Date / Category</p>
      </div>
      <div class="grid-item">
        <div class="img-box">Img</div>
        <h3>Header</h3>
        <p>Information</p>
        <p class="meta">Date / Category</p>
      </div>
      <div class="grid-item">
        <div class="img-box">Img</div>
        <h3>Header</h3>
        <p>Information</p>
        <p class="meta">Date / Category</p>
      </div>
      <div class="grid-item">
        <div class="img-box">Img</div>
        <h3>Header</h3>
        <p>Information</p>
        <p class="meta">Date / Category</p>
      </div>
    </div>
  </div>
  </body>
  </html>

</template>

<style >
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.main-img {
  flex: 2;
  height: 200px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.main-details {
  flex: 1;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.img-box {
  height: 100px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.meta {
  font-size: 12px;
  color: #666;
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>