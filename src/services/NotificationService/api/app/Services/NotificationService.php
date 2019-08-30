<?php

namespace App\Services;

use App\Notification;
use App\Notifications\NotificationSenderInterface;
use App\Repositories\NotificationRepositoryInterface;
use App\Exceptions\NotificationsNotFoundException;
use Illuminate\Support\Collection;


final class NotificationService implements NotificationServiceInterface
{
	/**
	 * @var App\Notifications\NotificationSenderInterface
	 */
	private $notificationSender;

	/**
	 * @var App\Repositories\NotificationRepositoryInterface
	 */
	private $notificationRepository;

	/**
	 * NotificationService constructor.
	 *
	 * @param NotificationSenderInterface $notificationSender
	 * @param NotificationRepositoryInterface $notificationRepository
	 */
	public function __construct(NotificationSenderInterface $notificationSender, NotificationRepositoryInterface $notificationRepository)
	{
		$this->notificationSender = $notificationSender;
		$this->notificationRepository = $notificationRepository;
	}	

	/**
	 * Gets all notifications from notificationRepository.
	 * Throws an exception if notificationRepository returns an empty collection.
	 *
	 * @throws NotificationsNotFoundException
	 * @return \Illuminate\Support\Collection
	 */
	public function getNotifications() : Collection
    {
    	$notifications = $this->notificationRepository->all();
    	if ($notifications->count() == 0) {
    		throw new NotificationsNotFoundException("Unable to find notifications");
    	}

    	return $notifications;
    }

    /**
     * Creates a new notification object and passes it to notificationSender.
     * The notification will be added to notificationRepository if the notification
     * has been sent by notificationSender.
     *
     * @param string $email the receiver's e-mail address
     * @param string $message the message to be sent
     * @return Notification
     */
    public function sendNotification(string $email, string $message) : Notification
    {
    	$notification = new Notification();
    	$notification->setEmail($email);
    	$notification->setMessage($message);

        $this->notificationSender->send($notification);

        $this->notificationRepository->add($notification);

        return $notification;
    }
}