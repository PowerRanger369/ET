<template>
  <div class="header">
    <Header />
  </div>

  <div class="content">
    <div class="AdminContainer">
      <aside class="sidePanel">
        <div class="profile">
          <button class="profileImage">Profile</button>
          <p>[NAME]</p>
        </div>
        <div class="sidePanelButtons">
          <i>Dashboard</i>
          <i>Admin Settings</i>
          <i>Articles</i>
          <i>Traffic</i>
          <i>Users</i>
        </div>
      </aside>

      <div class="panel">
        <div class="AdminBar">
          <div class="search">
            <input type="text" placeholder="Search">
            <button><img src="../img/image.png" height="48" width="48"/></button>
          </div>
          <div class="view">
            <button class="user-view">User</button>
            <button class="admin-view">Admin</button>
          </div>
          <div class="icon-container">
            <i class="icon"><img src="../img/image (1).png" height="49" width="50"/></i>
            <i class="icon"><img src="../img/image (2).png" height="32" width="36"/></i>
          </div>
        </div>

        <div class="AdminEdit">
          <button class="addAdmin">Add Admin</button>
          <table>
            <thead>
            <tr class="TRTH">
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Modify</th>
            </tr>
            </thead>
            <tbody>
            <!-- Repeated rows -->
            <tr>
              <td>12345</td>
              <td>JOHN</td>
              <td>JOHN@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>67890</td>
              <td>JANE</td>
              <td>JANE@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>11223</td>
              <td>BOB</td>
              <td>BOB@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>44556</td>
              <td>ALICE</td>
              <td>ALICE@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>77889</td>
              <td>CHARLIE</td>
              <td>CHARLIE@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>99001</td>
              <td>DAVID</td>
              <td>DAVID@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>22334</td>
              <td>EMMA</td>
              <td>EMMA@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>55667</td>
              <td>FRANK</td>
              <td>FRANK@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>88990</td>
              <td>GRACE</td>
              <td>GRACE@EXAMPLE.COM</td>
              <td>************</td>
              <td class="editButtons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </td>
            </tr>

            <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


  <div class="footer">
    <Footer />
  </div>
</template>


<script >
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";



export default {
  name: 'article',
  components: {


    Header,

    Footer,

  },
}
</script>


<style >
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;


}

.content{
  margin: 50px 0 0 0;
}

*{
  font-family: inter;
}
/* Container styling */
.AdminContainer {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Side panel styling */
.sidePanel {
  width: 20%;
  background: linear-gradient(135deg, #4FB946 0%, #B046B9 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap:5%;
}


.sidePanelButtons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap:15px;
  border-top : 2px solid #ffffff;
  border-bottom : 2px solid #ffffff;

}

.sidePanelButtons i {
  width: 80%;
  margin: 10px 0;
  padding: 10px;
  gap: 60px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s, color 0.2s;


}

.sidePanelButtons i:hover {
  transform:scale(1.2);
  border-radius: 5px;

}

.profile {
  text-align: center;
  margin-bottom: 20px;
}

.profileImage {
  width: 100px;
  height: 100px;
  background-color: #6c757d;
  border-radius: 50%;
  border: none;
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
}


/* Main panel styling */
.panel {
  flex: 1;
  padding: 20px;
}

.AdminBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 3px solid;
  border-image: linear-gradient(135deg, #4FB946 0%, #B046B9 100%) 1;


}
/* Icon container to align and space the icons */
.icon-container {
  display: flex;
  gap: 15px; /* Space between icons */
  align-items: center;
  justify-content: center;
}

/* Icons styling */
.icon {
  font-size: 24px; /* Adjust icon size */
  color: #333; /* Neutral color for aesthetics */
  transition: transform 0.2s, color 0.2s;
}

/* Aesthetic hover effect */
.icon:hover {
  transform: scale(1.2); /* Slight zoom on hover */
  color: #0078d4; /* Change color on hover (e.g., blue) */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.search {
  display: flex;
  gap: 20px;
  flex-direction: row;
}

.search input {
  display:flex;
  padding: 5px;
  font-size: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 300px;

}

.search button {

  margin-left: 5px;
  border:none;
  background:none;
  cursor: pointer;
  transition: transform 0.2s;

}

.search button:hover {
  transform: scale(1.2);
}
.view{
  display: flex;
  gap: 70px;
}

.view button {
  padding: 10px 10px;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background:none;
  transition: background-color 0.2s, transform 0.2s;
}

.view button:hover {
  transform: scale(1.2);
}

.addAdmin {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #28a745;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.addAdmin:hover {
  background-color: #218838;
}

/* Table styling */
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}

table th, table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

.TRTH {
  background: linear-gradient(135deg, #4FB946 0%, #B046B9 100%);
  color: white;

}

.edit-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn:hover {
  background-color: #218838;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c82333;
}

.editButtons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>

