using Newtonsoft.Json;
using System;

namespace Employee_List
{
    public class Employee
    {
        [JsonProperty("fullName")]
        public string FullName { get; set; }

        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("phoneNumber")]
        public string PhoneNumber { get; set; }

        [JsonProperty("position")]
        public int Position { get; set; }
    }
}
