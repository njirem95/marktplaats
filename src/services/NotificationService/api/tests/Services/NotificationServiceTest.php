<?php

use App\Services\NotificationService;
use App\Notifications\NotificationSenderInterface;
use App\Repositories\NotificationRepositoryInterface;
use App\Exceptions\NotificationsNotFoundException;

class NotificationServiceTest extends TestCase
{
    private $repository;
    private $sender;
    private $notificationService;

    public function setUp(): void
    {
        $this->sender = Mockery::mock(NotificationSenderInterface::class);
        $this->repository = Mockery::mock(NotificationRepositoryInterface::class);

        $this->notificationService = new NotificationService($this->sender, $this->repository);
    }

    public function tearDown(): void
    {
       \Mockery::close();
    }

    public function testGetNotifications()
    {
        $expected = collect(1,2,3);
        $this->repository->shouldReceive('all')
            ->once()
            ->andReturn($expected);

        $result = $this->notificationService->getNotifications();

        $this->assertTrue($result->count() == $expected->count());
    }

    public function testGetNotificationsThrowsNotificationsNotFoundException()
    {
        $emptyCollection = collect();
        $this->repository->shouldReceive('all')
            ->once()
            ->andReturn($emptyCollection);

        $this->expectException(NotificationsNotFoundException::class);
        $result = $this->notificationService->getNotifications();  
    }

}
