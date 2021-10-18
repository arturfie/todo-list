using System.Collections.Generic;

namespace API.Data
{
    public class TodoRepo : ITodoRepo
    {
        private List<string> TodoList = new List<string>()
        {
            "task1", "task2", "task3"
        };
        
        public List<string> GetAllTodos()
        {
            return TodoList;
        }
    }
}