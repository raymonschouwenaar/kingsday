/**
 * Twitter API factory does a call to the twitter API
 */

app.factory("Tweet", function($resource) {
    return $resource("http://raymons.webfactional.com/api/REST.php/twitter/:search");
});