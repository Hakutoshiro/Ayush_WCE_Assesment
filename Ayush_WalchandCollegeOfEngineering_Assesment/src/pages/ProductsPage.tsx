import { Card, CardBody ,CardFooter } from "@nextui-org/react"
import { Products } from "../data/products"
import imgSrc from "../assets/images.jpeg"


export default function ProductsPage(){
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full sm:w-12/12 md:w-2/3 h-auto  pb-10 sm:mx-auto gap-5 justify-center">
        {
          Products.map((product, index) => (
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
    )
}