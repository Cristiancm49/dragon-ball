import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CharacterDetail.css'
import { CircularProgress, Typography } from '@mui/material';
import CardCharacterDetail from '../../components/CardCharacterDetail/CardCharacterDetail';
import CardTransformacion from '../../components/CardTranformacion/CardTransformacion'

const CharacterDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://dragonball-api.com/api/characters/${id}`)
        if (!res.ok) {
          throw new Error('Character not found');
        }
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        console.error('Error fetching character data:', err);
        navigate('/404', { replace: true }); 
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();


  }, [id]);

  if (loading) {
    return <CircularProgress sx={{ display: "block", margin: "2rem auto" }} />;
  }

  if (!character) {
    return (
      <Typography variant="h6" align="center" color="error">
        No se encontró el personaje.
      </Typography>
    );
  }

  return (
    <div>
      <CardCharacterDetail
        image={character.image}
        name={character.name}
        race={character.race}
        gender={character.gender}
        namePlanet={character.originPlanet.name}
        ki={character.ki}
        maxKi={character.maxKi}
        description={character.description}
      />
      <div className=''>
        <h3 className='textTitleTransformation'>Tranformaciones</h3>
        {character.transformations.length > 0 ? (
          <div className='containerTransformations'>
            {
              character.transformations.map((transformacion) => (
                <CardTransformacion
                  key={transformacion.id}
                  id={transformacion.id}
                  name={character.name}
                  nameTransformation={transformacion.name}
                  imgTransformation={transformacion.image}
                  kiTransformation={transformacion.ki} />
              )
              )}
          </div>) : (
            <div className='containerNotTransformations'>
              <img src="https://i.gifer.com/ZJFD.gif" alt="" />
              <h3 className='notTransformations'> Este personaje no tiene transformaciones...</h3>
            </div>
          
        )}
      </div>
    </div>
  )
}

export default CharacterDetail