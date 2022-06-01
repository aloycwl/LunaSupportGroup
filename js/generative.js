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
Balloon1 = ['|1', '|2', '|3', '|4', '|5', '|6', '|7', '|8', '|9', '|10'];
Balloon2 = [
  '|11',
  '|12',
  '|13',
  '|14',
  '|15',
  '|16',
  '|17',
  '|18',
  '|19',
  '|20',
];
Balloon3 = [
  '|21',
  '|22',
  '|23',
  '|24',
  '|25',
  '|26',
  '|27',
  '|28',
  '|29',
  '|30',
];
Balloon4 = [
  '|31',
  '|32',
  '|33',
  '|34',
  '|35',
  '|36',
  '|37',
  '|38',
  '|39',
  '|40',
];
Balloon5 = [
  '|41',
  '|42',
  '|43',
  '|44',
  '|45',
  '|46',
  '|47',
  '|48',
  '|49',
  '|50',
];
s = 350;
async function dd(s1, s2, s3, s4) {
  r = ran(s3.length);
  if (r + s2 <= s3.length)
    return new Promise((resolve) => {
      txt += `{"trait_type":"${s1}","value":"${s3[r]}"},`;
      img = new Image();
      img.src = `https://aloycwl.github.io/lsg_frontend/img/lsgsprite.png`;
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        cd.drawImage(img, r * s, s4 * s, s, s, 0, 0, s, s);
        resolve();
      };
    });
}
async function drawLCA() {
  $('#nfts').append(
    `<canvas id="can${count}"width="${s}"height="${s}"></canvas>`
  );
  c = document.getElementById(`can${count}`);
  cd = c.getContext('2d');
  cd.clearRect(0, 0, s, s);
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
  txt = txt.substring(0, txt.length - 1).replace('|', 'Type ') + ']';
}
