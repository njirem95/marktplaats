<?php

$router->get('/notifications', 'NotificationController@all');
$router->post('notification/send', 'NotificationController@send');

// TODO Redirect to Swagger API spec
$router->get('/', function () use ($router) {
    return $router->app->version();
});
