import { ChangeEvent, useEffect, useState } from "react";
import { appsettings } from "../settings/appsettings";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { IDProducts } from "../interfaces/IDProducts";
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const initialProduct: IDProducts = {
  id: 0,
  productName: "",
  price: 0,
};

export default function EditProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IDProducts>(initialProduct);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `${appsettings.apiUrl}Product/getproduct/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      }
    };

    getProduct();
  }, []);

  const inputChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputProductName = event.target.name;
    const inputValue = event.target.value;

    setProduct({ ...product, [inputProductName]: inputValue });
  };

  const saveData = async () => {
    const response = await fetch(`${appsettings.apiUrl}Product/editproduct`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    console.log(response);
    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Se guardo el producto.",
        text: "Se editó el producto.",
      });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo editar el producto.",
      });
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <Container className="container-sm mt-5">
      <Row>
        <h2>Editar Nuevo</h2>
        <Form>
          <FormGroup>
            <Label>Producto</Label>
            <Input
              type="text"
              name="productName"
              onChange={inputChangeValue}
              value={product.productName}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Precio</Label>
            <Input
              type="number"
              name="price"
              onChange={inputChangeValue}
              value={product.price}
            ></Input>
          </FormGroup>
        </Form>
        <Button color="primary" className="mb-4 btn-lg" onClick={saveData}>
          Guardar
        </Button>
        <Button color="secondary" className="btn-lg" onClick={goBack}>
          Volver
        </Button>
      </Row>
    </Container>
  );
}
