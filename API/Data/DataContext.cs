using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }


// NAVODIM USERE IZ APPUSER ENTITY 
        public DbSet<AppUser> Users { get; set; }
    }
}