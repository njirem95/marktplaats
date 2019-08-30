<?php

namespace App\Providers;

use App\User;
use App\Repositories\NotificationRepositoryInterface;
use App\Repositories\EloquentNotificationRepository;
use App\Notifications\NotificationSenderInterface;
use App\Notifications\NotificationSender;
use App\Services\NotificationServiceInterface;
use App\Services\NotificationService;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class NotificationServiceProvider extends ServiceProvider
{
	public function register()
	{
		$this->app->bind(NotificationRepositoryInterface::class, EloquentNotificationRepository::class);

		$this->app->bind(NotificationSenderInterface::class, NotificationSender::class);

		$this->app->bind(NotificationServiceInterface::class, NotificationService::class);
	}
}