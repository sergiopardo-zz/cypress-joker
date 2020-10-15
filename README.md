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
