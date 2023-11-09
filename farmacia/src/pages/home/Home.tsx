import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="bg-red-400 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Sejam Bem Vindos a farmacia!
                        </h2>
                        <p className='text-xl'>
                            Compre aqui os seus remedios!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-[36.8rem] h-[100%rem]">
                        <img
                            src="https://aluminio.sp.gov.br/wp-content/uploads/2019/10/ZE-GOTINHA.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home