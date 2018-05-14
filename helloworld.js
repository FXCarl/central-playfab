// Cloud Script (JavaScript)
handlers.helloWorld = function (args, context) {
    var message = "Hello " + currentPlayerId + "!";
    log.info(message);
    var inputValue = null;
    if (args && args.hasOwnProperty("inputValue"))
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: inputValue });
    return { messageValue: message };
}