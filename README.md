# Proyecto: Gestión de Productos

Este proyecto consiste en dos partes: una API RESTFUL creada con .NET Core para gestionar una lista de productos y una aplicación web frontend desarrollada con React y TypeScript para interactuar con esta API.

## Tecnologías Utilizadas

### Backend

- **.NET Core**
- **SQL Server**

### Frontend

- **React con TypeScript**
- **Reactstrap**
- **SweetAlert2**

## Descripción del Proyecto

### Parte 1: Backend con .NET Core

1. Cree una API RESTFUL utilizando .NET Core.
2. La API gestiona una lista de productos. Cada producto tiene las siguientes propiedades:
   - ID (entero)
   - Nombre (cadena de texto)
   - Precio (decimal)
3. Implementé los endpoints CRUD (Crear, Leer, Actualizar, Eliminar) para los productos.
4. Utilicé SQL Server para la base de datos.

### Parte 2: Frontend con React

1. Cree una aplicación web utilizando React con TypeScript que consume la API creada en la Parte 1.
2. La aplicación permite a los usuarios realizar las siguientes acciones:
   - Ver una lista de productos.
   - Añadir un nuevo producto.
3. Utilicé hooks de React como (useState, useEffect, ChangeEvent, useNavigate, useParams) para gestionar el estado y los efectos.
4. Implementé formularios con validaciones adecuadas para añadir productos.
5. Utilicé la librería Reactstrap para estilizar la aplicación.
6. Utilicé SweetAlert2 para los mensajes.

## Funcionalidades

- Ver una lista de productos.
- Añadir, editar o eliminar un nuevo producto.

## Capturas de Pantalla

![Lista de Producto](/images/productlist.png)

![Agregar producto](/images/addproduct.png)

![Producto agregado](/images/productadd.png)

![Editar Producto](/images/editproduct.png)

![Produto editado](/images/productedit.png)

![Borrar Producto](/images/deleteproduct.png)

![Productos eliminados](/images/productdelete.png)

## Configuración y Ejecución

### Prerrequisitos

- **.NET Core SDK**
- **SQL Server**
- **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo desde [Node.js](https://nodejs.org/).
- **npm** o **yarn**: Gestores de paquetes para instalar dependencias.

#### Backend

Para más detalles sobre cómo configurar y ejecutar el backend, consulte el archivo [README.md del Backend](/backend/README.md).

#### Frontend

Para más detalles sobre cómo configurar y ejecutar el frontend, consulte el archivo [README.md del Frontend](/frontend/README.md).

### Instrucciones

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/SebastianBerrios/productlist
   cd productlist/
   ```
