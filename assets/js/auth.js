/* Content for assets/js/auth.js */

function logout() {
  fetch('api/logout.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Redirect to index.html after successful logout
      window.location.href = 'index.html';
    } else {
      console.error('Logout failed.');
    }
  })
  .catch(error => {
    console.error('Error during logout:', error);
  });
}

// Example usage: Attach logout function to a button click
// Assuming you have a logout button with id="logoutBtn" in your HTML
document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});