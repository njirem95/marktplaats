<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotificationSent extends Mailable 
{
	use Queueable, SerializesModels;

	public function __construct()
	{
		$this->notification = $notification;
	}

	public function build()
	{
		echo "hoi";
	}	
}