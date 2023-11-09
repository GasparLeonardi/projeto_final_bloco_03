function Navbar() {
    return (
        <>
            <div className='w-full bg-red-400 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Blog Pessoal

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Cadastrar categoria
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar