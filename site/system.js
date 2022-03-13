import axios from 'axios';

// Токен на игру (пока лежит как переменная, потом будет доставаться из инпута)
let token = '420267244975554560';

// Наши ссылки
const gameURL = 'https://api.vimeworld.ru/match/' + token;
const playerURL = 'https://api.vimeworld.ru/user/';

// парсим данные из нашей игры
var data = await axios.get(gameURL).then(({data}) => data);

if (data.mapId.endsWith('4x2H')) {
  // данные
  let winner = data.winner.team;
  let redMembers = data.teams[0].members;
  let blueMembers = data.teams[1].members;

  for (var i = 0; i < data.teams[1].members.length; i++) {
    var redPlayers = await axios.get(playerURL + redMembers[i]).then(({data}) => data);
    var bluePlayers = await axios.get(playerURL + blueMembers[i]).then(({data}) => data);

    if (winner == 'red') {
      console.log('==' + '\n');
      console.log('RATING UPDATE: ' + redPlayers[0].username + ' +23 points');
      console.log('RATING UPDATE: ' + bluePlayers[0].username + ' -17 points' + '\n');
      console.log('==');
    } else {
      console.log('==' + '\n');
      console.log('RATING UPDATE: ' + bluePlayers[0].username + ' +23 points');
      console.log('RATING UPDATE: ' + redPlayers[0].username + ' -17 points' + '\n');
      console.log('==');
    }
  }
} else {
  console.log('token does not 4x2H');
}