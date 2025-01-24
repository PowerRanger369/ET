<template>
  <div class="edit-account-page">
    <div class="edit-account-container">
      <div class="profile-header">
        <div class="profile-picture">User Picture</div>
        <div class="profile-info">
          <p>Name: User Name</p>
          <p>Email: User Email</p>
          <p>Role: User</p>
          <p>DOB: User DOB</p>
        </div>
      </div>
      <form class="edit-form">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter new name" />

        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter new email" />

        <label for="current-password">Current Password:</label>
        <input type="password" id="current-password" placeholder="Enter current password" />

        <label for="new-password">New Password:</label>
        <input type="password" id="new-password" placeholder="Enter new password" />

        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" placeholder="Confirm new password" />

        <div class="form-actions">
          <button type="button" class="cancel-btn">Cancel</button>
          <button type="submit" class="save-btn">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.edit-account-page {
  padding: 20px;
}
.edit-account-container {
  background-color: #e5f8f5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.profile-header {
  display: flex;
  align-items: center;
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
.edit-form {
  display: flex;
  flex-direction: column;
}
.edit-form label {
  margin-bottom: 5px;
  font-weight: bold;
}
.edit-form input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-actions {
  display: flex;
  justify-content: space-between;
}
.cancel-btn,
.save-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.cancel-btn {
  background-color: #f44336;
  color: white;
}
.save-btn {
  background-color: #007bff;
  color: white;
}
</style>
