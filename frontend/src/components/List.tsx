import { useEffect, useState } from "react";
import { appsettings } from "../settings/appsettings";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IDProducts } from "../interfaces/IDProducts";
import { Container, Row, Col, Table, Button } from "reactstrap";

export default function List() {
  const [product, setProduct] = useState<IDProducts[]>([]);

  const getAllProducts = async () => {
    const response = await fetch(`${appsettings.apiUrl}Product/productlist`);
    if (response.ok) {
      const data = await response.json();
      setProduct(data);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = (id: number) => {
    Swal.fire({
      title: "Eliminar Producto",
      text: "¿Estas seguro que quieres eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(
          `${appsettings.apiUrl}Product/deleteproduct/${id}`,
          { method: "delete" }
        );
        if (response.ok) await getAllProducts();
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <h2 className="mt-5">Lista de Productos</h2>
          <Link className="btn btn-success my-3" to="/newproduct">
            Nuevo Producto
          </Link>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th>Nombre del Producto</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => (
                <tr key={item?.id}>
                  <td>{item?.productName}</td>
                  <td className="text-center">{item?.price}</td>
                  <td className="d-flex justify-content-center">
                    <Link
                      className="btn btn-primary me-2"
                      to={`/editproduct/${item?.id}`}
                    >
                      Editar Producto
                    </Link>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteProduct(item?.id!);
                      }}
                    >
                      Eliminar Producto
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
