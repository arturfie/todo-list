using System;
using System.Collections.Generic;

namespace API.Data
{
    public interface ITodoRepo{
        List<string> GetAllTodos();
    }
}