Background = [
  'Coral',
  'Beech',
  'Elm',
  'Frog',
  'Pine',
  'Teal',
  'Slate',
  'Purple',
  'Peach',
  'Brown',
];
Body = ['Cool'];
Hat = ['Cowboy', 'Party Hearts', 'Party Crescents', 'Floppy'];
Clothes = ['Sweater', 'Vest', 'Eskimo', 'Doctor'];
Neckwear = ['Furrowed', 'Loser Chain', 'Sailor Bow'];
Hand = ['Poker Cards', 'Blank', 'Lighted Cigarette', 'Ice Cream'];
Glasses = ['Cool', 'Star', 'Flower', 'Leaf'];
Balloon1 = [
  'Type 1',
  'Type 2',
  'Type 3',
  'Type 4',
  'Type 5',
  'Type 6',
  'Type 7',
  'Type 8',
  'Type 9',
  'Type 10',
];
Balloon2 = [
  'Type 11',
  'Type 12',
  'Type 13',
  'Type 14',
  'Type 15',
  'Type 16',
  'Type 17',
  'Type 18',
  'Type 19',
  'Type 20',
];
Balloon3 = [
  'Type 21',
  'Type 22',
  'Type 23',
  'Type 24',
  'Type 25',
  'Type 26',
  'Type 27',
  'Type 28',
  'Type 29',
  'Type 30',
];
Balloon4 = [
  'Type 31',
  'Type 32',
  'Type 33',
  'Type 34',
  'Type 35',
  'Type 36',
  'Type 37',
  'Type 38',
  'Type 39',
  'Type 40',
];
Balloon5 = [
  'Type 41',
  'Type 42',
  'Type 43',
  'Type 44',
  'Type 45',
  'Type 46',
  'Type 47',
  'Type 48',
  'Type 49',
  'Type 50',
];
s = 1458;
async function dd(s1, s2, s3, s4) {
  r = ran(s3.length);
  if (r + s2 <= s3.length)
    return new Promise((resolve) => {
      txt += `{"trait_type":"${s1}","value":"${s3[r]}"},`;
      img = new Image();
      img.src = `https://aloycwl.github.io/lsg_frontend/img/lsgsprite.png`;
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        cd.drawImage(img, r * s, s4 * s, s, s, 0, 0, 350, 350);
        resolve();
      };
    });
}
async function drawLCA() {
  $('#nfts').append(`<canvas id="can${cnt}"width="350"height="350"></canvas>`);
  c = document.getElementById(`can${cnt}`);
  cd = c.getContext('2d');
  cd.clearRect(0, 0, 350, 350);
  txt = '"attributes":[';
  await dd('Background', 0, Background, 1);
  balRan = ran(5);
  switch (balRan) {
    case 1:
      await dd('Balloon', 0, Balloon1, 7);
      break;
    case 2:
      await dd('Balloon', 0, Balloon2, 8);
      break;
    case 3:
      await dd('Balloon', 0, Balloon3, 9);
      break;
    case 4:
      await dd('Balloon', 0, Balloon4, 10);
      break;
    default:
      await dd('Balloon', 0, Balloon5, 11);
  }
  await dd('Body', 0, Body, 0);
  await dd('Clothes', 0, Clothes, 4);
  await dd('Glasses', 0, Glasses, 6);
  await dd('Neckwear', 0, Neckwear, 3);
  await dd('Hand', 0, Hand, 5);
  await dd('Hat', 0, Hat, 2);
  txt = txt.substring(0, txt.length - 1) + ']';
  cnt++;
}
