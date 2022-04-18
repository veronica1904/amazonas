import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCar, ButtonShop } from '../styles/AmazonasStyled';
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import { showProduct } from '../actions/actionProduct';

// function Main() {
  
//  const dispatch = useDispatch();
//  const { products } = useSelector(store => store.product)
//  console.log('listar', products);
// const filter = products.filter(p => p.sku === '24-105mm USM Kit')
// console.log('filter', filter);
//   useEffect(() => {
//   dispatch(showProduct())
//  }, [ dispatch])

//   return (
//     <div>
//         <div className="container-fluid">
//             <div className="row maini">
//                 <div>
//                     <button type="button" className="btnVolver">Volver a los resultados</button>

//           </div>
//           <Col xs={1} md={1}>
//             <img src='' alt='' className='imgTumb' />
//             <img src='' alt='' className='imgTumb' />
//             <img src='' alt='' className='imgTumb' />
//           </Col>

//                 <div className="col-s foto">
//                     <img src="../"></img>
//                 </div>

//                 <div className="col-4">
//                     <h1>Canon EOS R6 - Camara sin Espejo de Marco Complejo + Lente RF24</h1>
//                     <p>Marca: Canon</p>
//                 </div>
//                 <br></br>

//                 <div className="p">
//                     <p>Hasta <strong>18 meses sin intereses</strong> de $5.592,76  </p>
//                 </div>

//                 <p> <span className="spanSolicitud">Solicita tu tarjeta Amazon recargable </span> </p>

//                 <p>Color: <strong>Negro</strong></p>
//                 <p>Estilo: <strong>20-105mm USM kit</strong></p>

//                 <hr></hr>

//                 <h2>Acerca de este articulo</h2>

//                 <p className="acercaP">
//                 - Alta calidad de imagen con un nuevo sensor CMOS de marco completo de 20 megapíxeles.
//                 - Procesador de imagen DIGIC X con una gama ISO de 100-102400; ampliable a 204800.
//                 - Disparo continuo de alta velocidad de hasta 12 fps con obturador mecánico y obturador electrónico (silencioso) de hasta 20 fps.
//                 - CMOS AF de doble pixel, cubre aproximadamente Área 100% con 1.053 AF.
//                 - Seguimiento de asuntos de personas y animales* utilizando tecnología de aprendizaje profundo.
//                 </p>
//             </div>

//         <div className="col-2">
//             <h3 className="spanRojo">$100,669.00</h3>
//             <div>
//                 <p> <strong>Envio GRATIS</strong> <span className="spanAzul">Detalles</span> </p>
//             </div>
//             <p>Llega: <strong>dic 15-28</strong> </p>
//             <p className="spanRojo">Puede que lo recibas despues de Navidad.</p>

//         </div>

//         </div>

//     </div>
//   )
// }

// export default Main

 const Main = () => {

   const dispatch = useDispatch();
   const { products } = useSelector(store => store.product)
   console.log('listar', products);
   const filter = products.filter(p => p.sku === '24-105mm USM Kit')
   console.log('filter', filter);

  
  useEffect(() => {
    dispatch(showProduct())
 }, [ dispatch])

   return (
     <div>
       {

         filter.map((p, index) => (
         <Row key={index}>
             <Col xs={1} md={1}>
            <img src='' alt='' className='imgTumb' />
            <img src='' alt='' className='imgTumb' />
             <img src='' alt='' className='imgTumb' />
          </Col>
            <Col xs={4} md={4}>
               <ReactImageMagnify {...{
                 smallImage: {
                 alt: 'Canon',
                   isFluidWidth: false,
                   srcset: "",
                   sizes:'(orientation: portrait) or (max-width: 500px) 100px',
                  width: 450,
                height: 450,
                 src: p.img1
                 },
                 largeImage: {
                   src: p.img1,
                   width: 1200,
                   height: 1800
                 }

               }} />
             </Col>
             <Col xs={8} md={4} className='mx-auto descriptionProduct'>
               <h2>{p.name}</h2>
               <h6>Marca: {p.brand}</h6>
               <span>Precio: $ {p.price}.00.</span> <span> Envío {p.ship}. Detalles</span>

               <p>
                 Hasta 18 meses sin intereses de $5,592.76. Ver mensualidades
                 <br/>
                 Solicita tu tarjeta Amazon Recargable y obtén $100 de descuento en tu primera compra mayor a $500
               </p>

               <h6>Color: {p.color}</h6>
               <h6>Modelo: {p.sku}</h6>

               <h4>Acerca de este artículo</h4>
               <p>
                 {p.description}
               </p>
             </Col>
             <Col xs={8} md={2} className='mx-auto'>
               <div>
                 <h4>$ {p.price}.00</h4>
                 <p> Envío {p.ship}. Detalles</p>
                 <p>Llega: dic 15 - 28</p>
                 <p>Puede que lo recibas despues de navidad</p>
                 <div>
                   <ButtonCar>
                     <FiShoppingCart/>
                     <span> Agregar al Carrito</span>
                   </ButtonCar>
                   <ButtonShop>
                     <BsFillPlayFill/>
                     <span>Comprar ahora</span>
                   </ButtonShop>
                 </div>
                 <p>Transacción Segura</p>
               </div>
             </Col>
           </Row>
         ))
       }

       <div>
         <h4> Productos Relacionados con este artículo</h4>

       </div>

       <div>
         <h4>Opiniones de clientes </h4>
       </div>
     </div>
   )
 }

 export default Main