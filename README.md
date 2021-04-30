Dylan Krueger Mobile Development (DIG4639C) Portfolio 2 Assignment

GitHub Pages Site: https://kroogucf.github.io/portfolio2/

I chose the option too "Converting a project not currently using React Navigation to use stacks or drawers with at least three new components. Each component in the new version should use state."

The two previous projects I used are, firstly the project I chose to convert is from week 12 where we created the TODO app with FlatList and CheckBoxes to use react navigation, specifically stack navigation from week13

I added a login system for a user to log into the site. The idea behind this is to set up for some sort of user profile to users to sign into. This then leads into a todo list that they can add, mark as completed, and see todos. I also have created a journal section that lets users put a Title for the entry, date for the entry, and body of text for the entry. This then gets displayed like a note back to the user. The idea behind this was let users right about what they achieved in their todos or special notes about them etc. I know it isn't polished with a backend and all that but I think it sets up well for a potential full app.

3 New components are:

1. Login System (It accepts any username and password for ease of access, but have to be something in each field or won't login. Takes place in LoginApp.js)
2. Journal Entry Page. This is where user can type in a title, body of text, and a date for a journal entry (Takes place in JournalMain.js and NewJournalPost.js)
3. Component that displays and styles journal entries to the user. (Takes place in JournalPost.js)
