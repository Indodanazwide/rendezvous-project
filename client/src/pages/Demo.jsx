

























// .homepage {
//     width: 100%;
//     overflow-x: hidden;

//     section {
//         padding: 4rem 2rem;
//         max-width: $max-width;
//         margin: 0 auto;
//     }

//     .hero {
//         padding: 0 0;
//         min-height: 100vh;
//         background-color: white;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }

//     .about {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         gap: 4rem;
//         align-items: center;
      
//         @media (max-width: 768px) {
//           grid-template-columns: 1fr;
//         }

//         img {
//             width: 100%;
//             box-shadow: $box-shadow;
//         }

//         .container {
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: 2rem;
//             margin-top: 2rem;
        
//             div {
//                 display: flex;
//                 align-items: center;
//                 gap: 1rem;
            
//                 svg {
//                     width: 5rem;
//                     height: 5rem;
//                 }
//             }
//         }
//     }

//     .menu {
//         .intro {
//             text-align: center;
//             max-width: 800px;
//             margin: 0 auto 3rem;
//         }

//         .container {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//             gap: 2rem;
        
//             div {
//                 background: $card;
//                 padding: 2rem;
//                 border-radius: .5rem;
//                 box-shadow: $box-shadow;
//                 transition: transform 0.3s ease;
            
//                 &:hover {
//                     transform: translateY(-5px);
//                 }
            
//                 div {
//                     background: transparent;
//                     display: flex;
//                     align-items: center;
//                     gap: 1rem;
//                     padding: 0;
//                     box-shadow: none;
            
//                     svg {
//                         width: 24px;
//                         height: 24px;
//                     }
            
//                     h3 {
//                         font-size: 1.5rem;
//                         font-weight: 600;
//                         margin: 0;
//                     }
//                 }
//             }
//         }

//         .cta {
//             text-align: center;
//             margin-top: 3rem;
//         }
//     }

//     .services {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         gap: 2rem;
      
//         @media (max-width: 768px) {
//           grid-template-columns: 1fr;
//         }
      
//         article {
//           padding: 2rem;
//           background: white;
//           border-radius: 10px;
//           box-shadow: $box-shadow;
//           text-align: center;
      
//           svg {
//             width: 32px;
//             height: 32px;
//             margin-bottom: 1rem;
//           }
      
//           h3 {
//             font-size: 1.5rem;
//             margin-bottom: 1rem;
//           }
//         }
//     }

//     .contact {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         gap: 4rem;
      
//         @media (max-width: 768px) {
//           grid-template-columns: 1fr;
//         }
      
//         .container {
//           margin-top: 2rem;
      
//           div {
//             margin-bottom: 2rem;
      
//             svg {
//               width: 24px;
//               height: 24px;
//               margin-right: 1rem;
//             }
      
//             &:first-child {
//               display: flex;
//               align-items: flex-start;
//             }
      
//             .time {
//               p {
//                 margin-bottom: 0.5rem;
//               }
//             }
//           }
//         }
//     }
// }

// .auth-page {
//     min-height: 100vh;
//     padding: 4rem 2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 4rem;
//     max-width: $max-width;
//     margin: 0 auto;

//     @media (max-width: 1024px) {
//         flex-direction: column;
//         padding: 2rem;
//     }

//     section {
//         flex: 1;
//         background-color: $card;
//         padding: 3rem;
//         border-radius: 1rem;
//         box-shadow: $box-shadow;

//         @media (max-width: 1024px) {
//             width: 100%;
//             max-width: 500px;
//         }

//         h2 {
//             font-size: 2rem;
//             color: $navy;
//             text-align: center;
//             margin-bottom: 2rem;
//         }

//         form {
//             display: flex;
//             flex-direction: column;
//             gap: 1.5rem;

//             div {
//                 display: flex;
//                 flex-direction: column;
//                 gap: 0.5rem;

//                 label {
//                     font-size: 0.9rem;
//                     font-weight: 500;
//                     color: $navy;
//                 }

//                 input {
//                     padding: 0.8rem 1rem;
//                     border: 2px solid transparent;
//                     border-radius: 0.5rem;
//                     font-family: 'Poppins', sans-serif;
//                     font-size: 0.95rem;
//                     background-color: white;
//                     transition: all 0.3s ease;

//                     &:focus {
//                         outline: none;
//                         border-color: $purple;
//                     }
//                 }
//             }

//             button {
//                 margin-top: 1rem;
//                 padding: 1rem;
//                 font-size: 1rem;
//                 transition: all 0.3s ease;

//                 &:hover {
//                     background-color: darken($green, 5%);
//                     transform: translateY(-2px);
//                 }

//                 &:active {
//                     transform: translateY(0);
//                 }
//             }
//         }
//     }

//     .signup {
//         background-color: rgba($purple, 0.1);

//         button {
//             background-color: $purple;

//             &:hover {
//                 background-color: darken($purple, 5%);
//             }
//         }
//     }
// }