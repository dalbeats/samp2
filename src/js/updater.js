const uaup = require('uaup-js');


const defaultStages = {
    Checking: "Checking For Updates!", // When Checking For Updates.
    Found: "Update Found!",  // If an Update is Found.
    NotFound: "No Update Found.", // If an Update is Not Found.
    Downloading: "Downloading...", // When Downloading Update.
    Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Launching..." // When Launching the Application.
};

const updateOptions = {
     
    gitRepo: "samp", // [Required] Your Repo Name
    gitUsername: "dalbeats",  // [Required] Your GitHub Username.

    appName: "samp-test", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "samp-test.exe", //[Required] The Executable of the Application to be Run after updating.


    progressBar: document.getElementById("donwnload"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
  
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};

uaup.Update(updateOptions);