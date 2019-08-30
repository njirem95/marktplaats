<?php

namespace App\Http\Controllers;

use App\Notification;
use App\Services\NotificationServiceInterface;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    private $notificationService;

    public function __construct(NotificationServiceInterface $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    public function send(Request $request)
    {
        $validatedData = $this->validate($request, [
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $notification = $this->notificationService->sendNotification($validatedData['email'], $validatedData['message']);

        return response()->json($notification);
    }

    public function all()
    {
        $notifications = $this->notificationService->getNotifications();

        return response()->json($notifications);
    }
}
