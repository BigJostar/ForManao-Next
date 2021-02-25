async function getAsync() {
    let info = await fetch('include/JS_AJAX/request.json');
    let content = await info.json();
    $('.Message').text('Hello' + (content.login));


};
getAsync();