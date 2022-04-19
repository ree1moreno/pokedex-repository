import React from 'react';
import '../App.css';

export default function PokemonCard({name}) {
  let pokeName = name.replace('-', ' ');
  let gifName = name.replaceAll('-', '');

  switch (gifName) {
    case 'mimikyudisguised':
      gifName = 'mimikyu';
      pokeName = 'mimikyu';
      break;
    case 'miniorredmeteor':
      gifName = 'minior';
      pokeName = 'minior';
      break;
    case 'deoxysnormal':
      gifName = 'deoxys';
      pokeName = 'deoxys';
      break;
    case 'wormadamplant':
      gifName = 'wormadam';
      pokeName = 'wormadam';      
      break;
    case 'giratinaaltered':
      gifName = 'giratina';
      pokeName = 'giratina'
      break;
    case 'zygarde50':
      gifName = 'zygarde';
      pokeName = 'zygarde'
        break;
    case 'shayminland':
      gifName = 'shaymin';
      pokeName = 'shaymin'
      break;
    case 'basculinredstriped':
      gifName = 'basculin';
      pokeName = 'basculin'
      break;
    case 'darmanitanstandard':
      gifName = 'darmanitan';
      pokeName = 'darmanitan'
      break;
    case 'tornadusincarnate':
      gifName = 'tornadus';
      pokeName = 'tornadus'
      break;
    case 'aegislashshield':
      gifName = 'aegislash';
      pokeName = 'aegislash'
      break;
    case 'pumpkabooaverage':
      gifName = 'pumpkaboo';
      pokeName = 'pumpkaboo'
      break;
    case 'oricoriobaile':
      gifName = 'oricorio';
      pokeName = 'oricorio'
      break;
    case 'wishiwashisolo':
      gifName = 'wishiwashi';
      pokeName = 'wishiwashi'
      break;
    case 'meowsticmale':
      gifName = 'meowstic';
      pokeName = 'meowstic'
      break;
    case 'lycanrocmidday':
      gifName = 'lycanroc';
      pokeName = 'lycanroc'
      break;
    case 'toxtricityamped':
      gifName = 'toxtricity';
      pokeName = 'toxtricity'
      break;
    case 'eiscueice':
      gifName = 'eiscue';
      pokeName = 'eiscue'
      break;
    case 'indeedeemale':
      gifName = 'indeedee';
      pokeName = 'indeedee'
      break;
    case 'morpekofullbelly':
      gifName = 'morpeko';
      pokeName = 'morpeko'
      break;
    case 'urshifusinglestrike':
      gifName = 'urshifu';
      pokeName = 'urshifu'
      break;
    case 'thundurusincarnate':
      gifName = 'thundurus';
      pokeName = 'thundurus'
      break;
    case 'landorusincarnate':
      gifName = 'landorus';
      pokeName = 'landorus'
      break;
    case 'keldeoordinary':
      gifName = 'keldeo';
      pokeName = 'keldeo'
      break;
    case 'meloettaaria':
      gifName = 'meloetta';
      pokeName = 'meloetta'
      break;
    case 'gourgeistaverage':
      gifName = 'gourgeist';
      pokeName = 'gourgeist'
      break;    
    default:
      break;
  }

  const gifUrl = `https://play.pokemonshowdown.com/sprites/xyani/${gifName}.gif`;

  return (
    <div className="card">
        <div className="card-item">
          <h1 className="card-title" >{pokeName}</h1>
          <img
            className="card-image"
            src={gifUrl}
            alt={`${pokeName} gif`}
          />
        </div>
    </div>
  )
}
