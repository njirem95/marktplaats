FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

COPY ./api/src .
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime

WORKDIR /app
RUN ls -ail
COPY --from=build /app/Api/out .

EXPOSE 80

ENTRYPOINT ["dotnet", "Api.dll"]