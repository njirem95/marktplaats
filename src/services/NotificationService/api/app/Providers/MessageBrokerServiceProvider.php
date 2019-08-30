<?php
namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use PhpAmqpLib\Connecion\AMQPStreamConnection;

class MessageBrokerServiceProvider extends ServiceProvider
{
    public function register()
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $this->app->singleton(AMQPStreamConnection::class, $connection);
    }
}