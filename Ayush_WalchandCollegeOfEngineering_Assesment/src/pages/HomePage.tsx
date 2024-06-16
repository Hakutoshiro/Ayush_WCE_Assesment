import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import imgSrc from "../assets/images.jpeg"
import { Products } from "../data/products";
import { Link } from "react-router-dom";
import Contact from "./Contact";
export default function HomePage() {
  const products = Products.filter((_, index) => index < 6)
  return (
    <div className="w-full h-auto grid pb-20 ">

      <h1 className="text-4xl font-bold text-center pb-4" >Featured Products</h1>

      <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full sm:w-12/12 md:w-2/3 h-auto  pb-4 sm:mx-auto gap-5 justify-center">
        {
          products.map((product, index) => (
            <Card shadow="sm" isPressable className="w-11/12  mx-auto hover:bg-gradient-to-r from-primary-200 to-primary-500 group" key={index}>
              <CardBody className="w-full object-contain ">
                <img src={imgSrc} alt="Image" className=""/>
              </CardBody>
              <CardFooter>
                <h1 className="text-2xl font-bold mx-auto">{product.name}</h1>
              </CardFooter>
              <CardFooter>
                <p className="text-default-500  group-hover:text-white">{product.Description}</p>
                &nbsp; &nbsp; &nbsp;
              </CardFooter>
              <CardFooter >
                <h1 className=" font-bold text-lg  group-hover:text-white w-full ">{product.Price}</h1>
              </CardFooter>
            </Card>
          ))
        }
      </div>
      <Link to={'/products'} className="w-10/12  md:w-1/2 mx-auto">
        <Button className="w-full mx-auto bg-gradient-to-r from-primary-200 to-primary-500" color="primary" >
          See all Products
        </Button>
      </Link>

      <h1 className="text-4xl font-bold text-center pt-10 pb-4" >About us</h1>

      <p className="w-10/12 md:w-1/2 mx-auto indent-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint incidunt ut, voluptatibus sed odio pariatur commodi, voluptates natus, totam neque consectetur. Commodi corporis hic quae laudantium? Obcaecati quaerat non voluptatem!
      </p>

      <h1 className="text-4xl font-bold text-center pt-10 pb-4" >Contact us</h1>
      <div className="w-full sm:w-10/12 md:w-1/2 mx-auto">
      <Contact />
      </div>
        
    </div>
  );
}