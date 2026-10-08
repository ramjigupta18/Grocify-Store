// import React from 'react'
// import Home from './Components/Home';
// import { Routes, Route } from 'react-router-dom'
// import Fruits from './Components/Fruits';
// import Dairy from './Components/Dairy';
// import SeaFood from './Components/SeaFood';
// import AllProducts from './Components/AllProducts';
// import Layout from './Components/Layout';

// const App = () => {

//   return (
//     <div>
//       <Routes>
//         <Route path='/' element= {<Layout />}>

//           {/* Children */}
//         <Route path='/' element= {<Home />}/>
//         <Route path='/fruits' element= {<Fruits />}/>
//         <Route path='/dairy' element= {<Dairy />}/>
//         <Route path='/seafood' element= {<SeaFood />}/>
//         <Route path='/allproducts' element= {<AllProducts />}/>

//         </Route>  
//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Fruits from './Components/Fruits';
import Dairy from './Components/Dairy';
import SeaFood from './Components/SeaFood';
import AllProducts from './Components/AllProducts';
import Layout from './Components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="dairy" element={<Dairy />} />
        <Route path="seafood" element={<SeaFood />} />
        <Route path="allproducts" element={<AllProducts />} />
      </Route>
    </Routes>
  );
};

export default App;