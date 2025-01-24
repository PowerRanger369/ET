<template>
  <div class="profile-page">
    <div class="profile-container">
      <div class="profile-header">
        <div class="profile-picture">Admin Image</div>
        <div class="profile-info">
          <p>Name: Admin Name</p>
          <p>Email: Admin Email</p>
          <p>Role: Admin</p>
          <p>DOB: Admin DOB</p>
        </div>
        <button class="edit-btn" @click="editProfile">Edit Profile</button>
      </div>
      <div class="profile-actions">
        <div class="action-card">
          <h3>Platform-Wide Impact</h3>
          <img src="@/assets/Adminimg1.jpg" alt="A1">
        </div>
        <div class="action-card2">
          <h3>User Activities Summary</h3>
          <img src="@/assets/Admin%20img2.jpg" alt="A2">
        </div>
        <div class="action-card">
          <h3>Moderation Tools</h3>
          <img src="@/assets/Admin%20img3.jpg" alt="fb">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    editProfile() {
      this.$router.push('/admin-edit-account');
    },
  },
};
</script>

<style scoped>
.profile-page {
  padding: 20px;
}
.profile-container {
  background-color: #e5f8f5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.profile-picture {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-info {
  flex: 1;
  margin-left: 20px;
}
.edit-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.edit-btn:hover {
  background-color: #0056b3;
}
.profile-actions {
  display: flex;
  justify-content: space-between;
}
.action-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
}
.action-card img{
  width: 180px;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.action-card2 img{
  width: 180px;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.action-card2{
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
}
</style>
