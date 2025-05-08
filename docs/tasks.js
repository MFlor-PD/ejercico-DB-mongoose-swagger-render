const tasksdocs = {
    paths: {
      "/api/tasks/create": {
        post: {
          summary: "Crear una nueva tarea",
          description: "Este endpoint permite crear una nueva tarea con un título proporcionado.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskInput", // Ref a la definición de TaskInput
                },
              },
            },
          },
          responses: {
            201: {
              description: "Tarea creada exitosamente",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task", // Ref a la definición de Task
                  },
                },
              },
            },
            400: {
              description: "Petición mal formada (por ejemplo, falta el título)",
            },
            500: {
              description: "Error en el servidor",
            },
          },
        },
      },
      "/api/tasks": {
        get: {
          summary: "Obtener todas las tareas",
          description: "Este endpoint devuelve todas las tareas almacenadas en la base de datos.",
          responses: {
            200: {
              description: "Lista de tareas obtenida exitosamente",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Task", // Ref a la definición de Task
                    },
                  },
                },
              },
            },
            500: {
              description: "Error en el servidor",
            },
          },
        },
      },
      "/api/tasks/{_id}": {
        get: {
          summary: "Obtener una tarea por ID",
          description: "Este endpoint devuelve una tarea específica según su ID.",
          parameters: [
            {
              in: "path",
              name: "_id",
              required: true,
              description: "ID de la tarea",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "Tarea obtenida exitosamente",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task", // Ref a la definición de Task
                  },
                },
              },
            },
            404: {
              description: "Tarea no encontrada",
            },
            500: {
              description: "Error en el servidor",
            },
          },
        },
        put: {
          summary: "Actualizar el título de una tarea",
          description: "Este endpoint permite actualizar solo el título de una tarea.",
          parameters: [
            {
              in: "path",
              name: "_id",
              required: true,
              description: "ID de la tarea",
              schema: {
                type: "string",
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskInput", // Ref a la definición de TaskInput
                },
              },
            },
          },
          responses: {
            200: {
              description: "Tarea actualizada exitosamente",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task", // Ref a la definición de Task
                  },
                },
              },
            },
            400: {
              description: "Título requerido",
            },
            404: {
              description: "Tarea no encontrada",
            },
            500: {
              description: "Error en el servidor",
            },
          },
        },
        delete: {
          summary: "Eliminar una tarea",
          description: "Este endpoint permite eliminar una tarea específica mediante su ID.",
          parameters: [
            {
              in: "path",
              name: "_id",
              required: true,
              description: "ID de la tarea",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "Tarea eliminada exitosamente",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task", // Ref a la definición de Task
                  },
                },
              },
            },
            404: {
              description: "Tarea no encontrada",
            },
            500: {
              description: "Error en el servidor",
            },
          },
        },
      },
    },
  };
  
  module.exports = tasksdocs;