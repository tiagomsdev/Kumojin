using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthProvider.Auth
{
    public interface IUserService
    {
        Task<bool> ValidateCredentials(String userName, string passWord, out User user);
    }
}
