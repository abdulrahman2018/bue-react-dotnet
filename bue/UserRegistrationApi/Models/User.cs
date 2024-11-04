// Models/User.cs
namespace UserRegistrationApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public int Age { get; set; }
    }
}
