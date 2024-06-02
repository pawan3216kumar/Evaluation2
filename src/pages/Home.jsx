import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Spinner,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';

const Home = () => {
  const [fetchData, setFetchData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [minPrice, setMinPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios({
          method: 'get',
          url: 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products',
        });
        setFetchData(res.data.data);
        setFilteredData(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let data = [...fetchData];

    if (minPrice) {
      data = data.filter((item) => item.price >= parseFloat(minPrice));
    }

    if (category) {
      data = data.filter((item) => item.category === category);
    }

    data.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
    setFilteredData(data);
  }, [ sortOrder, category, fetchData]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };



  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  if (loading) {
    return (
      <Box>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <p>Error: {error.message}</p>
      </Box>
    );
  }

  const uniqueCategories = [...new Set(fetchData.map((item) => item.category))];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Select value={sortOrder} onChange={handleSortChange} width="200px">
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </Select>
        <Select value={category} onChange={handleCategoryChange} width="200px">
          <option value="">All Categories</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {filteredData.map((ele) => (
          <Card key={ele.id} border="1px solid black" align="center">
            <CardBody>
                <img src={ele.image} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{ele.title}</Heading>
                <Text>{ele.category}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${ele.price}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
