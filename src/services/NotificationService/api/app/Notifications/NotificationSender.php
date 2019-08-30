<?php

namespace App\Notifications;

use App\Notification;
use App\Mail\NotificationSent;

use Illuminate\Support\Facades\Mail;

final class NotificationSender implements NotificationSenderInterface
{
	public function send(Notification $notification) : void
	{
		$email = $notification->getEmail();

		// For now, do nothing. The mail implementation isn't that interesting.
	}
}