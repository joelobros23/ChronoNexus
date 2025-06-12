# Project Plan: ChronoNexus

**Description:** A social network centered around personal timelines, allowing users to share memories, experiences, and future plans, categorized and viewed chronologically. Users can connect with others and explore shared events or timelines.


## Development Goals

- [ ] Design and create the database schema in database.sql for users, posts, friendships, comments, and likes.
- [ ] Implement database connection using api/config.php with PDO.
- [ ] Develop user registration functionality (api/register.php, register.html, assets/js/auth.js) with password hashing.
- [ ] Implement user login and session management (api/login.php, index.html, assets/js/auth.js).
- [ ] Implement user logout functionality (api/logout.php, assets/js/auth.js).
- [ ] Design the homepage (home.html) layout with Tailwind CSS.
- [ ] Develop the functionality to create posts (api/create_post.php, home.html, assets/js/main.js).
- [ ] Implement retrieval and display of posts on the homepage (api/get_posts.php, home.html, assets/js/main.js).
- [ ] Build user profile page (profile.html) with dynamic data from the database.
- [ ] Create API endpoints to fetch user data (api/get_user.php) and update profile information (api/update_profile.php, profile.html, assets/js/profile.js).
- [ ] Develop the friendship system (api/add_friend.php, api/get_friends.php, api/delete_friend.php, friends.html, assets/js/main.js).
- [ ] Implement commenting system for posts (api/comment.php, api/get_comments.php, home.html, assets/js/main.js).
- [ ] Develop liking/unliking functionality for posts (api/like_post.php, api/unlike_post.php, home.html, assets/js/main.js).
- [ ] Design and implement the timeline view page(timeline.html, assets/js/timeline.js), and properly display the posts with 'event_date'.
- [ ] Implement user settings page (settings.html) to allow users to change their profile information.
- [ ] Style the website using Tailwind CSS to create a visually appealing and responsive design.
