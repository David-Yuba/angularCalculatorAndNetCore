using Microsoft.AspNetCore.Mvc;

namespace CalculatorApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParseController : ControllerBase
    {
        [HttpPost]
        public IActionResult ParseString([FromBody] Expression input)
        {
            if (string.IsNullOrWhiteSpace(input.Exp))
                return BadRequest("Input cannot be empty");
            int result = input.Exp.Length;
            return Ok(result);
        }
    }

    public class Expression
    {
        public string Exp { get; set; }
    }
}
