<?php

namespace App;

use App\Exceptions\EmailException;
use App\Exceptions\MessageException;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
	public function getEmail() : string
	{		
		if (!isset($this->email)) {
			throw new EmailNotFoundException("Unable to get recipient from notification model");
		}

		return $this->email;
	}

	public function setEmail(string $email)
	{
		$this->email = $email;
	}

	public function getMessage() : string
	{
		if (!isset($this->message)) {
			throw new MessageNotFoundException("Unable to get message from notification model");
		}

		return $this->message;
	}

	public function setMessage(string $message)
	{
		$this->message = $message;
	}
}