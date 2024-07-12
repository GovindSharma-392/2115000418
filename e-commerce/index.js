const express = require('express');
const app = express();

app.use(express.json());

app.get('/products', async (req, res) => {
    const url = 'http://20.244.56.144/test/companies/AMZ/categories/laptop/products?top=10&minPrice=1&maxPrice=10000';
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzc1MjQ0LCJpYXQiOjE3MjA3NzQ5NDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYzNWE1NjZkLTk4M2UtNGVlYi1iZDI3LTQyODVjMDM0MjA0ZiIsInN1YiI6ImdvdmluZC5zaGFybWFfY3MyMUBnbGEuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImYzNWE1NjZkLTk4M2UtNGVlYi1iZDI3LTQyODVjMDM0MjA0ZiIsImNsaWVudFNlY3JldCI6ImNWQnFVQ1d4dlZCTnZmbW8iLCJvd25lck5hbWUiOiJHb3ZpbmRTaGFybWEiLCJvd25lckVtYWlsIjoiZ292aW5kLnNoYXJtYV9jczIxQGdsYS5hYy5pbiIsInJvbGxObyI6IjIxMTUwMDA0MTgifQ.X20D4zRXANqifYbDCPSHygiKC6UzVj5ShzYGp3AWHfk';
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };

        const retrieve = await fetch(url, { headers });
        const data = await retrieve.json();
        res.json(data);
});
app.get('/product/:productId', async (req, res) => {
    const { productId } = req.params;
    const url = `http://20.244.56.144/test/companies/AMZ/categories/laptop/products/${productId}`;
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzc1MjQ0LCJpYXQiOjE3MjA3NzQ5NDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYzNWE1NjZkLTk4M2UtNGVlYi1iZDI3LTQyODVjMDM0MjA0ZiIsInN1YiI6ImdvdmluZC5zaGFybWFfY3MyMUBnbGEuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImYzNWE1NjZkLTk4M2UtNGVlYi1iZDI3LTQyODVjMDM0MjA0ZiIsImNsaWVudFNlY3JldCI6ImNWQnFVQ1d4dlZCTnZmbW8iLCJvd25lck5hbWUiOiJHb3ZpbmRTaGFybWEiLCJvd25lckVtYWlsIjoiZ292aW5kLnNoYXJtYV9jczIxQGdsYS5hYy5pbiIsInJvbGxObyI6IjIxMTUwMDA0MTgifQ.X20D4zRXANqifYbDCPSHygiKC6UzVj5ShzYGp3AWHfk';
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    };
    const retrieve = await fetch(url, { headers });
    const data = await retrieve.json();
    res.json(data);
});
app.listen(3450, () => {
    console.log("Server listening on port number 3450");
});
