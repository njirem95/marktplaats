<?php

namespace App\Repositories;

use App\Notification;

interface NotificationRepositoryInterface
{
	function add(Notification $notification) : void;
	function all() : \Illuminate\Support\Collection;
}