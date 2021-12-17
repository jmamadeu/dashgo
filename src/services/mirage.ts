import faker from "faker";
import { createServer, Factory, Model, Response } from "miragejs";

type UserType = {
  name: string;
  email: string;
  created_at: string;
};

export const makeServer = () => {
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserType>>({})
    },
    factories: {
      user: Factory.extend({
        name() {
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        }
      })
    },

    seeds(server) {
      server.createList("user", 300);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const usersModel = schema.all("user").models;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const total = schema.all("user").length;

        const users = usersModel.slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.post("/users");

      this.namespace = "";
      this.passthrough();
    }
  });

  return server;
};
