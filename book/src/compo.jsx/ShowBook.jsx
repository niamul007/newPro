import React from 'react';

function ShowBook() {
    const [books, setBooks] = React.useState([]);

    React.useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=comics+inauthor:&key=AIzaSyB4GT_AX6beX-vdaYbuSQTpXwRcJLuS_9c')
            .then(res => res.json())
            .then(data => setBooks(data.items || [])) // Ensure we have an array even if items is undefined
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <h1 className="sell-book">Best Selling Products</h1>
            <div className="book-container">
                {books.map((book) => {
                    // Safely access title, cover image, and authors
                    const title = book.volumeInfo?.title || 'No Title Available';
                    const coverPage = book.volumeInfo?.imageLinks?.thumbnail || 'No Image Available';
                    const authors = book.volumeInfo?.authors?.join(', ') || 'Unknown Author';
                    return (
                        <div key={book.id} className="books-item">
                            <img src={coverPage} alt={title} className="book-img" />
                            <p className="book-title">{title}</p>
                            <p className="book-author">{authors}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ShowBook;
