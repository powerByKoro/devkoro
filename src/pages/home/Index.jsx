import "./index.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useGetCharactersQuery } from "../../api/rickAndMortyApi";

const Index = () => {
  const {
    data: characters = [],
    isLoading,
    error,
  } = useGetCharactersQuery(undefined, {
    refetchOnMountOrArgChange: 5, // Перезагружать при каждом монтировании, но по прошедствии 5 секунд
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="home-page">
      <h1>Домашняя страница</h1>
      <div className="courses">
        {characters.map((character) => (
          <CourseCard key={character.id} course={character} />
        ))}
      </div>
    </div>
  );
};

export default Index;
