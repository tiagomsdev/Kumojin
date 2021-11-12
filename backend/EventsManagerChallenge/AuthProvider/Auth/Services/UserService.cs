using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthProvider.Auth
{
    public class UserService : IUserService
    {
        private IDictionary<string, (string passWord, User user)> _users = 
            new Dictionary<string, (string passWord, User user)>();

        public UserService(IDictionary<string, string> credentials)
        {
            foreach(var c in credentials)
            {
                _users.Add(c.Key.ToLower(), (c.Value, new User(c.Key)));
            }

        }

        public Task<bool> ValidateCredentials(string userName, string passWord, out User user)
        {
            user = null;
            var key = userName.ToLower();

            if (_users.ContainsKey(key))
            {
                if(passWord == _users[key].passWord)
                {
                    user = _users[key].user;
                    return Task.FromResult(true);
                }
            }
            return Task.FromResult(false);
        }
    }
}
