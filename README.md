# Automation with CYPRESS

## Pre requisites

1. Install NVM
2. Install a LTS version of NODE
3. Install Cypress ```npm install cypress```
4. Run ```npm install```

## Run tests headless

1. ```cd``` on the project folder
2. Run ```npx cypress run --spec "cypress/integration/examples/login_runa.spec.js" --record --key 98c3a670-0c9b-404e-aa4c-698438442aaf```

## Run test with UI

1. ```cd``` on the project folder
2. Run ```npm run cypress:open```
3. In the UI select the browser and then select the spec file.
4. MAGIC!!


## How to use this project
This project was created with the intention of being a base, so that from it, you can create your own project.

For this...

### Clone this project
To start, let's clone this repository:
```
git clone git@github.com:runahr/cypress-runa-automation-base.git
```

### Change the name
Change the name of the directory to the name of the project you are creating:

`mv cypress-runa-automation-base` `cypress-myproject`


### Change the GIT remote for the new project
To change the git url you need to have a new project created at [Runa's github](https://github.com/runahr)
```
git remote remove origin
git remote add origin URL_OF_YOUR_GIT
```

### Push the code
Push what we have in the base project to your new project before starting the changes.
```
git push origin master
```

### Create your tests
Start creating your own test scenarios!
