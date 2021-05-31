using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Employee_List.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {

        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            using StreamReader r = new StreamReader("employees.json");
            string json = r.ReadToEnd();
            Console.WriteLine("Get Worked");
            return JsonConvert.DeserializeObject<Employee[]>(json);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee [] employees)
        {
            Console.WriteLine("Post Worked");
            Console.WriteLine(employees);
            using (StreamWriter writer = new StreamWriter("employees.json", false))
            {
                Console.WriteLine("Writing Line");
                var json = JsonConvert.SerializeObject(employees);
                //var content = new StringContent(JsonConvert.SerializeObject(employees), System.Text.Encoding.UTF8, "application/json");
                //Console.WriteLine(content);
                writer.Write(json);
            }
            return Ok();
        }
    }
}
