import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-red-400 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/' className='text-[2rem] font-bold'>Farmacia</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar