# bestbooks-receipts

A mobile application to scan receipts to be imported into BestBooks at a later time.

## cordova help

```
Synopsis

    cordova command [options]

Global Commands
    create ............................. Create a project
    help ............................... Get help for a command
    telemetry .......................... Turn telemetry collection on or off
    config ............................. Set, get, delete, edit, and list global cordova options

Project Commands
    info ............................... Generate project information
    requirements ....................... Checks and print out all the requirements
                                            for platforms specified

    platform ........................... Manage project platforms
    plugin ............................. Manage project plugins

    prepare ............................ Copy files into platform(s) for building
    compile ............................ Build platform(s)
    clean .............................. Cleanup project from build artifacts

    run ................................ Run project
                                            (including prepare && compile)
    serve .............................. Run project with a local webserver
                                            (including prepare)

Learn more about command options using 'cordova help <command>'

Aliases
    build -> cordova prepare && cordova compile
    emulate -> cordova run --emulator

Options
    -v, --version ...................... prints out this utility's version
    -d, --verbose ...................... debug mode produces verbose log output for all activity,
    --nohooks .......................... suppress executing hooks
                                         (taking RegExp hook patterns as parameters)

Examples
    cordova create myApp org.apache.cordova.myApp myApp
    cordova plugin add cordova-plugin-camera
    cordova platform add android
    cordova plugin add cordova-plugin-camera --nosave
    cordova platform add android --nosave
    cordova requirements android  
    cordova build android --verbose
    cordova run android
    cordova build android --release -- --keystore="..\android.keystore" --storePassword=android --alias=mykey
    cordova config ls
```
