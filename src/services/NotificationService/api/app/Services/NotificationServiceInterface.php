<?php

namespace App\Services;

use App\Notification;

interface NotificationServiceInterface
{
	function getNotifications() : \Illuminate\Support\Collection;

	function sendNotification(string $email, string $message) : Notification;
}