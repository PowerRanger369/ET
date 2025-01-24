<template>
  <div class="profile-page">
    <div class="profile-container">
      <div class="profile-header">
        <div class="profile-picture">User Picture</div>
        <div class="profile-info">
          <p>Name: User Name</p>
          <p>Email: User Email</p>
          <p>Role: User</p>
          <p>DOB: User DOB</p>
        </div>
        <button class="edit-btn" @click="editProfile">Edit Profile</button>
      </div>
      <div class="profile-actions">
        <div class="action-card">
        <h3>Add New Activity</h3>
        <img src="@/assets/User1.jpg" alt="u1">
      </div>
        <div class="action-card2">
          <h3>Update Previous Activity</h3>
          <img src="@/assets/u2.jpg" alt="u2">
        </div>
        <div class="action-card2">
          <h3>Overall Impact</h3>
          <img src="@/assets/u3.png" alt="u3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',

};
</script>

<style>

  /* Ensures the entire page layout is styled correctly */
.profile-page {

  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height to ensure footer placement */
  background-color: #f8f8f8;
}

.profile-container {
  width: 80%;
  max-width: 1200px;
  background-color: #d6f5e7; /* Light green header */
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto; /* Center content horizontally */
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 20px;
}

.profile-picture {
  width: 120px;
  height: 120px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
}

.profile-info {
  flex: 1;
  margin-left: 20px;
}

.profile-info p {
  margin: 5px 0;
  font-size: 16px;
  color: #333;
}

.edit-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #0056b3;
}

.profile-actions {
  display: flex;

  gap: 20px;
  margin-top: 10px;
}

.action-card {
  height: 200px;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px; /* Increased padding to make boxes bigger */
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 18px; /* Larger text size for emphasis */
  color: #333;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.profile-actions{
  background-color:#cccccc;
}
.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}
.action-card2{
  height: 200px;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px; /* Increased padding to make boxes bigger */
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 18px; /* Larger text size for emphasis */
  color: #333;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.action-card2:hover{
  transform: translateY(-5px);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}
/* Add spacing to push footer to bottom if content is short */

.action-card img{
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}
.action-card2 img{
  width: 120px;
  height: 140px;
}
</style>
