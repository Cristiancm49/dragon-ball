import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './Home.css';
import CardCharacter from '../../components/CardCharacter/CardCharacter';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState('https://dragonball-api.com/api/characters?limit=10');
  const [loading, setLoading] = useState(true);
  const { gender } = useParams();
  const observer = useRef();
  

  const lastCardRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && nextUrl) {
        fetchCharacters();
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, nextUrl]);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const res = await fetch(nextUrl);
      const data = await res.json();
      const filtered = gender
        ? data.items.filter(char => char.gender === gender)
        : data.items;
      setCharacters(prev => [...prev, ...filtered]);
      setNextUrl(data.links.next);
    } catch (error) {
      console.error('Error when getting Dragon Ball character info:', error); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reinicia cuando cambia el filtro
    setCharacters([]);
    setNextUrl('https://dragonball-api.com/api/characters?limit=10');
  }, [gender]);

  useEffect(() => {
    if (nextUrl) fetchCharacters();
  }, [nextUrl]);

  return (
    <div className='ContainerCard'>
      <div className='container-home'>
        <img
          className='imgHome'
          src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
          alt="Logo"
        />
        <h2 className='titleHome'>The Dragon Ball API</h2>
      </div>

      <div className='containerCards'>
        {characters.map((character, index) => (
          <div
            key={character.id}
            ref={index === characters.length - 1 ? lastCardRef : null}
            className="cardFade"
          >
            <CardCharacter
              id={character.id}
              image={character.image}
              name={character.name}
              race={character.race}
              gender={character.gender}
              ki={character.ki}
              maxKi={character.maxKi}
              affiliation={character.affiliation}
            />
          </div>
        ))}
      </div>

      {loading && (
        <CircularProgress
          sx={{ color: '#00ff00', margin: '20px auto', display: 'block' }}
        />
      )}
    </div>
  );
};

export default Home;
