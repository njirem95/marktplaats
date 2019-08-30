<?php

namespace App\Notifications;

use App\Notification;

interface NotificationSenderInterface
{
	function send(Notification $notification) : void;
}