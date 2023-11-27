import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import List from './features/products/components/List'
import Add from './features/products/components/Add'
import Edit from './features/products/components/Edit'
function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home page</Link>
                    </li>
                    <li>
                        <Link to='/products'>Product page</Link>
                    </li>
                    <li>
                        <Link to='/products/add'>Product Add page</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<div>Home page</div>} />
                <Route path='products' element={<List />} />
                <Route path='products/add' element={<Add />} />
                <Route path='products/:id/edit' element={<Edit />} />
            </Routes>
        </>
    )
}

export default App
