using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using API.Data;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepo _toDoRepo;
        
        public TodoController(ITodoRepo todoRepo)
        {
            _toDoRepo = todoRepo;
        }
    
        [HttpGet]
        public ActionResult<List<string>> GetToDoList()
        {
            var todoList = _toDoRepo.GetAllTodos();
            return Ok(todoList);
        }
    }
}