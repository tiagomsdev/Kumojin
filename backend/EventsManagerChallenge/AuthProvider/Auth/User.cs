using System;

namespace AuthProvider.Auth
{
    public class User
    {
        public string userName { get; }
        public User(string userName)
        {
            this.userName = userName;
        }
    }
}
