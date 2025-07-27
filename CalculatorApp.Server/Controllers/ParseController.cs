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
            if (string.IsNullOrWhiteSpace(input.Value))
                return BadRequest("Input cannot be empty");
            float result = input.Calculate();
            return Ok(result);
        }
    }
}
