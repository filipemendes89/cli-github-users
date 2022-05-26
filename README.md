# cli-github-users
LovelyStay challenge

Hi lovely mates hope you're well :)

Let me describe a little bit what I did and how to use it.

First of all, set your project using npm start.
Secondly, set your .env file using the .envexample (using in the same path only) or use setenv command (described below).

The main function is called gitHubUsers and as soon you call it with --help command it shows a list of commands.
For each command it's possible to call --help command to see what arguments are available.

Functions:

Fetch - Demands a single parameter (-u) and gets an user from github.
    - u - A github username

Retrieve - Retrieve all users from database and can be used with 1 or 2 parameters
    -l - Location can be used to find user from a specific location
    -p - Language can be used to find users that have repos with this specific language

setenv - Is a function to help user to set their own databaseUrl and gitHub token and demands 2 parameters:
    -t - Token from github that allow much more requests than using the api without it
    -d - URL database from Postgres


If you have any questions about code and why, let me know :) 