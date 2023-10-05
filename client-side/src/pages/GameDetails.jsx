import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

function RandomGames() {
  const { gameId } = useParams(); // Get the game ID from route parameters
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const MAX_RETRIES = 3; // Maximum number of retries for fetching a game

  useEffect(() => {
    // Define the URL of your backend API to fetch game details
    const apiUrl = `http://localhost:7098/game-detail/${gameId}`;

    // Function to fetch a game with retries
    const fetchGameWithRetry = async (retries) => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Network response was not ok for gameId ${gameId}`);
        }
        const gameData = await response.json();
        // Ensure the response is an object with game data
        if (gameData.id) {
          setGame(gameData); // Set the fetched game data
          setLoading(false);
        } else {
          // Handle cases where the response is unexpected
          throw new Error(`Unexpected API response for gameId ${gameId}`);
        }
      } catch (error) {
        // Retry fetching with a new random gameId if retries remain
        if (retries > 0) {
          const newGameId = Math.floor(Math.random() * 1000) + 1; // Generate a new random gameId
          console.warn(`Retrying with a new random gameId: ${newGameId}`);
          fetchGameWithRetry(retries - 1);
        } else {
          // No more retries, mark the game as not found
          setError(error);
          setLoading(false);
        }
      }
    };

    // Fetch the game details based on the provided gameId
    fetchGameWithRetry(MAX_RETRIES);
  }, [gameId]); // Add gameId to the dependency array

  if (loading) {
    return <p>Loading...</p>; // You can show a loading indicator here
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Handle the error here
  }

  return (
    <div>
      <h1>Random Game</h1>
      <div className="container">
        <div className="box" key={game.id}>
          <div className='box-discover-image'>
            <img src={game.background_image} alt={`Image ${game.name}`} />
          </div>
          <div className='box-discover-name'>
            <h2>Name: {game.name}</h2>
          </div>
          <div className='box-discover-description'>
            <p>Description: {game.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomGames;
