📩 Mini Messageboard

A simple Node.js + Express + EJS project that lets users post messages, view them on the homepage, and open a detail page for each message.

🚀 Features

View all messages on the homepage

Submit new messages through a form

See individual message details (author, text, date)

In-memory storage (no database required)

🛠️ Tech Stack

Node.js

Express

EJS
 for templating

📂 Project Structure
mini-messageboard/
│
├── app.js                 # Main application entry
├── messages.js            # In-memory messages array
├── routes/
│   ├── indexRouter.js     # Homepage route (list + form)
│   ├── newRouter.js       # Handles new message submission
│   └── messageRouter.js   # Handles individual message detail
├── views/
│   ├── index.ejs          # Homepage template
│   ├── form.ejs           # Form for creating a new message
│   └── message.ejs        # Single message details template
└── package.json

⚙️ Setup Instructions

Clone the repository

git clone [https://github.com/NormanMwagi/mini-messageboard.git](https://github.com/NormanMwagi/MessageBoard.git)
cd mini-messageboard


Install dependencies

npm install


Run the server

npm start
