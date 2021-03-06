$(function() {
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    if (options.target) {
        $(options.target).text(options.url);
        jqXHR.abort();
    }
});
                
$.ajax({
    url: '/foo{?query,number}',
    tokens: {query:'person', number: '1234'},
    target: '.result1'
}); 
$.ajax({
    url: '/foo{?query,number}',
    tokens: {number: '1234'},
    target: '.result2'
}); 
$.ajax({
    url: '/map?{x,y}',
    tokens: {x: '123', y: '987'},
    target: '.result3'
});
$.ajax({
    url: '/map?{x,y}',
    tokens: {x: '123'},
    target: '.result4'
});
$.ajax({
    url: '/foo?fixed=yes{&x}',
    tokens: {x: '123'},
    target: '.result5'
});
$.ajax({
    url: '/foo{?list}',
    tokens: {list: [ "red", "green", "blue" ] },
    target: '.result6'
}); 
$.ajax({
    url: '/foo{?list*}',
    tokens: {list: [ "red", "green", "blue" ] },
    target: '.result7'
}); 
});