import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () =>{
const rows = [
  {
    id: 114566,
    product:"Acer Nitro",
    img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
    customer: "Twisted Oliver",
    date: "4 March",
    amount:224678,
    method: "Jumia Pay",
    status:"Approved",
  },
  {
    id: 14566,
    product:"Lenovo 320",
    img:"https://nairobicomputershop.co.ke/media/products/71DKiIHLPvL._SL1500_.jpg",
    customer: "Maxwell Atkin",
    date: "5 March",
    amount:48000,
    method: "Jumia Pay",
    status:"Delivered",
  },
  {
    id: 414566,
    product:"Honor 7X",
    img:"https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
    customer: "Sos Wek",
    date: "6 March",
    amount:18000,
    method: "Cash on Delivery",
    status:"Pending",
  },
  {
    id: 67146,
    product:"iPhone 14",
    img:"https://cdn.vooka.co.ke/vooka/products/apple-iphone-14-Phonetronics%20Kenya22-09-2022-1663869435.webp",
    customer: "Sam Juma",
    date: "7 March",
    amount:123000,
    method: "Jumia Pay",
    status:"Approved",
  },
  {
    id: 511566,
    product:"iPhone 12",
    img:"https://cdn.vooka.co.ke/vooka/products/apple-iphone-14-Phonetronics%20Kenya22-09-2022-1663869435.webp",
    customer: "Lucille Aseneka",
    date: "8 March",
    amount:83000,
    method: "Jumia Pay",
    status:"Approved",
  },
  {
    id: 414566,
    product:"Honor 7X",
    img:"https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
    customer: "Sos Wek",
    date: "6 March",
    amount:18000,
    method: "Cash on Delivery",
    status:"Pending",
  },
  {
  id: 114566,
  product:"Acer Nitro",
  img:"https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
  customer: "Twisted Oliver",
  date: "4 March",
  amount:224678,
  method: "Jumia Pay",
  status:"Approved",
},
{
  id: 14566,
  product:"Lenovo 320",
  img:"https://nairobicomputershop.co.ke/media/products/71DKiIHLPvL._SL1500_.jpg",
  customer: "Maxwell Atkin",
  date: "5 March",
  amount:48000,
  method: "Jumia Pay",
  status:"Delivered",
},
{
  id: 511566,
  product:"iPhone 12",
  img:"https://cdn.vooka.co.ke/vooka/products/apple-iphone-14-Phonetronics%20Kenya22-09-2022-1663869435.webp",
  customer: "Lucille Aseneka",
  date: "8 March",
  amount:83000,
  method: "Jumia Pay",
  status:"Approved",
},

{
  id: 67146,
  product:"iPhone 14",
  img:"https://cdn.vooka.co.ke/vooka/products/apple-iphone-14-Phonetronics%20Kenya22-09-2022-1663869435.webp",
  customer: "Sam Juma",
  date: "7 March",
  amount:123000,
  method: "Jumia Pay",
  status:"Approved",
},
];
   return(
   <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell"> 
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   );
};

export default List;

