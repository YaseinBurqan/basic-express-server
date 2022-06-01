# basic-express-server

1. We create a new repository at GitHub, called
(basic-express-server).
   - Then select the “Add a README” option.
   - Then select the “Add a .gitignore” option, and choose Node.js.
   - Then choose the MIT license.
2. Deploy THE branch to `Heroku`.
3. Choose “GitHub”
4. Started to build our server like the demo to check if the routes is working.
5. we build the test file so we can `TDD` our code.
6. The link for Heroku applications, Github actions and the pull request.
7. Choose the “enable automatic deploys” option

   [Action Link](https://github.com/YaseinBurqan/basic-express-server/actions)

   [PR Link](https://github.com/YaseinBurqan/basic-express-server/pulls)

   [Heroku Main Deploy](https://yasein-express-server-main.herokuapp.com/)

   [Heroku Dev Deploy](https://yasein-express-server-div.herokuapp.com/)

        Notes the Demo:

- Take step by step to create the Repo.
- Create new branch >> git checkout -b "dev"
- npm init -y
- npm i express dotenv jest
- npm i -d supertest
- Create server.js put the router on it.
- Create index.js require the server.
- Create middleware.
- Create Test
- to check the router is ok >> nodemon || node index.js.
- To test the server >> npm run test
- Update my readme file
- A C P
- Github action it should be passed.
- Create the HEROKU app and deploy it with GitHub.
