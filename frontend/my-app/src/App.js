// import './App.css'; // Ensure this import is correct

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <div className="logo">
    //       <h1>Bespoke</h1>
    //     </div>
    //     <nav>
    //       <ul>
    //         <li><a href="#home">Home</a></li>
    //         <li><a href="#shop">Shop</a></li>
    //         <li><a href="#contact">Contact</a></li>
    //         <li><a href="#about">About</a></li>
    //       </ul>
    //     </nav>
    //   </header>
    //   <main>
    //     <section id="home">
    //       <h2>Welcome to Pearls Online Shop</h2>
    //       <p>Discover the finest pearls for every occasion.</p>
    //     </section>
    //     <section id="shop">
    //       <h2>Shop</h2>
    //       <div className="products-container">
    //         <div className="product">
    //           <img src="C:\Users\Admin\Documents\mern\workspace\frontend\my-app\OIP.jfif" alt="Pearl Necklace" />
    //           <h3>Pearl Necklace</h3>
    //           <p>$199.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="pearl-earrings.jpg" alt="Pearl Earrings" />
    //           <h3>Pearl Earrings</h3>
    //           <p>$99.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="pearl-bracelet.jpg" alt="Pearl Bracelet" />
    //           <h3>Pearl Bracelet</h3>
    //           <p>$149.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="pearl-ring.jpg" alt="Pearl Ring" />
    //           <h3>Pearl Ring</h3>
    //           <p>$79.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="pearl-choker.jpg" alt="Pearl Choker" />
    //           <h3>Pearl Choker</h3>
    //           <p>$129.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="pearl-bracelet-set.jpg" alt="Pearl Bracelet Set" />
    //           <h3>Pearl Bracelet Set</h3>
    //           <p>$199.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="bead-necklace.jpg" alt="Bead Necklace" />
    //           <h3>Bead Necklace</h3>
    //           <p>$89.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="bead-earrings.jpg" alt="Bead Earrings" />
    //           <h3>Bead Earrings</h3>
    //           <p>$59.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //         <div className="product">
    //           <img src="bead-bracelet.jpg" alt="Bead Bracelet" />
    //           <h3>Bead Bracelet</h3>
    //           <p>$79.99</p>
    //           <button>Add to Cart</button>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    //   <footer>
    //     <p>© 2024 Pearls Online Shop</p>
    //   </footer>
    // </div>
//     <>
//       <dashboard/>
//     </>
//   );
// }

// export default App;
import React from 'react'; // Import React to fix the JSX scope error
import './App.css';
import Dashboard from './pages/dashboard';

function App() {
    return (
        <div className="App">
            <Dashboard />
        </div>
    );
}

export default App;
