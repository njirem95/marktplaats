using PaymentService.Domain.ValueObjects;

namespace PaymentService.Domain.Entities.PaymentAggregate
{
    public class Payment : BaseEntity, IAggregateRoot
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public Address Address { get; set; }

        public Creditcard Creditcard { get; set; }
    }
}