import React from 'react'


const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  } 

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key = {number} className="page-item">
            <a className="page-link mr-2" onClick = {() => paginate(number)} href = "javascript:void(0)">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}


export default Pagination