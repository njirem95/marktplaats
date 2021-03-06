<?php

namespace App\Repositories;

use App\Notification;

final class EloquentNotificationRepository implements NotificationRepositoryInterface
{
	public function add(Notification $notification) : void
	{
	}

	public function all() : \Illuminate\Support\Collection
	{
		return collect([1,2,3]);
	}
}