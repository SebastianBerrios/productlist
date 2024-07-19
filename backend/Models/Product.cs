using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? ProductName { get; set; }

    public double? Price { get; set; }
}
