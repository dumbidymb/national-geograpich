import { useRouter } from 'next/router';

const CityDetail = () => {
  const router = useRouter();
  const { city } = router.query;

  // Busca los detalles de la ciudad correspondiente en la lista cities
  const cityData = cities.find((c) => c.name === city);

  if (!cityData) {
    return <div>City not found</div>;
  }

  return (
    <div>
      <h1>City Details</h1>
      <p>City: {cityData.name}</p>
      <p>Temperature: {cityData.temperature}</p>
      <p>Description: {cityData.description}</p>
      <img src={cityData.iconUrl} alt={cityData.description} />
    </div>
  );
};

export default CityDetail;