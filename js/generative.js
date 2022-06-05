Background = [
  'Pink',
  'Yellow',
  'Khaki',
  'Light Green',
  'Jungle Green',
  'Baby Blue',
  'Lilac',
  'Purple',
  'Orange',
  'Gold',
];
Body = ['Purple'];
Hat = ['Cowboy Hat', 'Party-hearts', 'Party-luna'];
Clothing = [
  'Green-red Sweater',
  'Red-Green Sweater',
  'Yellow-blue Sweater',
  'Green Vest',
  'Pink Vest',
  'Brown Vest',
  'Pink Eskimo',
  'Brown Eskimo',
  'Green Eskimo',
  "Doctor's Coat",
];
Neck = ['Feather Boa', 'Loser Chain', 'Sailor Bow', 'Pearly Necklace'];
Hands = ['Poker Cards', 'Fist', 'Cigarette', 'Ice Cream'];
Eyes = ['Shades', 'Star', 'Flower', 'Googles'];
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
      img.src = `https://lsg.wtf/images/lsgsprites.png`;
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        cd.drawImage(img, r * s, s4 * s, s, s, 0, 0, s, s);
        resolve();
      };
    });
}
async function drawLCA(i) {
  $('#nfts').append(`<canvas id="can${i}"width="${s}"height="${s}"></canvas>`);
  c = document.getElementById(`can${i}`);
  cd = c.getContext('2d');
  cd.clearRect(0, 0, s, s);
  txt = '"attributes":[';
  await dd('Background', 0, Background, 1);
  balRan = ran(5);
  switch (balRan) {
    case 1:
      await dd('Speech Bubble', 0, Balloon1, 7);
      break;
    case 2:
      await dd('Speech Bubble', 0, Balloon2, 8);
      break;
    case 3:
      await dd('Speech Bubble', 0, Balloon3, 9);
      break;
    case 4:
      await dd('Speech Bubble', 0, Balloon4, 10);
      break;
    default:
      await dd('Speech Bubble', 0, Balloon5, 11);
  }
  await dd('Body', 0, Body, 0);
  await dd('Clothing', 0, Clothing, 4);
  await dd('Eyes', 0, Eyes, 6);
  await dd('Neck', 0, Neck, 3);
  await dd('Hands', 0, Hands, 5);
  await dd('Hat', 0, Hat, 2);
  txt = txt.substring(0, txt.length - 1).replace('|', 'Type ') + ']';
}
