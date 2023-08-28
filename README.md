# tw-assignment
This project has been created for mobile test automation using Appium leveraging the [WebdriverIO](https://webdriver.io/) framework with Javascript. This project boasts of following features :
1) Page Object Model
2) Browser stack integration
3) Github Actions integration

# Requirements
* Latest [Nodejs](https://nodejs.org/en) version
* [JDK](https://www.oracle.com/in/java/technologies/downloads/#jdk20-mac)
* [Android virtual device](https://developer.android.com/studio/run/managing-avds)
* [Appium](https://appium.io/docs/en/2.0/quickstart/uiauto2-driver/) and its UiAutomator2 driver

If you want to run the tests on browserstack
* Browser stack access with username and access key.

# Execution
1. Clone the project. All the test spec files are located in `test/specs/android`
2. Install all the dependencies - 
   `npm install`
3. Run the android virtual device in your local machine with platform version 14.0 or change the platform version you are using [here](https://github.com/adilimroz/tw-assignment/blob/aa0ae3db31dd9195486c5fd11983cc6902d04c42/config/android-wdio.conf.js#L64)
4. Run the test on local - 
   `npm run wdioAndroid`
5. I have implemented the default spec reporting which you can either see in the terminal or can be viewed when integrate in build pipelines.

# Note on Browserstack integration
For now the tests fail on browserstack as running the test on browser stack gives following error, which I haven't tried to handle as I just wanted to demonstrate that the same tests could be run on local as well as cloud services.
<img width="531" alt="Screenshot 2023-08-28 at 1 25 09 PM" src="https://github.com/adilimroz/tw-assignment/assets/5220489/e3031e27-1d92-421d-a70f-060da1bc5be4">

Also, to give it a spin you can add your browser stack keys [here](https://github.com/adilimroz/tw-assignment/blob/fc2aad235d2771b31771d7255a4f31087d8b622e/config/android-wdio-bs.conf.js#L2) and run the below command
`npm run /android-wdio-bs.conf.js`

# Note on Github actions
For now you can view the builds triggered on branch push in Actions tab of the repository. Haven't put effort to resolve the error as again it will be stuck with browser stack.


