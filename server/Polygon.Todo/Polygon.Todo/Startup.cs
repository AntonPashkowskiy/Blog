using System;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using Polygon.Todo.Core.Entities;
using Polygon.Todo.Core.Services.Implementations;
using Polygon.Todo.Core.Services.Interfaces;

namespace Polygon.Todo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddAutoMapper();
            services.AddLogging();

            // Application services
            services.AddTransient(typeof(IMongoCollectionHelper<TodoItem>), typeof(MongoCollectionHelper<TodoItem>));
            services.AddScoped(typeof(ITodoService), typeof(TodoService));
            ConfigureMongoDbService(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }

        private void ConfigureMongoDbService(IServiceCollection services)
        {
            var databaseConfigurationSection = Configuration.GetSection("MongoDb");
            var host = databaseConfigurationSection.GetValue<string>("Host");
            var port = databaseConfigurationSection.GetValue<string>("Port");
            var databaseName = databaseConfigurationSection.GetValue<string>("DatabaseName");
            var user = databaseConfigurationSection.GetValue<string>("User");
            var password = databaseConfigurationSection.GetValue<string>("Password");

            var credential = MongoCredential.CreateMongoCRCredential(databaseName, user, password);
            var settings = new MongoClientSettings
            {
                Credential = credential,
                Server = new MongoServerAddress(host, Convert.ToInt32(port))
            };

            services.AddSingleton(typeof(IMongoDbProvider), serviceProvider => new MongoDbProvider(settings, databaseName));
        }
    }
}
