export const userColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'user', headerName: 'User', width: 230, renderCell: (params)=>{
    return (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt="avatar" />
        {params.row.username}

      </div>
    );
  },
 },
 
  {field:'email',headerName:"Email", width :230 },
  {field :"age",headerName:"Age", width:100 },
  {field :"status",headerName:"Status", width:160,
  renderCell:(params) =>{
    return (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
     );
   },
  },
];

//Temporary data
export const userRows =[
  {
    id: 1,
    username:"Twist",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    status:"Active",
    email:"ots@gmail.com",
    age:"24"
  },
  {
    id: 2,
    username:"Sos",
    img:"https://cdn.vooka.co.ke/vooka/products/apple-iphone-14-Phonetronics%20Kenya22-09-2022-1663869435.webp",
    status:"Active",
    email:"soswek@gmail.com",
    age:"34"
  },
  {
    id: 3,
    username:"Sam",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    status:"Passive",
    email:"samjuma@gmail.com",
    age:"32"
  },
  {
    id: 4,
    username:"Phil",
    img:"https://nairobicomputershop.co.ke/media/products/71DKiIHLPvL._SL1500_.jpg",
    status:"Passive",
    email:"ots@gmail.com",
    age:"34"
  },
  {
    id: 5,
    username:"Jery",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    status:"Active",
    email:"ots@gmail.com",
    age:"24"
  },
  {
    id: 6,
    username:"Tina",
    img:"https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
    status:"Active",
    email:"sosteen@gmail.com",
    age:"27"
  },
  {
    id: 7,
    username:"Gee",
    img:"https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
    status:"Passive",
    email:"gee@gmail.com",
    age:"24"
  },
  {
    id: 8,
    username:"Phil",
    img:"https://nairobicomputershop.co.ke/media/products/71DKiIHLPvL._SL1500_.jpg",
    status:"Active",
    email:"ots@gmail.com",
    age:"24"
  },
  {
    id: 9,
    username:"Twist",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    status:"Active",
    email:"ots@gmail.com",
    age:"24"
  },
  {
    id: 10,
    username:"Twist",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    status:"Passive",
    email:"ots@gmail.com",
    age:"24"
  },
  {
    id: 11,
    username:"Tina",
    img:"https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
    status:"Active",
    email:"sosteen@gmail.com",
    age:"27"
  },
  {
    id: 12,
    username:"Gee",
    img:"https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
    status:"Passive",
    email:"gee@gmail.com",
    age:"24"
  },
  {
    id: 13,
    username:"Twist",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    status:"Active",
    email:"ots@gmail.com",
    age:"24"
  },
  {
    id: 14,
    username:"Sos",
    img:"https://cdn.vooka.co.ke/vooka/products/apple-iphone-14-Phonetronics%20Kenya22-09-2022-1663869435.webp",
    status:"Active",
    email:"soswek@gmail.com",
    age:"34"
  },
  {
    id: 15,
    username:"Sam",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    status:"Passive",
    email:"samjuma@gmail.com",
    age:"32"
  },

];