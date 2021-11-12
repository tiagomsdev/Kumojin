# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /app

# copy everything else and build app
COPY . ./

RUN dotnet restore

RUN dotnet publish -c release -o out ./EventsManagerApi.csproj

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0  AS runtime
WORKDIR /app
COPY --from=build /app/out ./

ENTRYPOINT ["dotnet", "aspnetapp.dll"]