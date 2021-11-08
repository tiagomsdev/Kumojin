using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AuthProvider.Auth
{
    public class TokenUtils
    {
        public static string GetToken(User user, List<Claim> claims)
        {
            var issuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(TokenConfigs.Secret));

            var creds = new SigningCredentials(issuerSigningKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(TokenConfigs.Issuer, TokenConfigs.Audience, claims, expires: DateTime.UtcNow.AddDays(30), signingCredentials: creds);

            var tokenValue = new JwtSecurityTokenHandler().WriteToken(token);
            return tokenValue;
        }
    }
}
