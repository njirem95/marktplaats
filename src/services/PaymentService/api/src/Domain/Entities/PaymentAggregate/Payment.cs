using System;
using PaymentService.Domain.Entities;

namespace PaymentService.Domain.Entities.PaymentAggregate
{
    public class Payment : BaseEntity, IAggregateRoot
    {
        public Payment()
        {

        }
    }
}