export const userColumns = [
  {
    field: "user",
    headerName: "User",
    width: 100,

    renderCell: (params) => {
      return (
        <>
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
          </div>
        </>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },

  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "age",
    headerName: "Age",
    width: 120,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    name: "John Snow",
    username: "john snow",
    img: "https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/4:3/w_888,h_666,c_limit/jon-snow-series-1200.jpeg",
    status: "active",
    email: "snow@gmail.com",
    age: 35,
    number: "+1 123 456 789",
    career: "Actor",
  },
  {
    id: 2,
    name: "Jamie Lannister",
    username: "jamie lannister",
    img: "https://hips.hearstapps.com/hmg-prod/images/jaime-game-of-thrones-1551987282.jpg?crop=0.501xw:1.00xh;0.0915xw,0&resize=1200:*",
    email: "Jamie@gmail.com",
    status: "passive",
    age: 42,
    number: "+1 123 456 789",
    career: "Actor",
  },
  {
    id: 3,
    name: "Cersei Lannister",
    username: "Cersei Lannister",
    img: "https://hips.hearstapps.com/hmg-prod/images/cersei-lannister-1548793059.jpg?crop=0.75xw:1xh;center,top&resize=1200:*",
    email: "Cersei@gmail.com",
    status: "pending",
    age: 40,
    number: "+1 123 456 789",
    career: "Actress",
  },
  {
    id: 4,
    name: "Robb Stark",
    username: "Robb Stark",
    img: "https://veja.abril.com.br/wp-content/uploads/2018/09/robb-stark-1-e1536007969525.jpg?quality=70&strip=info&w=922&resize=1200,800",
    email: "Robb@gmail.com",
    status: "active",
    age: 27,
    number: "+1 123 456 789",
    career: "Actor",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    username: "Daenerys Targaryen",
    img: "https://s.yimg.com/ny/api/res/1.2/jpQOj8bDbZP_I1Dkf3rUMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5NA--/https://media.zenfs.com/en-US/homerun/hello_giggles_454/355f633a412442945fdd2e0a84040372",
    email: "Daenerys@gmail.com",
    status: "passive",
    age: 22,
    number: "+1 123 456 789",
    career: "Actress",
  },
  {
    id: 6,
    name: "Melisandre",
    username: "Melisandre",
    img: "https://i.insider.com/572d268c52bcd028008c17a3?width=768&format=jpeg",
    email: "Melisandre@gmail.com",
    status: "active",
    age: 35,
    number: "+1 123 456 789",
    career: "Actress",
  },
  {
    id: 7,
    name: "Eddard Stark",
    username: "Eddard Stark",
    img: "https://hips.hearstapps.com/hmg-prod/images/brienne-ned-game-of-thrones-1556025697.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=1200:*",
    email: "Eddard@gmail.com",
    status: "passive",
    age: 53,
    number: "+1 123 456 789",
    career: "Actor",
  },
  {
    id: 8,
    name: "Sansa Stark",
    username: "Sansa Stark",
    img: "https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/5DvYAU1I9bfKG3-pTXnHl7aDbLc=/600x450/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/C7QLTARFZVDOHMROCKK4IXRMNI.jpeg",
    email: "Sansa@gmail.com",
    status: "active",
    age: 27,
    number: "+1 123 456 789",
    career: "Actress",
  },
  {
    id: 9,
    name: "Tyrion Lannister",
    username: "Tyrion Lannister",
    img: "https://hips.hearstapps.com/hmg-prod/images/theory-1553634761.jpg?crop=0.501xw:1.00xh;0,0&resize=1200:*",
    email: "tyrion@gmail.com",
    status: "active",
    age: 30,
    number: "+1 123 456 789",
    career: "Actor",
  },
  {
    id: 10,
    name: "Arya Stark",
    username: "Arya Stark",
    img: "https://pyxis.nymag.com/v1/imgs/846/9bb/440e83edacba3579e42bb6ad20860b50b0-18-arya-stark.rsquare.w700.jpg",
    email: "Arya@gmail.com",
    status: "active",
    age: 25,
    number: "+1 123 456 789",
    career: "Actress",
  },
];
