function launchBrowser(browser)
{
    if(browser=="edge")
    {
        console.log("lanched browser",browser);
    }
    else
    {
        console.log("Default browser lauched");
    }
}

function runTests(testType)
{
    switch (testType)
    {
        case "Smoke":
            console.log("Smoke Suite is Running");
            break;
            case "Sanity":
                console.log("Sanity Suite is Running");
                break;
                case "Regression":
                    console.log("Regression Suite is Running");
                    break;
                    default:
                        console.log("No Suite is triggered yet");
                        break;
    }
}
launchBrowser("chrome")
runTests("Regression")

launchBrowser("dummy")
runTests("dummy")
