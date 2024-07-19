using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly StoreContext dbContext;
        public ProductController(StoreContext _dbContext)
        {
            dbContext = _dbContext;
        }

        [HttpGet]
        [Route("productlist")]
        public async Task<IActionResult> Get()
        {
            var productList = await dbContext.Products.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, productList);
        }

        [HttpGet]
        [Route("getproduct/{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var product = await dbContext.Products.FirstOrDefaultAsync(p => p.Id == id);
            return StatusCode(StatusCodes.Status200OK, product);
        }

        [HttpPost]
        [Route("newproduct")]
        public async Task<IActionResult> newproduct([FromBody] Product objeto)
        {
            await dbContext.Products.AddAsync(objeto);
            await dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new {menssage = "OK"});
        }

        [HttpPut]
        [Route("editproduct")]
        public async Task<IActionResult> editproduct([FromBody] Product objeto)
        {
            dbContext.Products.Update(objeto);
            await dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new { menssage = "OK" });
        }

        [HttpDelete]
        [Route("deleteproduct/{id:int}")]
        public async Task<IActionResult> deleteproduct(int id)
        {
            var product = await dbContext.Products.FirstOrDefaultAsync(p => p.Id == id);
            dbContext.Products.Remove(product);
            await dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new { menssage = "OK" });
        }
    }
}
