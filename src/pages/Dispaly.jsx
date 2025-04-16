import React, { useEffect, useState } from 'react';
import { Table, Container, Card } from 'react-bootstrap';
import axios from 'axios';

const Dispaly = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:3000/bookform/getdata');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h3 className="text-center mb-4">Book List</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Author</th>
              <th>Book Name</th>
              <th>Price ($)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.authid?.author}</td>
                <td>{book.bookName}</td>
                <td>{book.price}</td>
                <td>{book.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default Dispaly;
