using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthProvider.Auth
{
    public static class TokenConfigs
    {
        public static string Secret = "kumojin-webapi-authentication-valid";
        public static string Issuer = "EventsManagerAuthProvider";
        public static string Audience = "";
    }
}
