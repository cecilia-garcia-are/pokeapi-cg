
import './styles/Paginations.css'

const Paginations = ({ pokePerPage, totalPoke, paginate, currentPage }) => {

    

    const pageNumbers = []

    for( let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
        pageNumbers.push(i)
    }

    


  return (
    <nav>
        <div className='pagination'>
            {pageNumbers.map(number => (
                <button key={number}  className={currentPage === number ? "active" : ""}
                     onClick={() => paginate(number)}>
                        {number}
                    
                </button>

            ))}
        </div>
    </nav>

  )
}

export default Paginations